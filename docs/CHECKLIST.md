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

| ID | Data | Ambiente | Base Git | Check | Resultado |
|---|---|---|---|---|---|
| E-P01 | 2026-10-26 | local `/home/jairo-buto/PROJETOS/portifolio` | `6c2e8df` + alterações locais | `npx shadcn@latest view @shadcn/card`; revisão de `Projects.tsx` e `ProjectDetails.tsx`; `npx tsc --noEmit`; `npm run build`; `git diff --check`; HTTP local em `/` e `/projects/jcash` | A home selecciona os primeiros 5 itens `featured`, oculta filtros e oferece CTA para `/projects`; a listagem integral mantém filtros. O detalhe apresenta Contexto, Meu papel, Desafio, Solução, implementação, Resultado, trade-off e tecnologias. TypeScript, build e diff passaram; Vite respondeu nas duas rotas. `npm run lint` continua a falhar por 3 erros pré-existentes em `ui/command.tsx`, `ui/textarea.tsx` e `tailwind.config.ts`; browser integrado indisponível, logo inspeção visual e interacção permanecem POR VERIFICAR. |
| E-P02 | 2026-10-26 | local `/home/jairo-buto/PROJETOS/portifolio` | `6c2e8df` + alterações locais | Revisão de `ProjectDetails.tsx` contra o schema editorial; `npx tsc --noEmit`; `npm run build`; `npm run lint`; `git diff --check` | A página agora apresenta todo o conteúdo editorial disponível: contexto, problema, objetivo via abordagem, papel, implementação, arquitectura, decisões, aprendizagens, resultados, próximos passos, trade-off, tecnologias e CTA associado ao problema. TypeScript, build e diff passaram. Lint continua com os mesmos 3 erros pré-existentes em `ui/command.tsx`, `ui/textarea.tsx` e `tailwind.config.ts`; browser integrado não disponível, por isso a inspeção visual permanece POR VERIFICAR. |

Para cada nova verificação, acrescentar ID, data real, ambiente, commit/base com alterações locais, comando ou procedimento, resultado e limitações. Falhas ficam explícitas. Associar o ID de evidência ao critério do backlog; não marcar CONCLUÍDO sem o gate aplicável e o fecho material do núcleo.
