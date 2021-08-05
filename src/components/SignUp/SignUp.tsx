import React, { useState } from "react";

import { auth, createUserProfileDocument } from "../../services/firebase.utils";
import { CustomButton } from "../CustomButton/CustomButton";
import { FormInput } from "../FormInput/FormInput";
import "./SignUp.scss";

interface Props {}

export const SignUp: React.FC<Props> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "displayName":
        setDisplayName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;

      default:
        setConfirmPassword(value);
        break;
    }
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password dont match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      if (user) {
        await createUserProfileDocument(user, { displayName });
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={onSubmitHandler}>
        <FormInput
          name="displayName"
          label="Name"
          type="text"
          value={displayName}
          changeHandler={inputHandler}
          required
        />
        <FormInput
          name="email"
          label="Email"
          type="email"
          value={email}
          changeHandler={inputHandler}
          required
        />
        <FormInput
          name="password"
          label="Password"
          type="password"
          value={password}
          changeHandler={inputHandler}
          required
        />
        <FormInput
          name="confirmPassword"
          label="Confirm password"
          type="password"
          value={confirmPassword}
          changeHandler={inputHandler}
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};
