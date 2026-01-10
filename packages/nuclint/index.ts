import type { Linter } from 'eslint';
import stylistic from '@stylistic/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import tseslint from 'typescript-eslint';

export const config = [
  stylistic.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,ts,vue}'],
    plugins: {
      '@stylistic': stylistic,
      'import': importPlugin,
    },
    rules: {
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'always'],
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'import/max-dependencies': 'off',
      'import/order': [
        'error',
        {
          'newlines-between': 'never',
          'groups': [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
        },
      ],
    },
  },
  {
    ignores: ['node_modules', 'dist', 'storybook-static'],
  },
] satisfies Linter.Config[];

export default config;
