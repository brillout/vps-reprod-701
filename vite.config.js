const react = require('@vitejs/plugin-react')
const ssr = require('vite-plugin-ssr/plugin')

const config = {
  plugins: [react(), ssr()],
  ssr: {
    noExternal: ['@apollo/client']
    //noExternal: true
  }
}

export default config
