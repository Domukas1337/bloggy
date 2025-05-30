"use client";

import { createBlog } from "@/lib/actions";
import { useState } from "react";
import { useFormStatus } from "react-dom";

function Button({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="px-5 py-3 bg-green-600 text-gray-800 hover:bg-green-500 transition-colors"
    >
      {pending ? "Submitting..." : children}
    </button>
  );
}

export default function BlogForm() {
  const [blogText, setBlogText] = useState("");

  function resetForm() {
    setBlogText("");
  }

  return (
    <main className="flex flex-col items-center justify-center gap-7 text-center">
      <h1 className="text-3xl md:text-6xl font-bold">Create a post</h1>
      <p className="text-xl md:text-2xl">Please fill out the form</p>
      <form
        className="flex flex-col gap-3"
        action={async (formData) => {
          await createBlog(formData);
          resetForm();
        }}
      >
        <label htmlFor="author">Your name (optional)</label>
        <div>
          <input
            type="text"
            id="author"
            name="author"
            placeholder="Author"
            className="px-5 py-3 border border-gray-300"
          />
        </div>
        <label htmlFor="title">Title</label>
        <div>
          <input
            type="text"
            id="title"
            name="title"
            required
            placeholder="My beautiful dark"
            className="px-5 py-3 border border-gray-300"
          />
        </div>
        <label htmlFor="blog">Your blog text</label>
        <div className="">
          <textarea
            name="blog"
            id="blog"
            required
            className="px-5 py-3 border border-gray-300 w-full resize-none"
            value={blogText}
            onChange={(e) => setBlogText(e.target.value)}
            rows={10}
            cols={50}
            placeholder="Write your blog here"
          />
        </div>
        {blogText.length > 5000 ? (
          <p className="text-red-500 transition-colors">
            ({blogText.length} / 5000)
          </p>
        ) : (
          <p className="text-green-500 transition-colors">
            ({blogText.length} / 5000)
          </p>
        )}
        {blogText.length > 5000 ? (
          <p className="text-red-500 transition-colors">
            You have exceeded the character limit
          </p>
        ) : (
          <Button>Submit</Button>
        )}
      </form>
    </main>
  );
}
