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
			<div className="h-screen w-full flex items-center justify-center">
				<Vcard />
			</div>
		</>
	);
};

export default Socials;
