/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {}, // <-- CORRECT for v3
    autoprefixer: {},
  },
}

export default config 