import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/assets/images/Noted-logo.png";
import Email from "../public/assets/icons/email.svg";
import Copyright from "../public/assets/icons/copyright.svg";
import Socials from "./Socials";

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="py-6 px-4 bg-brandPrimary900 mt-[5.5rem] md:pt-[5.5rem]">
			<div className="flex flex-col flex-wrap gap-[2.5rem] text-center text-white md:flex-row md:justify-between md:text-left md:w-[80%] md:mx-auto md:gap-y-[4rem]">
				<div className="flex flex-col w-[28%] gap-4">
					<Image src={Logo} alt="Website logo in the Footer" className="mx-auto md:m-0" />
					<p className="font-semibold px-4 md:p-0 md:font-normal">Discover hidden talents around the world using Noted</p>
				</div>
				<nav className="flex flex-col gap-3">
					<h3 className="font-bold text-neutrals50 text-xl">Explore</h3>
					<Link href="/privacy" className="font-semibold text-neutrals50 text-xs md:text-base md:font-normal">
						Privacy Policy
					</Link>
					<Link href="/terms-of-service" className="font-semibold text-neutrals50 text-xs md:text-base md:font-normal">
						Terms of service
					</Link>
					<Link href="/terms-of-use" className="font-semibold text-neutrals50 text-xs md:text-base md:font-normal">
						Terms of use
					</Link>
				</nav>
				<div className="flex flex-col gap-3">
					<h3 className="font-bold text-neutrals50 text-xl">Contact</h3>
					<Link href="/contact" className="font-semibold text-neutrals50 text-xs md:text-base md:font-normal">
						<Image src={Email} alt="Email icon" className="inline-block" />{" "}
						<span className="ml-[0.63rem]">info@noted.com</span>
					</Link>
				</div>
				<div className="flex flex-col gap-3 md:flex-row items-center md:mt-[2.5rem] xl:w-[40%]">
					<h3 className="font-semibold text-white md:font-light">Join our community:</h3>
					<Socials />
				</div>
				<div className="border-t-[1px] border-t-white pt-5 w-full">
					<p className="flex items-center font-semibold justify-center">
						<Image src={Copyright} alt="Copyright icon" className="mr-2" /> Copyright {year} | Noted
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
