# Estudos de caso orientados ao cliente

## Intenção

Cada página de projecto deve funcionar como uma prova concreta de capacidade: um potencial cliente reconhece uma dificuldade do seu negócio, entende o raciocínio que orientou a solução e identifica o resultado sem depender de promessas genéricas ou métricas inventadas.

## Público e tom

O público principal é um decisor ou responsável operacional que procura resolver problemas de facturação, operação, marketplace, entregas, gestão ou serviços digitais. A linguagem deve ser clara, concreta e equilibrar impacto de negócio com detalhe técnico suficiente para demonstrar competência. Não revelar bloqueios internos, credenciais, dados de clientes, nem publicar números não comprovados.

## Estrutura por projecto

1. **Em poucas palavras:** título, categoria e resumo directo do produto.
2. **O problema que precisava de solução:** contexto de negócio, impacto operativo e desafio técnico, usando `caseStudy.context` e `caseStudy.problem`.
3. **Objetivo:** resultado operacional pretendido, derivado de `caseStudy.approach` sem afirmar impacto não comprovado.
4. **Meu papel:** responsabilidade pública em `summary.role`.
5. **Como a solução foi construída:** narrativa de abordagem seguida de implementação, arquitectura e decisões relevantes.
6. **Resultado:** outcomes documentados, sem transformar estados de desenvolvimento em sucesso comercial ou métricas.
7. **Trade-off:** decisão e limite assumido em `caseStudy.tradeoffs`.
8. **Se este problema lhe é familiar:** CTA contextual que descreve padrões de problema do projecto e convida a uma conversa através de `/#contato`.
9. **Tecnologias utilizadas:** stack em badges.

## Modelo de dados

O contrato editorial existente de `src/data/Config.ts` permanece a fonte pública única. `caseStudy.context`, `problem`, `approach`, `architecture`, `implementation`, `decisions`, `outcomes`, `lessons`, `nextSteps` e `tradeoffs` já fornecem os elementos necessários: a abordagem explica o objectivo e o problema descreve o sinal que um potencial cliente reconhece. Não acrescentar campos redundantes nem aliases.

## Interface

A página em `ProjectDetails.tsx` usa secções semânticas e cards shadcn já existentes. A narrativa começa com conteúdo de negócio, aproxima o leitor da implementação e fecha com CTA. Em ecrãs estreitos, cards e CTA ficam numa só coluna; em ecrãs largos, contexto e papel podem ser apresentados lado a lado. Todos os links usam texto de ação claro e foco visível herdado do componente Button.

## Verificação

Não existe script de testes no repositório. Validar o contrato pelo `npx tsc --noEmit`, a aplicação por `npm run build`, estilo por `npm run lint` (registando erros pré-existentes), `git diff --check` e inspeção de `/projects/<slug>` em browser quando disponível.
