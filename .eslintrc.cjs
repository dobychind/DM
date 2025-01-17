module.exports = {
  root: true,
  env: {
    browser: true,    // Оставляем для React
    node: true,       // Добавляем поддержку Node.js
    es2020: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-var-requires': 'off', // Отключаем для использования require в Node.js
    'no-undef': 'off'                           // Отключаем ошибки для глобальных переменных Node.js, таких как 'process'
  },
};
