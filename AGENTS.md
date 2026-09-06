# Instruções do portfólio

Aplicar o [núcleo comum do Cérebro](</home/jairo-buto/CEREBRO DO CLAUDE/wiki/dev/protocolo-operacional.md>), incluindo arranque, reserva/retoma de trabalho quando aplicável, verificação proporcional e fecho material. O Cérebro é memória operacional obrigatória; actualizar as fontes aplicáveis antes da resposta final e registar um bloqueio concreto se uma escrita falhar.

## Fontes

- [Backlog canónico](docs/PENDENCIAS.md): tarefas, prioridades, riscos e próximas acções. Não duplicar a lista na wiki.
- [Evidência](docs/CHECKLIST.md): resultados datados, ambiente e base Git; evidência histórica não prova a versão actual.
- [Contexto durável](</home/jairo-buto/CEREBRO DO CLAUDE/wiki/projetos/portifolio/overview.md>): objectivo e decisões.
- O conteúdo público vive em `src/data/Config.ts`. Preservar o schema editorial de projectos; não reintroduzir aliases legados nem publicar dados internos do Cérebro.

## Comandos do repositório

Confirmar `package.json` e o estado Git no arranque. Os scripts disponíveis são `npm run dev`, `npm run build`, `npm run build:dev`, `npm run lint` e `npm run preview`. Não há script `test` ou `typecheck`; não declarar estes checks executados por inferência. A selecção definitiva entre os lockfiles npm e Bun está no backlog; preservar ambos até resolução da tarefa.

Para mudanças de produto, executar checks proporcionais e verificar o comportamento afectado em browser quando aplicável. Para alterações apenas documentais, validar links, coerência das fontes e diff. Registar falhas sem promover estados. Não fazer push ou deploy sem pedido explícito.
