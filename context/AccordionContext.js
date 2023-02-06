import { useState, createContext, useContext } from "react";

const AccordionContext = createContext();

const AccordionProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState([]);

	const values = {
		isOpen,
		setIsOpen,
	};
	return <AccordionContext.Provider value={values}>{children}</AccordionContext.Provider>;
};

const useToggle = () => useContext(AccordionContext);

export { AccordionProvider, useToggle };
