/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				fold: "280px",
				s22: "360px",
				i11Pro: "375px",
				i13: "390px",
				XR: "414px",
				i14Max: "428px",
				dualFold: "717px",
				iPadAir: "820px",
				fold2Full: "884px",
				laptops: "1440px",
				MacBookPro: "1728px",
				bigScreen: "1900px",
			},
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
				label: "#828282",
				inputBorder: "#E0E0E0",
			},
			backgroundImage: {
				download:
					"linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, #DC9B45 0%, #1E1E1E 100%)",
				heroImg: "url('/assets/images/hero-img.png')",
				wavyBgDesktop: "url('/assets/images/wavy-bg-desktop.svg')",
				wavyBgMobile: "url('/assets/images/wavy-bg-mobile.svg')",
				contactBgMobile: "url('/assets/images/contact-bg-sm.png')",
				contactBgDesktop: "url('/assets/images/contact-bg-desktop.png')",
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
				cardHover: "0px 32px 48px rgba(0, 0, 0, 0.15)",
				form: "0px 4px 40px rgba(0, 0, 0, 0.08)",
			},
		},
		plugins: [],
	},
};
