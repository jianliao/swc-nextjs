# Spectrum Web Components Next.js Wrapper Generation Monorepo

This project was powered by [PNPM](https://pnpm.io/installation).

## Available Scripts

In the project directory, you can run:

### `pnpm run generate`

1. Upgrade all the underlying SWCs to the latest version
2. Generate the wrapper React components and Next.js components into a ready to publish npm package
3. Format the generated code with Prettier
4. Transpile the formatted code and bundle it with rollup

### `pnpm run pack`

Runs `npm pack` to generate the npm package tar balls in local file system for testing.

### `pnpm run publish`

Runs `npm publish` to publish the wrapper packages.

## Learn More

* [@lit-labs/react](https://www.npmjs.com/package/@lit-labs/react)
