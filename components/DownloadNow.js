import React from "react";
import Button from "./Button";

const DownloadNow = ({ classes }) => {
	return (
		<section className="mt-[2.5rem] px-2 md:px-0 md:mt-[5.5rem]">
			<div
				className={`px-4 py-[2.5rem] bg-download flex flex-col gap-6 text-white text-center rounded md:w-[80%] md:mx-auto md:rounded-4k md:pt-[3rem] md:pb-[4rem] md:gap-[2.2rem] lg:w-[82%] lg:pt-[3.5rem] lg:pb-[6rem] lg:gap-[3.8rem] 4k:w-[65%] 4k:gap-[2.5rem] ${classes}`}
			>
				<h2 className="font-bold text-[1.5rem] md:text-[2.5rem] lg:text-[3rem]">Download our app now</h2>
				<Button
					label="Download"
					className="font-semibold bg-brandPrimary500 py-3 rounded md:w-[50%] md:mx-auto md:rounded-4k lg:w-[45%] xl:w-[30%]"
				/>
			</div>
		</section>
	);
};

export default DownloadNow;
