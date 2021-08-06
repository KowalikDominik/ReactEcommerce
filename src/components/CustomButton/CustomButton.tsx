import React from "react";

import "./CustomButton.scss";

interface Props {
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  children?: React.ReactNode;
  isGoogleSignIn?: boolean;
  inverted?: boolean;
}

export const CustomButton: React.FC<Props> = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} ${
        inverted ? "inverted" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
