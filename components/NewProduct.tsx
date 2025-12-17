"use client";

import { useRouter } from "next/navigation";
import { FiPlus } from "react-icons/fi";

const NewProduct = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/create-product")}
      className="z-100 fixed hover:cursor-pointer bottom-6 right-6 flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-indigo-500 transition"
    >
      <FiPlus size={20} />
      New Product
    </button>
  );
};

export default NewProduct;
