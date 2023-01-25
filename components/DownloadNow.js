import React from "react";
import Button from "./Button";

const DownloadNow = ({ classes}) => {
	return (
		<section className="mt-[2.5rem] px-2 md:mt-[4.5rem]">
			<div className={`px-4 py-[2.5rem] bg-download flex flex-col gap-6 text-white text-center rounded md:w-[80%] ${classes}`}>
				<h2 className="font-bold text-[1.5rem]">Download our app now</h2>
				<Button label="Download" className="font-semibold bg-brandPrimary500 py-3 rounded" />
			</div>
		</section>
	);
};

export default DownloadNow;
