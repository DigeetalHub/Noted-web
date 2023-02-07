import React, { useState } from "react";
import Heading from "./Heading";
import Subheading from "./Subheading";

const Form = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});
	const [emptyValues, setIsEmptyValues] = useState({
		name: false,
		email: false,
		phone: false,
		message: false,
	});

	const inputs = [
		{
			label: "Name",
			name: "name",
			type: "text",
			placeholder: "Name",
			required: true,
			errorMsg: `We'd really love to know your name so we can properly address you 😃`,
		},
		{
			label: "Email",
			name: "email",
			type: "email",
			placeholder: "Email",
			required: true,
			errorMsg: `Your email is required so we can get back to you 😉`,
		},
		{
			label: "Phone",
			name: "phone",
			type: "tel",
			placeholder: "Phone",
			required: true,
			errorMsg: `Your phone number is also required so we can get back to you 🙂`,
		},
	];

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (formData.name === "" || formData.email === "" || formData.phone === "") {
			setIsEmptyValues({
				name: formData.name === "" ? true : false,
				email: formData.email === "" ? true : false,
				phone: formData.phone === "" ? true : false,
				message: formData.message === "" ? true : false,
			});
		}
		console.log(formData);
	};

	return (
		<div className="bg-white py-[3.5rem] px-6 flex flex-col gap-[2.5rem]">
			<div className="flex flex-col gap-4">
				<Heading classes={"text-black font-bold text-[2rem]"} firstContent={"Contact Now"} />
				<Subheading
					classes={"text-sm"}
					content={"Do you have a complaint or you would like to make enquires, send us a message"}
				/>
			</div>
			<form className="" onSubmit={handleSubmit}>
				<div className="flex flex-col gap-[2.5rem]">
					{inputs.map(({ label, name, type, required, placeholder, errorMsg }, index) => {
						return (
							<div key={index} className="flex flex-col relative">
								<input
									type={type}
									name={name}
									id={name}
									placeholder={placeholder}
									required={required}
									value={formData[name]}
									className="border-b-2 border-b-inputBorder rounded-none py-[5px] focus:outline-none focus:border-b-2 focus:border-b-brandPrimary400 peer placeholder-transparent transition-all"
									onChange={handleChange}
								/>{" "}
								<label
									htmlFor={name}
									className="text-sm font-semibold text-gray-500 transition-all duration-[400ms] peer-placeholder-shown:text-base  peer-placeholder-shown:top-[0.35rem] peer-placeholder-shown:text-label peer-focus:-top-[1.2rem] peer-focus:-left-0 peer-focus:text-label peer-focus:text-sm absolute left-0 -top-[1.2rem]"
								>
									{label}
								</label>
								{emptyValues[name] && <span className=" text-red-500 text-sm mt-[3px]">{errorMsg}</span>}
							</div>
						);
					})}
					<div className="flex flex-col gap-2">
						<label htmlFor="message" className="text-base font-semibold text-gray-500 ">
							Message
						</label>
						<textarea
							className="w-full border-2 rounded border-b-inputBorder resize-none p-2"
							name={formData.message}
							id="message"
							cols="30"
							rows="8"
							value={formData.message}
							onChange={handleChange}
						></textarea>
						{emptyValues.message && (
							<span className=" text-red-500 text-sm">This is not complete without your message </span>
						)}
					</div>
				</div>
			</form>
		</div>
	);
};

export default Form;
