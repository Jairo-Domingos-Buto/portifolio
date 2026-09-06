# Portfólio — backlog canónico

Esta é a fonte única das tarefas. Evidência em [CHECKLIST.md](CHECKLIST.md); contexto na [wiki](</home/jairo-buto/CEREBRO DO CLAUDE/wiki/projetos/portifolio/overview.md>). Actualizado em 2026-09-06 por migração documental, sem novo Quality Gate do produto.

Estados: TODO, EM PROGRESSO, IMPLEMENTADO, VERIFICADO, CONCLUÍDO, BLOQUEADO, POR VERIFICAR. Prioridade (alta/normal/baixa) é ordem de trabalho; risco P0–P3 segue o núcleo e deve ser reavaliado antes de executar. Não reservar responsável permanente por cliente de IA; usar a coordenação de sessão do núcleo quando a tarefa começar.

| ID | Tarefa / próxima acção | Estado | Prioridade | Risco inicial | Critério de saída / dependência |
|---|---|---|---|---|---|
| PORT-001 | Corrigir erros de lint e repetir gate | TODO | alta | P2 | `npm run lint` e build passam; investigar command.tsx, textarea.tsx e tailwind.config.ts conforme E-H02 |
| PORT-002 | Validar hero e matriz desktop/mobile | POR VERIFICAR | alta | P2 | Rotas principais, navegação, reduced motion e ausência de overflow; reavaliar o relato antigo de overflow do Hero |
| PORT-003 | Inventariar deploy, domínio, CI/CD, analytics e contacto | POR VERIFICAR | normal | P3 | Registar o que existe e evidência; qualquer alteração externa requer âmbito próprio |
| PORT-004 | Decidir suite mínima de configuração/navegação | TODO | normal | P3 | Decisão justificada pelo risco e custo; implementação posterior se necessária |
| PORT-005 | Substituir fallback JCash e preencher galerias | TODO | normal | P2 | Imagens públicas reais disponíveis e apresentação validada |
| PORT-006 | Capturar Ocuioso e Jakeil Transfer | BLOQUEADO | normal | P3 | DNS público voltou a resolver e capturas públicas obtidas; confirmar dependência antes de retomar |
| PORT-007 | Definir lockfile canónico npm ou Bun | TODO | normal | P3 | Decisão documentada; preservar ambos até decidir, sem inferir escolha definitiva do uso histórico de npm ci |
| PORT-008 | Conteúdo editorial, cards e navegação | IMPLEMENTADO | normal | P2 | Histórico E-H03/E-H04; verificar a versão alvo e critérios relevantes antes de concluir |
| PORT-009 | Hero editorial minimalista e GradientWaves | IMPLEMENTADO | normal | P2 | Histórico E-H05; completar PORT-002 |
| PORT-010 | Capturas públicas MeSafa Shop, Colo, PADEL4UM, MUDS.ao e PADEL4ALL | IMPLEMENTADO | baixa | P3 | Histórico E-H04; validar activos/apresentação quando alterados |

## Decisões e preservação de histórico

- O schema editorial separa descoberta de case studies. Superfícies futuras devem consumi-lo directamente, sem reintroduzir aliases.
- A correcção da home que renderizava ícones `undefined`, cards compactos e âncoras da navbar integra PORT-008. A hero foi revista para composição minimalista, retrato rectangular, CTA único e reduced motion (PORT-009).
- Instalação npm, build e browser marcados como feitos na wiki antiga foram migrados para evidência histórica; não são tarefas activas nem verificação de hoje.
- Não publicar credenciais, bloqueios internos ou métricas não comprovadas no conteúdo público.
