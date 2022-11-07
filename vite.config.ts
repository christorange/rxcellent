import react from '@vitejs/plugin-react';
import { defineConfig, UserConfig, ConfigEnv, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
    const root = process.cwd();

    const env = loadEnv(mode, root);
    return {
        plugins: [react()],
        base: './',
        server: {
            host: '0.0.0.0',
            port: 5673,
            https: false
        }
    };
};
