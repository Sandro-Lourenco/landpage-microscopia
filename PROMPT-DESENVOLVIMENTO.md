# Prompt mestre — desenvolvimento completo da landing page

Copie o conteúdo abaixo e use em uma nova tarefa quando quiser iniciar o projeto.

---

Quero que você desenvolva do início ao fim uma landing page profissional, responsiva e orientada à conversão para o curso online:

**Curso de Microscopia de Campo Claro e Escuro: Fundamentos e Prática Clínica**

O curso é uma realização do **ICIBINA — Instituto de Ciências Biomédicas Naturais**, em parceria com a **MENCI — Medicina Natural do Corpo Inteiro**, e será vendido por meio da **Hotmart**.

## Forma de trabalho

Trabalhe com autonomia até entregar o projeto concluído e validado. Não pare apenas na estrutura inicial. Analise primeiro os arquivos e documentos existentes no workspace, preserve decisões anteriores e faça perguntas somente quando uma informação for realmente bloqueadora ou não puder ser substituída temporariamente por um placeholder claramente identificado.

Use obrigatoriamente as documentações existentes:

- `README.md`
- `docs/01-briefing.md`
- `docs/02-pesquisa.md`
- `docs/03-arquitetura.md`
- `docs/04-integracao-e-conformidade.md`
- `docs/05-pendencias.md`

Antes de implementar:

1. leia integralmente esses documentos;
2. verifique se existe `AGENTS.md`;
3. inspecione a estrutura atual do projeto;
4. verifique se existe `.openai/hosting.json`;
5. carregue e siga as skills aplicáveis de Sites, UI/UX, imagens e testes;
6. organize um plano curto de execução;
7. não apague nem sobrescreva alterações existentes sem necessidade.

## Objetivo principal

Criar uma página de vendas de objetivo único que apresente o curso com clareza, construa confiança e direcione o visitante para a oferta correta no checkout da Hotmart.

O CTA principal deve ser:

**Quero me inscrever**

Todos os CTAs de compra devem utilizar uma única configuração central para o link da Hotmart. Se o link real ainda não estiver disponível, use um placeholder seguro e documentado, sem inventar uma URL de checkout.

## Público

A página é destinada a profissionais e estudantes que desejam aprofundar conhecimentos em:

- fundamentos ópticos;
- manipulação e ajuste do microscópio;
- preparação de amostras e lâminas;
- microscopia de campo claro;
- microscopia de campo escuro;
- observação e interpretação de imagens dentro do escopo educacional;
- controle de qualidade, biossegurança e manutenção.

Não presuma habilitações profissionais que ainda não tenham sido confirmadas. Se o público exato não estiver definido, escreva a copy de forma inclusiva e tecnicamente responsável.

## Direção de copy

Use português brasileiro correto, natural, profissional e persuasivo.

Headline de referência:

> Domine os fundamentos e a prática da microscopia de campo claro e escuro

Subheadline de referência:

> Aprenda a preparar lâminas, configurar o microscópio e interpretar imagens com fundamentos ópticos, protocolos de qualidade e orientação prática do ICIBINA em parceria com a MENCI.

A promessa deve ser educacional e verificável. Não use:

- promessas de cura, prevenção ou tratamento;
- afirmações de diagnóstico;
- alegações de que a técnica substitui exames laboratoriais;
- resultados clínicos garantidos;
- urgência ou escassez falsas;
- número de alunos, depoimentos, certificações ou credenciais inventadas;
- alegação de curso reconhecido, oficial ou habilitante sem documentação.

Trate expressões como “embasamento científico”, “referência na área”, “método inovador”, “interpretação clínica” e “tratar a causa real” com cautela. Só publique alegações que estejam comprovadas no material fornecido. Quando faltar comprovação, use uma formulação neutra ou marque a informação como pendente fora da interface pública.

Corrija inconsistências editoriais, incluindo:

- “ajustes do microscópico” para “ajustes do microscópio”;
- “manutenção do microscópico” para “manutenção do microscópio”;
- padronização de “campo claro” e “campo escuro”;
- remoção de textos de interface importados, como “Mostrar menos”.

## Estrutura obrigatória

Construa a landing page na seguinte ordem:

1. barra institucional discreta com ICIBINA e MENCI;
2. hero com proposta de valor, imagem ou vídeo e CTA;
3. identificação do público e dos desafios;
4. resultados de aprendizagem;
5. explicação de como o curso funciona;
6. conteúdo programático completo;
7. demonstração visual ou prévia do curso;
8. apresentação das instituições e docentes;
9. prova social real ou, na ausência dela, prova de processo;
10. oferta completa;
11. garantia e segurança da compra;
12. perguntas frequentes;
13. CTA final;
14. rodapé legal e institucional.

## Conteúdo programático

Apresente os dez módulos:

1. Introdução à microscopia de campo claro e escuro
2. Equipamentos, componentes e ajustes do microscópio
3. Fundamentos da óptica e formação da imagem microscópica
4. Preparação de amostras e confecção de lâminas biológicas
5. Microscopia de campo claro: técnicas de observação
6. Identificação de estruturas biológicas e interpretação de imagens microscópicas
7. Microscopia de campo escuro: técnicas de observação
8. Casos clínicos e discussão de achados microscópicos
9. Controle de qualidade, biossegurança e manutenção do microscópio
10. Aplicação clínica, revisão geral e encerramento

Use um componente acessível de acordeão ou uma composição equivalente, garantindo que o conteúdo continue legível sem JavaScript.

## Informações ainda pendentes

Consulte `docs/05-pendencias.md`. Entre as possíveis lacunas estão:

- preço e parcelamento;
- link da oferta Hotmart;
- carga horária;
- período de acesso;
- prazo de garantia;
- certificado;
- formato das aulas;
- materiais e suporte;
- requisitos de equipamento;
- biografias e credenciais;
- depoimentos;
- logos, fotos e vídeos;
- dados jurídicos do fornecedor;
- políticas legais.

Não invente essas informações.

Durante o desenvolvimento, centralize conteúdos pendentes em um arquivo de configuração ou dados claramente nomeado. Use textos provisórios discretos apenas no ambiente de desenvolvimento. Não apresente preço, garantia, credencial ou depoimento fictício como se fosse real.

Ao final, gere um checklist objetivo informando exatamente o que o responsável precisa fornecer antes da publicação.

## Direção visual

Crie uma identidade visual:

- científica, contemporânea e confiável;
- limpa, humana e sofisticada;
- inspirada em óptica, luz, contraste, lâminas e observação microscópica;
- sem aparência de template genérico de infoproduto;
- sem excesso de efeitos, gradientes ou cartões;
- sem estética hospitalar fria ou alarmista.

Priorize:

- hierarquia tipográfica forte;
- espaços generosos;
- ótima leitura em dispositivos móveis;
- contraste acessível;
- CTAs evidentes e consistentes;
- microinterações sutis;
- imagens com função narrativa;
- elementos visuais que diferenciem campo claro e campo escuro.

Não crie ilustrações SVG genéricas. Use imagens reais fornecidas pelo usuário ou imagens adequadas pesquisadas com atenção às licenças. Se imagens originais forem essenciais e não houver material apropriado, use geração de imagem de forma limitada e coerente com a página.

Não apresente imagens microscópicas genéricas como prova de diagnóstico ou resultado do método.

## UI/UX e acessibilidade

A página deve:

- funcionar em mobile, tablet e desktop;
- usar HTML semântico;
- permitir navegação completa por teclado;
- ter estados de foco visíveis;
- usar texto alternativo adequado;
- respeitar contraste mínimo;
- evitar animações excessivas;
- respeitar `prefers-reduced-motion`;
- ter áreas de toque confortáveis;
- manter CTAs claros sem interromper a leitura;
- evitar menus e links que desviem do objetivo principal;
- apresentar FAQ e módulos de forma acessível;
- evitar CLS e mudanças bruscas de layout.

Considere uma barra de CTA móvel somente se ela não cobrir conteúdo e puder ser dispensada de forma acessível.

## Integração com a Hotmart

Use inicialmente link direto para o checkout, salvo se houver uma decisão explícita pelo Checkout Widget.

Prepare:

- configuração central do link da oferta;
- preservação de parâmetros UTM;
- rastreamento de cliques por posição do CTA;
- cadastro futuro da URL como página externa do produto;
- identificação visual de que o pagamento é processado pela Hotmart;
- tratamento seguro quando o link ainda não estiver configurado.

Não use o Checkout Widget se houver upsell incompatível.

Não exponha chaves, tokens ou dados sensíveis no código cliente.

## Analytics e privacidade

Prepare uma camada de rastreamento para:

- visualização de página;
- visualização da oferta;
- clique em CTA;
- saída para o checkout;
- erro de link.

A compra aprovada e a visita ao checkout deverão ser medidas pela integração da Hotmart.

Implemente consentimento de cookies compatível com a estratégia definida:

- cookies não necessários desativados por padrão quando dependerem de consentimento;
- opções claras para aceitar, rejeitar e gerenciar;
- carregamento de pixels de marketing somente após autorização aplicável;
- possibilidade de alterar preferências;
- política de privacidade e cookies acessível.

Se as políticas oficiais ainda não existirem, não invente documentos jurídicos finais. Crie modelos claramente marcados para revisão e registre a pendência.

## SEO, compartilhamento e desempenho

Configure:

- título e descrição específicos;
- idioma `pt-BR`;
- canonical;
- metadados Open Graph e redes sociais;
- favicon e identidade do projeto;
- dados estruturados apropriados e verdadeiros, sem avaliações fictícias;
- sitemap e robots quando aplicável;
- headings em ordem lógica;
- URLs limpas;
- imagens responsivas e otimizadas;
- carregamento eficiente de fontes;
- bom desempenho em redes móveis.

Crie uma imagem social coerente com a identidade final apenas quando a direção visual e a copy principal estiverem aprovadas. Revise todo texto presente na imagem.

## Qualidade técnica

Preserve a arquitetura e o gerenciador de pacotes existentes. Se o workspace ainda estiver sem projeto, inicialize-o seguindo a skill oficial de Sites.

Evite:

- dependências desnecessárias;
- componentes excessivamente fragmentados;
- estado cliente sem necessidade;
- animações pesadas;
- conteúdo duplicado;
- código morto;
- placeholders esquecidos;
- links com `#` usados como ação final.

Centralize dados repetidos, como módulos, perguntas frequentes, CTAs, dados institucionais e oferta.

## Validação obrigatória

Antes de considerar a tarefa concluída:

1. execute a build de produção;
2. corrija todos os erros reais;
3. faça testes automatizados com Playwright;
4. valide a página em viewport móvel e desktop;
5. teste navegação por teclado;
6. verifique contraste e acessibilidade básica;
7. teste todos os CTAs;
8. confirme a preservação de UTMs;
9. confirme que nenhum pixel de marketing dispara antes do consentimento aplicável;
10. confirme que preço, garantia e oferta são consistentes;
11. procure conteúdo inventado ou placeholders não identificados;
12. verifique links legais e institucionais;
13. revise ortografia e coerência da copy;
14. faça uma inspeção visual completa;
15. execute novamente a build após os ajustes.

Não conclua apenas dizendo que “deveria funcionar”. Execute os testes disponíveis e relate resultados concretos.

## Publicação

Depois da implementação e validação:

- publique usando a integração de Sites, salvo se eu pedir explicitamente uma entrega apenas local;
- não publique enquanto dados críticos reais estiverem ausentes, a menos que a versão seja claramente marcada como prévia privada;
- entregue a URL final;
- informe o que foi implementado;
- informe os testes realizados;
- liste todas as pendências comerciais, jurídicas ou de conteúdo;
- explique de forma curta como inserir ou trocar o link da Hotmart.

## Definição de pronto

O projeto estará pronto quando houver:

- landing page completa e responsiva;
- identidade visual consistente;
- copy revisada e responsável;
- integração segura com o checkout;
- acessibilidade básica;
- consentimento e rastreamento coerentes;
- SEO e compartilhamento configurados;
- build de produção aprovada;
- testes funcionais concluídos;
- publicação realizada ou prévia privada entregue;
- documentação das pendências e manutenção.

Comece lendo os documentos do projeto e prossiga até a entrega completa.

---

