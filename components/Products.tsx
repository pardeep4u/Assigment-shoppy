"use client";

import useProducts from "@/hooks/useProducts";
import Product from "./Product";
import Pagination from "./Pagination";
import Filters from "./Filters";
import SkeltonProductLoader from "./SkeltonProductLoader";

const Products = () => {
  const {
    error,
    loading,
    products,
    setSort,
    sort,
    currentPage,
    setCurrentPage,
    totalPages,
    category,
    setCategory,
    search,
    setSearch,
  } = useProducts();

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <Filters
        sort={sort}
        setSort={setSort}
        category={category}
        setCategory={setCategory}
        search={search}
        setSearch={setSearch}
      />
      {loading && <SkeltonProductLoader />}
      {!loading && error && (
        <div className="text-center text-red-500 mt-10">{error}</div>
      )}
      {!loading && !error && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </section>
  );
};

export default Products;
