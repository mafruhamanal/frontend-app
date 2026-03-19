/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['"Cormorant Garant"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        brown: {
          950: '#0c0906',
          900: '#1a1208',
          800: '#2a1c12',
          700: '#3d2a1a',
          600: '#5c3d24',
          accent: '#d4956a',
          muted: '#9a7d65',
          cream: '#e8d5c0',
        },
      },
    },
  },
  plugins: [],
};
