"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, Sparkles, CheckCircle } from "lucide-react"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"

const destinations = [
  { value: "paris-1889", label: "Paris 1889 - Construction de la Tour Eiffel", price: "125 000€" },
  { value: "cretaceous", label: "Periode Cretace - Expedition Dinosaures", price: "75 000€" },
  { value: "florence-1504", label: "Florence 1504 - Maitres de la Renaissance", price: "150 000€" },
]

export function BookingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    destination: "",
    date: "",
    travelers: "",
    name: "",
    email: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const selectedDestination = destinations.find(d => d.value === formData.destination)

  if (isSubmitted) {
    return (
      <section id="book" className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="glass rounded-2xl p-8 md:p-12 border border-primary/20">
              <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-foreground">
                Demande de Voyage Recue
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Merci de votre interet pour le voyage temporel. Nos specialistes temporels examineront votre demande et vous contacteront dans les 24 heures pour discuter des details de votre voyage et commencer le processus de preparation.
              </p>
              <Button
                onClick={() => {
                  setIsSubmitted(false)
                  setFormData({ destination: "", date: "", travelers: "", name: "", email: "" })
                }}
                variant="outline"
                className="border-primary/50 text-foreground hover:bg-primary/10"
              >
                Soumettre une Autre Demande
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="book" className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary px-4 py-1">
            <Clock className="h-3 w-3 mr-2" />
            Commencez Votre Voyage
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 text-balance">
            Reservez Votre <span className="text-primary">Aventure</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Faites le premier pas vers une experience extraordinaire. Notre equipe vous guidera a travers chaque aspect de la preparation au voyage temporel.
          </p>
        </div>

        {/* Booking Form */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 border border-primary/20">
            <FieldGroup className="space-y-6">
              {/* Destination Select */}
              <Field>
                <FieldLabel className="text-foreground flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  Selectionnez une Destination
                </FieldLabel>
                <Select
                  value={formData.destination}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, destination: value }))}
                >
                  <SelectTrigger className="bg-secondary border-0 focus:ring-primary h-12">
                    <SelectValue placeholder="Choisissez votre destination temporelle" />
                  </SelectTrigger>
                  <SelectContent className="glass border-primary/20">
                    {destinations.map((dest) => (
                      <SelectItem key={dest.value} value={dest.value} className="focus:bg-primary/10">
                        <div className="flex items-center justify-between w-full">
                          <span>{dest.label}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {selectedDestination && (
                  <p className="text-sm text-primary mt-2">A partir de {selectedDestination.price}</p>
                )}
              </Field>

              {/* Date and Travelers Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field>
                  <FieldLabel className="text-foreground flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    Date Preferee
                  </FieldLabel>
                  <Input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                    className="bg-secondary border-0 focus-visible:ring-primary h-12"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </Field>

                <Field>
                  <FieldLabel className="text-foreground flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    Nombre de Voyageurs
                  </FieldLabel>
                  <Select
                    value={formData.travelers}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, travelers: value }))}
                  >
                    <SelectTrigger className="bg-secondary border-0 focus:ring-primary h-12">
                      <SelectValue placeholder="Selectionnez" />
                    </SelectTrigger>
                    <SelectContent className="glass border-primary/20">
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <SelectItem key={num} value={num.toString()} className="focus:bg-primary/10">
                          {num} {num === 1 ? "Voyageur" : "Voyageurs"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field>
                  <FieldLabel className="text-foreground">Nom Complet</FieldLabel>
                  <Input
                    type="text"
                    placeholder="Entrez votre nom"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="bg-secondary border-0 focus-visible:ring-primary h-12"
                    required
                  />
                </Field>

                <Field>
                  <FieldLabel className="text-foreground">Adresse Email</FieldLabel>
                  <Input
                    type="email"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="bg-secondary border-0 focus-visible:ring-primary h-12"
                    required
                  />
                </Field>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 text-lg animate-pulse-glow"
                disabled={!formData.destination || !formData.date || !formData.travelers || !formData.name || !formData.email}
              >
                Demander une Consultation
                <span className="ml-2">→</span>
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                En soumettant, vous acceptez nos conditions de voyage temporel et de passer une evaluation d&apos;eligibilite.
              </p>
            </FieldGroup>
          </form>
        </div>
      </div>
    </section>
  )
}
