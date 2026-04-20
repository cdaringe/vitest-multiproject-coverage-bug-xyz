# Vitest Multi-Project Coverage Repro

This reproduction shows a coverage regression when the same `jsdom` test is run:

- as a single project: coverage is collected correctly
- as part of a multi-project `test.projects` workspace: Cobertura/coverage collapses to `0/0`

## Environment

- Node 22
- `vitest` 4.1.4
- `@vitest/coverage-istanbul` 4.1.4
- `jsdom` 27

## Files

- `src/math.ts`: small shared module covered by the `jsdom` test
- `src/browser.jsdom.spec.ts`: small `jsdom` test
- `src/server.node.spec.ts`: small `node` test
- `vitest.single.config.ts`: control case
- `vitest.multi.config.ts`: failing multi-project case

## Expected

Both commands should generate non-empty coverage for `src/math.ts`.

## Actual

The single-project command reports normal coverage.

The multi-project command passes the tests, but coverage collapses to `0/0`.

- `coverage/coverage-final.json` becomes `{}`
- `coverage/cobertura.xml` reports `lines-valid="0"` and `lines-covered="0"`

## Commands

```bash
yarn test:single
yarn test:multi
```

## Verified Output

`yarn test:single`

```text
Statements   : 100% ( 2/2 )
Functions    : 100% ( 1/1 )
Lines        : 100% ( 1/1 )
```

`yarn test:multi`

```text
Statements   : Unknown% ( 0/0 )
Functions    : Unknown% ( 0/0 )
Lines        : Unknown% ( 0/0 )
```
