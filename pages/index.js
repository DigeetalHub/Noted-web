import Head from "next/head";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import Mouse from "../public/assets/icons/mouse.svg";
import { useScroll } from "../context/ScrollContext";
import IconText from "../components/IconText";
import DocumentIcon from "../public/assets/icons/document-download.svg";
import User from "../public/assets/icons/user-icon.svg";
import Stats from "../public/assets/icons/stats.svg";
import Snapshot from "../public/assets/images/snapshot.svg";
import DownloadNow from "../components/DownloadNow";
import { useRouter } from "next/router";
import Link from "next/link";
import IconTextCard from "../components/IconTextCard";
import { cardsData } from "../data/cardsData";

export default function Home() {
	const { scroll, setScrollToAbout, scrollNav, whiteNav, scrollToAbout } = useScroll();
	const aboutRef = useRef();
	const router = useRouter();
	const [word, setWord] = useState("Discover");
	const [name, setName] = useState("videographers");
	const titles = ["content creators", "photographers", "videographers", "musicians"];
	const words = ["Collab with", "Partner with", "Match with", "Discover"];

	useEffect(() => {
		if (scrollToAbout) {
			window.scrollTo({
				top: aboutRef.current.offsetTop,
				left: 0,
				behavior: "smooth",
			});
			setScrollToAbout(false);
		}
	}, [scrollToAbout, setScrollToAbout, router]);

	useEffect(() => {
		const interval = setInterval(() => {
			const index = titles.indexOf(name);
			const wordIndex = words.indexOf(word);
			if (index === titles.length - 1) {
				setName(titles[0]);
			} else {
				setName(titles[index + 1]);
			}
			if (wordIndex === words.length - 1) {
				setWord(words[0]);
			} else {
				setWord(words[wordIndex + 1]);
			}
		}, 3000);
		return () => clearInterval(interval);
	}, [name, word]);

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
			</Head>
			<main className="snap-y scroll-pt-[2rem]" onScroll={scrollNav}>
				<section className="bg-heroImg bg-no-repeat bg-cover bg-center h-auto fold:h-[84.5vh] s22:h-[82.5vh] i11Pro:h-[82vh] i13:h-[82.5vh] XR:h-[83.5vh] i14Max:h-[76vh] dualFold:h-[100vh] md:h-screen relative">
					<div className="h-full pt-[2.9rem] fold:pt-0 bg-overlay flex flex-col items-center justify-end pb-[4.5rem] px-2 fold:px-4 md:justify-center">
						<div className="flex flex-col gap-4 text-center mb-4 fold:mb-8 md:mb-10 dualFold:w-[60%] md:w-[79%] fold2Full:w-[82%] xl:w-[60.5%] laptops:w-[65%] bigScreen:w-[60%]">
							<Heading
								firstContent={"Connect with"}
								endContent={"from everywhere across the globe"}
								coloredContent={name}
								classes="font-bold text-white text-[0.875rem] fold:text-[1.4rem] s22:text-[2rem] XR:text-[2.2rem] i14Max:text-[2.3rem] leading-[1.2] md:hidden"
							/>
							<Heading
								firstColoredContent={word}
								endContent={"hidden creatives around the world using Noted"}
								classes="font-bold text-white text-[2rem] fold2Full:text-[2.5rem] 2xl:text-[3rem] bigScreen:text-[3.5rem] leading-[1.27] hidden md:block"
							/>
							<Subheading
								classes="text-neutrals200 s22:leading-[23.5px] i11Pro:leading-[25px] XR:leading-[25.5px] fold:text-[0.7rem] s22:text-[0.9rem] i11Pro:text-[0.9rem] i13:text-[1rem] i14Max:text-[1.1rem] fold:block md:hidden"
								content="Search, Collaborate, Create - Connect with fellow creators on our app designed for photographers,  musicians, and more. Download now and start collaborating!"
							/>
							<Subheading
								classes="text-neutrals100 leading-[28.5px] md:text-[1.125rem] md:w-[85%] iPadAir:w-[90%] md:mx-auto bigScreen:text-[2rem] bigScreen:leading-[1.3] hidden md:block"
								content="Search, Collaborate, Create - Connect with fellow creators on our app designed for photographers, videographers, musicians, and more. Download now and start collaborating!"
							/>
						</div>
						<div className="flex flex-col dualFold:flex-row justify-center gap-3 dualFold:gap-6 fold:w-full dualFold:w-[65%] md:w-[30%] xl:w-[20%] mx-auto">
							<Link
								href="#waiting-list"
								className="text-white py-[8px] fold:py-2 s22:py-3 mx-auto w-[92%] fold:w-[80%] border-[1px] border-brandPrimary500 bg-brandPrimary500 font-semibold rounded text-[0.65rem] fold:text-[0.75rem] s22:text-[1rem] dualFold:w-[100%] md:w-[100%] lg:w-[75%] xl:w-[%] bigScreen:w-[15] lg:hover:bg-transparent lg:hover:text-brandPrimary400 transition duration-300 ease-in-out] bigScreen:py-4 bigScreen:text-[1.5rem] text-center"
							>
								Download Now
							</Link>
						</div>
					</div>
					{!whiteNav && (
						<div className="scroll-btn w-full hidden md:flex flex-col justify-center gap-3 absolute bottom-[1rem] z-10">
							<button className="mx-auto" onClick={scroll}>
								<Image
									src={Mouse}
									alt="Clickable icon to scroll down to see main content"
									className="animate-bounce-slow motion-safe:animate-bounce-slower"
								/>
							</button>
							<p className="text-center text-white/[0.6] font-bold text-base lg:text-xl bigScreen:text-[1.6rem]">
								Scroll for more info
							</p>
						</div>
					)}
				</section>
				<section className="bg-brandPrimary400 p-4 dualFold:p-[2.5rem] lg:p-[3rem] xl:p-[5rem]">
					<div className="flex flex-col dualFold:flex-row justify-center dualFold:justify-between items-center gap-4 fold:gap-6  bigScreen:w-[90%] bigScreen:mx-auto">
						<IconText
							className="lg:flex-row lg:items-center gap-2 fold:gap-4"
							src={DocumentIcon}
							imgClassName="bg-white"
							textClassName="font-bold text-[0.75rem] fold:text-xl i11Pro:text-[1.25rem] text-white xl:text-[1.7rem] laptops:text-[2rem] bigScreen:text-[2.2rem]"
							alt="An icon representing downloads"
							text="500+ Downloads"
							imgClass="md:w-[28px] lg:w-[32px]"
						/>
						<IconText
							className="lg:flex-row lg:items-center gap-2 fold:gap-4"
							src={User}
							imgClassName="bg-white"
							textClassName="font-bold text-[0.75rem] fold:text-xl i11Pro:text-[1.25rem] text-white xl:text-[1.7rem] laptops:text-[2rem] bigScreen:text-[2.2rem]"
							alt="An icon representing downloads"
							text="403+ Active Users"
							imgClass="md:w-[28px] lg:w-[32px]"
						/>
						<IconText
							className="lg:flex-row lg:items-center gap-2 fold:gap-4"
							src={Stats}
							imgClassName="bg-white"
							textClassName="font-bold  text-[0.75rem] fold:text-xl i11Pro:text-[1.25rem] text-white xl:text-[1.7rem] laptops:text-[2rem] bigScreen:text-[2.2rem]"
							alt="An icon representing downloads"
							text="8590+ Usage Statistics"
							imgClass="md:w-[28px] lg:w-[32px]"
						/>
					</div>
				</section>
				<section className="p-4 py-[3rem] text-center">
					<div className="">
						<div className="">
							<div className="mb-[3rem]">
								<h2 className="text-neutrals500 leading-[1.1] font-bold text-[0.75rem] s22:text-[2rem] mb-[1.25rem]">
									Easily connect with Creatives globally
								</h2>
								<p className="font-semibold text-[0.6rem] fold:text-[1rem] leading-[25.6px] i14Max:px-5 xl:px-3 2xl:px-8 md:text-[1.25rem] lg:text-[1.4rem] xl:text-[1.25rem] laptops:text-[1.25rem] bigScreen:text-[2rem] bigScreen:px-0">
									Let&apos;s help you find the best talent to work with from anywhere in the world.
								</p>
							</div>
							<div className="p-4 bg-brandPrimary50 relative text-left space-y-2">
								<p className="text-sm">
									Collaborating with professionals is a key ingredient for success. By working with individuals who
									bring unique perspectives, experiences, and expertise, we can achieve more together than we ever could
									alone
								</p>
								<p className="text-sm font-semibold">- Unknown</p>
								<span className="font-bold text-[4rem] text-brandPrimary500 absolute top-[-2.5rem] left-0">“</span>
								<span className="font-bold text-[4rem] text-brandPrimary500 absolute bottom-[-2rem] right-0 rotate-180">
									“
								</span>
							</div>
							<div className="mt-[3rem] flex flex-col gap-6">
								{cardsData.map(({ image, num, heading, desc }) => (
									<IconTextCard image={image} num={num} heading={heading} desc={desc} key={num} />
								))}
							</div>
						</div>
					</div>
				</section>
				<article
					ref={aboutRef}
					className="text-white px-4 py-[3rem] bg-neutrals500  "
				>
					<div className="text-center">
						<h2 className="">Match with the best creatives</h2>
						<p className=""></p>
					</div>
					<div className="dualFold:flex flex-row justify-between gap-[4rem] mt-4 lg:flex-row lg:mx-auto lg:mt-[2.4rem] lg:w-[80%] bigScreen:w-[65%] bigScreen:mx-auto">
						<Subheading
							classes="text-neutrals200 text-[0.6rem] fold:text-base text-center font-semibold dualFold:hidden"
							content={`Noted is an app designed for connecting creators on both a local and global scale. Whether you are looking for a videographer to shoot your next video, a vocalist for your next album or new producer for a different sound, Noted will help you find the talent your project may be missing. To simply put it, Noted is a place for creators everywhere to search, collaborate, and create.`}
						/>
						<Subheading
							classes="hidden dualFold:block text-neutrals200 font-semibold md:pt-[2rem] md:text-[1.25rem] md:leading-[1.27] xl:leading-[1.36] laptops:leading-[1.45] md:text-neutrals500 md:w-[60%] lg:text-[1.25rem] lg:w-[57%] lg:pt-[3rem] lg:text-left xl:w-[56%] laptops:w-[59%] xl:text-[1.5rem] bigScreen:text-[1.5rem] bigScreen:w-[57%]"
							content={`Are you looking for an easy way to discover, listen to, and share music? Look no further than our music application! Our app allows you to stream the latest hits, explore new genres, and create personalized playlists. With over 50 million tracks to choose from, you’ll never run out of music to enjoy. Plus, our app is simple and intuitive to use, so you can find your favorite songs quickly and without hassle. Download now and start listening to music that you love!`}
						/>
						<Image
							className="hidden dualFold:block dualFold:w-[30%] xl:w-[34%] bigScreen:w-[32%]"
							src={Snapshot}
							alt="snapshot of the interface of the app"
						/>
					</div>
				</article>
				<DownloadNow classes="" content="" />
			</main>
		</div>
	);
}
