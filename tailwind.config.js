/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				brandPrimary50: "#FBF3E8",
				brandPrimary200: "#EBC694",
				brandPrimary400: "#DC9B45",
				brandPrimary500: "#D38217",
				brandPrimary900: "#59370A",
				neutrals50: "#E8E8E8",
				neutrals100: "#B9B9B9",
				neutrals200: "#979797",
				neutrals300: "#676767",
				neutrals400: "#494949",
				neutrals500: "#1C1C1C",
				header: "rgba(255, 255, 255, 0.01)",
				overlay: "rgba(15, 15, 15, 0.88);",
			},
			backgroundImage: {
				download:
					"linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, #DC9B45 0%, #1E1E1E 100%)",
				heroImg: "url('/assets/images/hero-img.png')",
				wavyBgDesktop: "url('/assets/images/wavy-bg-desktop.svg')",
				wavyBgMobile: "url('/assets/images/wavy-bg-mobile.svg')",
			},
			backdropBlur: {
				header: "20px",
			},
			animation: {
				"bounce-slow": "bounce 1.8s infinite",
				"bounce-slower": "bounce 2.5s infinite",
			},
			boxShadow: {
				card: "0px 24px 32px rgba(0, 0, 0, 0.12)",
			},
		},
		plugins: [],
	},
};
