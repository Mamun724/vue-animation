/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import {createVuetify} from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    variations: {
      colors: ["primary", "secondary"],
      lighten: 2,
      darken: 2
    },
    themes: {
      light: {
        colors: {
          primary: '#6200EE',
          secondary: '#03DAC6',
          background: "#EFEFEF",
          surface: "#FFFFFF",
          error: "#B00020",
          "on-primary": "#FFFFFF",
          "on-secondary": "#000000",
          "on-background": "#000000",
          "on-surface": "#000000",
          "on-error": "#FFFFFF",
          "gradient-start": "#FFDEAD",
          "gradient-end": "#F5F5F5",
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: "#BB86FC",
          secondary: "#03DAC6",
          background: "#121212",
          surface: "#222222",
          error: "#CF6679",
          "on-primary": "#000000",
          "on-secondary": "#FFFFFF",
          "on-background": "#FFFFFF",
          "on-surface": "#FFFFFF",
          "on-error": "#000000",
          "gradient-start": "#002152",
          "gradient-end": "#0A0A0A",
        },
      },
    },
  },
})
