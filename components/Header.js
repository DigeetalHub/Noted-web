import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import Logo from "../public/assets/images/Noted-logo.png";
import Menu from "../public/assets/icons/menu.svg";
import MenuBlack from "../public/assets/icons/menu-black.svg";
import Close from "../public/assets/icons/close-icon.svg";
import Button from "./Button";

const Header = () => {
	const [menuOpen, setMenuOpen] = React.useState(false);
	const { asPath } = useRouter();
	const cleanPath = asPath.split("#")[0].split("?")[0];

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const closeMenu = () => {
		setMenuOpen(false);
	};

	return (
		<header className="md:bg-header fixed top-0 left-0 right-0 z-10">
			<div className="mobile-nav relative md:hidden">
				<div className="flex justify-between items-center py-[0.875rem] px-[1rem]">
					<Image src={Logo} alt="Website Logo" />
					<Image
						src={cleanPath === "/" ? Menu : MenuBlack}
						alt="Menu icon to toggle navigation menu"
						onClick={toggleMenu}
					/>
				</div>
				<nav
					className={`flex flex-col gap-6 items-center absolute top-0 left-[50%] -translate-x-[50%] w-full py-[2rem] transition duration-700 bg-white ${
						menuOpen ? "translate-y-0" : "-translate-y-[150%]"
					}`}
				>
					<div className="flex justify-end w-full pr-[1rem]">
						<Image src={Close} alt="Icon to close navigation menu" className="" onClick={toggleMenu} />
					</div>
					<ul className="flex flex-col items-center gap-6">
						<li className="">
							<Link
								href="/"
								className={`font-medium ${cleanPath === "/" ? "text-neutrals500" : "text-neutrals300"}`}
								onClick={closeMenu}
							>
								Home
							</Link>
						</li>
						<li className="">
							<Link
								href="/about"
								className={`font-medium ${cleanPath === "/about" ? "text-neutrals500" : "text-neutrals300"}`}
								onClick={closeMenu}
							>
								About
							</Link>
						</li>
						<li className="">
							<Link
								href="/contact"
								className={`font-medium ${cleanPath === "/contact" ? "text-neutrals500" : "text-neutrals300"}`}
								onClick={closeMenu}
							>
								Contact
							</Link>
						</li>
					</ul>
					<Button
						label="Learn more"
						className="text-brandPrimary500 border-[1px] border-brandPrimary400 py-[0.6875rem] px-6 rounded font-medium"
					/>
				</nav>
			</div>
			<div className="desktop-nav hidden md:flex items-center justify-between gap-10 backdrop-blur-header md:py-[0.875rem] md:px-[2rem] lg:px-[3rem] xl:px-[4rem]">
				<div className="">
					<Image src={Logo} alt="Website Logo" />
				</div>
				<nav
					className={`flex items-center
					`}
				>
					<ul className="flex items-center gap-6 h-[50px]">
						<li className="h-full">
							<Link
								href="/"
								className={`font-medium h-full flex items-center ${
									cleanPath === "/" ? "text-neutrals50" : "text-neutrals400"
								}`}
								onClick={closeMenu}
							>
								Home
							</Link>
						</li>
						<li className="h-full">
							<Link
								href="/about"
								className={`font-medium h-full flex items-center  ${
									cleanPath === "/about" ? "text-neutrals50" : "text-neutrals400"
								}`}
								onClick={closeMenu}
							>
								About
							</Link>
						</li>
						<li className="h-full">
							<Link
								href="/contact"
								className={`font-medium h-full flex items-center  ${
									cleanPath === "/contact" ? "text-neutrals50" : "text-neutrals400"
								}`}
								onClick={closeMenu}
							>
								Contact
							</Link>
						</li>
					</ul>
				</nav>
				<Button
					label="Learn more"
					className="text-brandPrimary500 border-[1px] border-brandPrimary400 py-[0.6875rem] px-6 rounded font-medium hover:bg-brandPrimary400 hover:text-white transition duration-300 ease-in-out]"
				/>
			</div>
		</header>
	);
};

export default Header;
