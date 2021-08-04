import React from "react";
import { SignIn } from "../../components/SignIn/SignIn";

import "./SignInOut.scss";

interface Props {}

export const SignInOut: React.FC<Props> = () => {
  return (
    <div>
      <SignIn />
    </div>
  );
};
