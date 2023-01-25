import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";

export default function Home() {
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

			<main className="">
				<section className="bg-heroImg bg-no-repeat bg-cover bg-center h-[80vh] relative">
					<div className="h-full bg-overlay flex flex-col items-center justify-end pb-[2.5rem] px-4">
						<div className="flex flex-col gap-4 text-center mb-8">
							<h1 className="font-bold text-white text-[2rem] "><span className="">Connect</span> with <span className="text-brandPrimary500">creators</span> from everywhere across the globe</h1>
							<p className="text-neutrals200">Lorem ipsum dolor sit amet consectetur. Rhoncus pretium in sed blandit habitant nulla viverra. Sed et fermentum mattis volutpat viverra augue faucibus integer.</p>
						</div>
						<Button label="Download Now" className="text-white py-3 w-full border-[1px] border-brandPrimary500 bg-brandPrimary500 font-semibold rounded lg:hover:bg-transparent lg:hover:text-brandPrimary400 transition duration-300 ease-in-out]" />
					</div>
				</section>
			</main>
		</div>
	);
}
