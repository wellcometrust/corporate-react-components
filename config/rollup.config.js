import autoprefixer from 'autoprefixer';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve'; // resolves all the node dependencies
import url from '@rollup/plugin-url';
import calc from 'postcss-calc';
import postcss from 'rollup-plugin-postcss';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM'
};

const isProduction = process.env.NODE_ENV === 'production';

export default (async () => ({
  external: Object.keys(globals),
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    sourcemap: !isProduction,
  },
  plugins: [
    nodeResolve({
      extensions,

      // Allows us to import modules absolutely from these directories
      moduleDirectories: ['./src', './src/components']
    }),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      extensions,
    }),
    commonjs(),

    // Minifies JS if production
    isProduction && (await import('rollup-plugin-terser')).terser(),
    url({
      // by default, rollup-plugin-url will not handle font files
      include: ['**/*.woff', '**/*.woff2'],

      // setting infinite limit will ensure that the files
      // are always bundled with the code, not copied to /dist
      limit: Infinity
    }),
    json(),
    postcss({
      extract: 'style.css',
      minimize: isProduction,
      plugins: [autoprefixer(), calc()]
    })
  ]
}))();
