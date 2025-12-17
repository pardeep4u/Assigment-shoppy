"use client";

import { useEffect, useState } from "react";
import { Product } from "@/utils/type";
import { useParams } from 'next/navigation';
import Image from "next/image";

interface IProductPageProps {
  id: string | number ;
}

export default function ProductPage() {
  const params = useParams() as unknown as IProductPageProps;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch product");
        }
        const data: Product = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [params.id]);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors">
        <p className="text-gray-500">Loading product...</p>
      </main>
    );
  }

  if (error || !product) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors">
        <p className="text-red-500 text-lg">{error || "Product not found"}</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 py-12 flex justify-center bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <div className="relative w-full h-96 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain rounded-lg"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col justify-between text-gray-900 dark:text-gray-100">
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="font-bold text-2xl mb-4 text-indigo-600 dark:text-indigo-400">
              ${product.price}
            </p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              {product.description}
            </p>
            <span className="inline-block px-3 py-1 rounded-full text-sm bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300">
              {product.category}
            </span>
          </div>
          <button className="mt-6 px-6 py-3 rounded-lg text-lg font-medium bg-indigo-600 hover:bg-indigo-500 text-white transition cursor-not-allowed">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}
