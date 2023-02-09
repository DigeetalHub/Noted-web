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
			{title ? <h3 className="font-semibold ">{title}</h3> : null}
			<div className="space-y-2 mt-4">
				{description1 ? <p className="text-sm fold2Full:text-base">{description1}</p> : null}
				{description2 ? <p className="text-sm fold2Full:text-base">{description2}</p> : null}
				{description3 ? <p className="text-sm fold2Full:text-base">{description3}</p> : null}
				{description4 ? <p className="text-sm fold2Full:text-base">{description4}</p> : null}
				{description5 ? <p className="text-sm fold2Full:text-base">{description5}</p> : null}
				{description6 ? <p className="text-sm fold2Full:text-base">{description6}</p> : null}
				{description7 ? <p className="text-sm fold2Full:text-base">{description7}</p> : null}
				{list1 ? (
					<div className="">
						<ul className={` ml-5 mt-4 ${desc1 && desc2 ? "list-decimal" : "list-disc"}`}>
							{list1.map((li, index) => (
								<li key={index} className="text-sm fold2Full:text-base">
									{li}
								</li>
							))}
						</ul>
					</div>
				) : null}
				{desc1 ? <p className="text-sm pt-4 fold2Full:text-base">{desc1}</p> : null}
				{list2 ? (
					<div className="">
						<ul className={` ml-5 mt-4 ${desc1 ? "list-decimal" : "list-disc"}`}>
							{list2.map((li, index) => (
								<li key={index} className="text-sm fold2Full:text-base">
									{li}
								</li>
							))}
						</ul>
					</div>
				) : null}
				{desc2 ? <p className="text-sm pt-4 lg:text-base">{desc2}</p> : null}
			</div>
		</div>
	);
};

export default AccordionContent;
