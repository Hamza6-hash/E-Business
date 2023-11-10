"use client";
import React from "react";
import { NavLinks } from "@/constants/NavLinks";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav
      style={{ backgroundColor: "#3498db" }}
      className="flex text-white justify-between px-9 h-14 overflow-y-hidden items-center py-10 bg-orange-700 font-sans"
    >
      <h1>Logo</h1>
      <div className="flex gap-12">
        {NavLinks.map((link) => {
          const isActive = pathname === link.path;

          return (
            <Link
              className={`${isActive && "underline text-yellow-400"}`}
              key={link.id}
              href={link.path}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
