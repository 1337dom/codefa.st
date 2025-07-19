import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {
  const isLoggedIn = true;
  const name = "John";

  return (
    <main>
      <h1 className="title extra-space">
        Collect customer feedback to build a better product
      </h1>
      <div>
        Create a feedback board in minutes, prioritize features, and build
        products your customers will love.
      </div>

      <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
    </main>
  );
}
