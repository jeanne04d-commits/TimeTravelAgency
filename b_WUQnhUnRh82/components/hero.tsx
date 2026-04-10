"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Sparkles } from "lucide-react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-portal.jpg"
          alt="Portail de voyage temporel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {mounted && [...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/60 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary mb-8">
            <Sparkles className="h-4 w-4" />
            <span className="tracking-widest uppercase">Experiences Temporelles de Luxe</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 text-balance">
            <span className="block text-foreground">Voyagez a travers</span>
            <span className="block text-primary mt-2">le Temps</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            Depassez les frontieres du present. Vivez l&apos;histoire en direct, 
            soyez temoin des moments qui ont faconne notre monde, et creez des souvenirs a travers les millenaires.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 animate-pulse-glow group"
              asChild
            >
              <a href="#destinations">
                Decouvrir les destinations
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-foreground hover:bg-primary/10 text-lg px-8 py-6"
              asChild
            >
              <a href="#book">Reserver votre voyage</a>
            </Button>
          </div>

          {/* Scroll Indicator - Below buttons */}
          <div
            className={`mt-16 transition-all duration-1000 delay-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <a
              href="#destinations"
              className="flex flex-col items-center gap-2 text-muted-foreground/60 hover:text-primary/80 transition-colors"
            >
              <span className="text-[10px] tracking-widest uppercase">Defiler pour explorer</span>
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
