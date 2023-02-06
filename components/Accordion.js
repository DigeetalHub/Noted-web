import { useToggle } from "../context/AccordionContext";

const Accordion = ({ items, cookiesItems, index }) => {
	const { isOpen, setIsOpen } = useToggle();

	const openAccordion = () => {
		setIsOpen(index === isOpen ? null : index);
	};
	const { title, mainTitle, description, informationList, purposeContent, otherInformation, content } = items;

	return (
		<div className="">
			{
				<div key={index} className="w-full ">
					<div className="relative">
						<h2 className="font-bold text-xl mt-6 mb-4  w-full" onClick={() => openAccordion(index)}>
							{mainTitle}
						</h2>
						<div className="absolute h-[15px] w-[15px] right-6 top-[13px]">
							<div className="w-[15px] h-[2px] bg-black rotate-90"></div>
							<div className="w-[15px] h-[2px] bg-black -mt-[2px]"></div>
						</div>
					</div>
					{isOpen && (
						<div className="transition duration-1000">
							hello
							{content.map(({ title, description }, index) => {
								console.log(title, description);
								return (
									<div className="space-y-4" key={index}>
										<h3 className="font-semibold">{title}</h3>
										<p className="text-sm ">{description}</p>
									</div>
								);
							})}
							{/* {purposeContent.map(({ title, description, informationYouGiveUs }, index) => {
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
						})} */}
						</div>
					)}
				</div>
			}
		</div>
	);
};

export default Accordion;
