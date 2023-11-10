"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function FilterCategories() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    console.log("Hit");
    setIsOpen(!isOpen);
  }

  const categories = [
    "Workout",
    "Fashions",
    "Entertainments",
    "Home Decors",
    "Sports",
    "Beauty",
  ];

  return (
    <div className="relative group left-4 h-72 z-50">
      <button
        onMouseEnter={toggleDropdown}
        // onMouseLeave={toggleDropdown}
        className="bg-blue-500 text-white left-2 relative px-4 py-2 w-40 rounded flex gap-2 items-center whitespace-nowrap"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          width="32"
          height="32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M4 6H20M4 12H14M4 18H9"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
        </svg>
        Categories
      </button>

      <div
        className={`${isOpen ? "block" : "hidden"}
          absolute left-2 w-40 bg-slate-300 border border-gray-300 rounded-lg shadow-lg`}
      >
        <ul>
          <div className="flex flex-col p-2 gap-2">
            {categories.map((category) => (
              <Link href={`category/${category}`}>{category}</Link>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
}
