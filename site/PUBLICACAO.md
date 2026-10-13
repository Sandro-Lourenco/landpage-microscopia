# Preparação para publicação comercial

Esta versão é uma prévia funcional. Antes de transformar a página em uma oferta pública, confirme:

1. validar o link oficial da oferta Hotmart já integrado;
2. preço e parcelamento;
3. prazo de garantia;
4. formato, carga horária e período de acesso;
5. certificado e sua natureza;
6. pré-requisitos e limites profissionais;
7. corpo docente, credenciais e autorizações de imagem;
8. fotos, vídeo e amostras reais do curso;
9. dados completos do fornecedor e canal de atendimento;
10. termos, privacidade, cookies e política de reembolso.

## Configurar o checkout

O Hotlink oficial do curso já está configurado como valor padrão em
`app/course-data.ts`:

```ts
const defaultHotmartCheckoutUrl = "https://pay.hotmart.com/S106758446S";
```

Todos os botões de compra usam esse único valor e preservam os parâmetros UTM
recebidos na landing page. Para substituir o link durante uma publicação, defina
`NEXT_PUBLIC_HOTMART_CHECKOUT_URL` no ambiente da hospedagem.

## Dados institucionais

No mesmo objeto, configure:

```ts
supportEmail: "contato@dominio.com.br",
institutionWebsite: "https://dominio.com.br",
```

Esses dados só devem ser exibidos depois de validados pelo responsável.

## Rastreamento

Nenhum pixel de marketing está ativo nesta prévia. Instale Hotmart Analytics e os pixels escolhidos somente depois de:

- inventariar cookies e fornecedores;
- definir a base legal aplicável;
- conectar o carregamento às preferências de consentimento;
- validar eventos de checkout e compra sem duplicação.

## SEO e indexação no Google

Antes da publicação, configure `NEXT_PUBLIC_SITE_URL` na hospedagem com o domínio
público definitivo, incluindo `https://` e sem barra no final. O valor alimenta a
URL canônica, o sitemap, o arquivo de robots, as imagens sociais e os dados
estruturados.

Depois de publicar:

1. cadastre o domínio no Google Search Console;
2. valide a propriedade pelo método indicado pelo Google;
3. envie `https://SEU-DOMINIO/sitemap.xml`;
4. inspecione a página inicial e solicite a indexação;
5. teste a URL publicada no Rich Results Test;
6. acompanhe cobertura, desempenho e Core Web Vitals no Search Console.

As rotas de demonstração `/checkout`, `/area-do-aluno`, `/aula` e
`/pedido-confirmado` estão marcadas como `noindex` e também bloqueadas no
`robots.txt` para não concorrerem com a landing page nas buscas.

