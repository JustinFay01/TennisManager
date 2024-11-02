import { fixupConfigRules, fixupPluginRules } from '@eslint/compat'
import reactRefresh from 'eslint-plugin-react-refresh'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import checkFile from 'eslint-plugin-check-file'
import globals from 'globals'
import tsParser from '@typescript-eslint/parser'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  {
    ignores: ['**/dist', '**/.eslintrc.cjs', 'tests/*'],
  },
  ...fixupConfigRules(
    compat.extends(
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'plugin:storybook/recommended',
      'plugin:prettier/recommended',
    ),
  ),

  {
    plugins: {
      'react-refresh': reactRefresh,
      react,
      'react-hooks': fixupPluginRules(reactHooks),
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
      'check-file': checkFile,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
    },

    rules: {
      'react/react-in-jsx-scope': 'off',

      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true,
        },
      ],

      'check-file/filename-naming-convention': [
        'error',
        {
          '**/*.{ts,tsx}': 'KEBAB_CASE',
        },
        {
          // ignore the middle extensions of the filename to support filename like bable.config.js or smoke.spec.ts
          ignoreMiddleExtensions: true,
        },
      ],

      'check-file/folder-naming-convention': [
        'error',
        {
          // all folders within src (except tests)should be named in kebab-case
          'src/**/!(tests)': 'KEBAB_CASE',
        },
      ],
    },
  },
]
