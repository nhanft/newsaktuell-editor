# Newsaktuell Editor (Spike)

## Goals

* Check feasibility
* Check testability
* Check typescript
* Check integration of draftjs
* Wrapping my head around this topic

## Commands

Compile on save:
```
npm run dev
```

Create distribution package:
```
npm run package
```

Run local tests:
```
npm run test
```

## Code Structure

`test/` and `src/` are strictly sharing the same directory structure.

``src`` contains all source files. The goal is, to provide an abstraction layer on top of the drafjs lib.
Additionally we must transform the generated html to a valid newsformat.

Transformations:

`src/newsktuell/transformation`

Validations:

`src/newsktuell/validation`

