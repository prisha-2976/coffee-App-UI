/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all files that contain Nativewind classes.
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                yellorange: {
                    100: "#9A6908"

                },
                lightyel: {
                    80: "#FFD278"
                },
                white: {
                    100: "#FFFFFF",
                    90:  "#FFFFFF",
                },
                black: {
                    100: "#000000",
                },
                dkbrown: {
                    66: "#090600",
                },
            },
            fontFamily: {
                roboto: ["Roboto-Medium"],
                montserrat: ["Montserrat-Bold"],
                monsterratlight: ["Montserrat-light"],
                monsterratMedium: ["Montserrat-Medium"],
                merriweather: ["Merriweather_24pt-Light"],
                robotolight: ["Roboto-Light"],
                robotosemilight: ["Roboto_semiCondensed-Light"],
            }
            },
    },
    plugins: [],
}