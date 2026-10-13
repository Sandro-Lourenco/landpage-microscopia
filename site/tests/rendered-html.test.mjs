import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`https://microscopia.test${path}`, {
      headers: {
        accept: "text/html",
        host: "microscopia.test",
        "x-forwarded-proto": "https",
      },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renderiza a landing page com conteúdo e metadados corretos", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="pt-BR">/);
  assert.match(
    html,
    /<title>Curso de Microscopia de Campo Claro e Escuro \| ICIBINA<\/title>/,
  );
  assert.match(html, /Veja além\./);
  assert.match(html, /Observe com método\./);
  assert.match(html, /10 módulos progressivos/);
  assert.match(html, /Pagamento seguro processado pela Hotmart/);
  assert.match(html, /Inscrições abertas/);
  assert.match(html, /(?:https:\/\/microscopia\.test|http:\/\/localhost:3000)\/og\.png/);
  assert.match(html, /rel="canonical"/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /"@type":"Course"/);
  assert.match(html, /og:site_name/);
  assert.match(html, /max-image-preview:large/);
  assert.doesNotMatch(html, /codex-preview/);
  assert.doesNotMatch(html, /react-loading-skeleton/);
});

test("publica somente o checkout oficial e mantém alegações não confirmadas fora da página", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /não substitui exames laboratoriais/);
  assert.doesNotMatch(html, /R\$\s*\d/);
  assert.doesNotMatch(html, /garantia de \d+ dias/i);
});

test("mantém o checkout oficial centralizado na configuração do curso", async () => {
  const source = await readFile(
    new URL("../app/course-data.ts", import.meta.url),
    "utf8",
  );

  assert.match(source, /https:\/\/pay\.hotmart\.com\/S106758446S/);
  assert.match(source, /NEXT_PUBLIC_HOTMART_CHECKOUT_URL/);
});

test("integra a captura de leads do Hotmart Send com consentimento", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /klicksend-form-id="VKuXpMb"/);
  assert.match(
    html,
    /handler\.send\.hotmart\.com\/subscription\/VKuXpMb\?hotfeature=53/,
  );
  assert.match(html, /name="gdpr"/);
  assert.match(html, /name="b_VKuXpMb"/);
  assert.match(html, /href="\/politica-de-privacidade"/);

  const policy = await render("/politica-de-privacidade");
  assert.equal(policy.status, 200);
  assert.match(await policy.text(), /Política de Privacidade/);
});

test("mantém sitemap, robots e páginas internas fora da indexação", async () => {
  const [sitemapSource, robotsSource, studentLayout] = await Promise.all([
    readFile(new URL("../app/sitemap.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/robots.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/area-do-aluno/layout.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(sitemapSource, /MetadataRoute\.Sitemap/);
  assert.match(sitemapSource, /priority:\s*1/);
  assert.match(robotsSource, /\/checkout\//);
  assert.match(robotsSource, /\/area-do-aluno\//);
  assert.match(studentLayout, /index:\s*false/);
  assert.match(studentLayout, /follow:\s*false/);
});

