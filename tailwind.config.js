/* eslint-disable @typescript-eslint/no-require-imports */
module.exports = {
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
      ],   
    theme: {
      extend: { 
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',

      },
        animation: {
            marquee: 'marquee 25s linear infinite',
          },
          keyframes: {
              "fade-in": {
                  "0%": {
                      opacity: 0
                  },
                  "100%": {
                      opacity: 1
                  },
              },
              marquee: {
                '0%': { transform: 'translateY(0%)' },
                '100%': { transform: 'translateY(-100%)' },
              },
            },
        },
    },
};