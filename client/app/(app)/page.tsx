import Image from "next/image";

interface Product {
  id: number;
  attributes: Array<{
    product_id: string;
    product_title: string;
    product_status: string;
    product_image: object;
  }>;
}

interface Products {
  data: Product[];
}

export async function getAllProducts(): Promise<Products> {
  try {
    const token = process.env.API_TOKEN;
    const response = await fetch("http://127.0.0.1:1337/api/product", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });
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
      <h1>Home</h1>
      {products.data.map((product) => (
        product.attributes.map((prod) => (
          <h1>{prod.product_title}</h1>
        ))
      ))}
    </main>
  );
}
