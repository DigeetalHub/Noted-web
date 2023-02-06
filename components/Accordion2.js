import { useToggle } from "../context/AccordionContext";
import Image from "next/image";
import Plus from "../public/assets/icons/plus.svg";
import Minus from "../public/assets/icons/minus.svg";
import { Collapse } from "react-collapse";

const AltAccordion = ({ items, index }) => {
	const { isOpen, setIsOpen } = useToggle();

	const openAccordion = (index) => {
		const isOpened = isOpen.includes(index);
		setIsOpen(isOpened ? isOpen.filter((i) => i !== index) : [...isOpen, index]);
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
		desc1,
		desc2,
		list1,
		list2,
	} = items;

	return (
		<div className="mb-6">
			<div className={`w-full`}>
				<div
					className="flex justify-between items-center gap-[3.5rem] md:gap-[30%]"
					onClick={() => openAccordion(index)}
				>
					<h2 className="uppercase font-bold text-xl fold2Full:text-2xl fold2Full:hover:text-brandPrimary400 cursor-pointer fold2Full:hover:translate-x-[1rem] transition duration-500">
						{mainTitle}
					</h2>
					<Image src={isOpen === index ? Minus : Plus} alt="" />
				</div>

				<Collapse isOpened={isOpen.includes(index)}>
					<div className="">
						{title && <h3 className="font-semibold ">{title}</h3>}
						<div className="space-y-2 mt-4">
							{description1 && <p className="text-sm fold2Full:text-base">{description1}</p>}
							{description2 && <p className="text-sm fold2Full:text-base">{description2}</p>}
							{description3 && <p className="text-sm fold2Full:text-base">{description3}</p>}
							{description4 && <p className="text-sm fold2Full:text-base">{description4}</p>}
							{description5 && <p className="text-sm fold2Full:text-base">{description5}</p>}
							{description6 && <p className="text-sm fold2Full:text-base">{description6}</p>}
							{description7 && <p className="text-sm fold2Full:text-base">{description7}</p>}
							{list1 && (
								<div className="">
									<ul className={` ml-5 mt-4 ${desc1 && desc2 ? "list-decimal" : "list-disc"}`}>
										{list1.map((li, index) => (
											<li key={index} className="text-sm fold2Full:text-base">
												{li}
											</li>
										))}
									</ul>
								</div>
							)}
							{desc1 && <p className="text-sm pt-4 fold2Full:text-base">{desc1}</p>}
							{list2 && (
								<div className="">
									<ul className={` ml-5 mt-4 ${desc1 ? "list-decimal" : "list-disc"}`}>
										{list2.map((li, index) => (
											<li key={index} className="text-sm fold2Full:text-base">
												{li}
											</li>
										))}
									</ul>
								</div>
							)}
							{desc2 && <p className="text-sm pt-4 lg:text-base">{desc2}</p>}
						</div>
					</div>
				</Collapse>
			</div>
		</div>
	);
};

export default AltAccordion;
