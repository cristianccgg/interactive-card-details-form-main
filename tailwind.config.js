/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "Linear-gradient-active-input-border":
          "linear-gradient(to right, hsl(249, 99%, 64%), hsl(278, 94%, 30%))",
        "Red-input-errors": "hsl(0, 100%, 66%)",

        // ### Neutral

        White: "hsl(0, 0%, 100%)",
        "Light-grayish-violet": "hsl(270, 3%, 87%)",
        "Dark-grayish-violet": "hsl(279, 6%, 55%)",
        "Very-dark-violet": "hsl(278, 68%, 11%)",
      },
      backgroundImage: (theme) => ({
        "image-small": "url('/images/bg-main-mobile.png')",
        "image-large": "url('/images/bg-main-desktop.png')",
      }),
    },
  },
  plugins: [],
};
