import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-babel-minify';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  input: 'src/index.js',
  output: {
    file: `dist/index.cjs${isProduction ? '.min' : ''}.js`,
    format: 'cjs',
    sourcemap: true
  },
  plugins: [
    babel({
      runtimeHelpers: true
    }),
    isProduction ? minify({
      comments: false,
    }) : false
  ],
  // Node modules to keep out of the actual bundle
  external: [
    'inferno'
  ]
}