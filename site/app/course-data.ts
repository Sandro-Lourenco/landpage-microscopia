const defaultHotmartCheckoutUrl = "https://pay.hotmart.com/S106758446S";

export const siteConfig = {
  checkoutUrl:
    process.env.NEXT_PUBLIC_HOTMART_CHECKOUT_URL?.trim() ||
    defaultHotmartCheckoutUrl,
  supportEmail: "icibina@yahoo.com",
  institutionWebsite: "",
  courseName:
    "Curso de Microscopia de Campo Claro e Escuro: Fundamentos e Prática Clínica",
};

export const learningOutcomes = [
  {
    number: "01",
    title: "Ajuste com segurança",
    text: "Reconheça os componentes do microscópio e organize iluminação, foco e contraste para uma observação consistente.",
  },
  {
    number: "02",
    title: "Prepare boas lâminas",
    text: "Compreenda o preparo de amostras e a confecção de lâminas biológicas com critérios de qualidade e biossegurança.",
  },
  {
    number: "03",
    title: "Escolha a técnica",
    text: "Diferencie campo claro e campo escuro e entenda quando cada modo de observação é mais adequado.",
  },
  {
    number: "04",
    title: "Observe com método",
    text: "Desenvolva uma rotina organizada para identificar, registrar e discutir as estruturas apresentadas no curso.",
  },
];

export const modules = [
  {
    number: "01",
    title: "Introdução à microscopia de campo claro e escuro",
    text: "Panorama da formação, princípios das duas técnicas e preparação para a jornada prática.",
  },
  {
    number: "02",
    title: "Equipamentos, componentes e ajustes do microscópio",
    text: "Conheça as partes do equipamento e os ajustes essenciais para começar uma observação.",
  },
  {
    number: "03",
    title: "Fundamentos da óptica e formação da imagem microscópica",
    text: "Luz, resolução, ampliação, contraste e os elementos que determinam a qualidade da imagem.",
  },
  {
    number: "04",
    title: "Preparação de amostras e confecção de lâminas biológicas",
    text: "Organização do material, cuidado com amostras e construção de lâminas para observação.",
  },
  {
    number: "05",
    title: "Microscopia de campo claro: técnicas de observação",
    text: "Ajuste da iluminação e leitura das imagens obtidas com fundo claro.",
  },
  {
    number: "06",
    title: "Identificação de estruturas e interpretação de imagens",
    text: "Critérios para reconhecer, documentar e discutir estruturas dentro do escopo educacional.",
  },
  {
    number: "07",
    title: "Microscopia de campo escuro: técnicas de observação",
    text: "Configuração, contraste e particularidades da observação com fundo escuro.",
  },
  {
    number: "08",
    title: "Casos e discussão de achados microscópicos",
    text: "Aplicação do raciocínio desenvolvido ao longo do curso em situações selecionadas.",
  },
  {
    number: "09",
    title: "Controle de qualidade, biossegurança e manutenção",
    text: "Rotinas para preservar a qualidade do processo, a segurança e o desempenho do equipamento.",
  },
  {
    number: "10",
    title: "Aplicação, revisão geral e encerramento",
    text: "Integração dos conteúdos e revisão dos limites técnicos e profissionais da prática.",
  },
];

export const faqs = [
  {
    question: "Para quem é este curso?",
    answer:
      "A formação é indicada para biomédicos, farmacêuticos, biólogos, técnicos de laboratório, pesquisadores iniciantes e estudantes da área da saúde que desejam aprofundar conhecimentos em microscopia.",
  },
  {
    question: "O que vou aprender?",
    answer:
      "Você estudará fundamentos ópticos, componentes e ajustes do microscópio, preparo de amostras, campo claro, campo escuro, identificação de estruturas, biossegurança e controle de qualidade.",
  },
  {
    question: "Qual é a diferença entre campo claro e campo escuro?",
    answer:
      "No campo claro, a amostra é observada sobre um fundo iluminado. No campo escuro, estruturas iluminadas ganham destaque sobre um fundo escuro, oferecendo outra forma de contraste.",
  },
  {
    question: "O curso aborda preparo de lâminas?",
    answer:
      "Sim. O programa inclui preparação de amostras, confecção de lâminas biológicas e critérios de qualidade e biossegurança para uma rotina organizada.",
  },
  {
    question: "O curso habilita para diagnóstico?",
    answer:
      "Não. O conteúdo é educacional e não deve ser apresentado como substituto de exames laboratoriais, diagnóstico clínico ou habilitação profissional.",
  },
  {
    question: "Como posso solicitar informações sobre a próxima turma?",
    answer:
      "Use os botões de contato do site ou escreva para icibina@yahoo.com. A equipe do ICIBINA responderá com as informações disponíveis sobre inscrições e acesso.",
  },
];
