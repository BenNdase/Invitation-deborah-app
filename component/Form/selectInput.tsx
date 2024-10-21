import React from "react";

interface SelectInputProps {
  id: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectInput: React.FC<SelectInputProps> = ({
  id,
  options,
  value,
  onChange,
}) => {
  return (
    <div className="w-full">
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="" disabled>
          Mr, Mme, Rév, Pasteur, ...
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value} className="px-10">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
