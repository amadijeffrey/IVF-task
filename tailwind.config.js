/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "primary": "#6b5dd3",
        "secondary": "#3b3374"
      },
      textColor: {
        "primary": "#1b1c1e",
        "secondary": "#555557",
        "plans": "#8487A3"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}