import { Product, SortType } from "@/utils/type";
import { useEffect, useMemo, useState } from "react";

const ITEMS_PER_PAGE = 6;

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sort, setSort] = useState<SortType>("none");
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);

        let url = "https://fakestoreapi.com/products";
        if (category && category !== "all") {
          url = `https://fakestoreapi.com/products/category/${category}`;
        }
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data: Product[] = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [category]);

  useEffect(() => {
    setCurrentPage(1);
  }, [sort, category, search]);

  const filteredProducts = useMemo(() => {
    if (!search.trim()) return products;

    return products.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  const sortedProducts = useMemo(() => {
    if (sort === "none") return filteredProducts;

    return [...filteredProducts].sort((a, b) =>
      sort === "low" ? a.price - b.price : b.price - a.price
    );
  }, [filteredProducts, sort]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return sortedProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [sortedProducts, currentPage]);

  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);

  return {
    products: paginatedProducts,
    loading,
    error,
    sort,
    setSort,
    currentPage,
    setCurrentPage,
    totalPages,
    category,
    setCategory,
    search,
    setSearch,
  };
};

export default useProducts;
