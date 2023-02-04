import { useState } from "react";
import { useToggle } from "../context/AccordionContext";

const Accordion = ({ items, index }) => {
	const { isActive, setIsActive } = useToggle();

	const openAccordion = () => {
		setIsActive(index === isActive ? null : index);
	};
	const { title, personalData, personalDataDescription, informationList, purposeContent, otherInformation } = items;

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
					<div className="space-y-4">
						<h3 className="font-semibold">{personalData}</h3>
						<p className="text-sm ">{personalDataDescription}</p>
					</div>
					{purposeContent.map(({ title, description, informationYouGiveUs }, index) => {
						return (
							<div className="mt-4" key={index}>
								<div className="space-y-2">
									<h3 className="font-semibold">{title}</h3>
									<p className="text-sm ">{description}</p>
									<h4 className="font-semibold">{informationYouGiveUs}</h4>
								</div>
							</div>
						);
					})}
					<div className="">
						{informationList.map((item, index) => {
							return (
								<ul key={index} className="list-disc ml-4 text-sm ">
									<li className="mt-1">{item}</li>
								</ul>
							);
						})}
					</div>
					{otherInformation.map(({ title, description }, index) => {
						return (
							<div key={index} className="mt-4 space-y-2">
								<h3 className="font-semibold">{title}</h3>
								<p className="text-sm">{description}</p>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default Accordion;
