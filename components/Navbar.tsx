import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-center">
      <ul className="flex flex-row gap-10 text-lg">
        <li className="hover:text-blue-500 transition-colors">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-blue-500 transition-colors">
          <Link href="/posts">All Posts</Link>
        </li>
      </ul>
    </div>
  );
}
