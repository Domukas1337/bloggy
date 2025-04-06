"use server";

import { redirect } from "next/navigation";
import { supabase } from "./supabase";

export async function createBlog(formData: FormData) {
  const newBlog = {
    title: formData.get("title"),
    author: formData.get("author") || "Anonymous",
    blog: formData.get("blog")?.slice(0, 5000),
  };
  const { error } = await supabase.from("bloggy").insert([newBlog]);

  if (error) {
    throw new Error("Something went wrong :(", error);
  }

  redirect("/posts");
}
