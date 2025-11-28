import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const categories = [
  { id: "filosofia", name: "Filosofía", path: "/filosofia" },
  { id: "biologia", name: "Biología", path: "/biologia" },
  { id: "matematicas", name: "Matemáticas", path: "/matematicas" },
  { id: "sistemas", name: "Sistemas", path: "/sistemas" },
  { id: "flujo-creativo", name: "Flujo Creativo", path: "/flujo-creativo" },
];

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="font-bold text-xl">CAELION</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={category.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === category.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {category.name}
              </Link>
            ))}
            <Link
              href="/bot"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Bot Simbiótico
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={category.path}
                className={`block px-4 py-2 text-sm font-medium transition-colors hover:bg-accent rounded-md ${
                  location === category.path
                    ? "text-primary bg-accent"
                    : "text-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {category.name}
              </Link>
            ))}
            <Link
              href="/bot"
              className="block px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Bot Simbiótico
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
