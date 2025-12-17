import { Dispatch, SetStateAction } from "react";

const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
}: {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
}) => {
  return (
    <div className="mt-10">
      <div className="flex justify-center items-center gap-3">
        <button
          onClick={() => setCurrentPage((p) => p - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded-lg disabled:opacity-50 hover:bg-gray-100 transition"
        >
          Prev
        </button>

        <span className="px-4 py-2 text-gray-700 font-medium">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((p) => p + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border rounded-lg disabled:opacity-50 hover:bg-gray-100 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
