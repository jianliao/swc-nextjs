import del from "rollup-plugin-delete";
import dts from 'rollup-plugin-dts';
import typescript from '@rollup/plugin-typescript';

export default [
  {
    external: ['react', 'next/dynamic', '@lit-labs/react', /^@spectrum-web-components.*/],
    input: './index.ts',
    output: {
      dir: 'dist',
      format: 'esm',
      sourcemap: 'inline'
    },
    plugins: [
      typescript({ inlineSources: true, tsconfig: './tsconfig.json', declarationDir: `${__dirname}/dist/types` }),
    ]
  },
  {
    input: `${__dirname}/dist/types/index.d.ts`,
    output: [{ file: `${__dirname}/dist/index.d.ts`, format: "esm" }],
    plugins: [
      dts(),
      del({ targets: "dist/types", hook: "buildEnd" })
    ]
  }
];
