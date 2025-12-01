"use client";

import { Logo } from "~/components/pro-blocks/logo";
import { Button } from "~/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const MENU_ITEMS = [
  { label: "Home", href: "/app#home" },
  { label: "News", href: "/app#news" },
  { label: "Pricing", href: "/app#pricing" },
  { label: "Contact", href: "/app#contact" },
] as const;

interface NavMenuItemsProps {
  className?: string;
}

const NavMenuItems = ({ className }: NavMenuItemsProps) => (
  <div className={`flex flex-col gap-1 md:flex-row ${className ?? ""}`}>
    {MENU_ITEMS.map(({ label, href }) => (
      <Link key={label} href={href} scroll={true}>
        <Button variant="ghost" className="w-full md:w-auto">
          {label}
        </Button>
      </Link>
    ))}
  </div>
);

export function LpNavbar1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="bg-gray-950 sticky top-0 isolate z-50 py-3.5 md:py-4 text-white">
      <div className="relative container m-auto flex flex-col justify-between gap-4 px-6 md:flex-row md:items-center md:gap-6">
        <div className="flex items-center justify-between">
          <Link href="/app" aria-label="Go to homepage">
            <Logo className="size-7" />
          </Link>
          <Button
            variant="ghost"
            className="flex size-9 items-center justify-center md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden w-full flex-row justify-end gap-5 md:flex">
          <NavMenuItems />
          <Link href="https://youtu.be/dQw4w9WgXcQ?si=BFNrjVBuN1d1rTJu">
            <Button className="bg-lime-400 text-black hover:bg-lime-700 hover:text-white">Get started</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="flex w-full flex-col justify-end gap-5 pb-2.5 md:hidden">
            <NavMenuItems />
            <Link href="https://youtu.be/dQw4w9WgXcQ?si=BFNrjVBuN1d1rTJu">
              <Button className="w-full bg-lime-400 text-black hover:bg-lime-700 hover:text-white">Get started</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
