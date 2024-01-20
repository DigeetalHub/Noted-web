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
      {firstColoredContent && (
        <span className="mr-3 inline-block min-w-[35%] text-right text-brandPrimary500">
          {firstColoredContent}
        </span>
      )}
      {firstContent}
      {coloredContent && (
        <span className="mx-auto block text-center text-brandPrimary500 md:hidden">
          {coloredContent}
        </span>
      )}
      {endContent}
    </h1>
  );
};

export default Heading;
