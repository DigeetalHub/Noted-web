import React from "react";
import { motion } from "framer-motion";

const AccordionContent = ({ data, index }) => {
	const {
		title,
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
	} = data;
	return (
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
	);
};

export default AccordionContent;
