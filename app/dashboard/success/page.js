import Link from "next/link";

export default async function SuccessPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8">
      <h1 className="text-2xl font-bold">Thanks for your purchase ❤</h1>
      <Link href="/dashboard" className="btn btn-primary mt-4">
        Go to Dashboard
      </Link>
    </main>
  );
}
