"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const linkClass = (path) =>
    pathname === path ? "text-blue-600 font-bold" : "text-gray-700";

  return (
    <nav className="flex gap-6 p-4 shadow-sm">
      <Link className={linkClass("/")} href="/">Home</Link>
      <Link className={linkClass("/about")} href="/about">About</Link>
      <Link className={linkClass("/portfolio")} href="/portfolio">Portfolio</Link>
    </nav>
  );
}
