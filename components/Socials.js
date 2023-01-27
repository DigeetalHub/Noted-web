import Image from "next/image";
import React from "react";
import Instagram from "../public/assets/icons/instagram.svg";
import Facebook from "../public/assets/icons/facebook.svg";
import Twitter from "../public/assets/icons/twitter.svg";
import Link from "next/link";

const Socials = () => {
	return (
		<nav className="flex gap-3 mx-auto md:m-0">
			<Link href="" className="bg-brandPrimary500 border-[0.4px] border-brandPrimary200 flex items-center justify-center p-[0.635rem] rounded hover:bg-transparent transition duration-500">
				<Image src={Instagram} alt="Instagram icon" className="w-[12px] fold:wa-auto" />
			</Link>
			<Link href="" className="bg-brandPrimary500 border-[0.4px] border-brandPrimary200 flex items-center justify-center p-[0.635rem] rounded hover:bg-transparent transition duration-500 ">
				<Image src={Facebook} alt="Facebook icon" className="w-[8.5px] fold:wa-auto" />
			</Link>
			<Link href="" className="bg-brandPrimary500 border-[0.4px] border-brandPrimary200 flex items-center justify-center p-[0.635rem] rounded hover:bg-transparent transition duration-500 ">
				<Image src={Twitter} alt="Twitter icon" className="w-[12px] fold:wa-auto" />
			</Link>
		</nav>
	);
};

export default Socials;
