# Preparação para publicação comercial

Esta versão é uma prévia funcional. Antes de transformar a página em uma oferta pública, confirme:

1. link oficial da oferta Hotmart;
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

Edite `app/course-data.ts` e preencha `siteConfig.checkoutUrl` com o Hotlink oficial:

```ts
checkoutUrl: "https://pay.hotmart.com/...",
```

Todos os botões de compra usam esse único valor e preservam os parâmetros UTM recebidos na landing page.

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

