import Image from "next/image";
import Link from "next/link";
import React from "react";
import linkedin from "../public/assets/icons/linkedin.svg";
import tiktok from "../public/assets/icons/tiktok.svg";
import instagram from "../public/assets/icons/instagram.svg";
import twitter from "../public/assets/icons/twitter.svg";
import logo from "../public/assets/images/linktree-logo.svg";

const Vcard = () => {
	return (
		<div className="w-[90%] flex flex-col items-center justify-center border border-brandPrimary500 py-[2.5rem] px-6 rounded-3xl gap-[4rem]">
			<div className="space-y-2">
				<div className="p-5 border-2 rounded-full border-brandPrimary500 w-[fit-content] mx-auto">
					<Image
						className="w-[80px] object-cover aspect-square m-0
                    "
						src={logo}
						alt=""
						priority
					/>
				</div>
				<p className="font-medium">Search, Match and Create</p>
			</div>
			<div className="flex flex-col gap-7 w-full">
				<Link
					href="htps://www.tiktok.com/@notedmedia"
					className="w-full py-4 bg-brandPrimary500 rounded text-white font-semibold text-center flex justify-center items-center gap-2"
				>
					<span className="">TikTok</span> <Image src={tiktok} alt="" className="w-[21px]" />
				</Link>
				<Link
					href="https://twitter.com/notedmedia_"
					className="w-full py-4 bg-brandPrimary500 rounded text-white font-semibold text-center flex justify-center items-center gap-2" target="_blank"
				>
					<span className="">Twitter</span> <Image src={twitter} alt="" className="w-[21px]" />
				</Link>
				<Link
					href="https://instagram.com/notedmedia_"
					className="w-full py-4 bg-brandPrimary500 rounded text-white font-semibold text-center flex justify-center items-center gap-2 "
				>
					<span className="">Instagram</span> <Image src={instagram} alt="" className="w-[24px]" />
				</Link>
				<Link
					href="https://www.linkedin.com/company/noted-media-group/"
					className="w-full py-4 bg-brandPrimary500 rounded text-white font-semibold text-center flex justify-center items-center gap-2"
				>
					<span className="">LinkedIn</span> <Image src={linkedin} alt="" className="w-[22px]" />
				</Link>
			</div>
		</div>
	);
};

export default Vcard;
