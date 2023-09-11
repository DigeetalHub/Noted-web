import React, { useState } from "react";
import axios from "axios";

const BugReport = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!message || !file) return;
    const formData = new FormData();
    formData.append("files", {
      uri: file,
      name: `file-${Date.now()}`,
      type: "image",
    });
    formData.append("message", message);

     try {
      const response = await axios.post( "https://noted-backend-production.up.railway.app/api/v1/user/contact", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Handle success
      console.log('Response from API:', response.data);
    } catch (error) {
      // Handle error
      console.error('Error sending data:', error);
    }
  
    // axios
    //   .post(
    //     "https://noted-backend-production.up.railway.app/api/v1/user/contact{}",
    //     fd,
    //     {
    //       headers: {
    //         "Custom-Header": "value",
    //       },
    //     },
    //   )
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .then((data) => console.log(data))
    //   .catch((err) => console.log(err));
  };

  return (
    <>
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
        <form action="" className="space-y-5">
          <div className="flex flex-col">
            <label htmlFor="report" className="mb-1 text-sm font-medium">
              Please let us know the issue you encountered
            </label>
            <textarea
              name="report"
              className="resize-none rounded-md border border-brandPrimary600 p-2 placeholder-black placeholder:text-ellipsis placeholder:text-sm placeholder:italic md:w-[60%]"
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
              accept="image/*"
              onChange={(e) => {
                setFile(e.target.files[0]);
                console.log(file);
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
            className="mt-[4rem] rounded-full px-6 py-2 text-sm font-medium text-brandPrimary500 ring-1 ring-brandPrimary500"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default BugReport;
