import { useToggle } from "../context/AccordionContext";
import Image from "next/image";
import Plus from "../public/assets/icons/plus.svg";
import Minus from "../public/assets/icons/minus.svg";
import { Collapse } from "react-collapse";

const AltAccordion = ({ items, index }) => {
	const { isOpen, setIsOpen } = useToggle();

	const openAccordion = (index) => {
		if (isOpen === index) {
			return setIsOpen(null);
		}
		setIsOpen(index);
	};

	const {
		title,
		mainTitle,
		description1,
		description2,
		description3,
		description4,
		description5,
		description6,
		description7,
	} = items;
	return (
		<div className="mb-6">
			<div className={`w-full`}>
				<div className="flex justify-between items-center" onClick={() => openAccordion(index)}>
					<h2 className="font-bold text-xl ">{mainTitle}</h2>
					<Image src={isOpen === index ? Minus : Plus} alt="" />
				</div>

				<Collapse isOpened={isOpen === index}>
					<div className="">
						{title && <h3 className="font-semibold">{title}</h3>}
						<div className="space-y-2 mt-4">
							<p className="text-sm ">{description1}</p>
							<p className="text-sm ">{description2}</p>
							<p className="text-sm ">{description3}</p>
							<p className="text-sm ">{description4}</p>
							<p className="text-sm ">{description5}</p>
							<p className="text-sm ">{description6}</p>
							<p className="text-sm ">{description7}</p>
						</div>
					</div>
				</Collapse>
			</div>
		</div>
	);
};

export default AltAccordion;
