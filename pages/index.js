import Head from "next/head";
import { useRef, useEffect } from "react";
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
import UserSearch from "../public/assets/icons/user-search.svg";
import People from "../public/assets/icons/people.svg";
import Plus from "../public/assets/icons/plus-circle.svg";
import Repeat from "../public/assets/icons/repeat.svg";
import Snapshot from "../public/assets/images/snapshot.svg";
import DownloadNow from "../components/DownloadNow";
import { useRouter } from "next/router";

export default function Home() {
	const { scroll, setScrollToAbout, scrollNav, whiteNav, scrollToAbout } = useScroll();
	const aboutRef = useRef();
	const router = useRouter();

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
				<section className="bg-heroImg bg-no-repeat bg-cover bg-center h-auto fold:h-[84.5vh] s22:h-[82.5vh] i11Pro:h-[82vh] i13:h-[82.5vh] XR:h-[75vh] i14Max:h-[76vh] dualFold:h-[100vh] md:h-screen relative">
					<div className="h-full pt-[2.9rem] fold:pt-0 bg-overlay flex flex-col items-center justify-end pb-[2.5rem] px-2 fold:px-4 md:justify-center">
						<div className="flex flex-col gap-4 text-center mb-4 fold:mb-8 md:mb-10 dualFold:w-[60%] md:w-[79%] fold2Full:w-[82%] xl:w-[58%]">
							<Heading
								firstContent={"Connect with"}
								endContent={"from everywhere across the globe"}
								coloredContent={"creators"}
								classes="font-bold text-white text-[0.875rem] fold:text-[1.4rem] s22:text-[2rem] XR:text-[2.2rem] i14Max:text-[2.3rem] leading-[1.2] md:hidden"
							/>
							<Heading
								firstColoredContent={"Discover"}
								endContent={"hidden creatives around the world using Noted"}
								classes="font-bold text-white text-[2rem] fold2Full:text-[2.5rem] bigScreen:text-[3.5rem] leading-[1.27] hidden md:block"
							/>
							<Subheading
								classes="text-neutrals200 s22:leading-[23.5px] i11Pro:leading-[25px] XR:leading-[25.5px] fold:text-[0.7rem] s22:text-[0.9rem] i11Pro:text-[0.9rem] i13:text-[1rem] i14Max:text-[1.1rem] hidden fold:block md:hidden"
								content="Lorem ipsum dolor sit amet consectetur. Rhoncus pretium in sed blandit habitant nulla viverra. Sed et
								fermentum mattis volutpat viverra augue faucibus integer."
							/>
							<Subheading
								classes="text-neutrals100 leading-[28.5px] md:text-[1.25rem] md:w-[85%] iPadAir:w-[70%] md:mx-auto bigScreen:text-[2rem] bigScreen:leading-[1.3] bigScreen:px-[12rem] hidden md:block"
								content="Have unrestricted access to as many talents as you want, with never-ending conversations."
							/>
						</div>
						<div className="flex flex-col dualFold:flex-row justify-center gap-3 dualFold:gap-6 fold:w-full dualFold:w-[65%] md:w-[60%] lg:w-[50%] xl:w-[35%] mx-auto">
							<Button
								label="Download Now"
								className="text-white py-[8px] fold:py-2 s22:py-3 mx-auto w-[92%] fold:w-[80%] border-[1px] border-brandPrimary500 bg-brandPrimary500 font-semibold rounded text-[0.65rem] fold:text-[0.75rem] s22:text-[1rem] dualFold:w-[100%] md:w-[100%] lg:w-[85%] xl:w-[%] bigScreen:w-[15%] lg:hover:bg-transparent lg:hover:text-brandPrimary400 transition duration-300 ease-in-out] bigScreen:py-4 bigScreen:text-[1.5rem]"
							/>
							<Button
								label="Learn more"
								className="text-brandPrimary500 border-[1px] border-brandPrimary400 text-[0.65rem] fold:text-[0.75rem] s22:text-[1rem] py-2 fold:py-2 s22:py-[0.6875rem] w-full mx-auto fold:w-[80%] dualFold:w-[89%] md:w-[83%] lg:w-[80%] xl:w-[72%] px-6 rounded font-medium lg:hover:bg-brandPrimary400 lg:hover:text-white transition duration-300 ease-in-out]"
							/>
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
							<p className="text-center text-white/[0.4] font-bold text-base lg:text-xl bigScreen:text-[1.6rem]">
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
							textClassName="font-bold text-[0.75rem] fold:text-xl i11Pro:text-[1.25rem] text-white xl:text-[1.7rem] bigScreen:text-[2.2rem]"
							alt="An icon representing downloads"
							text="500+ Downloads"
							imgClass="md:w-[28px] lg:w-[32px]"
						/>
						<IconText
							className="lg:flex-row lg:items-center gap-2 fold:gap-4"
							src={User}
							imgClassName="bg-white"
							textClassName="font-bold text-[0.75rem] fold:text-xl i11Pro:text-[1.25rem] text-white xl:text-[1.7rem] bigScreen:text-[2.2rem]"
							alt="An icon representing downloads"
							text="403+ Active Users"
							imgClass="md:w-[28px] lg:w-[32px]"
						/>
						<IconText
							className="lg:flex-row lg:items-center gap-2 fold:gap-4"
							src={Stats}
							imgClassName="bg-white"
							textClassName="font-bold  text-[0.75rem] fold:text-xl i11Pro:text-[1.25rem] text-white xl:text-[1.7rem] bigScreen:text-[2.2rem]"
							alt="An icon representing downloads"
							text="8590+ Usage Statistics"
							imgClass="md:w-[28px] lg:w-[32px]"
						/>
					</div>
				</section>
				<section className="p-4 i13:p-[2.5rem] i13:pb-4 text-center md:py-[5rem] lg:px-[3.5rem] xl:px-[4rem] bigScreen:px-[6rem]">
					<Subheading
						classes="text-neutrals500 font-bold text-[0.75rem] s22:text-[1.25rem] mb-[1.5rem] md:hidden"
						content="Discover Hidden Talent Around the World Using Noted"
					/>
					<Subheading
						classes="text-neutrals500 font-bold text-[2rem] lg:text-[2.5rem] mb-[1.5rem] hidden md:block bigScreen:text-[3.5rem]"
						content="How it works!"
					/>
					<div className="grid dualFold:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 bigScreen:w-[92%] bigScreen:mx-auto">
						<IconText
							src={UserSearch}
							alt="Icon explaining how users can search for other users"
							text="Find any artists that your project could be missing"
							textClassName="font-semibold text-[0.6rem] fold:text-[1rem] md:font-bold fold:px-3 xl:px-4 md:text-[1.25rem] lg:text-[1.4rem] xl:text-[1.25rem] bigScreen:text-[2rem]"
							className="p-[0.8rem] fold:p-6 gap-4 fold:gap-6 lg:py-[2rem] xl:py-[3.5rem] flex flex-col items-center justify-center bg-white shadow-card rounded transition duration-500 lg:hover:shadow-cardHover"
							imgClassName="bg-brandPrimary50"
						/>
						<IconText
							src={People}
							alt="Icon explaining users can collaborate with other users"
							text="Collaborate and discuss potential ideas and workings"
							textClassName="font-semibold text-[0.6rem] fold:text-[1rem] md:font-bold fold:px-3 i13:px-0 i14Max:px-3 md:px-0 xl:px-2 md:text-[1.25rem] lg:text-[1.4rem] xl:text-[1.25rem] bigScreen:text-[2rem]"
							className="p-[0.8rem] fold:p-6 gap-4 fold:gap-6 lg:py-[2rem] xl:py-[3.5rem] flex flex-col items-center justify-center bg-white shadow-card rounded transition duration-500 lg:hover:shadow-cardHover"
							imgClassName="bg-brandPrimary50"
						/>

						<IconText
							src={Plus}
							alt="Icon explaining users can immediately start working with other users"
							text="Create your next body of work with your newly found artists"
							textClassName="font-semibold text-[0.6rem] fold:text-[1rem] md:font-bold md:text-[1.25rem] lg:text-[1.4rem] xl:px-1 xl:text-[1.25rem] bigScreen:text-[2rem]"
							className="p-[0.8rem] fold:p-6 gap-4 fold:gap-6 lg:py-[2rem] xl:py-[3.5rem] flex flex-col items-center justify-center bg-white shadow-card rounded transition duration-500 lg:hover:shadow-cardHover"
							imgClassName="bg-brandPrimary50"
						/>

						<IconText
							src={Repeat}
							alt="Icon explaining users can repeat the process whenever there's a project"
							text="Repeat the process whenever there's a project"
							textClassName="font-semibold text-[0.6rem] fold:text-[1rem] md:font-bold fold:px-3 i14Max:px-5 xl:px-0 md:text-[1.25rem] lg:text-[1.4rem] xl:text-[1.25rem] bigScreen:text-[2rem]"
							className="p-[0.8rem] fold:p-6 gap-4 fold:gap-6 lg:py-[2rem] xl:py-[3.5rem] flex flex-col items-center justify-center bg-white shadow-card rounded lg:col-start-2 xl:col-auto transition duration-500 lg:hover:shadow-cardHover"
							imgClassName="bg-brandPrimary50"
						/>
					</div>
				</section>
				<article
					ref={aboutRef}
					className="mt-4 fold:mt-0 bg-brandPrimary50 fold:bg-transparent fold:bg-wavyBgMobile md:bg-wavyBgDesktop bg-no-repeat bg-center bg-cover px-[1rem] fold:px-[1.875rem] py-[2.5rem] fold:py-[5.5rem] md:py-[7rem] md:px-[3rem]"
				>
					<Heading
						classes="text-neutrals500 text-center font-bold fold:text-[1.25rem] md:text-[2rem] lg:text-[2.5rem] bigScreen:text-[3.5rem]"
						coloredContent="Noted"
						firstContent="About"
					/>
					<div className="dualFold:flex flex-row justify-between gap-[4rem] mt-4 lg:w-[87%] lg:flex-row lg:mx-auto lg:mt-[2.4rem] lg:mr-[5rem] bigScreen:w-[70%] bigScreen:mx-auto">
						<Subheading
							classes="text-neutrals200 text-[0.6rem] fold:text-base text-center font-semibold dualFold:hidden"
							content={`Noted is a tool designed for connecting creators on both a local and global scale. Whether you are looking for a videographer to shoot your next video, a vocalist for your next album or new producer for a different sound, Noted will help you find the talent your project may be missing. To simply put it, Noted is a place for creators everywhere to search, collaborate, and create.`}
						/>
						<Subheading
							classes="hidden dualFold:block text-neutrals200 font-semibold md:pt-[2rem] md:text-[1.25rem] md:leading-[1.27] xl:leading-[1.36] md:text-neutrals500 md:w-[60%] lg:text-[1.25rem] lg:w-[57%] lg:pt-[3rem] lg:text-left xl:w-[56%] xl:text-[1.5rem] bigScreen:text-[1.5rem] bigScreen:w-[65%]"
							content={`Are you looking for an easy way to discover, listen to, and share music? Look no further than our music application! Our app allows you to stream the latest hits, explore new genres, and create personalized playlists. With over 50 million tracks to choose from, you’ll never run out of music to enjoy. Plus, our app is simple and intuitive to use, so you can find your favorite songs quickly and without hassle. Download now and start listening to music that you love!`}
						/>
						<Image
							className="hidden dualFold:block dualFold:w-[30%] xl:w-auto"
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
