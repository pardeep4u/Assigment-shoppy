import Navbar from "@/components/Navbar";
import NewProduct from "@/components/NewProduct";
import Products from "@/components/Products";

export default async function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-6 py-12 bg-gray-50 dark:bg-gray-900 transition-colors">
        <NewProduct />
        <Products />
      </main>
    </>
  );
}
