import ButtonLogin from "@/components/ButtonLogin";
import Link from "next/link";

export default function Home() {
  const isLoggedIn = true;
  const name = "John";

  return (
    <main>
      <section className="bg-base-200">
        <div className="max-w-3xl mx-auto flex justify-between items-center px-8 py-2">
          <div className="font-bold">CodeFastSaaS</div>
          <div className="space-x-8 max-md:hidden">
            <Link className="link link-hover" href="/pricing">
              Pricing
            </Link>
            <Link className="link link-hover" href="/faq">
              FAQ
            </Link>
          </div>

          <div className="">
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>

      <section className="text-center px-8 py-32 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6 lg:text-5xl">
          Collect customer feedback to build a better product
        </h1>
        <div className="opacity-90 mb-10">
          Create a feedback board in minutes, prioritize features, and build
          products your customers will love.
        </div>

        <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
      </section>
    </main>
  );
}
