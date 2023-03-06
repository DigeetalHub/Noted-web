import React from "react";
import { motion } from "framer-motion";

const AccordionContent2 = ({ data, index }) => {
  console.log(data)
  return (
    <div className="my-4 space-y-4">
      {data.map((item, index) => {
        const { heading, description } = item;
        return (
          <div key={index} className="space-y-4">
            <h3 className="font-semibold ">{heading}</h3>
            {description.includes(";") ? (
              <ul>
                {description.split(";").map((li, index) => (
                  <li
                    key={index}
                    className="text-sm fold2Full:text-base list-disc ml-5"
                  >
                    {li}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm fold2Full:text-base whitespace-pre-line">
                {description}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AccordionContent2;
