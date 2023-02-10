import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/assets/images/Noted-logo.png";
import Email from "../public/assets/icons/email.svg";
import Copyright from "../public/assets/icons/copyright.svg";
import WhitePhone from "../public/assets/icons/whitePhone.svg";
import Socials from "./Socials";

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="py-6 px-4 fold:pt-[3rem] bg-brandPrimary900 mt-[3rem] fold:mt-[5.5rem] md:pt-[3rem]">
			<div className="flex flex-col flex-wrap gap-[1.7rem] fold:gap-[2.5rem] text-center text-white dualFold:flex-row dualFold:justify-between dualFold:text-left dualFold:w-[90%] dualFold:mx-auto dualFold:gap-y-[4rem] lg:w-[80%] bigScreen:w-[70%]">
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
				<nav className="flex flex-col gap-2 fold:gap-3 dualFold:w-[20%] lg:w-[18%]">
					<h3 className="font-bold text-neutrals50 text-[0.875rem] fold:text-xl bigScreen:text-[1.7rem]">Explore</h3>
					<Link
						href="/privacy"
						className="font-semibold text-neutrals100 lg:hover:border-b-[2px] lg:hover:border-b-brandPrimary500 w-[fit-content] mx-auto dualFold:mx-0 text-[0.65rem] fold:text-xs md:text-base md:font-normal"
					>
						Privacy Policy
					</Link>
					<Link
						href="/terms-of-service"
						className="font-semibold text-neutrals100 lg:hover:border-b-[2px] lg:hover:border-b-brandPrimary500 w-[fit-content] mx-auto dualFold:mx-0 text-[0.65rem] fold:text-xs md:text-base md:font-normal"
					>
						Terms of service
					</Link>
					<Link
						href="/terms-of-use"
						className="font-semibold text-neutrals100 lg:hover:border-b-[2px] lg:hover:border-b-brandPrimary500 w-[fit-content] mx-auto dualFold:mx-0 text-[0.65rem] fold:text-xs md:text-base md:font-normal"
					>
						Terms of use
					</Link>
				</nav>
				<div className="flex flex-col gap-3">
					<h3 className="font-bold text-neutrals50 text-[0.875rem] fold:text-xl bigScreen:text-[1.7rem]">Contact</h3>
					<Link
						href="mailto:info@noted.com"
						className="font-semibold text-neutrals100 text-[0.65rem] fold:text-xs md:text-base md:font-normal"
					>
						<Image src={Email} alt="Email icon" className="inline-block w-[12px] fold:w-auto" />{" "}
						<span className="ml-[0.5rem] fold:ml-[0.4rem] lg:focus:border-b-[2px] lg:focus:border-b-brandPrimary500">
							info@noted.com
						</span>
					</Link>
					<Link
						href="tel:(123) 456-7890"
						className="font-semibold text-neutrals100 text-[0.65rem] fold:text-xs md:text-base md:font-normal"
					>
						<Image src={WhitePhone} alt="Email icon" className="inline-block w-[12px] fold:w-[20px] fill-white" />{" "}
						<span className="ml-[0.5rem] fold:ml-[0.4rem] lg:focus:border-b-[2px] lg:focus:border-b-brandPrimary500">
							(123) 456-7890
						</span>
					</Link>
				</div>
				<div className="flex flex-col gap-3 dualFold:flex-row items-center md:mt-[2.5rem] xl:w-[40%]">
					<h3 className="font-semibold text-white text-[0.75rem] fold:text-base md:font-light">Join our community:</h3>
					<Socials />
				</div>
				<div className="border-t-[1px] border-t-white pt-5 w-full space-y-4">
					<p className="flex items-center font-semibold justify-center text-[0.55rem] fold:text-sm s22:text-base">
						<Image src={Copyright} alt="Copyright icon" className="mr-[5px] fold:mr-2 w-[10px] fold:w-[15px]" />{" "}
						Copyright {year} | All rights reserved. Noted
					</p>
					<p className="text-center">
						Designed and Developed by{" "}
						<Link href="https://digeetalhub.com" target="_blank" className="underline underline-offset-4">
							DigeetalHub
						</Link>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
