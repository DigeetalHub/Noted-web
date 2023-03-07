import React from "react";
import Button from "./Button";

const DownloadNow = ({ classes }) => {
	return (
		<section className="mt-[2.5rem] px-2 md:px-0 md:mt-[5.5rem]">
			<div
				className={`px-3 py-5 fold:py-[2.5rem] fold:px-4 bg-download flex flex-col gap-4 fold:gap-6 text-white text-center rounded dualFold:w-[80%] dualFold:mx-auto dualFold:rounded-2xl dualFold:pt-[3rem] dualFold:pb-[4rem] dualFold:gap-[2.2rem] lg:w-[80%] lg:pt-[3.5rem] lg:pb-[6rem] lg:gap-[3.8rem] bigScreen:w-[65%] bigScreen:gap-[2.5rem] ${classes}`}
			>
				<h2 className="font-bold text-[0.875rem] fold:text-[1.25rem] s22:text-[1.5rem] dualFold:text-[2.5rem] lg:text-[3rem]">Download our app</h2>
				<Button
					label="Download"
					className="font-semibold bg-brandPrimary500 py-1 text-[0.75rem] fold:text-base fold:py-2 s22:py-3 rounded w-full fold:w-[80%] s22:w-full dualFold:w-[50%] mx-auto dualFold:rounded-2xl lg:w-[45%] xl:w-[30%] lg:hover:bg-transparent lg:hover:text-white border-[1px] border-brandPrimary400 transition duration-500"
				/>
			</div>
		</section>
	);
};

export default DownloadNow;
