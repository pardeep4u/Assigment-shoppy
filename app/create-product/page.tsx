"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import FormInput from "@/components/FormInput ";
import Back from "@/components/Back";

/* ------------------ Zod Schema ------------------ */
const productSchema = z.object({
  title: z.string().min(1, "Title is required"),
  price: z
    .number("Price must be a number")
    .positive("Price must be greater than 0"),
  description: z.string().min(1, "Description is required"),
  image: z.string().url("Image must be a valid URL"),
  category: z.string().min(1, "Category is required"),
});

type ProductFormData = z.infer<typeof productSchema>;

/* ------------------ Component ------------------ */
export default function ProductForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
  });

  const onSubmit = async (data: ProductFormData) => {
    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const response = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to create product");
      }

      await response.json();
      setSuccess("Product created successfully!");
      reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Back />
      <div className="w-[45%] bg-white p-8 rounded-2xl shadow">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          Create Product
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <FormInput
            label="Product Title"
            placeholder="Product Title"
            register={register("title")}
            error={errors.title}
          />
          <FormInput
            label="Price"
            placeholder="Price"
            type="number"
            register={register("price", { valueAsNumber: true })}
            error={errors.price}
          />
          <div>
            <textarea
              {...register("description")}
              placeholder="Description"
              rows={4}
              className="w-full border rounded-lg px-4 py-2"
            />
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>
          <FormInput
            label="Image URL"
            placeholder="Image URL"
            register={register("image")}
            error={errors.image}
          />
          <FormInput
            label="Category"
            placeholder="Category"
            register={register("category")}
            error={errors.category}
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-500 transition disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create Product"}
          </button>
          {success && <p className="text-green-600 text-sm">{success}</p>}
          {error && <p className="text-red-600 text-sm">{error}</p>}
        </form>
      </div>
    </div>
  );
}
