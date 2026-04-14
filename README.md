# Portfólio — Jairo Domingos Buto

Portfólio pessoal desenvolvido com React + TypeScript + Vite. Apresenta projetos, stack técnico, processo de trabalho e contactos.

## Stack

- **React 18** + **TypeScript**
- **Vite** — bundler e dev server
- **Tailwind CSS** — estilização
- **shadcn/ui** — componentes de UI (Radix UI)
- **Lucide React** — ícones

## Estrutura do projeto

```text
src/
├── data/
│   └── Config.ts          # Fonte única de dados — edita aqui
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Process.tsx
│   │   ├── WhoINeedToSolve.tsx
│   │   └── Contact.tsx
│   └── ui/                # Componentes shadcn/ui
├── hooks/
│   ├── useIntersectionObserver.ts
│   └── useTheme.ts
└── pages/
    └── Index.tsx
```

## Como editar o conteúdo

Todo o conteúdo do portfólio está centralizado em `src/data/Config.ts`. Para alterar qualquer dado, edita **apenas esse ficheiro** — as mudanças propagam automaticamente para todos os componentes.

```ts
// Exemplo: mudar o nome ou disponibilidade
export const profile = {
  name: 'Jairo Domingos Buto',
  availableForWork: true,
  ...
};

// Exemplo: adicionar um projeto
export const projects = {
  items: [
    { title: 'Novo Projeto', ... },
  ],
};
```

## Comandos

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

## Licença

Todos os direitos reservados © Jairo Domingos Buto.
