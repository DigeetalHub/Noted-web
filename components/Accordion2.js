import { useToggle } from "../context/AccordionContext";
import Image from "next/image";
import Plus from "../public/assets/icons/plus.svg";
import { motion } from "framer-motion";
import { Collapse } from "react-collapse";
import AccordionContent from "./AccordionContent";

const AltAccordion = ({ items, index }) => {
	const { isOpen, setIsOpen } = useToggle();

	const openAccordion = (index) => {
		const isOpened = isOpen.includes(index);
		setIsOpen(isOpened ? isOpen.filter((i) => i !== index) : [...isOpen, index]);
	};

	const { mainTitle } = items;

	return (
		<div className="mb-6">
			<motion.div className={`w-full`}>
				<motion.div
					className="flex justify-between items-start gap-[3.5rem] md:gap-[30%]"
					onClick={() => openAccordion(index)}
				>
					<h2 className="uppercase font-bold text-xl fold2Full:text-2xl fold2Full:hover:text-brandPrimary400 cursor-pointer fold2Full:hover:translate-x-[1rem] transition duration-500">
						{mainTitle}
					</h2>
					<Image src={Plus} alt="" className={`${isOpen.includes(index) ? "rotate-45" : ""} transition duration-500`} />
				</motion.div>
				<Collapse isOpened={isOpen.includes(index)}>
					{isOpen.includes(index) && (
						<motion.div className="">
							<AccordionContent data={items} index={index} />
						</motion.div>
					)}
				</Collapse>
			</motion.div>
		</div>
	);
};

export default AltAccordion;
