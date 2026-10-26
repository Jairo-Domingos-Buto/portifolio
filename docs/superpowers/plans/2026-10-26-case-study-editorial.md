# Estudos de caso orientados ao cliente Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Tornar cada detalhe de projecto num estudo de caso claro, completo e persuasivo para potenciais clientes.

**Architecture:** A página de detalhes compõe os campos editoriais já existentes numa narrativa de negócio → solução → prova → conversa, sem criar uma segunda fonte de conteúdo ou dados redundantes.

**Tech Stack:** React 18, TypeScript, React Router, Tailwind CSS, shadcn/ui.

**Spec:** `docs/superpowers/specs/2026-10-26-case-study-editorial-design.md`

## Global Constraints

- `src/data/Config.ts` continua a ser a fonte única de conteúdo público.
- Não introduzir aliases legados no schema editorial.
- Não inventar métricas, resultados comerciais, clientes ou informação interna.
- Reutilizar os componentes shadcn existentes; não criar primitivos em `src/components/ui/`.
- Validar com `npx tsc --noEmit`, `npm run build`, `npm run lint`, `git diff --check` e browser quando disponível.

## Review Focus

- Projectos sem link público devem apresentar CTA de contacto, não um botão quebrado.
- Conteúdo longo não deve quebrar o layout mobile nem truncar informação essencial.
- Um projecto em desenvolvimento não pode ser apresentado como resultado comercial concluído.
- Cada `clientSignals` deve descrever sintomas, não promessas de venda ou métricas não verificadas.
- Os novos campos obrigatórios devem existir nos 16 projectos, para nenhum detalhe falhar em runtime.

---

### Task 1: Validar o contrato editorial existente

**Files:**
- Modify: `docs/superpowers/specs/2026-10-26-case-study-editorial-design.md`
- Test: `npx tsc --noEmit`

**Interfaces:**
- Produces: decisão documentada de reutilizar os campos editoriais existentes.
- Consumes: contexto, problema, abordagem, implementação, decisões, outcomes, lessons, nextSteps e trade-offs.

- [ ] **Step 1: Confirmar que todos os 16 projetos fornecem o contrato já consumido pela página**

Run: `npx tsc --noEmit`
Expected: PASS; a definição actual é suficiente para consumo seguro.

- [ ] **Step 2: Documentar que objetivo e sinais de identificação são compostos, não campos novos**

Usar `approach` como objetivo e `problem` como descrição reconhecível do desafio; evita duplicação editorial e alegações novas.

- [ ] **Step 3: Validar o contrato completo**

Run: `npx tsc --noEmit`
Expected: PASS sem erros de tipos.

### Task 2: Reorganizar a página individual numa narrativa de caso de estudo

**Files:**
- Modify: `src/pages/ProjectDetails.tsx:1-151`
- Test: `npm run build`

**Interfaces:**
- Consumes: `summary` e todos os campos já existentes de `caseStudy`.
- Produces: página semântica para `/projects/:slug`, com CTA final `/#contato`.

- [ ] **Step 1: Verificar que a página actual deixa campos editoriais relevantes sem apresentação**

Rever `ProjectDetails.tsx` contra a spec; `decisions`, `lessons` e `nextSteps` não são apresentados, confirmando a lacuna de experiência.

- [ ] **Step 2: Compor as nove secções definidas na spec em `ProjectDetailsPage`**

Reutilizar `Card`, `Badge` e `Button` existentes; colocar negócio antes de detalhes técnicos, apresentar os sinais em lista e criar CTA contextual usando `Link` para `/#contato`.

- [ ] **Step 3: Verificar construção e rotas de detalhes**

Run: `npm run build`
Expected: PASS, bundle Vite criado sem erro.

### Task 3: Registar e validar a alteração

**Files:**
- Modify: `docs/PENDENCIAS.md`
- Modify: `docs/CHECKLIST.md`

**Interfaces:**
- Consumes: resultados reais de checks e limitações.
- Produces: estado de PORT-008 e evidência datada desta alteração.

- [ ] **Step 1: Atualizar PORT-008 sem promover validação visual não executada**

Registar que a estrutura foi implementada e manter POR VERIFICAR se não houver browser.

- [ ] **Step 2: Registar comandos, resultados e falhas na checklist**

Incluir base Git, checks, lint pré-existente e a disponibilidade ou indisponibilidade do browser.

- [ ] **Step 3: Executar gate final**

Run: `npx tsc --noEmit && npm run build && npm run lint; git diff --check`
Expected: tipos/build/diff passam; qualquer falha de lint é identificada pelo ficheiro e não atribuída ao novo trabalho.
