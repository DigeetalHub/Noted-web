import Image from "next/image";
import React from "react";
import { motion as m } from "framer-motion";

const ValueCard = ({ image, heading, desc, alt }) => {
	return (
		<m.div
			className="px-6 py-[3.5rem] bg-white rounded-[14px] text-neutrals900 flex flex-col gap-[3rem] shadow-valueCard justify-between md:min-w-[17rem] lg:min-w-[18rem] xl:min-w-[22rem] select-none snap-start" title="Scroll sideways to view values"
		>
			<Image src={image} alt={alt} className="" />
			<div className="flex flex-col gap-4">
				<h2 className="font-bold text-[1.5rem]">{heading} </h2>
				<p className="">{desc} </p>
			</div>
		</m.div>
	);
};

export default ValueCard;
