# Newsaktuell Editor (Spike)

## Goals

* Check feasibility
* Check testability
* Check typescript
* Check integration of draftjs
* Wrapping my head around this topic

## Code Structure

`test/` and `src/` are strictly sharing the same directory structure.

``src`` contains all source files. The goal is, to provide an abstraction layer on top of the drafjs lib.
Additionally we must transform the generated html to a valid newsformat.

Transformations:

`src/newsktuell/transformation`

Validations:

`src/newsktuell/validation`

## Commands & Scripts

Run tests
`npx jest`

Build
`npx tsc`

Create a npm package
`npm pack`

Publish npm pacakge
`npm publish`

