/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        firaCode: ["Fira Code", "monospace"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#78DD82",
          secondary: "#d926a9",
          accent: "#1fb2a6",
          neutral: "#2a323c",
          "base-100": "#293038",
          info: "#2563eb",
          success: "#197b40",
          warning: "#ea580c",
          error: "#dc2626",
          custom: "#ABB2BF"
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
