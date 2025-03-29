import { supabase } from "./supabase";

export async function getBlogs() {
  const { data, error } = await supabase.from("bloggy").select("*");

  if (error) {
    throw new Error("Something went wrong :(", { cause: error });
  }

  return data;
}
