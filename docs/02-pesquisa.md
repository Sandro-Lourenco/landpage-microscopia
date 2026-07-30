# 02 — Pesquisa e referências

Pesquisa realizada em 24 de julho de 2026. As referências abaixo devem ser revisitadas antes da publicação, pois interfaces e regras de plataforma podem mudar.

## Estrutura de página de vendas

A própria Hotmart recomenda para cursos online uma sequência com:

1. hero com transformação, vídeo e CTA;
2. problema;
3. solução;
4. conteúdo programático;
5. prova social;
6. instrutor e credenciais;
7. preço e garantia;
8. perguntas frequentes;
9. CTA final.

Fonte: [Hotmart — O que é landing page](https://blog.hotmart.com/pt-br/blog/o-que-e-landing-page).

Também é recomendado manter um objetivo de conversão claro, uma proposta de valor compreensível, benefícios, prova social e checkout simples.

Fonte: [Hotmart — Como criar uma página de vendas](https://hotmart.com/pt-br/blog/pagina-de-vendas).

## Página externa e checkout

A Hotmart aceita uma página de vendas hospedada fora da plataforma. Depois de publicada, sua URL pode ser vinculada em **Produtos → Meus produtos → Página do produto → Sua página externa**. A página externa precisa conter um botão apontando para a página de pagamento Hotmart.

Fonte: [Hotmart — Configurar página de vendas externa](https://help.hotmart.com/pt-br/article/360017889651/como-configurar-minha-pagina-de-vendas-externas-na-hotmart-).

O link de pagamento é gerado para o produto e funciona após sua aprovação. Há três caminhos possíveis: link direto, integração de CTA no Hotmart Pages ou Checkout Widget. O widget abre o pagamento na própria página, mas não é compatível com ofertas que usam upsell.

Fontes:

- [Hotmart — Associar Hotmart Pages e configurar checkout](https://help.hotmart.com/pt-br/article/43449924104205/como-associar-uma-pagina-do-hotmart-pages-como-pagina-de-vendas-do-meu-produto-)
- [Hotmart — Widget da página de pagamento](https://help.hotmart.com/pt-br/article/360004829631/como-configurar-o-widget-da-pagina-de-pagamento-)

**Decisão preliminar:** usar link direto para o checkout como versão inicial. É mais simples, compatível com upsell e fácil de testar. O widget só deve ser escolhido depois de confirmar a estratégia de funil.

## Rastreamento

A Hotmart permite integrar pixels de provedores de anúncios e acompanhar eventos como visita ao checkout e compra aprovada. Para uma página externa, o Hotmart Analytics também fornece um código próprio para acompanhar a jornada no site.

Fontes:

- [Hotmart — Pixel de rastreamento](https://help.hotmart.com/pt-br/article/360015341051/como-configurar-o-pixel-de-rastreamento-no-meu-produto-)
- [Hotmart — Código do Hotmart Analytics em site externo](https://help.hotmart.com/pt-br/article/115001182572/como-instalo-o-codigo-de-rastreamento-do-hotmart-analytics-no-meu-site-)

## Comércio eletrônico

O Decreto nº 7.962/2013 exige informações claras sobre produto, serviço e fornecedor, atendimento facilitado, segurança e meios ostensivos para o exercício do direito de arrependimento.

Fonte: [Presidência da República — Decreto nº 7.962/2013](https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2013/decreto/d7962.htm).

Na Hotmart, o reembolso depende do prazo de garantia configurado pelo produtor e pode ser solicitado na plataforma de reembolsos.

Fontes:

- [Hotmart — Solicitar reembolso](https://help.hotmart.com/pt-br/article/360061973392/como-solicitar-o-reembolso-da-minha-compra-)
- [Hotmart — Ajustar prazo de garantia](https://help.hotmart.com/pt-br/article/360034552751/como-ajustar-o-prazo-de-garantia-do-produto-que-criei-)

## Privacidade e cookies

A ANPD recomenda transparência, minimização da coleta e controle do titular. Cookies não necessários devem ficar desativados por padrão quando dependerem de consentimento, e o usuário deve conseguir aceitar, rejeitar e gerenciar categorias.

Fontes:

- [ANPD — Guia orientativo sobre cookies](https://www.gov.br/anpd/pt-br/assuntos/noticias-periodo-eleitoral/anpd-lanca-guia-orientativo-201ccookies-e-protecao-de-dados-pessoais201d)
- [ANPD — Recomendações para banners e políticas de cookies](https://www.gov.br/anpd/pt-br/assuntos/noticias/anpd-emite-recomendacoes-para-adequacao-da-pratica-de-coleta-de-cookies-do-portal-gov.br)

## Publicidade educacional e alegações

O Anexo B do Código Brasileiro de Autorregulamentação Publicitária orienta que anúncios de cursos não induzam o público a acreditar em reconhecimento, autorização, oficialização ou nível acadêmico que não possa ser comprovado. Endossos e referências a profissionais, instituições de ensino, pesquisa ou saúde devem possuir documentação.

Fonte: [CONAR — Código Brasileiro de Autorregulamentação Publicitária](https://www.conar.org.br/codigo/codigo.php).

## Consequências para este projeto

- apresentar claramente que se trata de curso livre/online, caso seja essa a classificação;
- explicar o tipo de certificado sem sugerir reconhecimento inexistente;
- documentar credenciais e consentimentos de imagem;
- não fazer promessas de cura, diagnóstico ou resultado clínico;
- informar fornecedor, contato, oferta, acesso e garantia;
- coletar somente dados necessários;
- carregar pixels de marketing somente após a escolha válida do visitante, quando aplicável;
- testar o caminho completo do CTA até a compra aprovada e a atribuição de conversão.

