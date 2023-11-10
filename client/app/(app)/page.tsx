import Image from "next/image";
import FilterCategories from "./FilterCategories";
import ItemDetails from "@/components/ItemDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ak&s Business",
  description: "A modern business with modern concepts",
};

interface Product {
  id: number;
  attributes: {
    product_title: string;
    product_status: string;
    product_id: string;
    product_price: number;
    createdAt: string;
    updatedAt: string;
    publisedAt: string;
    quantity_number: number;
    categories: string;
    product_image: object;
  };
}

interface Products {
  data: Product[];
}

export async function getAllProducts(): Promise<Products> {
  try {
    const token = process.env.API_TOKEN;
    // console.log(token);
    const response = await fetch(
      "http://127.0.0.1:1337/api/products?populate=product_image",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multiform/data",
        },
        cache: "no-store",
      }
    );
    const data = await response.json();
    if (response.ok) {
      // console.log("Fetch products: ", data);
      return data;
    } else {
      return Promise.reject("Failed to fetch");
    }
  } catch (error) {
    console.error("Fetch products Error: ", error);
    return Promise.reject(error);
  }
}

export default async function Home() {
  const products = await getAllProducts();
  // console.log("All Products: ", products.data);

  return (
    <main>
      <FilterCategories />
      <div className="grid p-20 gap-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {products.data.map((product) => (
          <ItemDetails key={product.id} product={product.attributes} />
        ))}
      </div>
    </main>
  );
}
