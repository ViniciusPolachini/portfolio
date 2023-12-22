import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-green':'#575e55',
        'light-green-1':'#cde9ca',
        'light-green-2':'#ced89d',
        'orange':'#e8a249',
        'light-brown':'#dfba74',
      },
      background:{
        carouselGradiant: "linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%)"
      }
    },
  },
  plugins: [],
}
export default config
