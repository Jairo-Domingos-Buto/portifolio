// ============================================================
// CONFIG CENTRAL DO PORTIFÓLIO
// Edita aqui → reflete em todo o site automaticamente
// ============================================================

// --- IDENTIDADE PESSOAL ---
export const profile = {
  name: "Jairo Domingos Buto",
  initials: "</JB>",
  role: "Desenvolvedor Fullstack",
  tagline: "Fullstack em evolução constante.",
  yearsOfExperience: 4,
  availableForWork: true,
  availabilityLabel: "Disponível para novos projetos",
  avatar: "https://avatars.githubusercontent.com/u/101554996?v=4",
  responseTime: "Respondo em até 24 horas",
};

// --- CONTACTOS E REDES SOCIAIS ---
export const social = {
  email: "jairobuto03@gmail.com",
  emailComposeUrl:
    "https://mail.google.com/mail/u/0/#inbox?compose=PNRMKdqPTDswZNBZWskhFcDBPJTXXPZXRfBjNWCKZcdkLLfGRlFpFJxDdzMMVsHLVVzkSwSBpjQGlDq",
  github: {
    url: "https://github.com/Jairo-Domingos-Buto",
    label: "/Jairo-Domingos-Buto",
  },
  linkedin: {
    url: "https://www.linkedin.com/in/jairo-domingos-buto-0a7288315/",
    label: "/jairo-domingos-buto",
  },
};

// --- SECÇÕES DA NAVEGAÇÃO ---
export const navLinks = [
  { label: "Projetos", href: "#projetos" },
  { label: "Processo", href: "#processo" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

// --- HERO ---
export const hero = {
  disponibilityLabel: "Disponível para novos projetos",
  headline: "Fullstack em evolução constante.",
  description:
    "4 anos desenvolvendo soluções web e agora mobile com Laravel, React e tecnologias modernas. Especializado em transformar requisitos complexos em produtos funcionais.",
  ctaPrimary: { label: "Ver projetos", href: "#projetos" },
  ctaSecondary: { label: "Falar comigo", href: "#contato" },
};

// --- SOBRE MIM ---
export const about = {
  sectionTitle: "Sobre mim",
  sectionSubtitle: "Mais do que código: como eu trabalho e o que me move",
  bio: [
    "Sou <strong>Jairo Domingos Buto</strong>, desenvolvedor há quase 4 anos. Comecei com web (HTML, CSS, JavaScript, PHP/Laravel) e este ano mergulhei em mobile com React Native.",
    "Tenho vários projetos em carteira — a maioria profissional e sob NDA, mas os públicos estão no meu GitHub. Minha trajetória me ensinou que <strong>bom código é aquele que resolve problemas reais</strong>, não o mais complexo.",
    "O que me move: criar sistemas que funcionam, escalam e facilitam a vida de quem usa. Estou sempre aprendendo, mas nunca sacrifico qualidade por quantidade de tecnologias no currículo.",
  ],
  principles: [
    {
      title: "Clareza",
      description: "Comunicação direta, sem jargões desnecessários",
    },
    {
      title: "Responsabilidade",
      description: "Assumo compromissos e cumpro prazos",
    },
    {
      title: "Entrega",
      description: "Foco em código que funciona e gera valor",
    },
  ],
};

// --- SKILLS ---
export const skills = {
  sectionTitle: "Stack técnico",
  sectionSubtitle:
    "Profundidade em ferramentas essenciais, não superficialidade em muitas",
  principleText:
    "Prefiro dominar profundamente Laravel + React + MySQL do que conhecer superficialmente 20 tecnologias. Isso me permite resolver problemas complexos com confiança e entregar código de qualidade.",
  categories: [
    {
      title: "Backend & APIs",
      level: "Intermediário",
      skills: [
        "PHP & Laravel",
        "REST APIs",
        "MySQL & PostgreSQL",
        "Redis & Cache",
      ],
    },
    {
      title: "Frontend Web",
      level: "Intermediário+",
      skills: ["JavaScript", "React", "HTML5 & CSS3", "Tailwind CSS"],
    },
    {
      title: "Mobile",
      level: "Iniciante",
      skills: ["React Native", "Firebase", "Push Notifications"],
    },
    {
      title: "DevOps & Ferramentas",
      level: "Operacional",
      skills: ["Git & GitHub", "Docker", "Linux", "CI/CD básico"],
    },
  ],
};

// --- PROJETOS ---
export const projects = {
  sectionTitle: "Projetos que entregam resultado",
  sectionSubtitle:
    "Cada projeto mostra contexto, decisões técnicas e impacto mensurável",
  items: [
    {
      title: "FaturaSystem - Sistema de Faturação para Angola",
      description:
        "Sistema completo de gestão fiscal para empresas angolanas, em conformidade com os requisitos da AGT (Autoridade Geral Tributária).",
      context:
        "Empresas angolanas enfrentavam dificuldades para emitir documentos fiscais conforme as regulamentações da AGT, com processos manuais sujeitos a erros e sem conformidade legal para auditorias.",
      role: "Desenvolvedor full stack",
      solution:
        "Desenvolvemos um sistema modular com gestão completa de documentos fiscais (Faturas, Faturas-Recibo, Proformas, Recibos e Notas de Crédito). Implementei geração de assinaturas digitais RSA, hash encadeado entre documentos, exportação SAF-T XML, cálculo automático de impostos (IVA 14%, IS) e módulo PDV em tempo real.",
      result:
        "Empresa opera com documentos 100% conformes à legislação angolana. Processa toda a faturação mensal sem necessidade de sistemas adicionais. Exportação SAF-T pronta para auditorias da AGT.",
      tradeoff:
        "Optei por utilizar RSA 1024-bit ao invés de 2048-bit para manter compatibilidade com os requisitos mínimos da AGT, priorizando conformidade sobre maior segurança criptográfica.",
      tech: [
        "Laravel 12",
        "Livewire 3",
        "TailwindCSS",
        "MySQL",
        "DOMPDF",
        "Projeto Privado",
      ],
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop",
    },
    {
      title: "Miss Cary App",
      description:
        "Plataforma mobile e web para gestão e contratação de serviços como turismo, consultoria, educação e alojamento",
      context:
        "A Miss Cary precisava digitalizar e centralizar múltiplos serviços num único sistema, reduzindo processos manuais e melhorando a comunicação com clientes em diferentes países.",
      role: "Desenvolvedor Fullstack",
      solution:
        "Desenvolvimento de uma aplicação completa com catálogo de serviços, sistema de reservas, chat em tempo real, notificações e integração com métodos de pagamento.",
      result:
        "Centralização dos serviços numa única plataforma, melhoria na gestão de reservas e comunicação direta com clientes, reduzindo dependência de processos manuais.",
      tradeoff:
        "Foco inicial nas funcionalidades essenciais para entrega rápida (reservas, catálogo e comunicação), deixando integrações mais complexas para fases futuras.",
      tech: ["React Native", "Firebase", "Disponivel na Play Store"],
      image:
        "https://play-lh.googleusercontent.com/t6LgOnoo43RzToStY_zdSwUrDsLeGJknXL1a38FDcWeCG2GW2-7OYI1-4m_H_W8SbbMBWG__c6fQSE2sN-AtaQ=w240-h480",
    },
    {
      title: "Sistema de Gestão de Residentes e Visitas - Para Condomínios",
      description:
        "Sistema completo para gerenciamento de acessos, segurança e comunicação em condomínios residenciais",
      context:
        "Condomínios enfrentam problemas com controle manual de visitantes, falta de comunicação entre moradores e administração, e dificuldade em monitorar entradas/saídas em tempo real.",
      role: "Desenvolvedor fullstack responsável pelo sistema completo (Laravel + React). Implementação de módulos de administradores, moradores, visitantes e seguranças.",
      solution:
        "Sistema web com autenticação segura (Laravel Sanctum). Módulo de moradores para cadastrar visitantes e gerar acessos de autorização. Módulo de segurança para validar acessos. Painel administrativo para gestão de usuários e relatórios. Notificações em tempo real.",
      result:
        "Digitalizou controle de acessos. Check-in digital substituindo registros manuais. Histórico completo de visitas com exportação de relatórios.",
      tradeoff: "-",
      tech: [
        "Laravel",
        "React",
        "TailwindCSS",
        "MySQL",
        "Laravel Jetstream",
        "Livewire",
        "Sanctum",
        "Projeto Privado",
      ],
      image: "/screenshot",
    },
  ],
};

// --- PROCESSO DE TRABALHO ---
export const process = {
  sectionTitle: "Como eu trabalho",
  sectionSubtitle: "Processo claro e previsível, do problema à entrega",
  steps: [
    {
      title: "1. Entendimento",
      description:
        "Converso com o cliente, entendo o problema real e o contexto do negócio",
    },
    {
      title: "2. Planejamento",
      description:
        "Defino arquitetura, stack técnico e quebro em etapas mensuráveis",
    },
    {
      title: "3. Execução",
      description:
        "Desenvolvimento iterativo com código limpo, commits organizados e padrões",
    },
    {
      title: "4. Testes & Ajustes",
      description: "Testo cenários reais, corrijo bugs e otimizo performance",
    },
    {
      title: "5. Entrega",
      description:
        "Deploy em produção com documentação e transferência de conhecimento",
    },
  ],
};

// --- PARA QUEM TRABALHO ---
export const audiences = {
  sectionTitle: "Para quem eu trabalho",
  sectionSubtitle:
    "Se você se identifica com algum desses perfis, podemos conversar",
  items: [
    {
      title: "Empresas em crescimento",
      description: "Que precisam de sistemas robustos e escaláveis",
    },
    {
      title: "Startups em fase inicial",
      description: "Que precisam validar ideias rapidamente",
    },
    {
      title: "Ideias que precisam sair do papel",
      description:
        "Para quem tem uma boa ideia e precisa transformar isso num sistema real",
    },
  ],
};

// --- CONTACTO ---
export const contact = {
  sectionTitle: "Vamos conversar",
  sectionSubtitle:
    "Se você tem um projeto que precisa de atenção técnica e foco em resultados, entre em contato",
  ctaLabel: "Enviar mensagem",
  nextStepsText:
    "Respondo em até 24h úteis. Agendamos uma conversa rápida (15-30min) para entender seu projeto e avaliar fit mútuo.",
};
