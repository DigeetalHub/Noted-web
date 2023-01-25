import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

export const ScrollContext = createContext();

const ScrollProvider = ({ children }) => {
	const [whiteNav, setWhiteNav] = useState(false);
    const [changeColor, setChangeColor] = useState({
        defaultNav: false,
        coloredNav: false
    });

    	const { asPath } = useRouter();
	const cleanPath = asPath.split("#")[0].split("?")[0];

	const scroll = () => {
		scrollTo(0, 100);
		setWhiteNav(!whiteNav);
	};

	const scrollNav = () => {
		if (document.documentElement.scrollTop > 20) {
			setWhiteNav(true);
		} else {
			setWhiteNav(false);
		}
	};

	useEffect(() => {
        window.addEventListener("scroll", scrollNav);
	}, []);

	useEffect(() => {
		if (cleanPath === "/" && whiteNav) {
			setChangeColor({coloredNav: true, ...changeColor});
		} else if (cleanPath === "/about" && whiteNav) {
			setChangeColor({coloredNav: true, ...changeColor});
		} else if (cleanPath === "/contact" && whiteNav) {
			setChangeColor({coloredNav: true, ...changeColor});
		}
	}, []);

	const values = {
		whiteNav,
		setWhiteNav,
		scroll,
		scrollNav,
		changeColor,
	};

	return <ScrollContext.Provider value={values}>{children}</ScrollContext.Provider>;
};

export default ScrollProvider;
