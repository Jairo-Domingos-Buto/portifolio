// ============================================================
// CONFIG CENTRAL DO PORTFÓLIO
// Fonte única de conteúdo — edita aqui para atualizar o site
// ============================================================

// --- IDENTIDADE / POSICIONAMENTO ---
export const profile = {
  name: "Jairo Domingos Buto",
  shortName: "Jairo Buto",
  initials: "JB",
  role: "Fullstack Developer",
  secondaryRole: "Software Architect",
  tagline: "Construo produtos digitais que resolvem problemas reais.",
  shortBio:
    "Desenvolvedor Fullstack com experiência em aplicações web, mobile, SaaS e sistemas de negócio. Trabalho principalmente com Laravel, React, TypeScript e tecnologias modernas do ecossistema JavaScript.",
  yearsOfExperience: 5.5,
  location: "Luanda, Angola",
  timezone: "Africa/Luanda",
  availableForWork: true,
  availabilityLabel: "Disponível para novos projetos",
  avatar: new URL("../assets/fotoperfil.webp", import.meta.url).href,
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

// --- NAVEGAÇÃO ---
export const navLinks = [
  { label: "Projetos", href: "/projects" },
  { label: "Stack", href: "/#stack" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Processo", href: "/#processo" },
  { label: "Contato", href: "/#contato" },
];

// --- HERO ---
export const hero = {
  disponibilityLabel: "Disponível para novos projetos",
  eyebrow: "Fullstack Developer · Angola",
  headline: "Construo produtos digitais que resolvem problemas reais.",
  description:
    "Desenvolvedor Fullstack focado em transformar requisitos complexos em sistemas funcionais, escaláveis e fáceis de manter — do backend e banco de dados ao frontend, mobile e infraestrutura.",
  highlights: [
    "Laravel + React",
    "TypeScript",
    "SaaS & sistemas de negócio",
    "Mobile",
    "DevOps & infraestrutura",
  ],
  ctaPrimary: { label: "Explorar projetos", href: "#projetos" },
  ctaSecondary: { label: "Falar comigo", href: "#contato" },
  githubCta: { label: "Ver GitHub", href: social.github.url },
};

// --- SOBRE MIM ---
export const about = {
  sectionTitle: "Sobre mim",
  sectionSubtitle:
    "Engenharia de software, produto e execução — não apenas código.",
  bio: [
    "Sou <strong>Jairo Domingos Buto</strong>, desenvolvedor Fullstack e Software Architect baseado em Luanda, Angola. Trabalho principalmente com <strong>Laravel, React, TypeScript e PostgreSQL/MySQL</strong>, mas também atuo em mobile, infraestrutura e deployment.",
    "Minha experiência inclui desenvolvimento de <strong>SaaS, sistemas de faturação, plataformas de serviços, aplicações mobile e sistemas de gestão</strong>. Gosto de entender o problema de negócio antes de escolher a tecnologia.",
    "Também tenho experiência prática com <strong>Docker, Linux, VPS, Caddy, CI/CD, GitHub e deploy de aplicações</strong>. O objetivo é entregar o produto completo, não apenas a parte que roda no navegador.",
    "A minha abordagem é simples: <strong>arquitetura clara, código sustentável, experiência de utilizador consistente e entrega que funciona em produção</strong>.",
  ],
  principles: [
    {
      title: "Clareza",
      description:
        "Comunicação direta, documentação e decisões técnicas justificáveis.",
    },
    {
      title: "Engenharia",
      description:
        "Arquitetura, segurança, performance e manutenção fazem parte do produto.",
    },
    {
      title: "Produto",
      description:
        "Tecnologia deve resolver um problema real e gerar valor mensurável.",
    },
    {
      title: "Responsabilidade",
      description:
        "Assumo o ciclo completo: desenvolvimento, testes, deploy e manutenção.",
    },
  ],
};

// --- ESTATÍSTICAS / PROVA SOCIAL ---
export const stats = [
  {
    value: "5.5",
    label: "anos de experiência",
    description:
      "Entre desenvolvimento, projetos profissionais e produtos próprios.",
  },
  {
    value: "Fullstack",
    label: "perfil principal",
    description: "Frontend, backend, banco de dados e integração.",
  },
  {
    value: "Web + Mobile",
    label: "produtos",
    description: "Aplicações web, SaaS e experiências mobile.",
  },
  {
    value: "Angola",
    label: "mercado principal",
    description: "Soluções adaptadas a necessidades e contexto local.",
  },
];

// --- EXPERIÊNCIA ---
export const experience = {
  sectionTitle: "Experiência",
  sectionSubtitle:
    "Experiência prática em desenvolvimento, produto e infraestrutura.",
  items: [
    {
      company: "MUDS",
      role: "Full Stack Developer / Software Architect",
      period: "2026",
      location: "Luanda, Angola",
      type: "Profissional",
      description:
        "Desenvolvimento fullstack e participação em decisões de arquitetura, infraestrutura e deployment.",
      highlights: [
        "Desenvolvimento de aplicações web fullstack",
        "Laravel, React e tecnologias modernas do ecossistema JavaScript",
        "Docker, Linux, Caddy, VPS e CI/CD",
        "Deploy e configuração de ambientes de produção",
      ],
    },
    {
      company: "Calunga Soft",
      role: "Full Stack Developer",
      period: "2026",
      location: "Angola",
      type: "Profissional",
      description:
        "Desenvolvimento de soluções web e participação no ciclo de implementação de produtos.",
      highlights: [
        "Laravel e React",
        "APIs e integração frontend/backend",
        "Desenvolvimento orientado a requisitos de negócio",
      ],
    },
    {
      company: "Freelance",
      role: "Full Stack Developer",
      period: "2022 — presente",
      location: "Remoto",
      type: "Freelance",
      description:
        "Desenvolvimento de aplicações, sistemas de gestão, plataformas mobile e produtos SaaS para diferentes necessidades.",
      highlights: [
        "Aplicações web e mobile",
        "Sistemas de gestão e faturação",
        "Integração de APIs e serviços externos",
        "Deploy e manutenção de aplicações",
      ],
    },
  ],
};

// --- FORMAÇÃO ---
export const education = {
  sectionTitle: "Formação",
  items: [
    {
      institution: "Formação Técnica em Informática",
      course: "Técnico Médio em Informática",
      period: "Concluído em 2025",
      result:
        "Projeto final: Sistema de Gestão para Condomínio Girassol — 18 valores",
    },
    {
      institution: "Ensino Superior",
      course: "Engenharia Informática",
      period: "Em formação",
      result: "Licenciatura",
    },
  ],
};

// --- SKILLS ---
export const skills = {
  sectionTitle: "Stack técnico",
  sectionSubtitle:
    "Tecnologias que uso para construir, integrar, testar e colocar produtos em produção.",
  principleText:
    "A minha stack não é uma coleção de tecnologias. Escolho ferramentas de acordo com o problema, privilegiando simplicidade, manutenção, performance e capacidade de evolução.",
  categories: [
    {
      title: "Backend & APIs",
      level: "Avançado",
      skills: [
        "PHP",
        "Laravel",
        "Node.js",
        "REST APIs",
        "MySQL",
        "PostgreSQL",
        "Supabase",
        "Redis & Cache",
        "Autenticação & autorização",
      ],
    },
    {
      title: "Frontend Web",
      level: "Avançado",
      skills: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Vite",
        "TanStack React Query",
        "HTML5 & CSS3",
        "Tailwind CSS",
        "shadcn/ui",
      ],
    },
    {
      title: "Mobile",
      level: "Intermediário",
      skills: [
        "React Native",
        "Expo",
        "Firebase",
        "Push Notifications",
        "Integração com APIs",
      ],
    },
    {
      title: "DevOps & Infraestrutura",
      level: "Operacional",
      skills: [
        "Git & GitHub",
        "Docker",
        "Linux",
        "Caddy",
        "VPS",
        "CI/CD",
        "Nginx",
        "DNS & Domínios",
        "SSL/TLS",
      ],
    },
    {
      title: "Arquitetura & Engenharia",
      level: "Prática",
      skills: [
        "Service Layer",
        "Separation of Concerns",
        "REST Architecture",
        "Multi-tenant SaaS",
        "Database Design",
        "Caching",
        "Security",
        "Performance",
      ],
    },
    {
      title: "Ferramentas",
      level: "Diário",
      skills: [
        "VS Code",
        "GitHub",
        "Docker",
        "Figma",
        "Postman",
        "Obsidian",
        "Android Studio",
      ],
    },
  ],
};

// --- SERVIÇOS ---
export const services = {
  sectionTitle: "O que posso construir",
  sectionSubtitle:
    "Da ideia ao produto em produção, com uma abordagem orientada ao problema.",
  items: [
    {
      title: "Aplicações Web",
      description:
        "Sistemas web modernos, dashboards, plataformas internas e produtos SaaS.",
      technologies: ["Laravel", "React", "Next.js", "TypeScript"],
    },
    {
      title: "Sistemas de Gestão",
      description:
        "Soluções para automatizar processos, utilizadores, operações, relatórios e fluxos internos.",
      technologies: ["Laravel", "React", "PostgreSQL", "MySQL"],
    },
    {
      title: "SaaS & Multi-tenant",
      description:
        "Produtos por assinatura com isolamento de dados, gestão de organizações e funcionalidades por plano.",
      technologies: ["Laravel", "PostgreSQL", "Supabase", "React"],
    },
    {
      title: "Aplicações Mobile",
      description:
        "Aplicações Android/iOS com experiências nativas e integração com backend.",
      technologies: ["React Native", "Expo", "Firebase", "Node.js"],
    },
    {
      title: "APIs & Integrações",
      description:
        "APIs REST e integração entre sistemas, serviços externos, autenticação e pagamentos.",
      technologies: ["Laravel", "Node.js", "REST", "PostgreSQL"],
    },
    {
      title: "Deploy & Infraestrutura",
      description:
        "Colocação de aplicações em produção, containers, domínio, SSL, reverse proxy e CI/CD.",
      technologies: ["Docker", "Linux", "Caddy", "VPS", "GitHub"],
    },
  ],
};

// --- PROJETOS ---
export const projectCategories = [
  { id: "all", label: "Todos" },
  { id: "saas", label: "SaaS" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "business", label: "Sistemas de negócio" },
  { id: "marketplace", label: "Marketplaces" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "health", label: "Saúde" },
  { id: "transport", label: "Transportes" },
  { id: "institutional", label: "Institucional" },
  { id: "academic", label: "Académico" },
];

const projectImage = new URL("../assets/screenshot.webp", import.meta.url).href;
const projectScreenshots = {
  colo: new URL("../assets/projects/colo-home.png", import.meta.url).href,
  mesafaShop: new URL("../assets/projects/mesafa-shop-home.png", import.meta.url).href,
  muds: new URL("../assets/projects/muds-ao-home.png", import.meta.url).href,
  padel4all: new URL("../assets/projects/padel4all-home.png", import.meta.url).href,
  padel4um: new URL("../assets/projects/padel4um-home.png", import.meta.url).href,
};

type ProjectDefinition = {
  slug: string;
  title: string;
  shortTitle: string;
  featured: boolean;
  visibility?: "public" | "private" | "academic";
  summary: {
    label: string;
    description: string;
    status: string;
    role: string;
  };
  taxonomy: {
    categories: string[];
    platforms: string[];
    year: string;
  };
  media?: {
    cover?: string | null;
    gallery?: string[];
  };
  links?: {
    live?: string | null;
    github?: string | null;
    store?: string | null;
  };
  caseStudy: {
    context: string;
    problem: string;
    approach: string;
    architecture: string[];
    implementation: string[];
    decisions: string[];
    tradeoffs: string;
    outcomes: string[];
    lessons: string[];
    nextSteps: string[];
  };
  technologies: string[];
};

const createProject = (definition: ProjectDefinition) => ({
  ...definition,
  media: {
    cover: definition.media?.cover ?? projectImage,
    gallery: definition.media?.gallery ?? [],
  },
  links: definition.links ?? { live: null, github: null, store: null },
});

export const projects = {
  sectionTitle: "Projetos",
  sectionSubtitle:
    "Produtos e sistemas que mostram como penso, construo e resolvo problemas reais.",
  featuredTitle: "Projetos em destaque",
  viewAllLabel: "Ver todos os projetos",
  items: [
    createProject({
      slug: "jcash",
      title: "JCash",
      shortTitle: "JCash",
      featured: true,
      visibility: "private",
      summary: {
        label: "SaaS / Sistema de faturação",
        status: "Em desenvolvimento",
        description: "SaaS multi-tenant de faturação para empresas angolanas.",
        role: "Full Stack Developer",
      },
      taxonomy: { categories: ["saas", "web", "business"], platforms: ["web"], year: "2026" },
      caseStudy: {
        context: "Empresas precisam gerir faturação, documentos fiscais, clientes, produtos e obrigações de forma centralizada.",
        problem: "Processos de faturação dispersos dificultam a rastreabilidade e a preparação dos dados fiscais.",
        approach: "Plataforma multi-tenant com emissão de documentos fiscais, recibos, notas de crédito, relatórios e exportação SAF-T (AO).",
        architecture: ["Laravel API", "Next.js App Router", "MySQL", "Redis e filas"],
        implementation: ["Hash SHA-256 e assinatura RSA", "Numeração por estabelecimento", "Planos, módulos e permissões"],
        decisions: ["Separar tenants por contexto de pedido", "Priorizar conformidade e rastreabilidade documental"],
        tradeoffs: "Prioridade em conformidade fiscal, rastreabilidade e consistência dos documentos antes de funcionalidades secundárias.",
        outcomes: ["Base funcional para centralizar a operação de faturação de empresas angolanas."],
        lessons: ["Sistemas fiscais exigem estados, sequências e auditoria tratados como regras de domínio."],
        nextSteps: ["Deploy produtivo e integração com serviços externos reais, quando credenciais e especificações estiverem disponíveis."],
      },
      technologies: [
        "Laravel",
        "Next.js",
        "React",
        "TypeScript",
        "MySQL",
        "Redis",
        "DomPDF",
        "RSA",
        "SHA-256",
        "SAF-T (AO)",
      ],
      media: { cover: projectImage },
    }),
    createProject({
      slug: "ocuioso",
      title: "Ocuioso",
      shortTitle: "Ocuioso",
      featured: true,
      visibility: "private",
      summary: { label: "Marketplace / Delivery", status: "Em produção", description: "Plataforma de encomenda de comida e delivery para Luanda.", role: "Full Stack Developer" },
      taxonomy: { categories: ["marketplace", "web", "business"], platforms: ["web"], year: "2026" },
      caseStudy: {
        context: "Consumidores, estabelecimentos e motoboys precisam operar o mesmo ciclo de encomenda com estados diferentes.",
        problem: "A operação de delivery exige autorização por perfil, rastreio, pagamentos e transições consistentes.",
        approach: "Plataforma com áreas para consumidor, proprietário, motoboy e administração, incluindo rastreio e gestão de encomendas.",
        architecture: ["Laravel API", "Next.js", "Sanctum SPA", "TanStack Query"],
        implementation: ["Pool partilhado de motoboys", "Mapa GPS e rastreio", "Cupões, avaliações e chat"],
        decisions: ["Luanda como mercado inicial", "WhatsApp em vez de chat interno de suporte", "Pagamento manual sem gateway online"],
        tradeoffs: "A operação local e o controlo dos estados foram priorizados antes da expansão geográfica.",
        outcomes: ["Fluxos de consumidor, proprietário, administração e motoboy implementados e cobertos por testes."],
        lessons: ["Estados de encomenda e entrega devem permanecer separados para não corromper o rastreio."],
        nextSteps: ["Evoluir a operação conforme o modelo comercial validado."],
      },
      technologies: ["Laravel", "Next.js", "React", "TypeScript", "MySQL", "Sanctum", "Docker"],
    }),
    createProject({
      slug: "mesafa-shop",
      title: "MeSafa Shop",
      shortTitle: "MeSafa Shop",
      featured: true,
      visibility: "private",
      summary: { label: "Marketplace multi-vendedor", status: "Candidato técnico", description: "Marketplace angolano com lojas, encomendas, entregas e backoffice operacional.", role: "Full Stack Developer" },
      taxonomy: { categories: ["marketplace", "ecommerce", "saas", "web"], platforms: ["web"], year: "2026" },
      caseStudy: {
        context: "O produto combina subscrição para vendedores, compra para clientes, logística por zonas e administração.",
        problem: "Vendedores, clientes, entregadores e equipa administrativa precisam de regras e visibilidade diferentes no mesmo ciclo de compra.",
        approach: "Marketplace com lojas, KYC, pagamentos manuais, entregas por estado, notificações persistentes e painéis por perfil.",
        architecture: ["Laravel 13 API", "Next.js 16 App Router", "Sanctum", "MySQL e Docker"],
        implementation: ["KYC privado", "Courier com código de entrega", "CMS e relatórios administrativos", "Notificações persistentes"],
        decisions: ["Operação inicial focada em comércio físico local", "Dados de pagamento administráveis", "Separação entre prova de pagamento e conclusão da encomenda"],
        tradeoffs: "A operação verificável e os fluxos de confiança foram priorizados antes de funcionalidades comerciais mais amplas.",
        outcomes: ["Candidato técnico com os principais fluxos de vendedor, cliente, entregador e administração implementados."],
        lessons: ["A logística precisa de uma máquina de estados própria e de evidência em cada transição."],
        nextSteps: ["Publicação controlada e validação com operação real autorizada."],
      },
      technologies: ["Laravel", "Next.js", "React", "TypeScript", "MySQL", "Docker", "Caddy"],
      media: { cover: projectScreenshots.mesafaShop, gallery: [projectScreenshots.mesafaShop] },
    }),
    createProject({
      slug: "mesafa-ao",
      title: "MeSafa.ao",
      shortTitle: "MeSafa.ao",
      featured: true,
      visibility: "private",
      summary: { label: "SaaS de gestão de redes sociais", status: "Em desenvolvimento", description: "Plataforma para PMEs angolanas gerirem redes sociais, campanhas e métricas.", role: "Full Stack Developer" },
      taxonomy: { categories: ["saas", "web", "business"], platforms: ["web"], year: "2026" },
      caseStudy: {
        context: "PMEs precisam planear conteúdo, gerir canais, acompanhar métricas e organizar campanhas num só espaço.",
        problem: "A gestão distribuída por várias plataformas torna publicação, análise e colaboração difíceis de acompanhar.",
        approach: "SaaS com publicação agendada, geração assistida de conteúdo, relatórios, anúncios, chat e área administrativa.",
        architecture: ["Laravel 13 API", "Next.js 16", "MySQL", "Redis e Reverb"],
        implementation: ["Integrações OAuth sociais", "TanStack Query e Zustand", "Planos e permissões por organização"],
        decisions: ["Migrar o frontend para Next.js App Router", "Manter MySQL para relações fortes e migrations versionadas"],
        tradeoffs: "O backend e as regras de negócio foram estabilizados antes de fechar todas as áreas do frontend.",
        outcomes: ["Backend completo e frontend público/dashboards evoluídos por fases verificáveis."],
        lessons: ["Produtos SaaS precisam alinhar plano, limites, permissões e experiência desde o modelo de dados."],
        nextSteps: ["Concluir pagamentos e validar os fluxos privados em browser com backend local."],
      },
      technologies: ["Laravel", "Next.js", "React", "TypeScript", "MySQL", "Redis", "Reverb", "OpenAI"],
    }),
    createProject({
      slug: "jakeil-transfer",
      title: "Jakeil Transfer",
      shortTitle: "Jakeil Transfer",
      featured: true,
      visibility: "private",
      summary: { label: "Plataforma de transporte privado", status: "Web em produção", description: "Sistema de reservas e operação de transporte privado em Luanda.", role: "Full Stack Developer" },
      taxonomy: { categories: ["transport", "web", "mobile", "business"], platforms: ["web", "mobile"], year: "2026" },
      caseStudy: {
        context: "Clientes, motoristas e administração precisam acompanhar reservas, despacho, viagens e frota.",
        problem: "O serviço exige uma operação coordenada entre reserva, atribuição, viagem, pagamentos e comunicação.",
        approach: "Backend Laravel, frontend Next.js e aplicação Expo com áreas dedicadas para cliente, motorista e administração.",
        architecture: ["Laravel 13", "Next.js 16", "React Native / Expo", "React Query"],
        implementation: ["Motor de estados de reserva", "Despacho e gestão de frota", "Tracking e áreas mobile por perfil"],
        decisions: ["Web-first para a operação", "PostgreSQL/PostGIS como alvo produtivo", "Clean Architecture parcial no mobile"],
        tradeoffs: "A cobertura dos fluxos por perfil foi priorizada antes de fechar todas as integrações externas.",
        outcomes: ["Web operacional e aplicação mobile avançada com autenticação, reservas, viagens e administração."],
        lessons: ["A mesma regra de domínio deve ser partilhada entre web e mobile, mesmo com interfaces diferentes."],
        nextSteps: ["Completar navegação mobile, responsividade e integração de mapas."],
      },
      technologies: ["Laravel", "Next.js", "React Native", "Expo", "TypeScript", "PostgreSQL", "Redis"],
    }),
    createProject({
      slug: "miss-cary",
      title: "Miss Cary App",
      shortTitle: "Miss Cary",
      featured: true,
      visibility: "public",
      summary: { label: "Mobile / Plataforma de serviços", status: "Em produção", description: "Plataforma mobile e web para contratação de turismo, consultoria, educação e alojamento.", role: "Full Stack Developer" },
      taxonomy: { categories: ["mobile", "web"], platforms: ["mobile", "web"], year: "2026" },
      links: { live: null, store: "https://play.google.com/store/apps/details?id=com.misscary.app", github: null },
      caseStudy: { context: "A plataforma precisava centralizar serviços e facilitar reservas, comunicação e gestão de clientes.", problem: "Vários serviços e públicos precisavam de uma experiência unificada.", approach: "Catálogo de serviços, reservas, comunicação, notificações e integração com backend.", architecture: ["React Native", "Firebase", "Node.js"], implementation: ["Catálogo", "Reservas", "Notificações"], decisions: ["Priorizar funcionalidades essenciais"], tradeoffs: "Entrega incremental para validar o produto antes das integrações mais complexas.", outcomes: ["Centralização dos serviços numa única plataforma."], lessons: ["Um primeiro fluxo coerente vale mais do que múltiplas funcionalidades isoladas."], nextSteps: ["Evoluir integrações e cobertura funcional." ] },
      technologies: ["React Native", "Firebase", "Node.js"],
      media: { cover: "https://play-lh.googleusercontent.com/t6LgOnoo43RzToStY_zdSwUrDsLeGJknXL1a38FDcWeCG2GW2-7OYI1-4m_H_W8SbbMBWG__c6fQSE2sN-AtaQ=w960-h500-rw" },
    }),
    createProject({
      slug: "condominio-girassol",
      title: "Sistema de Gestão de Condomínio",
      shortTitle: "Condomínio Girassol",
      featured: true,
      visibility: "academic",
      summary: { label: "Sistema de gestão", status: "Concluído", description: "Sistema de gestão de residentes, visitantes e acessos para condomínio residencial.", role: "Full Stack Developer" },
      taxonomy: { categories: ["web", "business", "academic"], platforms: ["web"], year: "2025" },
      caseStudy: { context: "O projeto surgiu para resolver o controlo manual de visitantes e entradas.", problem: "A administração precisava de histórico e autorização de acessos centralizados.", approach: "Autenticação, gestão de moradores, visitantes e seguranças, autorizações, relatórios e notificações.", architecture: ["Laravel", "React", "MySQL", "Sanctum"], implementation: ["Perfis de morador, segurança e administrador", "Histórico de visitas"], decisions: ["Arquitetura modular"], tradeoffs: "Módulos separados permitiram evolução sem reescrever o núcleo.", outcomes: ["Digitalização do controlo de acessos e histórico centralizado de visitas."], lessons: ["Fluxos presenciais precisam de estados claros e registos auditáveis."], nextSteps: ["Evoluir relatórios e integrações conforme o contexto de operação." ] },
      technologies: ["Laravel", "React", "Tailwind CSS", "MySQL", "Jetstream", "Livewire", "Sanctum"],
      media: { cover: projectImage },
    }),
    createProject({
      slug: "nahora",
      title: "Nahora",
      shortTitle: "Nahora",
      featured: false,
      summary: { label: "Marketplace de serviços domésticos", status: "Em desenvolvimento", description: "Marketplace mobile para ligar clientes a técnicos de serviços domésticos em Angola.", role: "Full Stack Developer" },
      taxonomy: { categories: ["marketplace", "mobile"], platforms: ["mobile", "web"], year: "2026" },
      caseStudy: { context: "Clientes precisam contratar técnicos para reparações, limpeza e manutenção com preço e execução rastreáveis.", problem: "A contratação informal dificulta confiança, acompanhamento e pagamento.", approach: "Aplicação com clientes, técnicos e administração, pedidos, ofertas, tracking e pagamentos preparados.", architecture: ["React Native / Expo", "Firebase", "React Query", "Redux Toolkit"], implementation: ["Clean Architecture parcial", "Pedidos e tracking", "Áreas por role"], decisions: ["Firebase como backend inicial", "API própria como evolução futura"], tradeoffs: "A primeira fase privilegia velocidade e validação do marketplace antes da API própria.", outcomes: ["Fluxos principais de cliente, técnico e administração estruturados."], lessons: ["Um marketplace precisa coordenar confiança, proximidade e estado operacional."], nextSteps: ["Resolver autenticação por telefone, push notifications e pagamentos." ] },
      technologies: ["React Native", "Expo", "TypeScript", "Firebase", "React Query", "Redux Toolkit"],
    }),
    createProject({
      slug: "superprof-superaluno",
      title: "SuperProf / SuperAluno",
      shortTitle: "SuperProf / SuperAluno",
      featured: false,
      summary: { label: "EdTech / SaaS", status: "Conceito", description: "Conceito de plataforma educacional para ligar professores e alunos.", role: "Full Stack Developer" },
      taxonomy: { categories: ["saas", "web"], platforms: ["web"], year: "2026" },
      caseStudy: { context: "A proposta procura centralizar funcionalidades educacionais e facilitar a relação entre alunos e professores.", problem: "A experiência educacional pode ficar dispersa entre perfis, conteúdos e comunicação.", approach: "Arquitetura modular preparada para diferentes perfis e evolução gradual.", architecture: ["React", "Laravel", "TypeScript", "PostgreSQL"], implementation: ["Perfis de utilizador", "Base modular de produto"], decisions: ["Crescer por módulos"], tradeoffs: "A estrutura modular evita concentrar toda a lógica numa única aplicação.", outcomes: ["Base para evolução de um produto educacional."], lessons: ["A definição precoce dos perfis reduz conflitos entre fluxos."], nextSteps: ["Validar escopo e fluxos com utilizadores reais." ] },
      technologies: ["React", "Laravel", "TypeScript", "PostgreSQL"],
    }),
    createProject({
      slug: "pharmafinder-angola",
      title: "PharmaFinder Angola",
      shortTitle: "PharmaFinder",
      featured: false,
      summary: { label: "Web / Localização", status: "Conceito", description: "Aplicação web para descoberta e localização de farmácias em Angola.", role: "Frontend Developer" },
      taxonomy: { categories: ["web", "health"], platforms: ["web"], year: "2026" },
      caseStudy: { context: "A experiência procura facilitar a descoberta de farmácias e informação relevante.", problem: "Encontrar estabelecimentos e localização pode exigir pesquisa dispersa.", approach: "SPA responsiva com pesquisa e localização de estabelecimentos.", architecture: ["React", "Vite", "TypeScript", "PostGIS"], implementation: ["Pesquisa", "Localização", "Interface responsiva"], decisions: ["Priorizar simplicidade"], tradeoffs: "A experiência de pesquisa foi priorizada antes de integrações mais amplas.", outcomes: ["Conceito de experiência centralizada para descoberta de farmácias."], lessons: ["Produtos de localização precisam de dados confiáveis antes de mais funcionalidades."], nextSteps: ["Validar fonte de dados e cobertura geográfica." ] },
      technologies: ["React", "Vite", "TypeScript", "PostGIS"],
    }),
    createProject({
      slug: "ejpr",
      title: "EJPR",
      shortTitle: "EJPR",
      featured: false,
      visibility: "private",
      summary: { label: "Site, portal e backoffice", status: "Em desenvolvimento", description: "Plataforma digital para venda, aluguer, manutenção e reparação de equipamentos de impressão.", role: "Full Stack Developer" },
      taxonomy: { categories: ["web", "business"], platforms: ["web"], year: "2026" },
      caseStudy: { context: "A EJPR precisava juntar presença comercial, suporte ao cliente e operação interna.", problem: "Pedidos, contratos, equipamentos, tickets e conteúdos estavam separados por processos.", approach: "Produto Next.js com site público, portal do cliente, backoffice, CMS e assistente virtual.", architecture: ["Next.js 15", "React 19", "Prisma", "SQLite"], implementation: ["Tickets com SLA", "Contratos e parque de equipamentos", "CMS declarativo", "Assistente por intenções"], decisions: ["Server Actions para escrita", "Sessões JWT revogáveis", "Validação zod na entrada"], tradeoffs: "SQLite foi usado no desenvolvimento, com migração para PostgreSQL prevista para produção.", outcomes: ["Plataforma estruturada em três áreas com fluxos de suporte e gestão."], lessons: ["O backoffice deve reflectir os SLAs e não apenas armazenar registos."], nextSteps: ["Validar localmente, fechar documentação e preparar produção." ] },
      technologies: ["Next.js", "React", "TypeScript", "Prisma", "SQLite", "Tailwind CSS"],
    }),
    createProject({
      slug: "colo",
      title: "Colo",
      shortTitle: "Colo",
      featured: false,
      visibility: "private",
      summary: { label: "E-commerce / Operação alimentar", status: "Em produção", description: "Plataforma de pedidos semanais de refeições saudáveis adaptadas ao ciclo menstrual.", role: "Full Stack Developer" },
      taxonomy: { categories: ["ecommerce", "web", "business"], platforms: ["web"], year: "2026" },
      caseStudy: { context: "A Colo vende um pacote semanal de refeições com vagas limitadas e comunicação por WhatsApp.", problem: "A operação precisava gerir semanas, menus, vagas, pedidos especiais e pagamentos sem editar código.", approach: "Site com pedido persistido, transição de semanas, dashboard de gestão e personalização por fase do ciclo.", architecture: ["React", "Node.js", "Prisma"], implementation: ["Semanas e vagas", "Pedidos normais e especiais", "Dashboard de gestão"], decisions: ["Pacote semanal como unidade comercial", "WhatsApp como canal de confirmação"], tradeoffs: "A experiência emocional da marca foi mantida sem esconder as regras operacionais do pedido.", outcomes: ["Operação de semanas, pedidos e gestão centralizada."], lessons: ["Um produto de nicho precisa traduzir a proposta emocional em regras simples de compra."], nextSteps: ["Expandir testes mínimos e backups da base de dados." ] },
      technologies: ["React", "Node.js", "Prisma", "SQLite"],
      media: { cover: projectScreenshots.colo, gallery: [projectScreenshots.colo] },
    }),
    createProject({
      slug: "muds-ao",
      title: "MUDS.ao Launchpad",
      shortTitle: "MUDS.ao",
      featured: false,
      visibility: "private",
      summary: { label: "Web app / E-commerce", status: "Em produção", description: "Plataforma de hospedagem com e-commerce, área de cliente e administração.", role: "Full Stack Developer" },
      taxonomy: { categories: ["ecommerce", "saas", "web", "business"], platforms: ["web"], year: "2026" },
      caseStudy: { context: "A MUDS precisava apresentar serviços de hospedagem, vender planos e gerir clientes num produto próprio.", problem: "Marketing, checkout, pagamentos e operação administrativa precisavam de uma base integrada.", approach: "Web app SSR com site, checkout, AppyPay, conta de cliente, CMS e painel administrativo.", architecture: ["TanStack Start", "React 19", "Supabase", "Cloudflare Workers"], implementation: ["Checkout de hospedagem", "Webhook de pagamento", "CMS e área de cliente"], decisions: ["Feature-first", "Webhook reconfirma o estado na API oficial", "Server functions autenticadas"], tradeoffs: "A migração de código legado para features continua gradual para preservar o MVP.", outcomes: ["Plataforma em produção com venda de serviços e gestão administrativa."], lessons: ["Pagamentos assíncronos exigem reconfirmação e estados idempotentes."], nextSteps: ["Concluir migração das features restantes para a arquitectura feature-first." ] },
      technologies: ["TanStack Start", "React", "Supabase", "Tailwind CSS", "AppyPay", "Cloudflare Workers"],
      media: { cover: projectScreenshots.muds, gallery: [projectScreenshots.muds] },
    }),
    createProject({
      slug: "padel4um",
      title: "PADEL4UM",
      shortTitle: "PADEL4UM",
      featured: false,
      visibility: "private",
      summary: { label: "E-commerce / Clube desportivo", status: "Em produção", description: "Loja online e plataforma de operação de um clube de padel em Angola.", role: "Full Stack Developer" },
      taxonomy: { categories: ["ecommerce", "web", "business"], platforms: ["web"], year: "2026" },
      caseStudy: { context: "A operação combina catálogo de produtos, encomendas, reservas e gestão de aulas.", problem: "A loja precisa respeitar o ERP comercial enquanto oferece uma experiência digital própria.", approach: "Frontend Next.js integrado com Vendus, Supabase, email e áreas administrativas separadas.", architecture: ["Next.js", "TypeScript", "Supabase", "Vendus"], implementation: ["Catálogo sincronizado", "Pagamento manual", "Admin e conta de cliente"], decisions: ["Vendus como fonte fiscal", "Nunca emitir factura automaticamente no checkout"], tradeoffs: "Reservas e aulas foram mantidas como gestão interna enquanto pagamentos online ficam para evolução futura.", outcomes: ["Loja online e operação do clube disponíveis em produção."], lessons: ["Integrações fiscais precisam de uma fronteira clara entre catálogo, encomenda e emissão."], nextSteps: ["Evoluir reservas e integrações de pagamento conforme operação." ] },
      technologies: ["Next.js", "TypeScript", "Supabase", "Vendus", "Docker", "nginx"],
      media: { cover: projectScreenshots.padel4um, gallery: [projectScreenshots.padel4um] },
    }),
    createProject({
      slug: "psn",
      title: "Portal de Saúde Nacional",
      shortTitle: "PSN",
      featured: false,
      visibility: "private",
      summary: { label: "Portal de saúde", status: "MVP em desenvolvimento", description: "Portal de saúde com marcações, ficha de saúde, agregado familiar, KYC e pagamentos.", role: "Full Stack Developer" },
      taxonomy: { categories: ["health", "web", "business"], platforms: ["web"], year: "2026" },
      caseStudy: { context: "O portal pretende ligar utentes a hospitais, clínicas e farmácias com serviços digitais.", problem: "Marcação, dados de saúde, identidade e pagamentos precisam de isolamento e segurança fortes.", approach: "MVP com autenticação segura, KYC, marcações e integração de pagamento preparada.", architecture: ["Next.js 16", "React 19", "Prisma", "PostgreSQL"], implementation: ["JWT revogável", "Argon2id", "Validação zod", "Webhooks HMAC"], decisions: ["Isolamento por utente", "Cookies httpOnly", "Storage externo como requisito de produção"], tradeoffs: "A segurança da aplicação foi priorizada, enquanto migrations, rate limiting e storage produtivo permanecem como gate.", outcomes: ["MVP funcional com base de segurança e 37 rotas verificadas."], lessons: ["Dados de saúde exigem separar a qualidade da aplicação das garantias da infraestrutura."], nextSteps: ["Fechar migrations, rate limiting, storage S3 e testes de rotas." ] },
      technologies: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Argon2", "JWT"],
    }),
    createProject({
      slug: "padel4all",
      title: "PADEL4ALL Angola",
      shortTitle: "PADEL4ALL",
      featured: false,
      visibility: "private",
      summary: { label: "Site institucional", status: "Em desenvolvimento", description: "Site institucional para uma empresa de construção e operação de campos de padel em Angola.", role: "Full Stack Developer" },
      taxonomy: { categories: ["institutional", "web"], platforms: ["web"], year: "2026" },
      caseStudy: { context: "A empresa precisava apresentar serviços, projectos, parceiros e clube oficial.", problem: "O conteúdo comercial precisava de uma presença institucional consistente e gerível.", approach: "Site institucional com áreas públicas, autenticação Supabase e base para CMS.", architecture: ["Vite", "React", "Tailwind CSS", "Supabase"], implementation: ["Páginas públicas", "Admin de conteúdo", "CI/CD"], decisions: ["Design system consistente", "Conteúdo editável por fonte central"], tradeoffs: "A publicação de imagens reais e formulário funcional ficou dependente de conteúdos e integrações externas.", outcomes: ["Site institucional estruturado com autenticação e pipeline preparados."], lessons: ["A prova visual dos projectos é tão importante quanto a descrição dos serviços."], nextSteps: ["Adicionar imagens reais, formulário funcional e domínio." ] },
      technologies: ["React", "Vite", "Tailwind CSS", "Supabase", "TypeScript"],
      media: { cover: projectScreenshots.padel4all, gallery: [projectScreenshots.padel4all] },
    }),
  ],
  featured: ["jcash", "ocuioso", "mesafa-shop", "jakeil-transfer"],
  bySlug: {} as Record<string, unknown>,
};

projects.bySlug = Object.fromEntries(projects.items.map((project) => [project.slug, project]));

// --- GALERIA GERAL ---
export const gallery = {
  sectionTitle: "Por trás dos projetos",
  sectionSubtitle:
    "Interfaces, dashboards, aplicações mobile e detalhes de implementação.",
  items: [
    {
      id: "jcash-dashboard",
      projectSlug: "jcash",
      title: "JCash — Dashboard",
      image: new URL("../assets/screenshot.webp", import.meta.url).href,
      type: "screenshot",
      alt: "Dashboard do JCash",
    },
    {
      id: "condominio-system",
      projectSlug: "condominio-girassol",
      title: "Sistema de Condomínio",
      image: new URL("../assets/screenshot.webp", import.meta.url).href,
      type: "screenshot",
      alt: "Interface do sistema de gestão de condomínio",
    },
    {
      id: "miss-cary",
      projectSlug: "miss-cary",
      title: "Miss Cary",
      image:
        "https://play-lh.googleusercontent.com/t6LgOnoo43RzToStY_zdSwUrDsLeGJknXL1a38FDcWeCG2GW2-7OYI1-4m_H_W8SbbMBWG__c6fQSE2sN-AtaQ=w960-h500-rw",
      type: "product",
      alt: "Miss Cary App",
    },
    {
      id: "mesafa-shop-home",
      projectSlug: "mesafa-shop",
      title: "MeSafa Shop — Homepage pública",
      image: projectScreenshots.mesafaShop,
      type: "product",
      alt: "Homepage pública do MeSafa Shop",
    },
    {
      id: "colo-home",
      projectSlug: "colo",
      title: "Colo — Homepage pública",
      image: projectScreenshots.colo,
      type: "product",
      alt: "Homepage pública da Colo",
    },
    {
      id: "padel4um-home",
      projectSlug: "padel4um",
      title: "PADEL4UM — Homepage pública",
      image: projectScreenshots.padel4um,
      type: "product",
      alt: "Homepage pública do PADEL4UM",
    },
    {
      id: "muds-ao-home",
      projectSlug: "muds-ao",
      title: "MUDS.ao — Homepage pública",
      image: projectScreenshots.muds,
      type: "product",
      alt: "Homepage pública da MUDS.ao",
    },
    {
      id: "padel4all-home",
      projectSlug: "padel4all",
      title: "PADEL4ALL — Homepage pública",
      image: projectScreenshots.padel4all,
      type: "product",
      alt: "Homepage pública da PADEL4ALL",
    },
  ],
};

// --- CASE STUDIES ---
export const caseStudies = {
  sectionTitle: "Case studies",
  sectionSubtitle:
    "Não mostro apenas o resultado final. Mostro o problema, as decisões e o que aprendi.",
  sections: [
    "overview",
    "problem",
    "constraints",
    "architecture",
    "implementation",
    "screenshots",
    "tradeoffs",
    "results",
    "lessons",
    "nextSteps",
  ],
  emptyState:
    "Os estudos de caso detalhados serão publicados progressivamente.",
};

// --- PROCESSO DE TRABALHO ---
export const process = {
  sectionTitle: "Como eu trabalho",
  sectionSubtitle:
    "Processo claro e previsível, do problema ao produto em produção.",
  steps: [
    {
      title: "1. Descoberta",
      description:
        "Entendo o problema, utilizadores, contexto do negócio, restrições e resultado esperado.",
    },
    {
      title: "2. Planejamento",
      description:
        "Defino escopo, arquitetura, stack, modelo de dados e prioridades.",
    },
    {
      title: "3. UX & Interface",
      description:
        "Estruturo os fluxos e interfaces antes de transformar decisões em código.",
    },
    {
      title: "4. Desenvolvimento",
      description:
        "Construo iterativamente com separação de responsabilidades, Git e entregas verificáveis.",
    },
    {
      title: "5. Testes & Hardening",
      description:
        "Valido cenários reais, segurança, erros, performance e comportamento responsivo.",
    },
    {
      title: "6. Deploy",
      description:
        "Configuro ambiente, domínio, SSL, containers, CI/CD e coloco o produto em produção.",
    },
    {
      title: "7. Evolução",
      description:
        "Analiso feedback, corrigimos prioridades e evoluímos o produto por ciclos.",
    },
  ],
};

// --- PARA QUEM TRABALHO ---
export const audiences = {
  sectionTitle: "Para quem resolvo problemas",
  sectionSubtitle:
    "Projetos em que engenharia e produto precisam andar juntos.",
  items: [
    {
      title: "Empresas em crescimento",
      description:
        "Que precisam substituir processos manuais por sistemas próprios e confiáveis.",
    },
    {
      title: "Startups",
      description:
        "Que precisam transformar uma ideia em MVP e evoluir para produto.",
    },
    {
      title: "Negócios com sistemas legados",
      description:
        "Que precisam modernizar processos sem interromper a operação.",
    },
    {
      title: "Produtos SaaS",
      description:
        "Que precisam de arquitetura, frontend, backend e infraestrutura para crescer.",
    },
  ],
};

// --- DIFERENCIAIS ---
export const differentiators = {
  sectionTitle: "O que diferencia o meu trabalho",
  items: [
    {
      title: "Visão fullstack real",
      description:
        "Não fico limitado ao frontend ou backend. Consigo acompanhar o fluxo completo do produto.",
    },
    {
      title: "Contexto de negócio",
      description:
        "Antes de escolher tecnologia, procuro entender o problema que precisa ser resolvido.",
    },
    {
      title: "Produção",
      description:
        "Tenho experiência prática com deploy, servidores, Docker, reverse proxy, DNS, SSL e CI/CD.",
    },
    {
      title: "Produtos locais",
      description:
        "Experiência construindo software para necessidades específicas do mercado angolano.",
    },
  ],
};

// --- MOTION / EXPERIÊNCIA ---
export const motion = {
  philosophy:
    "Motion deve explicar, orientar e dar feedback — nunca obrigar o visitante a esperar.",
  enabled: true,
  reducedMotionSupport: true,
  preferredPatterns: [
    "Scroll reveal",
    "View Transitions",
    "Micro-interações",
    "Staggered lists",
    "Shared element transitions",
    "Project image transitions",
    "Progressive disclosure",
  ],
  avoid: [
    "Intro longa bloqueando o conteúdo",
    "Scroll hijacking",
    "Animações contínuas sem propósito",
    "Excesso de parallax",
    "Efeitos pesados em mobile",
  ],
};

// --- RECURSOS DO PORTFÓLIO ---
export const portfolioFeatures = {
  projectFiltering: true,
  projectSearch: true,
  dedicatedProjectPages: true,
  projectGallery: true,
  caseStudies: true,
  darkMode: true,
  responsiveDesign: true,
  keyboardNavigation: true,
  reducedMotion: true,
  imageOptimization: true,
  seo: true,
  openGraph: true,
  structuredData: true,
  githubIntegration: true,
  contactForm: true,
  commandPalette: true,
  multilingualReady: true,
};

// --- SEO ---
export const seo = {
  title: "Jairo Buto — Fullstack Developer",
  description:
    "Portfólio de Jairo Domingos Buto, Fullstack Developer e Software Architect de Luanda, Angola. Projetos em SaaS, web, mobile, sistemas de negócio e infraestrutura.",
  keywords: [
    "Jairo Buto",
    "Jairo Domingos Buto",
    "Fullstack Developer Angola",
    "Software Developer Angola",
    "Laravel Developer",
    "React Developer",
    "TypeScript Developer",
    "SaaS Angola",
    "Web Developer Luanda",
  ],
  ogImage: new URL("../assets/screenshot.webp", import.meta.url).href,
  locale: "pt_AO",
};

// --- CONTACTO ---
export const contact = {
  sectionTitle: "Vamos construir algo útil",
  sectionSubtitle:
    "Se tens um projeto, produto ou problema técnico que precisa de uma solução, podemos conversar.",
  ctaLabel: "Enviar mensagem",
  email: social.email,
  nextStepsText:
    "Respondo em até 24h úteis. Depois avaliamos o contexto, o escopo e se existe fit para trabalhar juntos.",
  responseTime: "Até 24 horas úteis",
};

// --- FOOTER ---
export const footer = {
  tagline: "Construído com código, curiosidade e atenção aos detalhes.",
  copyright: `© ${new Date().getFullYear()} Jairo Domingos Buto. Todos os direitos reservados.`,
  links: [
    { label: "GitHub", href: social.github.url },
    { label: "LinkedIn", href: social.linkedin.url },
    { label: "Email", href: `mailto:${social.email}` },
  ],
};
