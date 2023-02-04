import React from 'react'
import Head from "next/head";
import Accordion from "../components/Accordion";
import Link from "next/link";
import { useToggle } from "../context/AccordionContext";
import data from "../data/data"

const PrivacyPage = () => {
	const { isActive, setIsActive } = useToggle();

	const { privacyPolicy } = data;

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
			<main className="mt-[7rem] px-4">
				<div className="text-center space-y-4 mb-[3.5rem]">
					<h1 className="text-[2rem] font-bold uppercase">Privacy Policy</h1>
					<h2 className="font-semibold">Effective Date: 01-03-2023</h2>
				</div>
				<div className="" onClick={() => setIsActive(!isActive)}>
					<div className="relative">
						<h2 className="font-bold text-xl mb-4">Introduction</h2>
						<div className="absolute r-0 h-[15px] w-[15px] right-6 top-[13px]">
							<div className="w-[15px] h-[2px] bg-black rotate-90"></div>
							<div className="w-[15px] h-[2px] bg-black -mt-[2px]"></div>
						</div>
					</div>
					{isActive && (
						<p className="text-sm">
							This privacy policy (“Policy”) describes how Noted Media Group in Florida (“Company,” “we,” and “our”)
							processes, collects, uses and shares personal data when using this website{" "}
							<Link className="border-b-brandPrimary500 border-b-2 text-blue-400" href="http://notedmediagroup.com">
								http://notedmediagroup.com
							</Link>{" "}
							(the “Website”). Please read the following information carefully to understand our practices regarding
							your personal data and how we will process data.
						</p>
					)}
				</div>
				{privacyPolicy.map((item , index) => (
					<Accordion items={item} key={index} />
				))}
			</main>
		</div>
	);
};

export default PrivacyPage;
