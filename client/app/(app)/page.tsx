import Image from "next/image";
import cardPic from "@/public/cardPic.jpeg";

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
      "http://127.0.0.1:1337/api/products?populate=images",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      }
    );
    const data = await response.json();
    if (response.ok) {
      console.log("Fetch products: ", data);
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
  return (
    <main>
      <div className="grid p-20 gap-5 xl:grid-cols-4">
        {products.data.map((product) => (
          <div>
            <div className="card p-5 mb-4">
              <Image
                className="h-48 bg-contain"
                src={cardPic}
                alt="produc_img"
              />
              <h1 className="font-serif font-medium text-3xl">
                {product.attributes.product_title}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
