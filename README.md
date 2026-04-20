# Vitest Multi-Project Coverage Repro

This reproduction shows a coverage regression when tests are run:

- as a single project: coverage is collected correctly
- as part of a multi-project `test.projects` workspace: Cobertura/coverage collapses to `0/0`

## Environment

- Node 22, pnpm 10.x
- `vitest` 4.1.4
- `@vitest/coverage-istanbul` 4.1.4
- `jsdom` 27

## Commands

```bash
yarn test:single # produces good coverage
yarn test:multi # produces bad coverage
```
