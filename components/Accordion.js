import { useState } from "react";
import { useToggle } from "../context/AccordionContext";

const Accordion = ({ items, index }) => {
	const { isActive, setIsActive } = useToggle();

	const openAccordion = () => {
		setIsActive(index === isActive ? null : index);
	};
	const { title, personalData, personalDataDescription, purposeContent } = items;

	console.log(purposeContent)

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
				<div className="space-y-4">
					<div className="space-y-2">
						<h3 className="font-semibold">{personalData}</h3>
						<p className="text-sm ">{personalDataDescription}</p>
					</div>
					{purposeContent.map(
						(
							{
								whyPersonalData,
								whyPersonalDataDescription,
								collectingPersonalData,
								collectingPersonalDataIntro,
								informationYouGiveUs,
								informationList,
							},
							index
						) => {
							console.log(informationList);
							return (
								<div className="" key={index}>
									<div className="space-y-2">
										<h3 className="font-semibold">{whyPersonalData}</h3>
										<p className="text-sm ">{whyPersonalDataDescription}</p>
									</div>
									<div className="space-y-2">
										<h3 className="font-semibold">{collectingPersonalData}</h3>
										<p className="text-sm">{collectingPersonalDataIntro}</p>
										<h4 className="font-semibold">{informationYouGiveUs}</h4>
									</div>
									{informationList.map((item, index) => {
										return (
											<ul key={index}>
												<li>{item}</li>
											</ul>
										);
									})}
								</div>
							);
						}
					)}
				</div>
			)}
		</div>
	);
};

export default Accordion;
