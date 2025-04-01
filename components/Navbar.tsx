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
              ? "text-blue-500 border p-2 px-4"
              : `hover:text-blue-500 transition-colors border p-2 px-4`
          }
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={
            pathname === "/posts"
              ? "text-blue-500 border p-2 px-4"
              : `hover:text-blue-500 transition-colors border p-2 px-4`
          }
        >
          <Link href="/posts">Posts</Link>
        </li>
      </ul>
    </div>
  );
}
