import { calcLength } from "framer-motion";
import { useState, createContext, useContext } from "react";

const AccordionContext = createContext();

const AccordionProvider = ({ children}) => {
	const [isActive, setIsActive] = useState(null);

	const values = {
		isActive,
    setIsActive,
	};
	return <AccordionContext.Provider value={values}>{children}</AccordionContext.Provider>;
};

const useToggle = () => useContext(AccordionContext);

export { AccordionProvider, useToggle };

