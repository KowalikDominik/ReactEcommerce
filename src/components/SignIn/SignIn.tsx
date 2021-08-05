import React, { useState } from "react";

import { CustomButton } from "../CustomButton/CustomButton";
import { FormInput } from "../FormInput/FormInput";
import { auth, signInWithGoogle } from "../../services/firebase.utils";
import "./SignIn.scss";

interface Props {}

export const SignIn: React.FC<Props> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error.message);
    }
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
        <div className="buttons">
          <CustomButton type="submit">sign in</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            sign with google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};
