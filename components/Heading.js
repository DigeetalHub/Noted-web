import React from "react";

const Heading = ({
  classes,
  firstContent,
  firstColoredContent,
  coloredContent,
  endContent,
}) => {
  return (
    <h1 className={classes}>
      <span className="text-brandPrimary500">{firstColoredContent}</span>{firstContent}<span className="text-brandPrimary500 text-center md:hidden block mx-auto">{coloredContent}</span>{" "}
      {endContent}
    </h1>
  );
};

export default Heading;
