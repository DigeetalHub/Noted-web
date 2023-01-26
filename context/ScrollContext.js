import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

export const ScrollContext = createContext();

const ScrollProvider = ({ children }) => {
	const [whiteNav, setWhiteNav] = useState(false);

	const [coloredNav, setColoredNav] = useState(false);

	const { asPath } = useRouter();
	const cleanPath = asPath.split("#")[0].split("?")[0];

	const scroll = () => {
		scrollBy(0, 80);
		setWhiteNav(!whiteNav);
	};
	const scrollNav = () => {
		if (document.documentElement.scrollTop > 20 && cleanPath === "/" && whiteNav) {
			setWhiteNav(true);
			console.log(cleanPath);
			console.log(whiteNav);
			setColoredNav(true);
			document.querySelector(".scroll-btn").style = "visibility:hidden";
		} else {
			document.querySelector(".scroll-btn").style = "visibility:visible";
			setColoredNav(false);
			setWhiteNav(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", scrollNav);
	}, []);

	const values = {
		whiteNav,
		setWhiteNav,
		scroll,
		scrollNav,
		coloredNav,
	};

	return <ScrollContext.Provider value={values}>{children}</ScrollContext.Provider>;
};

export default ScrollProvider;
