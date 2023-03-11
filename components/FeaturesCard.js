import React from "react";
import Image from "next/image";

const FeaturesCard = ({ image, heading, desc }) => {
	return (
		<div className="border-4 border-brandPrimary100 p-9 flex flex-col gap-[4.5rem] md:w-[48%] xl:w-[33%] text-neutrals500">
			<div className="flex flex-col items-center gap-6">
				<div className="p-4 bg-neutrals600 rounded-[4px] mr-auto">
					<Image src={image} alt="" className="w-auto" />
				</div>
				<div className="flex flex-col space-y-4">
					<h2 className="font-bold text-2xl text-brandPrimary400">{heading}</h2>
					<p className="font-medium">{desc}</p>
				</div>
			</div>
		</div>
	);
};

export default FeaturesCard;
