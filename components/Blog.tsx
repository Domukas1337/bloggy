export default function Blog({
  bloggy,
}: {
  bloggy: {
    author: string;
    blog: string;
    id: string;
    created_at: string;
    title: string;
  };
}) {
  const { author, blog, id, created_at, title } = bloggy;

  const fullDate = created_at.split("T");
  const time = fullDate[1].split(".")[0];

  return (
    <main className="flex flex-col items-center justify-center gap-7 border p-4 w-full md:w-2/3 pop-up">
      <div className="flex flex-col gap-2 text-center">
        <p className="text-xl md:text-2xl">author: {author}</p>
        <p className="text-md">id: {id}</p>
      </div>
      <h1 className="text-lg font-bold">{title}</h1>
      <p className="text-sm md:text-md font-bold">{blog}</p>
      <div className="flex flex-row gap-2">
        <p className="text-sm">{fullDate[0]}</p>
        <p className="text-sm">{time}</p>
      </div>
    </main>
  );
}
