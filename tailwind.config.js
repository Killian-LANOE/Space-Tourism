/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D0D6F9",
        secondary: "#0B0D17",
        white: "#FFFFFF",
      },
      fontFamily: {
        title: "Bellefair",
        text: "Barlow",
        other: "Barlow Condensed",
      },
      textDecorationThickness: {
        3: "3px",
      },
      backgroundImage: {
        //Home
        "home-mobile": "url('src/assets/home/background-home-mobile.jpg')",
        "home-tablet": "url('src/assets/home/background-home-tablet.jpg')",
        "home-desktop": "url('src/assets/home/background-home-desktop.jpg')",

        // Destination
        "destination-mobile":
          "url('src/assets/destination/background-destination-mobile.jpg')",
        "destination-tablet":
          "url('src/assets/destination/background-destination-tablet.jpg')",
        "destination-desktop":
          "url('src/assets/destination/background-destination-desktop.jpg')",

        //Crew
        "crew-mobile": "url('src/assets/crew/background-crew-mobile.jpg')",
        "crew-tablet": "url('src/assets/crew/background-crew-tablet.jpg')",
        "crew-desktop": "url('src/assets/crew/background-crew-desktop.jpg')",

        //Technology
        "technology-mobile":
          "url('src/assets/technology/background-technology-mobile.jpg')",
        "technology-tablet":
          "url('src/assets/technology/background-technology-tablet.jpg')",
        "technology-desktop":
          "url('src/assets/technology/background-technology-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
