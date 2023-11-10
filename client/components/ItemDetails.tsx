"use client";
import React, { useState } from "react";
import Image from "next/image";
import cardPic from "@/public/cardPic.jpeg";

export default function ItemDetails({ product }: { product: any }) {
  const [isHover, setIsHover] = useState(false);
  // console.log(product);

  function setHover() {
    setIsHover(!isHover);
  }

  return (
    <div
      className="hover:cursor-pointer"
      onMouseEnter={setHover}
      onMouseLeave={setHover}
    >
      <Image className="bg-contain h-64" src={cardPic} alt="produc_img" />
      <p className="text-lg font-normal whitespace-pre-line">
        {product.product_title}
      </p>
      <p>rating here</p>

      <span className="flex justify-between">
        <p className="text-green-600 font-bold">$ {product.product_price}</p>
        <p className="text-pink-700 font-serif">
          remainig item: {product.quantity_number}
        </p>
      </span>

      {isHover && (
        <span className="flex gap-4 relative bottom-28 left-6">
          <p>icon 1</p>
          <p>icon 2</p>
        </span>
      )}
    </div>
  );
}
