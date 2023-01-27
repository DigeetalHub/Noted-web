import Image from "next/image";
import React from "react";

const IconText = ({ src, alt, text, className, textClassName, imgClassName, imgClass }) => {
	return (
		<div className={`${className} flex flex-col`}>
			<div className={`${imgClassName} p-[5px] fold:p-2 rounded w-[fit-content] mx-auto md:p-3 lg:p-4`}>
					<Image src={src} alt={alt} className={`w-3 fold:w-auto 4k:w-[50px] aspect-square ${imgClass}`} />
			</div>
			<p className={textClassName}>{text}</p>
		</div>
	);
};

export default IconText;
