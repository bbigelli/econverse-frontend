import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  css: {
    preprocessorOptions: {
      scss: {
        // Usar a nova API do Sass (Dart Sass)
        api: 'modern',
        // Silenciar warnings de depreciação
        silenceDeprecations: ['legacy-js-api'],
      },
    },
  },
  
  server: {
    proxy: {
      '/api': {
        target: 'https://app.econverse.com.br',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: true,
      }
    },
    // Configuração para desenvolvimento
    port: 5173,
    open: true,
  },
  
  build: {
    outDir: 'dist',
    sourcemap: false, // Desativar sourcemap em produção para reduzir tamanho
    minify: 'terser', // Minificação mais agressiva
    target: 'es2015', // Compatibilidade com navegadores mais antigos
    rollupOptions: {
      output: {
        manualChunks: {
          // Separa bibliotecas em chunks separados
          'react-vendor': ['react', 'react-dom', 'react/jsx-runtime'],
        },
        // Otimização de chunks
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Otimização de build
    assetsInlineLimit: 4096, // 4kb - inline small assets
    cssCodeSplit: true,
    reportCompressedSize: true,
  },
  
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@contexts': '/src/contexts',
      '@hooks': '/src/hooks',
      '@types': '/src/types',
      '@assets': '/src/assets',
      '@styles': '/src/assets/styles',
    },
  },
  
  // Configuração para produção
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
  
  // Otimizações gerais
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: [],
  },
  
  // Configuração para preview
  preview: {
    port: 4173,
    open: true,
  },
})