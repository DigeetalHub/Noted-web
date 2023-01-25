import Head from "next/head";
import { useState, useContext } from "react";
import Image from "next/image";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import Mouse from "../public/assets/icons/mouse.svg";
import { ScrollContext } from "../context/ScrollContext";
import IconText from "../components/IconText";

export default function Home() {

	const { whiteNav, scroll, scrollNav } = useContext(ScrollContext);

	return (
		<div className="">
			<Head>
				<title>Noted | For Photographers, Content Creators, Musicians, Videographers and Creatives</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta
					name="description"
					content="Connect and Collaborate with creators from everywhere across the globe. Discover how!"
				/>
				<meta
					name="keywords"
					content="artists, photography, Photographers, Content Creators, Musicians, Videographers, Creatives"
				/>
				<link rel="icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
			</Head>

			<main className="snap-y scroll-pt-[2rem]" onscroll={scrollNav}>
				<section className="bg-heroImg bg-no-repeat bg-cover bg-center h-[70vh] md:h-screen relative">
					<div className="h-full bg-overlay flex flex-col items-center justify-end pb-[2.5rem] px-4 md:justify-center">
						<div className="flex flex-col gap-4 text-center mb-8 md:mb-10 md:w-[60%] lg:w-[70%] xl:w-[55%]">
							<Heading
								firstContent={"Connect"}
								endContent={"from everywhere across the globe"}
								coloredContent={"creators"}
								classes="font-bold text-white text-[2rem] leading-[1.2] md:hidden"
							/>
							<Heading
								firstColoredContent={"Discover"}
								endContent={"hidden creatives around the world using Noted"}
								classes="font-bold text-white text-[2.5rem] leading-[1.2] hidden md:block"
							/>
							<Subheading
								classes="text-neutrals200 leading-[25.5px] md:hidden"
								content="Lorem ipsum dolor sit amet consectetur. Rhoncus pretium in sed blandit habitant nulla viverra. Sed et
								fermentum mattis volutpat viverra augue faucibus integer."
							/>
							<Subheading
								classes="text-neutrals100 leading-[25.5px] hidden md:block"
								content="Have unrestricted access to as many talents as you want, with never-ending conversations."
							/>
						</div>
						<Button
							label="Download Now"
							className="text-white py-3 w-full border-[1px] border-brandPrimary500 bg-brandPrimary500 font-semibold rounded md:w-1/2 lg:w-[35%] xl:w-[25%] lg:hover:bg-transparent lg:hover:text-brandPrimary400 transition duration-300 ease-in-out]"
						/>
					</div>
					<div className="w-full hidden md:flex flex-col justify-center gap-3 absolute bottom-[1rem] z-10">
						<button className="mx-auto" onClick={scroll}>
							<Image src={Mouse} alt="Clickable icon to scroll down to see main content" className="animate-bounce-slow motion-safe:animate-bounce-slower" />
						</button>
						<p className="text-center text-white/[0.4] font-bold text-xl">Scroll for more info</p>
					</div>
				</section>
				<section className="">
					<div className="">
						<IconText className="" src={} imgClassName="" />
					</div>
				</section>
			</main>
		</div>
	);
}
