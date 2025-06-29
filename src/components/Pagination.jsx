import React from "react";

export default function Pagination({ count, page, onChange }) {
  const pages = Array.from({ length: count }, (_, i) => i + 1);

  return (
    <div className="flex justify-center space-x-2">
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={`px-3 py-1 rounded ${
            p === page
              ? "bg-[rgb(11,72,59)] text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {p}
        </button>
      ))}
    </div>
  );
}
