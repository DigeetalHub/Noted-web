import React, { useEffect, useState } from "react";
import Button from "./Button";
import Image from "next/image";
import appScreens from "../public/assets/images/appScreens1.webp";

const DownloadNow = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [disabled, setDisabled] = useState(false);

	useEffect(() => {
		if (name && email) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [name, email]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setName("");
		setEmail("");
	};
	return (
		<section className="bg-neutrals500 pt-[3rem] px-4">
			<div className="text-center text-brandPrimary50 space-y-6">
				<h2 className="leading-[1.2] font-bold text-[2rem]">Get started to enjoy an amazing experience</h2>
				<p className="font-semibold">
					Join our waiting list for the upcoming app. Experience a personalized platform connecting you with like-minded
					individuals. Be the first to know when it&apos;s available – sign up now!
				</p>
				<form className="text-left flex flex-col gap-5" onSubmit={handleSubmit}>
					<div className="flex flex-col gap-2">
						<label htmlFor="name" className="font-medium">
							Name
						</label>
						<input
							className="p-3 bg-brandPrimary50 rounded-[4px] text-neutrals900"
							type="text"
							name="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder="Please Enter your name..."
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="email" className="font-medium">
							Email
						</label>
						<input
							className="p-3 bg-brandPrimary50 rounded-[4px] text-neutrals900"
							type="text"
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Please Enter your emaail..."
						/>
					</div>
					<div className="">
						<Button
							disabled={disabled}
							label="Sign Up"
							className="enabled:bg-brandPrimary500 disabled:bg-neutrals200 px-6 py-[11px] rounded-md font-medium mt-2"
						/>
					</div>
				</form>
			</div>
			<div className="relative mt-[5rem] flex justify-center">
				<div className="absolute top-1/2  w-[390px] aspect-square translate-y-[-50%] bg-brandPrimary100/[0.1] blur-[95.5px] rounded-full"></div>
				<Image src={appScreens} alt="the app screens showing different parts of the app" className="z-[2] translate-x-[-0.7rem]" />
			</div>
		</section>
	);
};

export default DownloadNow;
