import Link from "next/link";

const ButtonLogin = ({ isLoggedIn, name, children }) => {
  if (isLoggedIn) {
    return (
      <Link href="/dashboard" className="btn btn-primary">
        Welcome back, {name}
      </Link>
    );
  }

  return <Link href="/login">Login</Link>;
};

export default ButtonLogin;
