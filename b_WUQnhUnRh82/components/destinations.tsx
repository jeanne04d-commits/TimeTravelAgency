"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, AlertTriangle, Sparkles } from "lucide-react"

const destinations = [
  {
    id: "paris-1889",
    title: "Paris 1889",
    subtitle: "La Naissance d&apos;une Icone",
    image: "https://i.imgur.com/ZYGY8jq.jpg",
    shortDescription: "Assistez a l&apos;erection de la Tour Eiffel durant l&apos;Exposition Universelle",
    fullDescription: "Plongez au coeur du Paris de la Belle Epoque et soyez temoin de la construction de la structure la plus emblematique de l&apos;histoire. La Tour Eiffel, concue par Gustave Eiffel, s&apos;eleve majestueusement sur l&apos;horizon parisien.",
    atmosphere: "L&apos;air vibre de l&apos;energie de la revolution industrielle. Les machines a vapeur sifflent, les ouvriers crient en francais, et le bruit des rivets en fer resonne sur le chantier. L&apos;odeur des croissants frais se mele a celle du charbon.",
    activities: [
      "Rencontrez Gustave Eiffel en personne",
      "Grimpez sur la tour en construction",
      "Assistez a l&apos;inauguration de l&apos;Exposition",
      "Dinez dans d&apos;authentiques cafes parisiens",
      "Decouvrez les demonstrations de lumiere electrique d&apos;Edison"
    ],
    risks: [
      "Risques sanitaires de l&apos;ere industrielle",
      "Barriere linguistique (epoque francophone)",
      "Absence de commodites modernes",
      "Tensions politiques de l&apos;epoque"
    ],
    era: "Revolution Industrielle",
    duration: "3-7 jours recommandes"
  },
  {
    id: "cretaceous",
    title: "Periode Cretace",
    subtitle: "Quand les Geants Regnaient",
    image: "https://i.imgur.com/2DG2Y90.jpg",
    shortDescription: "Marchez parmi les dinosaures sur la Terre prehistorique",
    fullDescription: "Voyagez 66 millions d&apos;annees dans le passe pour decouvrir la Terre a l&apos;epoque ou les dinosaures dominaient chaque ecosysteme. Du puissant T-Rex aux gracieux pterodactyles, vivez la vie avant l&apos;humanite.",
    atmosphere: "Des forets primordiales s&apos;etendent a l&apos;infini sous un ciel different. L&apos;air est epais, riche en oxygene, et anime de sons jamais entendus par l&apos;oreille humaine. L&apos;activite volcanique peint l&apos;horizon en orange.",
    activities: [
      "Observez le T-Rex dans son habitat naturel",
      "Regardez les pterodactyles planer",
      "Documentez des especes inconnues",
      "Explorez les ecosystemes prehistoriques",
      "Collectez des echantillons geologiques autorises"
    ],
    risks: [
      "Megafaune predatrice",
      "Toxines vegetales inconnues",
      "Evenements meteorologiques extremes",
      "Aucun sauvetage possible en cas d&apos;urgence"
    ],
    era: "Ere Mesozoique",
    duration: "24-48 heures maximum"
  },
  {
    id: "florence-1504",
    title: "Florence 1504",
    subtitle: "L&apos;Eclat de la Renaissance",
    image: "https://i.imgur.com/Zn8wAlE.jpg",
    shortDescription: "Vivez le devoilement du David de Michel-Ange",
    fullDescription: "Entrez dans l&apos;age d&apos;or de la Renaissance florentine. Assistez au devoilement du David de Michel-Ange, marchez dans les rues aux cotes de Leonard de Vinci, et vivez l&apos;explosion culturelle qui a faconne la civilisation occidentale.",
    atmosphere: "Les rues pavees resonnent des coups de marteau des artistes et des debats des philosophes. L&apos;odeur de la peinture a l&apos;huile et de la poussiere de marbre emplit l&apos;air. Chaque coin de rue revele un autre chef-d&apos;oeuvre en cours.",
    activities: [
      "Assistez a la ceremonie de devoilement du David",
      "Visitez l&apos;atelier de Leonard de Vinci",
      "Commandez une oeuvre aux maitres artistes",
      "Participez aux receptions de la famille Medicis",
      "Etudiez dans les academies de la Renaissance"
    ],
    risks: [
      "Intrigues et rivalites politiques",
      "Epidemies frequentes",
      "Inquisition religieuse active",
      "Restrictions de classe sociale"
    ],
    era: "Renaissance Italienne",
    duration: "5-14 jours recommandes"
  }
]

export function Destinations() {
  const [selectedDestination, setSelectedDestination] = useState<typeof destinations[0] | null>(null)

  return (
    <section id="destinations" className="py-24 md:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary px-4 py-1">
            <Sparkles className="h-3 w-3 mr-2" />
            Choisissez Votre Epoque
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 text-balance">
            Destinations <span className="text-primary">Legendaires</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Des experiences soigneusement selectionnees a travers le temps. Chaque voyage est minutieusement planifie pour garantir votre securite tout en maximisant l&apos;immersion historique.
          </p>
        </div>

        {/* Destination Cards - Mobile first, stacked vertically on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {destinations.map((destination, index) => (
            <article
              key={destination.id}
              className="group relative overflow-hidden rounded-xl glass transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image with dark overlay */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-card/30" />
                <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                  {destination.era}
                </Badge>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold mb-1 text-foreground group-hover:text-primary transition-colors">
                  {destination.title}
                </h3>
                <p 
                  className="text-primary text-sm font-medium mb-3"
                  dangerouslySetInnerHTML={{ __html: destination.subtitle }}
                />
                <p 
                  className="text-muted-foreground text-sm leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{ __html: destination.shortDescription }}
                />
                
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {destination.duration}
                  </span>
                </div>

                <Button
                  onClick={() => setSelectedDestination(destination)}
                  className="w-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  En savoir plus
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </Button>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Destination Detail Modal */}
      <Dialog open={!!selectedDestination} onOpenChange={() => setSelectedDestination(null)}>
        <DialogContent className="max-w-2xl glass border-primary/20 max-h-[90vh] overflow-y-auto">
          {selectedDestination && (
            <>
              <DialogHeader>
                <div className="relative h-48 -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-lg">
                  <img
                    src={selectedDestination.image}
                    alt={selectedDestination.title}
                    className="w-full h-full object-cover"
                    crossOrigin="anonymous"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                    {selectedDestination.era}
                  </Badge>
                </div>
                <DialogTitle className="text-3xl font-serif text-foreground">
                  {selectedDestination.title}
                </DialogTitle>
                <DialogDescription 
                  className="text-primary font-medium"
                  dangerouslySetInnerHTML={{ __html: selectedDestination.subtitle }}
                />
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Description */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    Apercu
                  </h4>
                  <p 
                    className="text-muted-foreground leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: selectedDestination.fullDescription }}
                  />
                </div>

                {/* Atmosphere */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    Atmosphere
                  </h4>
                  <p 
                    className="text-muted-foreground leading-relaxed italic"
                    dangerouslySetInnerHTML={{ __html: selectedDestination.atmosphere }}
                  />
                </div>

                {/* Activities */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    Experiences Incluses
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedDestination.activities.map((activity, i) => (
                      <li 
                        key={i} 
                        className="text-sm text-muted-foreground flex items-start gap-2"
                        dangerouslySetInnerHTML={{ __html: `<span class="text-primary">•</span> ${activity}` }}
                      />
                    ))}
                  </ul>
                </div>

                {/* Risks */}
                <div className="bg-destructive/10 rounded-lg p-4 border border-destructive/20">
                  <h4 className="text-sm font-semibold text-destructive uppercase tracking-wider mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4" />
                    Risques Importants
                  </h4>
                  <ul className="space-y-1">
                    {selectedDestination.risks.map((risk, i) => (
                      <li 
                        key={i} 
                        className="text-sm text-destructive/80 flex items-start gap-2"
                        dangerouslySetInnerHTML={{ __html: `<span>•</span> ${risk}` }}
                      />
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex gap-3 pt-2">
                  <Button 
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                    asChild
                  >
                    <a href="#book">Reserver ce voyage</a>
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setSelectedDestination(null)}
                    className="border-muted-foreground/30"
                  >
                    Fermer
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
