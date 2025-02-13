import React, { useId } from "react";

const Select = React.forwardRef(
  ({ options, label, className = "", ...props }, ref) => {
    const id = useId();
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        <select
          {...props}
          id={id}
          ref={ref}
          className={`px-4 py-2 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none w-full text-gray-700 ${className}`}
        >
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

export default Select;
