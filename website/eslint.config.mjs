import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'

const typedConfigs = nextTs.map((config) => {
  if ('ignores' in config || config.files) {
    return config
  }

  return {
    ...config,
    files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
  }
})

const eslintConfig = defineConfig([
  ...nextVitals,
  ...typedConfigs,
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
])

export default eslintConfig
