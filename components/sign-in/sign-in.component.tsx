import React, { useState } from "react";
import { useRouter } from "next/router";
import { AuthError, AuthErrorCodes } from "firebase/auth";

import {
  signInWithGooglePopup,
  signInWithEandP,
} from "../../src/utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./sign-in.styles.scss";

type DefaultFormFields = {
  email: string;
  password: string;
};
const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const router = useRouter();

  const [formFields, setFormFields] =
    useState<DefaultFormFields>(defaultFormFields);
  const { email, password } = formFields;

  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //TODO do something else than alert!
    try {
      await signInWithEandP(email, password);

      resetFormFields();
      router.push("/");
    } catch (err) {
      switch ((err as AuthError).code) {
        case AuthErrorCodes.INVALID_PASSWORD:
          // case "auth/wrong-password":
          alert("incorrect password");
          break;
        case AuthErrorCodes.USER_DELETED:
          // case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          alert("can not log in user");
          console.log("cannot log in user ", err);
      }
    }
  };

  return (
    <main className="container--sign-in">
      <h2 className="title">Sign in with email and password</h2>
      <form onSubmit={handleSubmit} className="sing-in-form">
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          onChange={handleChange}
          value={email}
          id="email-sing-in"
        />

        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          onChange={handleChange}
          value={password}
          minLength={6}
          id="password-sing-in"
        />

        <Button type="submit">Sign in</Button>

        <p>or</p>

        <Button type="button" btnType={"google"} onClick={logGoogleUser}>
          Sign in with Google
        </Button>
      </form>
    </main>
  );
};

export default SignInForm;
