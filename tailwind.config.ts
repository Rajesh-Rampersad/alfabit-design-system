import type { Config } from "tailwindcss";

function toRgba(cssVariable: string) {
  const color = `var(${cssVariable})`
  return ({ opacityValue }: { opacityValue: number }) => `rgba(${color}, ${opacityValue})`
}
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: toRgba('--primary')
       
      },
    },
  },
  plugins: [],
};

export default config;
