import React, { useEffect, useRef, useState } from "react";
import Heading from "./Heading";
import Subheading from "./Subheading";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Form = () => {
	const inputs = [
		{
			label: "Name",
			name: "name",
			type: "text",
			placeholder: "Name",
			errorMsg: `We'd really love to know your name so we can properly address you 😃`,
		},
		{
			label: "Email",
			name: "email",
			type: "email",
			placeholder: "Email",
			pattern:
				/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			errorMsg: `Your email is required so we can get back to you 😉`,
			errorMsg2: `Please enter a valid email.`,
		},
		{
			label: "Phone",
			name: "phone",
			type: "text",
			placeholder: "Phone",
			pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
			errorMsg: `Your phone number is also required so we can get back to you 🙂`,
			errorMsg2: `Please enter a valid phone number please. Numbers only and not less than 10 digits.`,
		},
	];

	const schema = yup.object({
		name: yup.string().required(inputs[0].errorMsg),
		email: yup.string().email().required(inputs[1].errorMsg).matches(inputs[1].pattern, inputs[1].errorMsg2),
		phone: yup.string().required(inputs[2].errorMsg).matches(/^\d+$/, inputs[2].errorMsg2).,
		message: yup.string().required(`Leave us your message and we'll get in touch with you as soon as possible. 😃`).min(5, `Your message is too short. 😃`)
	});

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			message: "",
		},
	});

	const [required, setRequired] = useState(false);

	useEffect(() => {
		if (errors.name || errors.email || errors.phone || errors.message) {
			setRequired(true);
		} else {
			setRequired(false);
		}
	}, [errors]);

	const enableButton = errors.name || errors.email || errors.phone || errors.message ? true : false;

	const handleFormSubmit = (data) => {
		console.log(data);
		reset();
	};

	return (
		<div className="bg-white py-[3.5rem] px-8 flex flex-col gap-[2.5rem] rounded-2xl shadow-form">
			<div className="flex flex-col gap-4">
				<Heading classes={"text-black font-bold text-[2rem]"} firstContent={"Contact Now"} />
				<Subheading
					classes={"text-base"}
					content={"Do you have a complaint or you would like to make enquires, send us a message"}
				/>
			</div>
			<form className="" onSubmit={handleSubmit(handleFormSubmit)}>
				<div className="flex flex-col gap-[2.5rem]">
					{inputs.map(({ label, name, type, placeholder }, index) => {
						return (
							<div key={index} className="flex flex-col relative">
								<input
									{...register(name)}
									aria-invalid={errors.name ? "true" : "false"}
									type={type}
									name={name}
									placeholder={placeholder}
									required={required}
									className={`border-b-inputBorder border-b-2 invalid:border-b-red-500 autofill:bg-white autofill:text-transparent
									 rounded-none py-[5px] focus:outline-none  peer placeholder-transparent transition-all`}
								/>{" "}
								<span className="errorMsg text-red-500 text-sm mt-[3px] peer-invalid:block hidden">
									{errors[name]?.message}
								</span>
								<label
									htmlFor={name}
									className="text-sm font-semibold text-gray-500 transition-all duration-[400ms] peer-placeholder-shown:text-base  peer-placeholder-shown:top-[0.35rem] peer-placeholder-shown:text-label peer-focus:-top-[1.2rem] peer-focus:-left-0 peer-focus:text-label peer-focus:text-sm absolute left-0 -top-[1.2rem]"
								>
									{label}
								</label>
							</div>
						);
					})}
					<div className="flex flex-col gap-2">
						<label htmlFor="message" className="text-base font-semibold text-gray-500 ">
							Message
						</label>
						<textarea
							className={`w-full border-2 rounded-md border-inputBorder resize-none p-2 
							focus:outline-none
								 focus:border-2 focus:border-brandPrimary400 invalid:border-red-500
							} placeholder:text-[14px]`}
							name="message"
							id="message"
							required={required}
							cols="30"
							rows="8"
							placeholder="Leave us your message and we'll get in touch with you as soon as possible."
							{...register("message", {
								required: "This is process is incomplete without your message 🤝",
							})}
						></textarea>
						{errors.message && <span className=" text-red-500 text-sm">{errors.message?.message}</span>}
					</div>
				</div>
				<Button
					className="w-full py-3 font-semibold bg-brandPrimary500 disabled:bg-neutrals200 text-white mt-[3rem]"
					disabled={enableButton ? true : false}
					label="Send 🚀"
				/>
			</form>
		</div>
	);
};

export default Form;
