"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between border-b shadow-sm">
      <div className="flex items-center gap-3">
        <img
          src="/logo.png" 
          alt="Logo"
          className="h-6 w-6"
        />
        <span className="text-lg font-semibold">Home / Noida / Bikanervala</span>
      </div>

      <div className="flex items-center gap-8 text-sm font-medium">
        <Link href="/FoodWeb">Landing page</Link>
        <Link href="#">Help</Link>
        <Link href="#">Search</Link>
        <Link href="#">Cart</Link>
      </div>
    </nav>
  );
}
