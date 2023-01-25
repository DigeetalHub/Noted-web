/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				brandPrimary50: "#FBF3E8",
				brandPrimary400: "#DC9B45",
				brandPrimary500: "#D38217",
				brandPrimary900: "#59370A",
				neutrals50: "#E8E8E8",
				neutrals200: "#979797",
				neutrals500: "#1C1C1C",
				header: "rgba(255, 255, 255, 0.01)",
			},
			backgroundImage: {
				download:
					"linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, #DC9B45 0%, #1E1E1E 100%)",
			},
			backdropBlur: {
				header: "20px",
			},
		},
		plugins: [],
	},
};
