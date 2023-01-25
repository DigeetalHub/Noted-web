import Head from "next/head";
import Image from "next/image";

export default function Home() {
	return (
		<div className="">
			<Head>
				<title>Noted | For Photographers, Content Creators, Musicians, Videographers and Creatives</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Connect and Collaborate with creators from everywhere across the globe. Discover how!" />
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

			<main className="">
				<h1 className="text-4xl">Hello World</h1>
			</main>
		</div>
	);
}
