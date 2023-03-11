import Image from "next/image";
import React from "react";

const ShieldText = ({ image, desc }) => {
	return (
		<div className="flex gap-4 items-center">
			<Image src={image} alt="shield" className="" />
			<p className="font-semibold">{desc}</p>
		</div>
	);
};

export default ShieldText;
