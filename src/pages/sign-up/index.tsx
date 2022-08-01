import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/router";
import { AuthError, AuthErrorCodes } from "firebase/auth";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../firebase/firebase.utils";

import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";

import styles from "./sign-up.module.scss";

type DefaultFormFields = {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
};
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const router = useRouter();
  // const navigate = useNavigate();

  const [formFields, setFormFields] =
    useState<DefaultFormFields>(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 1. Check password against confirmPassword
    if (password !== confirmPassword) return;

    // 2.
    try {
      const userCredential = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      if (userCredential) {
        const { user } = userCredential;

        await createUserDocFromAuth(user, {
          displayName,
        });
      }

      resetFormFields();
      // navigate("/");
      //FIXME does this work
      router.push("/");
    } catch (err) {
      if ((err as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        //TODO
        alert("Cannot create user, email already in use");
      }
      console.log("error creating user from email and password", err);
    }

    // 3. create user document with dis, em, pass
  };

  return (
    <div className="container">
      <main id="main" className="container--sign-up">
        <h2 className="title">Sign up with email and password</h2>
        <form onSubmit={handleSubmit} className="sing-up-form">
          <FormInput
            label="Display Name"
            type="text"
            required
            name="displayName"
            onChange={handleChange}
            value={displayName}
            id="displayName-sing-up"
          />

          <FormInput
            label="Email"
            type="email"
            required
            name="email"
            onChange={handleChange}
            value={email}
            id="email-sing-up"
          />

          <FormInput
            label="Password"
            type="password"
            required
            name="password"
            onChange={handleChange}
            value={password}
            minLength={6}
            id="password-sing-up"
          />

          <FormInput
            label="Confirm password"
            type="password"
            required
            name="confirmPassword"
            onChange={handleChange}
            value={confirmPassword}
            minLength={6}
            id="password-conf-sing-up"
          />

          <div className="sing-up-form__btn">
            <Button type="submit">Sign up</Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default SignUpForm;
