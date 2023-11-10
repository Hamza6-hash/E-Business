import React from "react";
import ItemDetails from "@/components/ItemDetails";
import { getAllProducts } from "../../page";
import { Metadata } from "next";

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  return {
    title: `${params.slug} Shop`,
  };
}

export default async function page({ params }: { params: { slug: string } }) {
  console.log(params.slug);
  const products = await getAllProducts();
  // if (params.slug === "Home-Decors") params.slug.slice(5);
  const category = products.data.filter(
    (product) => product.attributes.categories === params.slug
  );
  console.log("Cate: ", category);

  return (
    <>
      <h1>{params.slug}</h1>
      <div className="grid p-20 gap-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {category.map((product) => (
          <ItemDetails product={product.attributes} />
        ))}
      </div>
    </>
  );
}
