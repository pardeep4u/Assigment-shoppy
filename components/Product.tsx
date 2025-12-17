import type { Product } from "@/utils/type";
import Image from "next/image";
import Link from 'next/link'

const Product = ({ product }: { product: Product }) => {
  return (
    <Link href={`/product/${product.id}`} >
    <div className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition hover:cursor-pointer">
      <div className="relative h-40 w-full mb-4">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>
      <p className="font-semibold text-gray-900 truncate">{product.title}</p>
      <p className="text-indigo-600 font-bold mt-1">${product.price}</p>
    </div>
    </Link>
  );
};

export default Product;
