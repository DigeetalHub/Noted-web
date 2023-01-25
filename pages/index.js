import Head from "next/head";
import { useState, useContext } from "react";
import Image from "next/image";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import Mouse from "../public/assets/icons/mouse.svg";
import { ScrollContext } from "../context/ScrollContext";
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

export default function Home() {
	const { scroll, scrollNav } = useContext(ScrollContext);

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
								firstContent={"Connect with"}
								endContent={"from everywhere across the globe"}
								coloredContent={"creators"}
								classes="font-bold text-white text-[2rem] leading-[1.2] md:hidden"
							/>
							<Heading
								firstColoredContent={"Discover"}
								endContent={"hidden creatives around the world using Noted"}
								classes="font-bold text-white text-[2.5rem] bigScreen:text-[3.5rem] leading-[1.2] hidden md:block"
							/>
							<Subheading
								classes="text-neutrals200 leading-[25.5px] md:hidden"
								content="Lorem ipsum dolor sit amet consectetur. Rhoncus pretium in sed blandit habitant nulla viverra. Sed et
								fermentum mattis volutpat viverra augue faucibus integer."
							/>
							<Subheading
								classes="text-neutrals100 leading-[25.5px] bigScreen:text-[2rem] bigScreen:leading-[1.3] bigScreen:px-[12rem] hidden md:block"
								content="Have unrestricted access to as many talents as you want, with never-ending conversations."
							/>
						</div>
						<Button
							label="Download Now"
							className="text-white py-3 w-full border-[1px] border-brandPrimary500 bg-brandPrimary500 font-semibold rounded md:w-1/2 lg:w-[35%] xl:w-[25%] bigScreen:w-[15%] lg:hover:bg-transparent lg:hover:text-brandPrimary400 transition duration-300 ease-in-out] bigScreen:py-4 bigScreen:text-[1.5rem]"
						/>
					</div>
					<div className="w-full hidden md:flex flex-col justify-center gap-3 absolute bottom-[1rem] z-10">
						<button className="mx-auto" onClick={scroll}>
							<Image
								src={Mouse}
								alt="Clickable icon to scroll down to see main content"
								className="animate-bounce-slow motion-safe:animate-bounce-slower"
							/>
						</button>
						<p className="text-center text-white/[0.4] font-bold text-xl bigScreen:text-[1.6rem]">
							Scroll for more info
						</p>
					</div>
				</section>
				<section className="bg-brandPrimary400 p-4 md:p-[2.5rem] lg:p-[3rem] xl:p-[5rem]">
					<div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-6  bigScreen:w-[90%] bigScreen:mx-auto">
						<IconText
							className="lg:flex-row lg:items-center gap-4"
							src={DocumentIcon}
							imgClassName="bg-white"
							textClassName="font-bold text-[1.25rem] text-white xl:text-[2rem] bigScreen:text-[2.2rem]"
							alt="An icon representing downloads"
							text="500+ Downloads"
						/>
						<IconText
							className="lg:flex-row lg:items-center gap-4"
							src={User}
							imgClassName="bg-white"
							textClassName="font-bold text-[1.25rem] text-white xl:text-[2rem] bigScreen:text-[2.2rem]"
							alt="An icon representing downloads"
							text="403+ Active Users"
						/>
						<IconText
							className="lg:flex-row lg:items-center gap-4"
							src={Stats}
							imgClassName="bg-white"
							textClassName="font-bold text-[1.25rem] text-white xl:text-[2rem] bigScreen:text-[2.2rem]"
							alt="An icon representing downloads"
							text="8590+ Usage Statistics"
						/>
					</div>
				</section>
				<section className="p-[2.5rem] pb-4 text-center md:py-[5rem] lg:px-[3.5rem] xl:px-[4rem] bigScreen:px-[6rem]">
					<Subheading
						classes="text-neutrals500 font-bold text-[1.25rem] mb-[1.5rem] md:hidden"
						content="Discover Hidden Talent Around the World Using Noted"
					/>
					<Subheading
						classes="text-neutrals500 font-bold text-[2.5rem] mb-[1.5rem] hidden md:block bigScreen:text-[3.5rem]"
						content="How it works!"
					/>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 bigScreen:w-[92%] bigScreen:mx-auto">
						<IconText
							src={UserSearch}
							alt="Icon explaining how users can search for other users"
							text="Find any artists that your project could be missing"
							textClassName="font-semibold md:font-bold xl:px-4 md:text-[1.25rem] lg:text-[1.4rem] xl:text-[1.5rem] bigScreen:text-[2rem]"
							className="p-6 gap-6 bg-white shadow-card rounded"
							imgClassName="bg-brandPrimary50"
						/>
						<IconText
							src={People}
							alt="Icon explaining users can collaborate with other users"
							text="Collaborate and discuss potential ideas and workings"
							textClassName="font-semibold md:font-bold xl:px-2 md:text-[1.25rem] lg:text-[1.4rem] xl:text-[1.5rem] bigScreen:text-[2rem]"
							className="p-6 gap-6 bg-white shadow-card rounded"
							imgClassName="bg-brandPrimary50"
						/>
						<IconText
							src={Plus}
							alt="Icon explaining users can immediately start working with other users"
							text="Create your next body of work with your newly found artists"
							textClassName="font-semibold md:font-bold md:text-[1.25rem] lg:text-[1.4rem] xl:text-[1.5rem] bigScreen:text-[2rem]"
							className="p-6 gap-6 bg-white shadow-card rounded"
							imgClassName="bg-brandPrimary50"
						/>
						<IconText
							src={Repeat}
							alt="Icon explaining users can repeat the process whenever there's a project"
							text="Repeat the process whenever there's a project"
							textClassName="font-semibold md:font-bold xl:px-4 md:text-[1.25rem] lg:text-[1.4rem] xl:text-[1.5rem] bigScreen:text-[2rem]"
							className="p-6 gap-6 bg-white shadow-card rounded lg:col-start-2 xl:col-auto"
							imgClassName="bg-brandPrimary50"
						/>
					</div>
				</section>
				<article className=" bg-wavyBgMobile md:bg-wavyBgDesktop bg-no-repeat bg-center bg-cover px-[1.875rem] py-[5.5rem] md:py-[7rem] md:px-[3rem]">
					<Heading
						classes="text-neutrals500 text-center font-bold md:text-[2rem] lg:text-[2.5rem] bigScreen:text-[3.5rem]"
						coloredContent="Noted"
						firstContent="About"
					/>
					<div className="md:flex flex-row justify-between gap-[4rem] mt-4 lg:w-[87%] lg:flex-row lg:mx-auto lg:mt-[2.4rem] lg:mr-[5rem] bigScreen:w-[70%] bigScreen:mx-auto">
						<Subheading
							classes="text-neutrals200 font-semibold md:hidden"
							content={`Noted is a tool designed for connecting creators on both a local and global scale. Whether you are looking for a videographer to shoot your next video, a vocalist for your next album or new producer for a different sound, Noted will help you find the talent your project may be missing. To simply put it, Noted is a place for creators everywhere to search, collaborate, and create.`}
						/>
						<Subheading
							classes="text-neutrals200 font-semibold md:pt-[2rem] md:text-[1rem] md:text-neutrals500 md:text-justify md:w-[58%] lg:text-[1.25rem] lg:w-[57%] lg:pt-[3rem] lg:text-left xl:w-[60%] xl:text-[1.5rem] bigScreen:text-[1.5rem] bigScreen:w-[65%]"
							content={`Are you looking for an easy way to discover, listen to, and share music? Look no further than our music application! Our app allows you to stream the latest hits, explore new genres, and create personalized playlists. With over 50 million tracks to choose from, you’ll never run out of music to enjoy. Plus, our app is simple and intuitive to use, so you can find your favorite songs quickly and without hassle. Download now and start listening to music that you love!`}
						/>
						<Image
							class="hidden md:block md:w-[30%] xl:w-auto"
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
