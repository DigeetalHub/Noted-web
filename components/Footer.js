import React from "react";
import Logo from "../public/assets/images/Noted-logo.png";
import Email from "../public/assets/icons/email.svg";
import Instagram from "../public/assets/icons/instagram.svg";
import Facebook from "../public/assets/icons/facebook.svg";
import Twitter from "../public/assets/icons/twitter.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="py-6 px-8 bg-brandPrimary900 mt-[5.5rem]">
			<div className="grid place-items-center gap-[2.5rem] text-center text-white">
				<div className="grid gap-4">
					<Image src={Logo} alt="Website logo in the Footer" className="mx-auto" />
					<p className="font-semibold">Discover hidden talents around the world using Noted</p>
				</div>
				<nav className="grid gap-3">
					<h3 className="font-bold text-neutrals50 text-xl">Explore</h3>
					<Link href="/privacy" className="font-semibold text-neutrals50 text-xs">
						Privacy Policy
					</Link>
					<Link href="/terms-of-service" className="font-semibold text-neutrals50 text-xs">
						Terms of service
					</Link>
					<Link href="/terms-of-use" className="font-semibold text-neutrals50 text-xs">
						Terms of use
					</Link>
				</nav>
				<nav className="grid gap-3">
					<h3 className="font-bold text-neutrals50 text-xl">Explore</h3>
					<Link href="/contact" className="font-semibold text-neutrals50 text-xs">
						<Image src={Email} alt="Email icon" className="inline-block" /> <span className="ml-[0.63rem]">info@noted.com</span>
					</Link>
				</nav>
			</div>
		</footer>
	);
};

export default Footer;
