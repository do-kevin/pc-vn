import analyze from 'rollup-plugin-analyzer';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import pkg from './package.json';
import terser from '@rollup/plugin-terser';

export default [
  // UMD
  {
    input: 'src/index.ts',
    output: {
      name: '@do-kevin/pc-vn',
      file: pkg.browser,
      format: 'umd',
    },
    plugins: [
      json({
        compact: true,
      }),
      typescript(),
      resolve(),
      commonjs(),
      terser(),
      analyze(),
    ],
  },
  //   CommonJS & ES Module
  {
    input: 'src/index.ts',
    external: ['ms'],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    plugins: [
      json({
        compact: true,
      }),
      typescript(),
      terser(),
      analyze(),
    ],
  },
  {
    input: 'src/district.ts',
    output: [
      {
        file: 'dist/district.js',
        format: 'cjs',
      },
      {
        file: 'dist/es/district.js',
        format: 'es',
      },
    ],
    plugins: [
      json({
        compact: true,
      }),
      terser(),
      typescript(),
      analyze(),
    ],
  },
  {
    input: 'src/ward.ts',
    output: [
      {
        file: 'dist/ward.js',
        format: 'cjs',
      },
      {
        file: 'dist/es/ward.js',
        format: 'es',
      },
    ],
    plugins: [
      json({
        compact: true,
      }),
      typescript(),
      terser(),
      analyze(),
    ],
  },
  {
    input: 'src/province.ts',
    output: [
      {
        file: 'dist/province.js',
        format: 'cjs',
      },
      {
        file: 'dist/es/province.js',
        format: 'es',
      },
    ],
    plugins: [
      json({
        compact: true,
      }),
      typescript(),
      terser(),
      analyze(),
    ],
  },
];
