import { useState } from "react";
import { useToggle } from "../context/AccordionContext";

const Accordion = ({ id, title, subtitle, description, index, paragraph, boldText, normalText, listItems }) => {
	const { isActive, setIsActive } = useToggle();

	const openAccordion = () => {
		setIsActive(index === isActive ? null : index);
	};

	return (
		<div key={id} className="w-full">
			<div className="relative">
				<h2 className="font-bold text-xl mt-6 mb-4  w-full" onClick={() => openAccordion(index)}>
					{title}
				</h2>
				<div className="absolute h-[15px] w-[15px] right-6 top-[13px]">
					<div className="w-[15px] h-[2px] bg-black rotate-90"></div>
					<div className="w-[15px] h-[2px] bg-black -mt-[2px]"></div>
				</div>
			</div>
			{isActive === index && (
				<div className="">
					<h3 className="font-semibold">{subtitle}</h3>
					<p className="text-sm mt-2">{paragraph}</p>
					<p className="text-sm ">{description}</p>
					<p className="font-bold mt-4">
						{boldText} <span className="font-normal">{normalText}</span>
					</p>
					{listItems.map((item, index) => (
						<ul key={index}>
							<li>{item}</li>
						</ul>
					))}
				</div>
			)}
		</div>
	);
};

export default Accordion;
