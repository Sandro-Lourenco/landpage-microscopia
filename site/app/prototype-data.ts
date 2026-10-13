export const prototypeModules = [
  {
    id: "boas-vindas",
    title: "Boas-vindas e orientação",
    description: "Conheça a formação, os materiais e a melhor forma de acompanhar as aulas.",
    lessons: [
      { id: "boas-vindas-1", title: "Como aproveitar o curso", duration: "08 min" },
      { id: "boas-vindas-2", title: "Materiais e segurança", duration: "12 min" },
    ],
  },
  {
    id: "fundamentos",
    title: "Fundamentos da microscopia",
    description: "Princípios ópticos, formação de imagem e componentes do microscópio.",
    lessons: [
      { id: "fundamentos-1", title: "Anatomia do microscópio", duration: "24 min" },
      { id: "fundamentos-2", title: "Luz, resolução e contraste", duration: "31 min" },
      { id: "fundamentos-3", title: "Ajuste de foco e iluminação", duration: "27 min" },
    ],
  },
  {
    id: "laminas",
    title: "Preparo de amostras e lâminas",
    description: "Organização do material, confecção de lâminas e controle de qualidade.",
    lessons: [
      { id: "laminas-1", title: "Preparação do ambiente", duration: "18 min" },
      { id: "laminas-2", title: "Confecção de lâminas", duration: "36 min" },
      { id: "laminas-3", title: "Erros comuns e correções", duration: "22 min" },
    ],
  },
  {
    id: "campo-claro",
    title: "Microscopia de campo claro",
    description: "Configuração, observação e registro de imagens em campo claro.",
    lessons: [
      { id: "campo-claro-1", title: "Configuração do campo claro", duration: "29 min" },
      { id: "campo-claro-2", title: "Prática guiada", duration: "42 min" },
    ],
  },
  {
    id: "campo-escuro",
    title: "Microscopia de campo escuro",
    description: "Contraste, configuração e limites da técnica de campo escuro.",
    lessons: [
      { id: "campo-escuro-1", title: "Configuração do campo escuro", duration: "33 min" },
      { id: "campo-escuro-2", title: "Comparação entre técnicas", duration: "38 min" },
    ],
  },
];

export const allPrototypeLessons = prototypeModules.flatMap((module) =>
  module.lessons.map((lesson) => ({ ...lesson, moduleTitle: module.title })),
);
