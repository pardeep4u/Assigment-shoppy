import { Fragment } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";

type Option = {
  name: string;
  value: string;
};

type ListBoxProps = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

const ListBox = ({
  options,
  value,
  onChange,
  placeholder = "Select option",
}: ListBoxProps) => {
  const selectedOption = options.find((option) => option.value === value);

  return (
    <div className="relative w-44">
      <Listbox value={value} onChange={onChange}>
        <ListboxButton className="relative bg-white w-full h-10 px-4 text-start ring-1 ring-inset ring-neutral-300 rounded-lg focus:ring-brand-secondary focus:outline-none">
          <span className="block truncate">
            {selectedOption ? (
              selectedOption.name
            ) : (
              <span className="text-neutral-400">{placeholder}</span>
            )}
          </span>

          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <BsChevronDown />
          </span>
        </ListboxButton>

        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ListboxOptions className="absolute mt-1 max-h-64 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
            {options.map((option) => (
              <ListboxOption
                key={option.value}
                value={option.value}
                className={({ active }) =>
                  `cursor-pointer select-none px-4 py-2 ${
                    active ? "bg-brand-secondary-light" : ""
                  }`
                }
              >
                {({ selected }) => (
                  <span
                    className={`block truncate ${
                      selected
                        ? "font-semibold bg-brand-secondary-transparent"
                        : "font-normal"
                    }`}
                  >
                    {option.name}
                  </span>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Transition>
      </Listbox>
    </div>
  );
};

export default ListBox;
