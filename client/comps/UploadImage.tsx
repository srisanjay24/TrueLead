// UploadImage component
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import UploadPhoto from "../components/component/upload-photo";
import Productcard from "../components/component/Productcard";

interface ProductCardProps {
  images: string[];
  name: string;
  store: string;
  likeness: string;
  price: number[];
  url: string;
  catid: number;
}

export default function UploadImage() {
  const storedImageData = localStorage.getItem("imageData");
  const products: ProductCardProps[] = storedImageData
    ? JSON.parse(storedImageData)?.products || []
    : [];

  return (
    <>
      <div
        className="my-0 flex w-screen flex-wrap items-center justify-center "
        style={{ flexWrap: "wrap" }}
      >
        {products.map((product: ProductCardProps, index) => (
          <div key={index} className="w-1/3 p-4">
            <ProductCardLink key={index} product={product} />
          </div>
        ))}
      </div>
    </>
  );
}

// ProductCardLink component
const ProductCardLink: React.FC<{ product: ProductCardProps }> = ({
  product,
}) => {
  const handleProductClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("currProduct", JSON.stringify(product.url));
    }
    // Handle custom logic here
    console.log("Product clicked:", product.url);
  };

  return (
    <div className="product-card-link">
      <Link
        className="inline-block w-[350px]"
        onClick={handleProductClick}
        href={`/trends?productUrl=${encodeURIComponent(product.url)}`}
        passHref
      >
        <Productcard
          Plink={product.images[0]}
          name={product.name}
          seller={product.store}
          likeness={parseFloat(product.likeness)}
          price={product.price[0]}
          Rlink={`https://anemo.productsearch.app/click?u=${product.url}&s=${product.store}&p=web&cid=${product.catid}`}
        />
      </Link>
    </div>
  );
};

// CSS for Gallery Layout
// <style jsx>{`
//   .product-card-link {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   .product-card-link a {
//     text-decoration: none;
//   }

//   .grid {
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//     gap: 20px;
//     justify-items: center;
//   }

//   .product-card {
//     width: 100%;
//     max-width: 300px;
//     /* Adjust card width as needed */
//   }
// `}</style>;
