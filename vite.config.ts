import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => ({
  define: {
    'process.env.BABEL_TYPES_8_BREAKING': 'true',
    'process.env.NODE_DEBUG': 'false',
    'global': 'globalThis'
  }
}))
