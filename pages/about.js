import React from "react";
import Link from "next/link";
import FeaturesCard from "../components/FeaturesCard";
import { missionVisionData, valuesData } from "../data/cardsData";
import ValueCard from "../components/ValueCard";
import { motion as m } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import arrow from "../public/assets/icons/arrow.svg"

const About = () => {
	
	return (
		<>
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
			<section className="bg-heroImg bg-no-repeat bg-cover bg-center relative">
				<div className="h-full bg-overlay flex flex-col items-center justify-end fold:px-4 md:justify-center">
					<div className="flex flex-col gap-7 pb-[3.2rem] text-center text-white dualFold:w-[60%] md:w-[80%] fold2Full:w-[80%] xl:w-[60.5%] laptops:w-[65%] bigScreen:w-[60%] pt-[8rem]">
						<h1 className="font-bold text-[2rem]">
							Welcome to <span className="text-brandPrimary500">Noted Media</span>
						</h1>
						<p className="text-[1.25rem] font-medium">
							Our platform is specifically designed to cater to artists, videographers, photographers, producers, and
							content creators who are looking to showcase their portfolios and network with like-minded individuals.
						</p>

						<p className="text-[1.25rem] font-medium">
							We understand that the creative industry is highly competitive and that finding work and building a brand
							can be a daunting task. That&apos;s why we&apos;ve made it our mission to create a streamlined and
							efficient marketplace for creative professionals.
						</p>

						<p className="text-[1.25rem] font-medium">
							With our user-friendly tools and seamless communication features, we facilitate collaboration between
							clients and creatives, making it easier for our users to find work, build their brand, and grow their
							career. At Noted Media, we continuously strive to improve our platform to meet the evolving needs of our
							users.
						</p>
						<p className="text-[1.5rem] font-bold md:w-[80%] mx-auto">
							Join us today and take the first step towards achieving your creative ambitions!
						</p>
					</div>
				</div>
			</section>
			<section className="bg-brandPrimary50">
				<div className="py-[4rem] px-4 text-center md:w-[90%] mx-auto md:gap-5xl:w-[80%]">
					<h2 className="font-bold text-[2rem] mb-[2rem]">Mission / Vision</h2>
					<div className="flex flex-col gap-6 text-left md:flex-row justify-center ">
						{missionVisionData.map(({ image, heading, num, desc }) => (
							<FeaturesCard key={num} image={image} heading={heading} desc={desc} alt={num} />
						))}
					</div>
				</div>
			</section>
			<section className="py-[4rem] px-4">
				<div className="md:w-[90%] mx-auto md:flex md:gap-5 justify-between xl:w-[80%]">
					<div className="md:w-[50%] md:mt-8 lg:w-[35%]">
						_<h2 className="font-bold text-[2rem] text-center mb-[1.7rem] md:text-left">Our Core Values</h2>
						<p className="mb-4">
							Defining our core values is essential to our success. They guide our decisions, shape our culture, and
							define who we are.
						</p>
						<p className="">Here are our core values <span className="md:hidden">below</span> <Image className="ml-4 hidden md:inline" src={arrow} alt="" /> </p>
					</div>
					<m.div className="scroll md:w-[58%] md:p-4 overflow-hidden lg:w-[50%] xl:w-[67%]">
						<m.div
							
							className="scroll scroll-p-4 md:p-4 py-4  md:overflow-x-scroll flex flex-col gap-7 text-left md:flex-row snap-x w-full"
						>
							{valuesData.map(({ image, heading, num, desc }) => (
								<ValueCard key={num} image={image} heading={heading} desc={desc} alt={heading} />
							))}
						</m.div>
					</m.div>
				</div>
			</section>
		</>
	);
};

export default About;
