import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import Logo from "../public/assets/images/Noted-logo.png";
import Menu from "../public/assets/icons/menu.svg";
import MenuBlack from "../public/assets/icons/menu-black.svg";
import Close from "../public/assets/icons/close-icon.svg";
import Button from "./Button";
import { useScroll } from "../context/ScrollContext";

const Header = () => {
	const Navlinks = [
		{ name: "Home", path: "/" },
		{ name: "About", path: "/#about" },
		{ name: "Contact", path: "/contact" },
	];
	const [menuOpen, setMenuOpen] = React.useState(false);

	const { whiteNav, setScrollToAbout } = useScroll();

	const [isWhite, setIsWhite] = React.useState(whiteNav);
	const router = useRouter();

	React.useEffect(() => {
		if (router.pathname === "/contact") {
			setIsWhite(true);
		} else {
			setIsWhite(whiteNav);
		}
	}, [whiteNav, router]);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const closeMenu = () => {
		setMenuOpen(false);
	};

	return (
		<header
			className={`${isWhite ? "bg-white" : "md:bg-header"} fixed top-0 left-0 right-0 z-10 transition duration-50`}
		>
			<div className="mobile-nav relative md:hidden">
				<div className="flex justify-between items-center py-[0.5rem] fold:py-[0.875rem] px-[0.8rem]  fold:px-[1rem]">
					<Link href="/">
						<Image src={Logo} alt="Website Logo" className="w-[42px] fold:w-auto" />
					</Link>
					<Image
						src={router.pathname === "/" ? whiteNav ? MenuBlack : Menu : MenuBlack}
						alt="Menu icon to toggle navigation menu"
						onClick={toggleMenu}
						className="w-[20px] fold:w-auto"
					/>
				</div>
				<nav
					className={`flex flex-col gap-4 fold:gap-6 items-center absolute top-0 left-[50%] -translate-x-[50%] w-full py-[0.7rem] fold:py-[2rem] transition duration-700 bg-white ${
						menuOpen ? "translate-y-0" : "-translate-y-[150%]"
					}`}
				>
					<div className="flex justify-end w-full pr-[1rem]">
						<Image src={Close} alt="Icon to close navigation menu" className="w-[20px] fold:w-auto" onClick={toggleMenu} />
					</div>
					<ul className="flex flex-col items-center gap-[10px] fold:gap-6">
						<li className="">
							<Link
								href="/"
								className={`font-medium text-[0.875rem] ${router.pathname === "/" ? "text-neutrals500" : "text-neutrals300"}`}
								onClick={closeMenu}
							>
								Home
							</Link>
						</li>
						<li className="">
							<Link
								href="/#about"
								className={`font-medium text-[0.875rem] ${router.pathname === "/#about" ? "text-neutrals500" : "text-neutrals300"}`}
								onClick={closeMenu}
							>
								About
							</Link>
						</li>
						<li className="">
							<Link
								href="/contact"
								className={`font-medium text-[0.875rem] ${router.pathname === "/contact" ? "text-neutrals500" : "text-neutrals300"}`}
								onClick={closeMenu}
							>
								Contact
							</Link>
						</li>
					</ul>
					<Button
						label="Learn more"
						className="text-brandPrimary500 border-[1px] border-brandPrimary400 py-[0.3rem] fold:py-[0.6875rem] text-[0.875rem] px-6 rounded font-medium"
					/>
				</nav>
			</div>
			<div
				className={`desktop-nav hidden md:flex items-center justify-between gap-10 ${
					!isWhite ? "backdrop-blur-header" : ""
				} md:py-[0.75rem] md:px-[2rem] lg:px-[3rem] xl:px-[4rem]`}
			>
				<Link href="/" className="">
					<Image src={Logo} alt="Website Logo" />
				</Link>
				<nav className={`flex items-center`}>
					<ul className="flex items-center gap-6 h-[50px]">
						{Navlinks.map((link) => {
							return (
								<li
									onClick={() => {
										if (link.path === "/contact" || link.path === "/") {
											link.path === "/contact" && setIsWhite(true);
											router.push(link.path);
										}
										if (link.path === "/#about") {
											router.push("/", "/#about");
											setScrollToAbout(true);
										}
									}}
									key={link.name}
									className={`cursor-pointer h-full font-medium flex items-center ${
										router.asPath === link.path
											? isWhite
												? "text-neutrals500"
												: "text-neutrals50"
											: isWhite
											? "text-neutrals200"
											: "text-neutrals400"
									}   transition duration-300 ease-in-out`}
								>
									{link.name}
								</li>
							);
						})}
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
