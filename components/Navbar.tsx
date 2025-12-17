import ThemeButton from "./ThemeButton";

const Navbar = () => {
  return (
    <>
      <section className="w-full bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Shop Smarter with{" "}
            <span className="text-indigo-600 dark:text-indigo-400">Shopyy</span>
          </h1>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover high-quality products at unbeatable prices. Fast delivery.
            Secure payments. Easy returns.
          </p>

          <div className="mt-6 flex justify-center">
            <ThemeButton />
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
