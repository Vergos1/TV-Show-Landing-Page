// rollup.config.mjs
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'index.js', // Ваш основной модуль
  output: {
    file: 'bundle.min.js', // Имя минимизированного файла
    format: 'esm', // Формат модуля (ES6 модуль)
  },
  plugins: [terser()], // Минимизация с использованием Terser
};