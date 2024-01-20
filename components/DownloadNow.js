import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import appScreens from "../public/assets/images/appScreens1.webp";
import Button from "./Button";

const DownloadNow = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [subscribe, setSubscribe] = useState(true);

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
    }
    axios
      .post(
        "https://noted-backend-production.up.railway.app/api/v1/user/sendBeta",
        { name: name.trim(), email },
      )
      .then((res) => {
        setName("");
        setEmail("");
        setMessage("");
        toast.success("Your submission has been NOTED! Check your email😃", {
          autoClose: 3000,
          icon: "🚀",
        });
        setLoading(false);
      })
      .catch((err) => {
        setMessage(err.response.data.message);
        setLoading(false);
      });
    if (subscribe) {
      axios
        .post("/api/newsletter", { name: name.trim(), email })
        .then((res) => {
          toast.success(res?.data.message, {
            autoClose: 3000,
            icon: "🚀",
          });
          setLoading(false);
        })
        .catch((err) => {
          setMessage(err.response.data.message);
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [message]);

  return (
    <section className="">
      <div className="space-y-6 text-center text-brandPrimary50">
        <h2 className="text-[2rem] font-bold leading-[1.2] lg:mx-auto lg:w-[80%] lg:text-[3rem]">
          Get started to enjoy an amazing experience
        </h2>
        <p className="mx-auto font-semibold lg:w-[70%]">
          Signup for beta testing of the app. Experience a personalized platform
          connecting you with like-minded individuals. Be the first to test out
          the current features and also earn free passes to premium features.
        </p>

        <div className="mt-3 text-brandPrimary500">{message}</div>
        <div className="flex flex-col pt-5">
          <form
            className="xl:w-justify-between flex w-full flex-col gap-5 text-left md:flex-row md:items-end md:justify-center md:gap-4"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="font-medium">
                Name
              </label>
              <input
                className="w-full rounded-[4px] bg-brandPrimary50 p-3 text-neutrals900"
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
                className="w-full rounded-[4px] bg-brandPrimary50 p-3 text-neutrals900"
                type="email"
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
                className="mt-2 rounded-md px-6 py-[11px] font-medium enabled:bg-brandPrimary500 disabled:bg-neutrals200 md:py-3"
              />
            </div>
          </form>
          <div className="mt-4 flex items-center justify-center gap-2">
            <input
              type="checkbox"
              checked={subscribe}
              name="newsletter"
              onChange={() => {
                setSubscribe(!subscribe);
              }}
              aria-labelledby="newsletter"
              className="h-5 w-5"
            />
            <span id="newsletter" className="font-medium text-brandPrimary500">
              Subscribe to our newsletter
            </span>
          </div>
          <span className="my-2 text-lg text-white">OR</span>
          <Link
            href="/newsletter"
            className="mx-auto w-fit font-medium text-brandPrimary500 underline underline-offset-[6px]"
          >
            Subscribe to our newsletter without signing up for beta test
          </Link>
        </div>
      </div>
      <div className="relative mt-[5rem] flex justify-center">
        <div className="absolute top-1/2  aspect-square w-[390px] translate-y-[-50%] rounded-full bg-brandPrimary100/[0.1] blur-[95.5px]"></div>
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
