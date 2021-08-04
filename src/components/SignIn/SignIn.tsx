import React, { useState } from "react";
import { setOriginalNode } from "typescript";
import { CustomButton } from "../CustomButton/CustomButton";
import { FormInput } from "../FormInput/FormInput";

import "./SignIn.scss";

interface Props {}

export const SignIn: React.FC<Props> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    alert("clicked");
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
      return;
    } else setPassword(value);
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>{" "}
      <form onSubmit={onSubmitHandler}>
        <FormInput
          name="email"
          type="email"
          value={email}
          required={true}
          label="Email"
          changeHandler={onChangeHandler}
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          required
          label="Password"
          changeHandler={onChangeHandler}
        />
        <CustomButton type="submit">sign in</CustomButton>
      </form>
    </div>
  );
};
