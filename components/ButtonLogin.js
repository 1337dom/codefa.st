"use client";
import Link from "next/link";

const ButtonLogin = ({ isLoggedIn, name, extraStyle }) => {
  console.log(extraStyle);

  if (isLoggedIn) {
    return (
      <Link
        href="/dashboard"
        className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}
        onClick={() => {
          console.log("clicked");
        }}
      >
        Welcome back, {name}
      </Link>
    );
  }

  return <Link href="/login">Login</Link>;
};

export default ButtonLogin;
