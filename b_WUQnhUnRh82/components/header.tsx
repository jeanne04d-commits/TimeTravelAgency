"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Clock } from "lucide-react"

declare global {
  interface Window {
    chatbase: ((...args: unknown[]) => void) & {
      q?: unknown[]
    }
  }
}

const navItems = [
  { label: "Accueil", href: "#home" },
  { label: "Destinations", href: "#destinations" },
  { label: "Assistant IA", href: "#chat", action: "openChatbot" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const openChatbot = () => {
    if (window.chatbase) {
      window.chatbase("open")
    }
  }

  const handleNavClick = (item: typeof navItems[0], e: React.MouseEvent) => {
    if (item.action === "openChatbot") {
      e.preventDefault()
      openChatbot()
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="relative">
            <Clock className="h-8 w-8 text-primary transition-transform duration-300 group-hover:rotate-[360deg]" />
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="text-xl md:text-2xl font-serif font-bold tracking-wide">
            <span className="text-primary">Voyage</span>
            <span className="text-foreground">Temporel</span>
            <span className="text-muted-foreground ml-1 text-sm font-normal hidden sm:inline">Agence</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.action ? "#" : item.href}
              onClick={(e) => handleNavClick(item, e)}
              className="relative text-foreground/80 hover:text-primary transition-colors duration-300 text-sm tracking-widest uppercase font-medium group cursor-pointer"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 animate-pulse-glow" asChild>
            <a href="#book">Réserver</a>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Ouvrir le menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] glass border-l border-primary/20">
            <nav className="flex flex-col gap-6 mt-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.action ? "#" : item.href}
                  onClick={(e) => {
                    handleNavClick(item, e)
                    setIsOpen(false)
                  }}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 text-lg tracking-widest uppercase font-medium cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 mt-4" asChild>
                <a href="#book" onClick={() => setIsOpen(false)}>Réserver</a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
