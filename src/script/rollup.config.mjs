// rollup.config.mjs
import {terser} from 'rollup-plugin-terser'



export default {
  input: 'index.js',
  "type": "module",
  output: {
    file: 'bundle.min.js',
    format: 'esm',
  },
  plugins: [terser()],
};