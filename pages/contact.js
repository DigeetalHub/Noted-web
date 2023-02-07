import React from "react";
import Head from "next/head";
import Link from "next/link";
import Form from "../components/Form";

const Contact = () => {
	return (
		<div>
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
     
      <main className="">
        <section className=" h-full bg-contactBgMobile bg-no-repeat bg-cover bg-center">
          <div className="mb-[5rem] bg-overlay py-[5rem] h-full px-[0.875rem] ">
			<Form />
		  </div>
        </section>
      </main>
		</div>
	);
};

export default Contact;
