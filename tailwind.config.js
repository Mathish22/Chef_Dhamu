/** @type {import('tailwindcss').Config} */
export default {
  // The 'content' array is the most important part.
  // It tells Tailwind to scan these files for any class names you use.
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}