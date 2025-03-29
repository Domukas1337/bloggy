import Blog from "@/components/Blog";
import { getBlogs } from "@/lib/data-service";

export default async function Page() {
  const data = await getBlogs();

  return (
    <main className="flex flex-col items-center justify-center gap-7">
      <h1 className="text-3xl md:text-6xl font-bold">All posts</h1>
      <div>
        <p className="text-xl md:text-2xl">Number of posts: {data.length}</p>
      </div>
      {data.map((blog) => (
        <Blog key={blog.id} bloggy={blog} />
      ))}
    </main>
  );
}
