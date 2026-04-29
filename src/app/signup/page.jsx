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
import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();
  const handleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    const { name, photoUrl, email, password } = userData;

    const { data, error } = await authClient.signUp.email({
      name,
      image: photoUrl,
      email,
      password,
      callbackURL: "/",
    });
    if (data) {
      alert("register successfully");
      router.push("/signin");
    }
    if (error) {
      alert(`some is wrong! ${error.message}`);
    }
  };
  return (
    <div className="container mx-auto flex flex-col justify-center items-center space-y-4 mt-8">
      <h2 className="text-center text-2xl font-bold text-purple-500">
        Create new account
      </h2>
      <Form
        cl
        onSubmit={handleRegister}
        className="flex flex-col gap-4  px-20 py-10 shadow "
      >
        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
          <FieldError />
        </TextField>
        <TextField isRequired name="photoUrl" type="text">
          <Label>Photo Url</Label>
          <Input placeholder="Enter your photo url" />
          <FieldError />
        </TextField>
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
          <Button className="w-full" type="submit">
            Submit
          </Button>
          <Button onClick={handleSignIn}>Sign in With Google</Button>
        </div>
        <p>
          Your account already exist{" "}
          <Link className="text-purple-500" href="/signin">
            Signin
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Signup;
