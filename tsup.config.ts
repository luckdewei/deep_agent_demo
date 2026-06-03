import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['src/**/*.ts'],
    format: ['esm'],
    target: 'node20',
    outDir: 'dist',
    clean: true,
    outExtension: () => ({ js: '.mjs' }),
    sourcemap: true,
    dts: false,
})