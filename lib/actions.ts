"use server";

import { supabase } from "./supabase";

export async function createBlog(formData) {
  const newBlog = {
    title: formData.get("title"),
    author: formData.get("author"),
    blog: formData.get("blog").slice(0, 5000),
  };
  const { error } = await supabase.from("bloggy").insert([newBlog]);

  if (error) {
    throw new Error("Something went wrong :(", { cause: error });
  }
}
