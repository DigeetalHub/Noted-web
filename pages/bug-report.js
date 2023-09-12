import React, { useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Head from "next/head";

const BugReport = () => {
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const imageInputRef = useRef(null);

  // const handleImage = async (e) => {
  //   const file = e.target?.files[0]

  //   if (file.size > 10000000) {
  //     return alert.show(
  //       <div className="">
  //         Error: Photo must be less than 10mb. Please try again!!
  //       </div>
  //     )
  //   }
  // }

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!message || !image || !name) {
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("message", message);
    formData.append("files", image);
    
    setLoading(true);
    try {
      const response = await axios.post(
        "https://noted-backend-production.up.railway.app/api/v1/user/contact",
        image
          ? formData
          : {
              message,
              name,
            },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      // Handle success
      console.log("Response from API:", response.data);
      setName("");
      setMessage("");
      if (imageInputRef.current) {
        imageInputRef.current.value = "";
      }
      toast.success(
        "Report sent successfully. We'll work on a fix as soon as possible. 😃",
        {
          autoClose: 1500,
          icon: "🚀",
        },
      );
      setLoading(false);
    } catch (error) {
      // Handle error
      console.error("Error sending data:", error);
      toast.error("Report not sent . Please try again.", { autoClose: 2000 });
      setLoading(false);
    }
  };

  return (
    <>
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
      <div className="mx-auto w-[90%] space-y-8 pt-[7rem] lg:w-[80%] bigScreen:w-[60%]">
        <div className="space-y-2">
          <h1 className="text-[1.5rem] font-bold leading-[1.3] text-brandPrimary600 md:text-[2rem]">
            Please report any bug/issues you discovered while testing the app.
          </h1>
          <p className="md:text-[1.125rem] lg:text-[1.25rem]">
            Leave a description of what you noticed and drop a screenshot or
            video if you can
          </p>
        </div>
        <form action="" className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 text-sm font-medium">
              Please provide your name
            </label>
            <input
              type="text"
              onChange={(e) => {
                setName(e.target.value);
                console.log(name);
              }}
              value={name}
              id="name"
              className="rounded-md border border-brandPrimary600 p-2 text-black md:w-[60%]"
              name="name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="report" className="mb-1 text-sm font-medium">
              Please let us know the issue you encountered
            </label>
            <textarea
              name="report"
              className="resize-none rounded-md border border-brandPrimary600 p-2 text-black placeholder-black placeholder:text-ellipsis placeholder:text-sm placeholder:italic md:w-[60%]"
              id="report"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              cols="30"
              rows="5"
              placeholder="E.g. When i was testing the search feature, i encountered the following issues"
            ></textarea>
          </div>
          <div className="flex flex-col">
            <label htmlFor="upload" className="mb-1 text-sm font-medium">
              Upload screenshots or screen recording
            </label>
            <input
              type="file"
              name="upload"
              id="upload"
              ref={imageInputRef}
              accept="image/*"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
              className="w-fit rounded-full pr-2 text-sm  file:mr-4 file:rounded-full file:border-0
       file:bg-brandPrimary100
      file:py-2 file:px-4 file:text-sm
      file:font-semibold file:text-brandPrimary600
      hover:file:bg-violet-100"
            />
          </div>
          <button
            onClick={handleUpload}
            className="mt-[1.5rem] rounded-full px-6 py-2 font-medium text-brandPrimary500 ring-1 ring-brandPrimary500 disabled:cursor-not-allowed disabled:bg-neutrals200 disabled:text-white disabled:ring-0 md:w-[20%]"
            type="submit"
            disabled={loading}
          >
            Submit
          </button>
        </form>
        {/* {feedback ? <p className="mt-[2rem] text-center">{feedback}</p> : null} */}
      </div>
    </>
  );
};

export default BugReport;
