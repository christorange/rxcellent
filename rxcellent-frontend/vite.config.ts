import { defineConfig } from 'vite';
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config';
import react from '@vitejs/plugin-react';
const path = require('path');

const vitestConfig: VitestUserConfigInterface = {
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./setupTest.js']
    }
};

export default defineConfig({
    base: './',
    server: {
        host: '0.0.0.0',
        port: 5673,
        https: false
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@service': path.resolve(__dirname, './src/service'),
            '@components': path.resolve(__dirname, './src/components'),
            '@configs': path.resolve(__dirname, './src/configs')
        }
    },
    build: {
        outDir: 'dist',
        assetsDir: 'static',
        cssTarget: 'chrome80',
        chunkSizeWarningLimit: 2000
    },
    plugins: [react()],
    test: vitestConfig.test
});
