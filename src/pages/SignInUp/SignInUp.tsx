import React from "react";
import SignIn from "../../components/SignIn/SignIn";
import { SignUp } from "../../components/SignUp/SignUp";

import "./SignInUp.scss";

interface Props {}

export const SignInUp: React.FC<Props> = () => {
  return (
    <div className="sign-in-out">
      <SignIn />
      <SignUp />
    </div>
  );
};
