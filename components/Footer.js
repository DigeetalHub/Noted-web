import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/assets/images/Noted-logo.png";
import Email from "../public/assets/icons/email.svg";
import Copyright from "../public/assets/icons/copyright.svg";
import Socials from "./Socials";

const Footer = ({ className }) => {
	const year = new Date().getFullYear();

	return (
		<footer
			className={`${className} py-6 px-4 md:pt-[4rem]  bg-brandPrimary900`}
		>
			<div className="flex flex-col flex-wrap gap-[1.7rem] fold:gap-[2.5rem] text-center text-white dualFold:flex-row dualFold:justify-between dualFold:text-left dualFold:w-[90%] dualFold:mx-auto dualFold:gap-y-[4rem] lg:w-[80%] bigScreen:w-[70%] fold:text-sm s22:text-base">
				<div className="flex flex-col dualFold:w-[33%] xl:w-[24%] gap-[0.625rem] fold:gap-4">
					<Image
						src={Logo}
						alt="Website logo in the Footer"
						className="mx-auto dualFold:m-0 w-[57px] fold:w-[76px] bigScreen:w-[90px]"
					/>
					<p className="font-semibold text-[0.65rem] fold:text-[0.875rem] s22:text-base px-2 fold:px-4 s22:px-6 dualFold:p-0 dualFold:font-normal">
						Discover hidden talents around the world using Noted
					</p>
				</div>
				<nav className="flex flex-col gap-2 fold:gap-4 dualFold:w-[20%] lg:w-[18%]">
					<h3 className="font-bold text-white text-[0.875rem] fold:text-xl bigScreen:text-[1.7rem]">Explore</h3>
					<div className="flex flex-col gap-4">
						<Link
							href="/privacy"
							className="text-white lg:hover:border-b-[2px] lg:hover:border-b-brandPrimary500 w-[fit-content] mx-auto dualFold:mx-0 border-b-2 border-b-brandPrimary500 pb-1"
						>
							Privacy Policy
						</Link>
						<Link
							href="/terms-of-service"
							className="text-white lg:hover:border-b-[2px] lg:hover:border-b-brandPrimary500 w-[fit-content] mx-auto dualFold:mx-0 border-b-2 border-b-brandPrimary500 pb-1"
						>
							Terms of service
						</Link>
						<Link
							href="/terms-of-use"
							className="text-white lg:hover:border-b-[2px] lg:hover:border-b-brandPrimary500 w-[fit-content] mx-auto dualFold:mx-0 border-b-2 border-b-brandPrimary500 pb-1"
						>
							Terms of use
						</Link>
						<Link
							href="/eula"
							className="text-white lg:hover:border-b-[2px] lg:hover:border-b-brandPrimary500 w-[fit-content] mx-auto dualFold:mx-0 border-b-2 border-b-brandPrimary500 pb-1"
						>
							EULA
						</Link>
					</div>
				</nav>
				<div className="flex flex-col gap-3">
					<h3 className="font-bold text-neutrals50 text-[0.875rem] fold:text-xl bigScreen:text-[1.7rem]">Contact</h3>
					<Link
						href="mailto:getnoted@notedmediagroup.com"
						className=" text-white"
					>
						<Image src={Email} alt="Email icon" className="inline-block w-[12px] fold:w-auto" />{" "}
						<span className="ml-[0.5rem] fold:ml-[0.4rem] border-b-[2px] border-b-brandPrimary500 pb-1">
							getnoted@notedmediagroup.com
						</span>
					</Link>
				</div>
				<div className="flex flex-col gap-3 dualFold:flex-row items-center md:mt-[2.5rem] xl:w-[40%]">
					<h3 className="text-white text-[0.75rem] fold:text-base md:font-light">Join our community:</h3>
					<Socials />
				</div>
				<div className="border-t-[1px] border-t-white pt-5 w-full space-y-4">
					<p className="flex items-center font-semibold justify-center text-[0.55rem] fold:text-sm s22:text-base">
						<Image src={Copyright} alt="Copyright icon" className="mr-[5px] fold:mr-2 w-[10px] fold:w-[15px]" />{" "}
						Copyright {year} |&nbsp;<span className="hidden md:block">All rights reserved. Noted</span>
						<span className="md:hidden">Noted</span>
					</p>
					<p className="text-center font-medium">
						Designed and Developed by{" "}
						<Link href="https://www.digeetalhub.com" target="_blank" className="underline underline-offset-4">
							DigeetalHub
						</Link>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
