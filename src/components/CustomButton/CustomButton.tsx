import React from "react";

import "./CustomButton.scss";

interface Props {
  type: "button" | "submit" | "reset" | undefined;
  children?: React.ReactNode;
}

export const CustomButton: React.FC<Props> = ({ children, ...otherProps }) => {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
};
