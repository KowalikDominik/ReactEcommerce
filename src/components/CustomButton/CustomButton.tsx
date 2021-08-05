import React from "react";

import "./CustomButton.scss";

interface Props {
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  children?: React.ReactNode;
  isGoogleSignIn?: boolean;
}

export const CustomButton: React.FC<Props> = ({
  children,
  isGoogleSignIn,
  ...otherProps
}) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
