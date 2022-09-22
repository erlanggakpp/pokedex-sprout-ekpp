/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grassPok: "#7AC74C",
        firePok: "#EE8130",
        waterPok: "#6390F0",
        electricPok: "#F7D02C",
        icePok: "#96D9D6",
        poisonPok: "#A33EA1",
        groundPok: "#E2BF65",
        flyingPok: "#A98FF3",
        psychicPok: "#F95587",
        bugPok: "#B6A136",
        ghostPok: "#735797",
        dragonPok: "#6F35FC",
        darkPok: "#705746",
        steelPok: "#B7B7CE",
        fairyPok: "#D685AD",
        normalPok: "#A8A77A",
        fightingPok: "#C03028",
        rockPok: "#B8A038",
        pokeBlue: "#0075BE",
        pokeYellow: "#FFCC00",
      },
    },
  },
  plugins: [],
};
