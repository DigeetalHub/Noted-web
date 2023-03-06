import React, { useEffect, useRef, useState } from "react";
import Heading from "./Heading";
import Subheading from "./Subheading";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

const Form = () => {
	const inputs = [
		{
			label: "Name",
			name: "Name",
			type: "text",
			placeholder: "Name",
			errorMsg: `We'd really love to know your name so we can properly address you 😃`,
		},
		{
			label: "Email",
			name: "Email",
			type: "email",
			placeholder: "Email",
			pattern:
				/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			errorMsg: `Your email is required so we can get back to you 😉`,
			errorMsg2: `Please enter a valid email.`,
		},
		{
			label: "Phone",
			name: "Phone",
			type: "text",
			placeholder: "Phone",
			pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
			errorMsg: `Your phone number is also required so we can get back to you 🙂`,
			errorMsg2: `Please enter a valid phone number please. Numbers only and not less than 10 digits.`,
		},
	];

	const schema = yup.object({
		Name: yup.string().required(inputs[0].errorMsg),
		Email: yup.string().email().required(inputs[1].errorMsg).matches(inputs[1].pattern, "Please enter a valid email."),
		Phone: yup.string().required(inputs[2].errorMsg).matches(/^\d+$/, inputs[2].errorMsg2),
		Message: yup.string().required("We'd really love to hear from you. 😃").min(5, "Your message is too short. ❌"),
	});

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			Name: "",
			Email: "",
			Phone: "",
			Message: "",
		},
	});

	const [required, setRequired] = useState(false);

	useEffect(() => {
		if (errors.Name || errors.Email || errors.Phone || errors.Message) {
			setRequired(true);
		} else {
			setRequired(false);
		}
	}, [errors]);

	const enableButton = errors.Name || errors.Email || errors.Phone || errors.Message ? true : false;
	const url = "https://formspree.io/f/myyaeezz";
	const handleFormSubmit = (data) => {
		scrollToTop(0, 0);
		fetch(url, {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		})
			.then((res) => {
				if (res.status === 200) {
					toast.success("Message sent successfully. We'll get back to you as soon as possible. 😃", {
						autoClose: 2000,
						icon: "🚀",
					});
				} else {
					toast.error("Message not sent . Please try again.", { autoClose: 2000, icon: "🚀" });
				}
			})
			.catch((err) => {
				console.log(err);
				alert("Message not sent. Please try again. 😃");
			});

		reset();
	};

	return (
		<div className="bg-white py-[3.5rem] px-8 dualFold:px-[4rem] flex flex-col gap-[2.8rem] rounded-2xl shadow-form md:mx-auto lg:ml-auto lg:mr-[4rem] xl:mr-[5rem] i14Max:w-[75%] md:w-[68%] fold2Full:w-[60%] lg:w-[50%] xl:w-[45%] laptops:w-[42%] z-[2] relative">
			<div className="flex flex-col gap-3">
				<Heading classes={"text-black font-bold text-[2.5rem] i14Max:text-[3.2rem]"} firstContent={"Contact Us"} />
				<Subheading
					classes={"text-[1rem] leading-[1.4] text-gray-500 font-medium i14Max:text-[1.2rem]"}
					content={"Do you have a complaint or would like to make enquires? Send us a message"}
				/>
			</div>
			<form className="" onSubmit={handleSubmit(handleFormSubmit)}>
				<input type="text" name="_honey" className="hidden" />
				<input type="hidden" name="_captcha" value="false" />
				<input type="hidden" name="_cc" value="roland@digeetalhub.com,289volts@gmail.com" />
				<div className="flex flex-col gap-[2.5rem]">
					{inputs.map(({ label, name, type, placeholder }, index) => {
						return (
							<div key={index} className="flex flex-col relative ">
								<input
									{...register(name)}
									aria-invalid={errors[name] ? "true" : "false"}
									type={type}
									name={name}
									placeholder={placeholder}
									required={required}
									className={`border-b-inputBorder border-b-2 invalid:border-b-red-500 autofill:bg-white autofill:text-transparent
									 rounded-none p-[5px] focus:outline-none  peer placeholder-transparent transition-all w-full `}
								/>{" "}
								<span className="errorMsg text-red-500 text-sm mt-[3px] peer-invalid:block hidden">
									{errors[name]?.message}
								</span>
								<label
									htmlFor={name}
									className={`text-base font-semibold ${
										errors[name] ? "text-red-500" : "text-label peer-placeholder-shown:text-labe l"
									} transition-all duration-[400ms] peer-placeholder-shown:text-base peer-placeholder-shown:top-[0.35rem] peer-focus:-top-[1.2rem] peer-focus:-left-0  peer-focus:text-[0.875rem]  ${
										errors[name] ? "peer-focus:text-red-500" : "peer-focus:text-label"
									} absolute left-0 -top-[1.2rem]`}
								>
									{label}
								</label>
							</div>
						);
					})}
					<div className="flex flex-col gap-2">
						<label
							htmlFor="message"
							className={`text-base font-semibold peer-focus:text-[0.875rem] ${
								errors["Message"] ? "text-red-500" : "text-label peer-placeholder-shown:text-label"
							}
						`}
						>
							Message
						</label>
						<textarea
							className={`w-full border-b-2 border-b-inputBorder resize-none p-2 
							focus:outline-none
								 focus:border-b-2 focus:border-b-brandPrimary400 invalid:border-b-red-500
							} placeholder:text-[14px]`}
							name="Message"
							required={required}
							cols="30"
							rows={0}
							placeholder="Leave us your message and we'll get in touch with you as soon as possible."
							{...register("Message", {
								required: "This is process is incomplete without your message 🤝",
							})}
						></textarea>
						{errors.Message && <span className=" text-red-500 text-sm">{errors.Message?.message}</span>}
					</div>
				</div>
				<Button
					className="w-full py-3 font-semibold bg-brandPrimary500 disabled:bg-neutrals200 text-white mt-[3rem]"
					label="Send 🚀"
					disabled={enableButton}
				/>
			</form>
		</div>
	);
};

export default Form;
