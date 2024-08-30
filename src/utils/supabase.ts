import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_URL || "",
  process.env.NEXT_PUBLIC_API_KEY || ""
);

export const selectProduct = async () => {
  const { data, error } = await supabase.from('product').select();
  console.log(data ? data : error);
  if(data) {
    return data.map((product) => ({
      ...product,
      id: product.id,
      title: product.title,
      detail: product.detail,
      thumbnail_url: product.thumbnail_url,
      alt: product.alt,
      link: product.link,
    }));
  } else {
    return [];
  }
};