import Image from "next/image";
import React from "react";
import Instagram from "../public/assets/icons/instagram.svg";
import Facebook from "../public/assets/icons/facebook.svg";
import Twitter from "../public/assets/icons/twitter.svg";
import Link from "next/link";

const Socials = () => {
	return (
		<nav className="flex gap-3 mx-auto">
			<Link href="" className="bg-brandPrimary500 border-[0.4px] border-brandPrimary200 p-[0.635rem] rounded ">
				<Image src={Instagram} alt="Instagram icon" />
			</Link>
			<Link href="" className="bg-brandPrimary500 border-[0.4px] border-brandPrimary200 p-[0.635rem] rounded ">
				<Image src={Facebook} alt="Facebook icon" />
			</Link>
			<Link href="" className="bg-brandPrimary500 border-[0.4px] border-brandPrimary200 p-[0.635rem] rounded ">
				<Image src={Twitter} alt="Twitter icon" />
			</Link>
		</nav>
	);
};

export default Socials;
