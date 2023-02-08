import React from "react";
import ContactContent from "./ContactContent";
import Globe from "../public/assets/icons/globe.svg";
import Call from "../public/assets/icons/call.svg";
import Location from "../public/assets/icons/location.svg";

const ContactOverlay = () => {
	return (
		<div className="w-full bg-brandPrimary500 bg-opacity-[0.2] absolute z-[1] top-[10rem] left-0 py-[4.5rem] lg:pl-[4rem] xl:pl-[5rem] xl:py-[5rem] hidden lg:block">
			<div className="flex flex-col gap-[4.5rem]">
				<ContactContent icon={Call} tel="(123) 456-7890" heading="Call us" />
				<ContactContent icon={Location} text="Florida, USA" heading="Location" />
				<ContactContent icon={Globe} email="getnoted@notedmediagroup.com" heading="Mail us" />
			</div>
		</div>
	);
};

export default ContactOverlay;
