import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import external from 'rollup-plugin-peer-deps-external';

import pkg from './package.json';

const upperCamelCase = (name) => {
  return name.split('-')
    .map(text => text.charAt(0).toUpperCase() + text.slice(1))
    .join('');
};

const input = 'src/index.js';
const plugins = [
  external(),
  babel({
    runtimeHelpers: true,
    exclude: 'node_modules/**'
  }),
  resolve(),
  commonjs()
];

export default [
  {
    input,
    output: [
      {
        name: upperCamelCase(pkg.name),
        file: `dist/${pkg.name}.js`,
        format: 'umd'
      }
    ],
    plugins: [
      ...plugins.slice(1)
    ]
  },
  {
    input,
    output: [
      {
        file: `dist/${pkg.name}.cjs.js`,
        format: 'cjs'
      },
      {
        file: `dist/${pkg.name}.esm.js`,
        format: 'esm'
      }
    ],
    plugins
  }
];
