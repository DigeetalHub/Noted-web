import React from "react";
import Head from "next/head";
import Accordion from "../components/Accordion";
import { termsOfService } from "../data/data2";

const TermsOfService = () => {
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
			<main className="mt-[7rem] px-4 mx-auto dualFold:w-[80%]">
				<div className="text-center space-y-4 mb-[3.5rem]">
					<h1 className="text-[2rem] font-bold uppercase">TERMS OF SERVICE</h1>
					<h2 className="font-semibold">Effective Date: 01-03-2023</h2>
				</div>
				{termsOfService.map((item, index) => (
					<Accordion items={item} key={index} index={index} />
				))}
			</main>
		</div>
	);
};

export default TermsOfService;
