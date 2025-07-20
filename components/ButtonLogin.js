"use client";
import Link from "next/link";
import { signIn } from "next-auth/react";

const ButtonLogin = ({ session, extraStyle }) => {
  const dashbordUrl = "/dashboard";

  console.log(extraStyle);

  if (session) {
    return (
      <Link
        href={dashbordUrl}
        className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}
        onClick={() => {
          console.log("clicked");
        }}
      >
        Welcome back, {session.user.name || "friend"}
      </Link>
    );
  }

  return (
    <button
      className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}
      onClick={() => {
        signIn(undefined, { callbackUrl: dashbordUrl });
      }}
    >
      Get started
    </button>
  );

  // 1. Create a /login page

  // 2. Create a email/password form

  // 3. Make a POST request to /api/login
};

export default ButtonLogin;
