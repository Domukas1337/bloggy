import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-7">
      <h1 className="text-3xl md:text-6xl font-bold">Welcome to Bloggy</h1>
      <p className="text-xl md:text-2xl">All your blog posts in one place</p>
      <Link
        className="text-2xl bg-gray-700 p-4 hover:bg-gray-600 transition-colors"
        href="/posts/create"
      >
        Create a post
      </Link>
    </main>
  );
}
