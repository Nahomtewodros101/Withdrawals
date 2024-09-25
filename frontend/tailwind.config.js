/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#f1f0f3',
      },
      backgroundImage: {
        'custom-pattern': "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27%3E%3Cg fill=%27%233d2e56%27 fill-opacity=%270.4%27%3E%3Cpolygon fill-rule=%27evenodd%27 points=%278 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4%27/%3E%3C/g%3E%3C/svg%3E')",
      },
    },
  },
  plugins: [],
};
