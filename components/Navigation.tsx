"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const pathname = usePathname()

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="bg-[#0A0F1F]/80 backdrop-blur-md rounded-full px-8 py-4 border border-white/10 shadow-lg">
          <div className="flex items-center justify-center relative">
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-[#F9FAFB] hover:text-[#22D3EE] transition-colors"
                >
                  {link.name}
                  {pathname === link.href && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#22D3EE] rounded-full" />
                  )}
                </Link>
              ))}
            </div>
          </div>


        </div>
      </div>
    </nav>
  )
}
