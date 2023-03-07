import React from "react";
import Vcard from "../components/Vcard";
import Head from "next/head";

const Socials = () => {
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
			<div className="py-[1rem] w-full flex items-center justify-center max-w-[420px] md:h-screen md:mx-auto ">
				<Vcard />
			</div>
		</>
	);
};

export default Socials;
