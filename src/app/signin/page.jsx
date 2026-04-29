"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";

const SignIn = () => {
  const SignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };
  const handleSignIn = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    const { email, password } = userData;
    const { data, error } = await authClient.signIn.email({
      email,
      password,
      rememberMe: true,
      callbackURL: "/",
    });

    if (data) {
      alert("login in successfully");
    }
    if (error) {
      alert(error.message);
    }
  };
  return (
    <div className="container mx-auto flex flex-col justify-center items-center mt-8 ">
      <h2 className="text-purple-500 text-2xl font-bold my-5">
        Login your account
      </h2>
      <div className="space-y-5">
        <Form
          className=" px-20 py-10 shadow flex flex-col gap-4"
          onSubmit={handleSignIn}
        >
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="Enter your valid email" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <div className="flex gap-2">
            <Button type="submit">Submit</Button>
            <Button onClick={SignIn}>Login with Google</Button>
          </div>
          <p>
            No Account{" "}
            <Link className="text-purple-500" href="/signup">
              Signup
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
