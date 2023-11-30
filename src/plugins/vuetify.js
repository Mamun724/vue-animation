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
import {getCurrentTheme} from "@/services/themeService";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
    defaults: {
        VBtn: {
            color: 'secondary'
        },
        VForm: {
            VBtn: {
                color: "primary"
            }
        },
        VCard: {
            VBtn: {
                color: "primary"
            }
        }
    },
    theme: {
        defaultTheme: getCurrentTheme() ?? 'light',
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
                    surface: "#2F2F2F",
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
            "pine-light": {
                colors: {
                    primary: '#00C492',
                    secondary: '#C7E2D0',
                    background: "#F8F8F8",
                    surface: "#F9F9F9",
                    error: "#A41414",
                    info: "#74A5D1",
                    success: "#6BBF76",
                    warning: "#FFD166",
                    "on-primary": "#0F0F0F",
                    "on-secondary": "#0F0F0F",
                    "on-background": "#0F0F0F",
                    "on-surface": "#0F0F0F",
                    "on-error": "#FFFFFF",
                    "on-info": "#0F0F0F",
                    "on-success": "#0F0F0F",
                    "on-warning": "#0F0F0F",
                    "gradient-start": "#FFDEAD",
                    "gradient-end": "#F5F5F5",
                },
            },
            "pine-dark": {
                dark: true,
                colors: {
                    primary: '#246D20',
                    secondary: '#526657',
                    background: "#282C35",
                    surface: "#282C35",
                    error: "#C74D4D",
                    info: "#486DAA",
                    success: "#2A7A3D",
                    warning: "#896826",
                    "on-primary": "#FFFFFF",
                    "on-secondary": "#FFFFFF",
                    "on-background": "#DEDEDE",
                    "on-surface": "#DEDEDE",
                    "on-error": "#FFFFFF",
                    "on-info": "#FFFFFF",
                    "on-success": "#FFFFFF",
                    "on-warning": "#FFFFFF",
                    "gradient-start": "#002152",
                    "gradient-end": "#0A0A0A",
                },
            },
        },
    },
})
