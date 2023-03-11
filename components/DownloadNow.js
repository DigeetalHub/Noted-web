import React, { useEffect, useState } from "react";
import Button from "./Button";
import Image from "next/image";
import appScreens from "../public/assets/images/appScreens1.webp";
import { supabase } from "../utils/supabaseClient";
import { toast } from "react-toastify";

const DownloadNow = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (name && email) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, email]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //validate email with regex
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      setMessage("Please enter a valid email address");
      return;
    } else {
      setLoading(true);
      const { error } = await supabase.from("waitlist").insert({ name, email });
      if (error) {
        setMessage(error.message);
      } else {
        setMessage();
        toast.success(
          "Thank you for registration! We will be in touch with you soon 😃",
          {
            autoClose: 5000,
            icon: "🚀",
          }
        );
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [message]);

  return (
    <section className="">
      <div className="space-y-6 text-center text-brandPrimary50">
        <h2 className="leading-[1.2] font-bold text-[2rem] lg:text-[3rem] lg:w-[80%] lg:mx-auto">
          Get started to enjoy an amazing experience
        </h2>
        <p className="font-semibold lg:w-[70%] mx-auto">
          Join our waiting list for the upcoming app. Experience a personalized
          platform connecting you with like-minded individuals. Be the first to
          know when it&apos;s available &#8211; sign up now!
        </p>

        <div className="my-3 text-brandPrimary500">{message}</div>
        <div className="pt-5">
          <form
            className="flex flex-col w-full gap-5 text-left md:flex-row md:gap-4 md:items-end md:justify-center xl:w-justify-between"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="font-medium">
                Name
              </label>
              <input
                className="p-3 bg-brandPrimary50 rounded-[4px] text-neutrals900 w-full"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name..."
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="font-medium">
                Email
              </label>
              <input
                className="p-3 bg-brandPrimary50 rounded-[4px] text-neutrals900 w-full"
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email..."
              />
            </div>
            <div className="">
              <Button
                disabled={disabled || loading}
                label="Sign Up"
                className="enabled:bg-brandPrimary500 disabled:bg-neutrals200 px-6 py-[11px] rounded-md font-medium mt-2 md:py-3"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="relative mt-[5rem] flex justify-center">
        <div className="absolute top-1/2  w-[390px] aspect-square translate-y-[-50%] bg-brandPrimary100/[0.1] blur-[95.5px] rounded-full"></div>
        <Image
          src={appScreens}
          alt="the app screens showing different parts of the app"
          className="z-[2] translate-x-[-0.7rem] lg:w-[60%]"
        />
      </div>
    </section>
  );
};

export default DownloadNow;
