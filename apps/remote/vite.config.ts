import federation from '@originjs/vite-plugin-federation';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { checker } from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(
  defineConfig({
    server: {
      port: 5002,
    },
    preview: {
      port: 5002,
    },
    plugins: [
      checker({ typescript: true }),
      react(),
      tsconfigPaths(),
      vanillaExtractPlugin(),
      federation({
        name: 'remoteApp',
        filename: 'remoteEntry.js',
        exposes: {
          './RemoteApp': './src/remote-app/remote-app.tsx',
        },
        shared: ['react', 'react-dom'],
      }),
    ],
    build: {
      modulePreload: false,
      target: 'esnext',
      minify: false,
      cssCodeSplit: false,
      assetsDir: 'assets',
    },
  })
);
