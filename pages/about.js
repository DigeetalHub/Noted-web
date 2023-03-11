import React from "react";
import Link from "next/link";
import FeaturesCard from "../components/FeaturesCard";
import { missionVisionData, valuesData } from "../data/cardsData";
import ValueCard from "../components/ValueCard";

const About = () => {
	return (
		<>
			<section className="bg-heroImg bg-no-repeat bg-cover bg-center h-auto  md:h-screen relative">
				<div className="h-full bg-overlay flex flex-col items-center justify-end fold:px-4 md:justify-center">
					<div className="flex flex-col gap-7 pb-[3.2rem] text-center text-white dualFold:w-[60%] md:w-[79%] fold2Full:w-[82%] xl:w-[60.5%] laptops:w-[65%] bigScreen:w-[60%] pt-[8rem]">
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
						<p className="text-[1.5rem] font-bold">
							Join us today and take the first step towards achieving your creative ambitions!
						</p>
					</div>
				</div>
			</section>
			<section className="bg-brandPrimary50">
				<div className="py-[4rem] px-4 text-center">
					<h2 className="font-bold text-[2rem] mb-[2rem]">Mission / Vision</h2>
					<div className="flex flex-col gap-6 text-left">
						{missionVisionData.map(({ image, heading, num, desc }) => (
							<FeaturesCard key={num} image={image} heading={heading} desc={desc} alt={num} />
						))}
					</div>
				</div>
			</section>
			<section className="py-[4rem] px-4">
				<div className="">
					<div className="">
						_<h2 className="font-bold text-[2rem] text-center mb-[1.7rem]">Our Core Values</h2>
						<p className="mb-4">
							Defining our core values is essential to our success. They guide our decisions, shape our culture, and
							define who we are.
						</p>
						<p className="">Here are our core values below</p>
					</div>
					<div className="flex flex-col gap-7 text-left">
						{valuesData.map(({ image, heading, num, desc }) => (
							<ValueCard key={num} image={image} heading={heading} desc={desc} alt={heading} />
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
