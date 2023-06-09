import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import Logo from "../public/assets/images/logo.svg";
import Menu from "../public/assets/icons/menu.svg";
import MenuBlack from "../public/assets/icons/menu-black.svg";
import Close from "../public/assets/icons/close-icon.svg";
import Button from "./Button";
import { useScroll } from "../context/ScrollContext";

const Header = ({ className }) => {
	const Navlinks = [
		{ name: "Home", path: "/" },
		{ name: "About", path: "/about" },
		{ name: "Contact", path: "/contact" },
	];
	const [menuOpen, setMenuOpen] = React.useState(false);

	const { whiteNav, setScrollToFeatures } = useScroll();

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

	const closeMenu = (e) => {
    if (e.target.innerText === "Learn more") {
      router.push("/", "/#about")
			setScrollToFeatures(true);
		}
		setMenuOpen(false);
	};

  const scrollToFeaturesSection = () => {
		router.push("/", "/#about");
		setScrollToFeatures(true);
	};

	return (
		<header
			className={`${className} ${
				isWhite ? "bg-white" : "dualFold:bg-header"
			} fixed top-0 left-0 right-0 z-10 transition duration-50`}
		>
			<div className="mobile-nav relative dualFold:hidden">
				<div className="flex justify-between items-center py-[0.5rem] px-[0.8rem] fold:p-[1rem]">
					<Link href="/">
						<Image src={Logo} alt="Website Logo" className="w-[42px] fold:w-[76px]" />
					</Link>
					<Image
						src={router.pathname === "/" || router.pathname === "/about"  ? (whiteNav ? MenuBlack : Menu) : MenuBlack}
						alt="Menu icon to toggle navigation menu"
						onClick={toggleMenu}
						className="w-[20px] fold:w-auto"
					/>
				</div>
				<nav
					className={`flex flex-col gap-2 fold:gap-6 fold:h-[43vh] items-center absolute top-0 left-[50%] -translate-x-[50%] w-full py-[0.7rem] fold:py-[1.4rem] transition duration-700 bg-white ${
						menuOpen ? "translate-y-0" : "-translate-y-[150%]"
					}`}
				>
					<div className="flex justify-end w-full pr-[1rem]">
						<Image
							src={Close}
							alt="Icon to close navigation menu"
							className="w-[20px] fold:w-[24px]"
							onClick={toggleMenu}
						/>
					</div>
					<ul className="flex flex-col items-center gap-[10px] fold:gap-6">
						<li className="">
							<Link
								href="/"
								className={`font-semibold text-[0.875rem] fold:text-base ${
									router.pathname === "/" ? "text-neutrals500" : "text-neutrals300"
								}`}
								onClick={closeMenu}
							>
								Home
							</Link>
						</li>
						<li className="">
							<Link
								href="/about"
								className={`font-semibold text-[0.875rem] fold:text-base ${
									router.pathname === "/about" ? "text-neutrals500" : "text-neutrals300"
								}`}
								onClick={closeMenu}
							>
								About
							</Link>
						</li>
						<li className="">
							<Link
								href="/contact"
								className={`font-semibold text-[0.875rem] fold:text-base ${
									router.pathname === "/contact" ? "text-neutrals500" : "text-neutrals300"
								}`}
								onClick={closeMenu}
							>
								Contact
							</Link>
						</li>
					</ul>
					<Button
						onClick={closeMenu}
						label="Learn more"
						className="text-brandPrimary500 border-[1px] border-brandPrimary400 py-[0.3rem] fold:py-[0.6875rem] text-[0.875rem] fold:text-base px-6 rounded font-medium"
					/>
				</nav>
			</div>
			<div
				className={`desktop-nav hidden dualFold:flex items-center justify-between gap-10 ${
					!isWhite ? "backdrop-blur-header" : ""
				} dualFold:py-[0.75rem] dualFold:px-[2rem] lg:px-[3rem] xl:px-[4rem] bigScreen:py-[1rem]`}
			>
				<Link href="/" className="">
					<Image src={Logo} alt="Website Logo" className="bigScreen:w-[90px]" />
				</Link>
				<nav className={`flex items-center`}>
					<ul className="flex items-center gap-6 h-[50px]">
						{Navlinks.map((link) => {
							return (
								<li role="link" aria-label={link.name} key={link.name}>
									<Link
										className={`cursor-pointer h-full font-semibold flex items-center bigScreen:text-xl ${
											router.asPath === link.path
												? isWhite
													? "text-neutrals500"
													: "text-neutrals50"
												: isWhite
												? "text-neutrals200"
												: "text-neutrals300"
										}   transition duration-300 ease-in-out`}
										href={link.path}
									>
										{link.name}
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
        <Button
          onClick={scrollToFeaturesSection}
					label="Learn more"
					className="text-brandPrimary500 border-[1px] border-brandPrimary400 py-[0.6875rem] px-6 rounded font-medium hover:bg-brandPrimary400 hover:text-white transition duration-300 ease-in-out]"
				/>
			</div>
		</header>
	);
};

export default Header;
