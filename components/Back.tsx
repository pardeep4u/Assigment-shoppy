"use client"; // required because we are using useRouter

import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

const Back = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="absolute top-5 left-5 text-indigo-600 hover:text-indigo-800 font-medium mb-4 hover:cursor-pointer"
    >
      <div className="flex items-center gap-2">
        <FiArrowLeft size={20} />
        <span>Back</span>
      </div>
    </button>
  );
};

export default Back;
