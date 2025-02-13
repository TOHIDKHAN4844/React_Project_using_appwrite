import React from "react";

export default function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  hoverColor = "hover:bg-blue-700",
  ringEffect = "focus:ring-2 focus:ring-blue-300",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      className={`px-6 py-3 rounded-xl font-semibold ${bgColor} ${textColor} ${hoverColor} ${ringEffect} duration-200 shadow-lg transform hover:-translate-y-1 active:translate-y-0 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
