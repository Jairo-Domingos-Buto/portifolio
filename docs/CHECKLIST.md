# Portfólio — registo de evidência

Backlog e estado das tarefas: [PENDENCIAS.md](PENDENCIAS.md). Este documento regista checks, não duplica tarefas. Criado em 2026-09-06. Responsável pela manutenção: agente que executar cada tarefa material.

## Verificação documental do piloto

Âmbito: documentação e encaminhamento das instruções, risco P3. Base de produto observada: `0c32716cfd9f27aee24e8127a4ba67c8e8f7db47`; ambiente local `/home/jairo-buto/portifolio`. Nenhum teste do produto foi repetido nesta migração.

| ID | Data | Ambiente | Base Git | Check | Resultado |
|---|---|---|---|---|---|
| E-D01 | 2026-09-06 | local | 0c32716 | `git status --short`, `git rev-parse HEAD`, `git log -3 --oneline` antes da edição | Repositório limpo; conteúdo e hero constam de commits. A afirmação antiga de alterações não commitadas ficou desactualizada |
| E-D02 | 2026-09-06 | local | 0c32716 + documentos do piloto | Leitura de package.json | Scripts dev/build/build:dev/lint/preview; sem test/typecheck |
| E-D03 | 2026-09-06 | local | 0c32716 + documentos do piloto | Validação Python de links Markdown e `git diff --check` | 6 documentos, 14 links locais existentes; diff sem erros de whitespace |

## Evidência histórica importada

Fonte: overview, pendências e histórico do Cérebro anteriores à migração. São relatos de sessões passadas; o hash exacto, logs completos e ambiente detalhado não constam desses registos. Não atribuir estes resultados ao HEAD actual. Estado actual dos checks de produto: POR VERIFICAR.

| ID | Data reportada | Ambiente reportado | Commit testado | Check / resultado reportado |
|---|---|---|---|---|
| E-H01 | 2026-09-05 | local | UNKNOWN | `npm ci` e `npm run build` passaram |
| E-H02 | 2026-09-05 | local | UNKNOWN | `npm run lint` falhou em três erros de ui/command.tsx, ui/textarea.tsx e tailwind.config.ts, com avisos de Fast Refresh |
| E-H03 | 2026-09-05 | browser local; dimensões não registadas | UNKNOWN | `/projects` e `/projects/jcash`: filtros, case study, galeria fallback e retorno à home; listagem reportada com 16 projectos |
| E-H04 | UNKNOWN | local / páginas públicas | UNKNOWN | Pendências antigas marcavam capturas públicas, correcção de ícones undefined, cards e navbar como feitos; não registavam gate completo por item |
| E-H05 | 2026-09-05 | local / browser | UNKNOWN | Histórico reportava build, tsc, browser e reduced motion da hero; dimensões e comando exacto de tsc não preservados neste registo |

## Novas entradas

Para cada nova verificação, acrescentar ID, data real, ambiente, commit/base com alterações locais, comando ou procedimento, resultado e limitações. Falhas ficam explícitas. Associar o ID de evidência ao critério do backlog; não marcar CONCLUÍDO sem o gate aplicável e o fecho material do núcleo.
