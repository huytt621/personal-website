module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'tokyo-white': '#d5d6db',
    },
    extend: {
      animation: {
        'bounce-reduced': 'small-bounce 3s infinite linear',
      },
      keyframes: {
        'small-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
    },
  },
  plugins: [],
}
