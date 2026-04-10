import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Destinations } from "@/components/destinations"
import { BookingForm } from "@/components/booking-form"
import { Chatbot } from "@/components/chatbot"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Destinations />
      <BookingForm />
      <Footer />
      <Chatbot />
    </main>
  )
}
