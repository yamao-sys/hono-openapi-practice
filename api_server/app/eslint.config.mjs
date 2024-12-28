import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

const compat = new FlatCompat({
  baseDirectory: '.',
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  ...tseslint.configs.recommended,
  ...compat.extends('eslint:recommended'),
  // Prettierとの競合を防ぐ設定を追加
  {
    rules: {
      ...eslintConfigPrettier.rules, // prettierConfigからルールを追加
    },
  },
  { ignores: ['.wrangler'] },
];

export default eslintConfig;
