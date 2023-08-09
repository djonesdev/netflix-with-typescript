import { useState } from "react";

import Input from "./Input";

interface LoginRegisterFormProps {
  variant: string;
  setEmail: (value: string) => void;
  setName: (value: string) => void;
  setPassword: (value: string) => void;
  formValues: {
    name: string;
    email: string;
    password: string;
  };
  submit: () => void;
}

export default function LoginRegisterForm({
  variant,
  setEmail,
  setName,
  setPassword,
  formValues,
  submit,
}: LoginRegisterFormProps) {
  const { name, email, password } = formValues;
  return (
    <form>
      <legend className="text-white text-4xl mb-8 font-semibold">
        Sign In
      </legend>
      <fieldset className="flex flex-col gap-4">
        {variant === "register" && (
          <Input
            id="name"
            type="text"
            label="Username"
            value={name}
            onChange={(e: any) => setName(e.target.value)}
          />
        )}
        <Input
          id="email"
          type="email"
          label="Email address or phone number"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          id="password"
          label="Password"
          value={password}
          onChange={(e: any) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          value="Submit"
          aria-label={variant}
          onClick={submit}
          className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
        >
          {variant === "login" ? "Login" : "Sign up"}
        </button>
      </fieldset>
    </form>
  );
}
