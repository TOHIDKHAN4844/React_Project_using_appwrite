import React, { useId } from 'react';

const Input = React.forwardRef(function Input(
  { label,
    type = 'text',
     className = '',
      ...props },
  ref
) {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label
          className="inline-block mb-2 pl-1 text-sm font-medium text-gray-700"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        className={`px-4 py-2 rounded-xl bg-gray-100 text-gray-900 outline-none focus:bg-white focus:ring-2 focus:ring-blue-400 border border-gray-300 w-full duration-200 placeholder-gray-500 ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;
