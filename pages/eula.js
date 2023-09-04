import React from 'react';
import Head from 'next/head';
import Accordion from '../components/Accordion';
import { eula } from '../data/eula';

const Eula = () => {
	return (
		<div className="">
			<Head>
				<title>Noted | For Photographers, Content Creators, Musicians, Videographers and Creatives</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
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
					<h1 className="text-[2rem] font-bold uppercase">End-User License Agreement (EULA)</h1>
					<h2 className="font-semibold">Effective Date: 01-03-2023</h2>
				</div>
				<p className="mb-5">
					Please read this End-User License Agreement (&apos;Agreement&apos;) carefully before using Noted (&apos;the
					App&apos;). This Agreement is a legally binding contract between you (&apos;User&apos; or &apos;You&apos;) and
					Noted Media Group (&apos;Company&apos; or &apos;We&apos;). By downloading, installing, or using the App, you
					agree to be bound by the terms and conditions of this Agreement. If you do not agree to these terms, do not
					use the App.
				</p>

				{eula.map((item, index) => (
					<Accordion
						items={item}
						key={index}
						index={index}
					/>
				))}
				<p className="mt-5 mb-[4rem]">
					By using the App, you acknowledge that you have read and understood this Agreement and agree to be bound by
					its terms and conditions.
				</p>
			</main>
		</div>
	);
};

export default Eula;
