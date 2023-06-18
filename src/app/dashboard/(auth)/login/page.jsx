"use client";
import React from "react";
import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const Login = () => {

    const session=useSession()
    const router=useRouter()

  const handleSubmit = (e) => {
    console.log(session)
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    console.log(email, password);

    signIn("credentials", {
      email,
      password,
    });
  };

  return (
    <div>
      <h2>This is Login page</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />
        <button type="submit">Login</button>
      </form>
      <button
        onClick={() => {
          signIn("google");
        }}
      >
        Login with Google
      </button>

    </div>
  );
};

export default Login;
