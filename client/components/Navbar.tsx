"use client";
import React from "react";
import { NavLinks } from "@/constants/NavLinks";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex justify-between px-9 py-10 bg-orange-700">
      <h1>Logo</h1>
      <div className="flex gap-12">
        {NavLinks.map((link) => {
          const isActive = pathname === link.path;
          console.log(isActive);

          return (
            <Link key={link.id} href={link.path}>
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
