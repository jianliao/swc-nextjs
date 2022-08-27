import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: 'components/index.ts',
    output: {
      dir: 'dist',
      format: 'esm',
      sourcemap: true,
    },
    plugins: [typescript()],
  },
  {
    input: 'dist/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: [/\.css$/],
    plugins: [dts()],
  },
];
