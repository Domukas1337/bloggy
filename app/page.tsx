import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-7 fadein">
      <h1 className="text-3xl md:text-6xl font-bold">Welcome to Bloggy</h1>
      <p className="text-xl md:text-2xl">
        Blog posts without a need to sign up.
      </p>
      <p className="text-lg md:text-xl text-green-500">
        Create your first post
      </p>
      <Link
        className="text-2xl bg-green-700 p-4 hover:bg-green-600 transition-colors"
        href="/posts/create"
      >
        Create a post
      </Link>
    </main>
  );
}
