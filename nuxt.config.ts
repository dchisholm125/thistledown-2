const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    publicPath: '/thistledown/'
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  css: [
    "~/node_modules/bootstrap/dist/css/bootstrap.css"
  ],

  modules:  [
    ['@nuxtjs/google-fonts', {
      families: {
        'Lato': [200],
        Roboto: true,
        Inter: [400, 700],
        'Josefin+Sans': true,
        Raleway: {
          wght: [100, 400],
          ital: [100]
        },
        Inter: '200..700',
        'Crimson Pro': {
          wght: '200..900',
          ital: '200..700',
        },
        'Libre Baskerville': {
          wght: '200..900',
        },
        'Open Sans': {
          wght: '200..900',
        },
      }
  }],  
  ],
  routeRules: { "/": { prerender: true, }, },
  vite: {
    build: {
      rollupOptions: {
        output: {
          // https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
          sanitizeFileName(name) {
            const match = DRIVE_LETTER_REGEX.exec(name);
            const driveLetter = match ? match[0] : "";
            return (
              driveLetter +
              name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "")
            );
          },
        },
      },
    },
  },
})
