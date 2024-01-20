import { yupResolver } from "@hookform/resolvers/yup";
import Head from "next/head";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Button from "../components/Button";
import ContactOverlay from "../components/ContactOverlay";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import { newsletterSchema as schema } from "../lib/validation";

const Newsletter = () => {
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
  ];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema(inputs)),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const handleFormSubmit = async (data) => {
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const res = await response.json();

      if (response?.ok) {
        toast.success(res.message, {
          autoClose: 2500,
          icon: "🚀",
        });
        reset();
      } else {
        toast.error(res.message, {
          autoClose: 2500,
        });
      }
    } catch (error) {
      toast.error("Message not sent . Please try again.", {
        autoClose: 2500,
      });
    }
  };
  return (
    <div className="relative">
      <Head>
        <title>
          Noted | For Photographers, Content Creators, Musicians, Videographers
          and Creatives
        </title>
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

      <>
        <ContactOverlay />
        <section className=" h-full bg-contactBgMobile bg-cover bg-center bg-no-repeat md:bg-contactBgDesktop ">
          <div className=" h-full bg-overlay py-[5rem] px-[0.875rem] pt-[6rem] i14Max:pt-[6.5rem] ">
            <div className="relative z-[2] flex flex-col gap-[2.8rem] rounded-2xl bg-white py-[2.5rem] px-8 shadow-form i14Max:w-[75%] dualFold:px-[4rem] md:mx-auto md:w-[68%] fold2Full:w-[60%] lg:ml-auto lg:mr-[4rem] lg:w-[50%] xl:mr-[5rem] xl:w-[45%] laptops:w-[42%]">
              <div className="flex flex-col gap-3">
                <Heading
                  classes={
                    "text-black font-bold text-[2.2rem] i14Max:text-[2.8rem]"
                  }
                  firstContent={"Get our newsletters"}
                />
                <Subheading
                  classes={
                    "text-[1rem] leading-[1.4] text-gray-500 font-medium i14Max:text-[1.2rem]"
                  }
                  content={
                    "Be the first to know whenever we have juicy news and content to step up your creative game."
                  }
                />
              </div>{" "}
              <form className="" onSubmit={handleSubmit(handleFormSubmit)}>
                <div className="flex flex-col gap-8">
                  {inputs.map(({ label, name, type, placeholder }, index) => {
                    return (
                      <div key={index} className="relative flex flex-col ">
                        <input
                          {...register(name)}
                          aria-invalid={errors[name] ? "true" : "false"}
                          type={type}
                          name={name}
                          placeholder={placeholder}
                          className={`peer w-full rounded-none border-b-2 border-b-inputBorder
									 p-[5px] placeholder-transparent transition-all  autofill:bg-white autofill:text-transparent invalid:border-b-red-500 focus:outline-none `}
                        />{" "}
                        {errors[name] && (
                          <span className="errorMsg mt-[3px] text-sm text-red-500 peer-invalid:block">
                            {errors[name]?.message}
                          </span>
                        )}
                        <label
                          htmlFor={name}
                          className={`text-base font-semibold ${
                            errors[name]
                              ? "text-red-500"
                              : "peer-placeholder-shown:text-labe l text-label"
                          } transition-all duration-[400ms] peer-placeholder-shown:top-[0.35rem] peer-placeholder-shown:text-base peer-focus:-top-[1.2rem] peer-focus:-left-0  peer-focus:text-[0.875rem]  ${
                            errors[name]
                              ? "peer-focus:text-red-500"
                              : "peer-focus:text-label"
                          } absolute left-0 -top-[1.2rem]`}
                        >
                          {label}
                        </label>
                      </div>
                    );
                  })}
                </div>
                <Button
                  className="mt-[3rem] w-full bg-brandPrimary500 py-3 font-semibold text-white disabled:bg-neutrals200"
                  label="Send 🚀"
                  // disabled={enableButton}
                />
              </form>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default Newsletter;
