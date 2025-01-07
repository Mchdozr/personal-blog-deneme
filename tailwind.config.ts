import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          gray: {
            50: '#fbfbfd',
            100: '#f5f5f7',
            200: '#e8e8ed',
            300: '#d2d2d7',
            400: '#86868b',
            500: '#6e6e73',
            600: '#424245',
            700: '#1d1d1f',
            800: '#000000',
          },
          blue: {
            light: '#2997ff',
            DEFAULT: '#0066cc',
            dark: '#0055b3',
          },
          purple: {
            light: '#bf4800',
            DEFAULT: '#9d0297',
            dark: '#7c0178',
          },
        },
      },
      backgroundImage: {
        'gradient-glass': 'linear-gradient(180deg, rgba(255, 255, 255, 0.72) 0%, rgba(255, 255, 255, 0.45) 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glass-hover': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
      },
    },
  },
  plugins: [],
}
export default config 