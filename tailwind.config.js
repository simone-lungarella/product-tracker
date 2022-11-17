/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      keyframes: {
        'blob': {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate (-25px, -25px) scale(1.1)' },
          '66%': { transform: 'translate(25px, 25px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        'mirror-blob': {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate (25px, -25px) scale(1.1)' },
          '66%': { transform: 'translate(-25px, 25px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        'inverted-blob': {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate (25px, 25px) scale(1.1)' },
          '66%': { transform: 'translate(-25px, -25px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        'inverted-mirror-blob': {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate (-25px, 25px) scale(1.1)' },
          '66%': { transform: 'translate(25px, -25px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      },
      animation: {
        blob: 'blob 3s infinite',
        mirrorBlob: 'mirror-blob 3s infinite',
        invertedBlob: 'inverted-blob 3s infinite',
        invertedMirrorBlob: 'inverted-mirror-blob 3s infinite',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/forms'),
  ],
}
