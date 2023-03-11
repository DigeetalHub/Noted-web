import Image from "next/image";
import React from "react";
import Instagram from "../public/assets/icons/instagram.svg";
import Twitter from "../public/assets/icons/twitter.svg";
import linkedIn from "../public/assets/icons/linkedin.svg";
import tiktok from "../public/assets/icons/tiktok.svg";
import Link from "next/link";

const Socials = () => {
	return (
		<nav className="flex gap-3 mx-auto md:m-0">
			<Link
				href=""
				className="bg-brandPrimary500 border-[0.4px] border-brandPrimary200 flex items-center justify-center p-[0.935rem] rounded hover:bg-transparent transition duration-500"
			>
				<Image src={Instagram} alt="Instagram icon" className="w-[20px] aspect-square" />
			</Link>
			<Link
				href=""
				className="bg-brandPrimary500 border-[0.4px] border-brandPrimary200 flex items-center justify-center p-[0.935rem] rounded hover:bg-transparent transition duration-500"
			>
				<Image src={tiktok} alt="tiktok icon" className="w-[15px]" />
			</Link>
			<Link
				href=""
				className="bg-brandPrimary500 border-[0.4px] border-brandPrimary200 flex items-center justify-center p-[0.95rem] rounded hover:bg-transparent transition duration-500 "
			>
				<Image src={Twitter} alt="Twitter icon" className="w-[19px]" />
			</Link>
			<Link
				href=""
				className="bg-brandPrimary500 border-[0.4px] border-brandPrimary200 flex items-center justify-center p-[0.635rem] fold:px-3 rounded hover:bg-transparent transition duration-500 "
			>
				<Image src={linkedIn} alt="linkedin icon" className="w-[22px]" />
			</Link>
		</nav>
	);
};

export default Socials;
