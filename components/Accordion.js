import { useState } from "react";
import { useToggle } from "../context/AccordionContext";

const Accordion = ({ items, index }) => {
	const { isActive, setIsActive } = useToggle();

	const openAccordion = () => {
		setIsActive(index === isActive ? null : index);
	};
	const { title, personalData, personalDataDescription, purposeContent } = items;

	return (
		<div key={index} className="w-full ">
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
					<h3 className="font-semibold">{personalData}</h3>
					<p className="text-sm ">{personalDataDescription}</p>
					{/* <h3 className="font-semibold">hello</h3>
					<p className="text-sm ">world</p> */}
					{purposeContent.map(({ whyPersonalData, whyPersonalDataDescription }, index) => {
						return (
							<div className="" key={index}>
								<h3 className="font-semibold">{whyPersonalData}</h3>
								<p className="text-sm ">{whyPersonalDataDescription}</p>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default Accordion;
