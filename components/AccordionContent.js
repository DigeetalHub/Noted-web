import React from "react";
import { motion } from "framer-motion";

const AccordionContent = ({ data, index }) => {
	
	return (
		<div className="my-4 space-y-4">
			{data.map((item, i) => {
				const { heading, description } = item;
				return (
					<div key={i} className="space-y-4">
						<h3 className="font-semibold">{heading}</h3>
						{description.includes(";") ? (
							<ul>
								{description.split(";").map((li, i) => (
									<li key={i} className="text-sm fold2Full:text-base list-disc ml-5">
										{li}
									</li>
								))}
							</ul>
						) : (
							<p className="text-sm fold2Full:text-base whitespace-pre-line">{description}</p>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default AccordionContent;
