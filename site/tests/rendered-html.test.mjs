import assert from "node:assert/strict";
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
    /<title>Microscopia de Campo Claro e Escuro \| ICIBINA &amp; MENCI<\/title>/,
  );
  assert.match(html, /Veja além\./);
  assert.match(html, /Observe com método\./);
  assert.match(html, /10 módulos progressivos/);
  assert.match(html, /Compra futura processada pela Hotmart/);
  assert.match(html, /https:\/\/microscopia\.test\/og\.png/);
  assert.doesNotMatch(html, /codex-preview/);
  assert.doesNotMatch(html, /react-loading-skeleton/);
});

test("não publica dados comerciais ou alegações ainda não confirmadas", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /Oferta em configuração/);
  assert.match(html, /Sem cobrança nesta versão de prévia/);
  assert.match(html, /não substitui exames laboratoriais/);
  assert.doesNotMatch(html, /R\$\s*\d/);
  assert.doesNotMatch(html, /pay\.hotmart\.com/);
  assert.doesNotMatch(html, /garantia de \d+ dias/i);
});

