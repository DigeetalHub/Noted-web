import Image from "next/image";
import React from "react";

const ValueCard = ({ image, heading, desc, alt }) => {
	return (
		<div className="px-6 py-[3.5rem] bg-white rounded-[14px] text-neutrals900 flex flex-col gap-[3rem] shadow-valueCard">
			<Image src={image} alt={alt} className="" />
			<div className="flex flex-col gap-4">
				<h2 className="font-bold text-[1.5rem]">{heading} </h2>
				<p className="">{desc} </p>
			</div>
		</div>
	);
};

export default ValueCard;
