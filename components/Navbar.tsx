"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="flex justify-center mt-2 mb-2 py-2">
      <ul className="flex flex-row gap-10 text-lg">
        <li>
          <Link
            href="/"
            className={
              pathname === "/"
                ? "text-blue-500 border p-2 px-4"
                : `hover:text-blue-500 transition-colors border p-2 px-4`
            }
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/posts"
            className={
              pathname === "/posts"
                ? "text-blue-500 border p-2 px-4"
                : `hover:text-blue-500 transition-colors border p-2 px-4`
            }
          >
            Posts
          </Link>
        </li>
      </ul>
    </div>
  );
}
