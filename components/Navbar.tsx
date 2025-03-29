"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="flex justify-center mt-2 mb-4">
      <ul className="flex flex-row gap-10 text-lg">
        <li
          className={
            pathname === "/"
              ? "text-blue-500"
              : `hover:text-blue-500 transition-colors`
          }
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={
            pathname === "/posts"
              ? "text-blue-500"
              : `hover:text-blue-500 transition-colors`
          }
        >
          <Link href="/posts">All Posts</Link>
        </li>
        <li
          className={
            pathname === "/posts/create"
              ? "text-blue-500"
              : `hover:text-blue-500 transition-colors`
          }
        >
          <Link href="/posts/create">Create Post</Link>
        </li>
      </ul>
    </div>
  );
}
