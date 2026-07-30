# 04 — Integração Hotmart, métricas e conformidade

## Arquitetura técnica planejada

1. landing page hospedada em domínio próprio;
2. CTAs apontando para o link de pagamento da oferta Hotmart;
3. URL pública cadastrada como página externa no produto;
4. checkout e entrega processados pela Hotmart;
5. eventos de marketing e análise configurados com consentimento apropriado;
6. página de agradecimento e suporte alinhados à oferta.

## Decisões necessárias na Hotmart

- ID do produto;
- ID/link da oferta;
- preço e parcelamento;
- moeda e formas de pagamento;
- prazo de garantia;
- área de membros e forma de entrega;
- upsell/order bump;
- programa de afiliados;
- página de agradecimento;
- pixels e eventos;
- UTM e regras de atribuição.

## Link direto ou widget

### Link direto — recomendado para a primeira versão

Vantagens:

- implementação e auditoria mais simples;
- compatível com funil de upsell;
- checkout mantido integralmente pela Hotmart;
- menor risco de conflito com scripts e consentimento.

### Checkout Widget — avaliar depois

Vantagem:

- reduz a mudança de contexto durante a compra.

Limitação documentada:

- não é compatível com ofertas que utilizam upsell.

## Plano de medição

Eventos mínimos:

- `page_view`;
- visualização da seção de oferta;
- clique no CTA, com identificação da posição;
- saída para checkout;
- visita ao checkout, medida na Hotmart;
- compra aprovada, medida na Hotmart;
- erros de link ou carregamento.

UTMs a preservar:

- `utm_source`;
- `utm_medium`;
- `utm_campaign`;
- `utm_content`;
- `utm_term`.

KPIs:

- taxa de clique no CTA;
- taxa de chegada ao checkout;
- conversão do checkout;
- conversão total por origem;
- abandono entre landing page e checkout;
- desempenho por dispositivo;
- reembolso dentro do período de garantia.

Não definir metas numéricas de conversão sem tráfego, preço, histórico e canal de aquisição.

## Consentimento e privacidade

- mapear cada cookie e script antes da publicação;
- carregar apenas cookies estritamente necessários por padrão;
- quando o consentimento for a base aplicável, oferecer **Aceitar**, **Rejeitar** e **Gerenciar** com destaque equivalente;
- impedir pixels de marketing antes da escolha válida;
- permitir alteração posterior das preferências;
- manter política de privacidade e cookies em linguagem clara;
- informar controlador, finalidades, compartilhamentos, retenção, direitos e contato;
- evitar formulário próprio na primeira versão se a única finalidade for venda direta.

## Checklist de oferta e consumidor

- identificação completa do fornecedor;
- descrição clara do curso e da entrega;
- preço total e parcelamento;
- duração de acesso;
- requisitos técnicos;
- canal eletrônico de atendimento;
- confirmação do processo de compra;
- garantia e instruções de reembolso;
- termos e políticas acessíveis;
- HTTPS e checkout oficial;
- nenhuma escassez ou contagem regressiva falsa.

## Checklist de alegações

Exigir documentação antes de publicar:

- “embasamento científico”;
- “referência na área”;
- “método inovador”;
- número de alunos, anos de experiência ou resultados;
- reconhecimento de certificado;
- parcerias institucionais;
- titulações e registros profissionais;
- depoimentos e autorização de imagem.

Não usar como promessa:

- cura, prevenção ou tratamento de doenças;
- diagnóstico por microscopia de sangue vivo ou equivalente;
- substituição de exames laboratoriais;
- resultado clínico garantido;
- habilitação profissional não conferida pelo curso.

## Testes antes da publicação

- todos os CTAs usam a oferta correta;
- UTMs chegam ao checkout;
- preço e parcelas coincidem entre página e checkout;
- garantia coincide em todos os pontos;
- compra de teste ou fluxo autorizado concluído;
- acesso chega ao e-mail;
- reembolso e suporte estão acessíveis;
- pixels não duplicam eventos;
- consentimento bloqueia scripts corretamente;
- mobile, desktop, teclado e leitores de tela;
- links legais e institucionais;
- desempenho e estabilidade visual;
- página 404 e falha de checkout com saída segura.

