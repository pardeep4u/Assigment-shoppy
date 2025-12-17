import { CATEGORIES, SORT_OPTIONS } from "@/utils/constant";
import ListBox from "./ListBox";
import { SortType } from "@/utils/type";
import { RxReset } from "react-icons/rx";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface IProps {
  sort: SortType;
  setSort: Dispatch<SetStateAction<SortType>>;
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

const Filters = ({
  sort,
  setSort,
  category,
  setCategory,
  search,
  setSearch,
}: IProps) => {

  const [localSearch, setLocalSearch] = useState(search);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(localSearch);
    }, 700);

    return () => clearTimeout(timer);
  }, [localSearch, setSearch]);

  useEffect(() => {
    setLocalSearch(search);
  }, [search]);

  return (
    <div className="flex justify-between py-5">
      <div className="flex gap-2">
        <ListBox
          options={SORT_OPTIONS}
          value={sort}
          onChange={(value) => {
            setSort(value as SortType);
          }}
          placeholder="Sort by"
        />
        <ListBox
          options={CATEGORIES}
          value={category}
          onChange={setCategory}
          placeholder="Category"
        />
      </div>

      <div className="flex gap-2">
        <div className="flex justify-center items-center">
          <button
            className="border bg-white hover:cursor-pointer border-neutral-200 rounded-full p-1 shadow-sm"
            onClick={() => {
              setLocalSearch("");
              setSearch("");
              setCategory("all");
              setSort("none");
            }}
          >
            <RxReset
              data-tooltip-id="tooltip_employee_list"
              data-tooltip-content="Reset filter"
              className="outline-none"
            />
          </button>
        </div>

        <input
          type="text"
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
          placeholder="Search products..."
          className="border px-4 py-2 rounded-lg w-64 bg-white"
        />
      </div>
    </div>
  );
};

export default Filters;