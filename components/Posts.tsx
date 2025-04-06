import { getBlogs } from "@/lib/data-service";
import Blog from "./Blog";

export default async function Posts() {
  const data = await getBlogs();

  return (
    <main className="flex flex-col items-center justify-center gap-7">
      <h1 className="text-3xl md:text-6xl font-bold">All posts</h1>
      {data.length === 0 && <p className="text-xl md:text-2xl">No posts</p>}
      {data.map((blog) => (
        <Blog key={blog.id} bloggy={blog} />
      ))}
    </main>
  );
}
