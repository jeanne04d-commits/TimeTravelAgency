import { Clock, Mail, MapPin, Phone } from "lucide-react"

const footerLinks = {
  destinations: [
    { label: "Paris 1889", href: "#destinations" },
    { label: "Periode Cretace", href: "#destinations" },
    { label: "Florence 1504", href: "#destinations" },
    { label: "Voyages Personnalises", href: "#book" },
  ],
  company: [
    { label: "A Propos", href: "#" },
    { label: "Comment Ca Marche", href: "#" },
    { label: "Securite", href: "#" },
    { label: "Carrieres", href: "#" },
  ],
  support: [
    { label: "FAQ", href: "#chat" },
    { label: "Contact", href: "#book" },
    { label: "Conditions d&apos;Utilisation", href: "#" },
    { label: "Politique de Confidentialite", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Main Footer */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4 group">
              <Clock className="h-8 w-8 text-primary transition-transform duration-300 group-hover:rotate-[360deg]" />
              <span className="text-xl font-serif font-bold tracking-wide">
                <span className="text-primary">Voyage</span>
                <span className="text-foreground">Temporel</span>
                <span className="text-muted-foreground ml-1 text-sm font-normal">Agence</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
              Pionnier des experiences temporelles de luxe depuis la decouverte de la navigation chronologique. Votre voyage a travers le temps commence ici.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Portail Temporel, Paris, France</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>voyages@temporel.agence</span>
              </div>
            </div>
          </div>

          {/* Destinations Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Destinations
            </h4>
            <ul className="space-y-3">
              {footerLinks.destinations.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Entreprise
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Assistance
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                    dangerouslySetInnerHTML={{ __html: link.label }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 VoyageTemporel Agence. Tous droits temporels reserves.</p>
          <p className="flex items-center gap-1">
            Concu avec 
            <span className="text-primary mx-1">♦</span> 
            a travers plusieurs lignes temporelles
          </p>
        </div>
      </div>
    </footer>
  )
}
