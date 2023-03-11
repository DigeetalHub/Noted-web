import Image from "next/image";
import React from "react";

const IconTextCard = ({ num, image, heading, desc }) => {
	return (
		<div className="border-4 border-neutrals50 p-6 flex flex-col gap-[4.5rem] md:w-[48%]">
			<div className="relative w-[fit-content]">
				<p className="font-bold text-[5rem] text-neutrals500 text-left leading-[0.8] before:block before:absolute before:w-[56px] before:h-[56px] before:z-[-1] before:right-[-0.1rem] before:top-[-0.2rem]  before:bg-brandPrimary100 relative inline-block">
					{num}
				</p>
			</div>
			<div className="flex flex-col items-center gap-6">
				<div className="p-4 bg-neutrals600 rounded-[4px]">
					<Image src={image} alt="" className="w-[32px] aspect-square" />
				</div>
				<div className="flex flex-col space-y-4">
					<h2 className="font-bold text-2xl text-brandPrimary400">{heading}</h2>
					<p className="font-medium pb-[1.7rem]">{desc}</p>
				</div>
			</div>
		</div>
	);
};

export default IconTextCard;
