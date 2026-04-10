"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    chatbase: ((...args: unknown[]) => void) & {
      q?: unknown[]
    }
  }
}

export function Chatbot() {
  useEffect(() => {
    // Initialize chatbase if not already initialized
    if (!window.chatbase || window.chatbase("getState") !== "initialized") {
      window.chatbase = (...args: unknown[]) => {
        if (!window.chatbase.q) {
          window.chatbase.q = []
        }
        window.chatbase.q.push(args)
      }
      
      window.chatbase = new Proxy(window.chatbase, {
        get(target, prop: string) {
          if (prop === "q") {
            return target.q
          }
          return (...args: unknown[]) => target(prop, ...args)
        }
      }) as typeof window.chatbase
    }

    // Load the Chatbase script
    const onLoad = () => {
      // Check if script already exists
      if (document.getElementById("6IiVHLMnczyQfDohbxyow")) return
      
      const script = document.createElement("script")
      script.src = "https://www.chatbase.co/embed.min.js"
      script.id = "6IiVHLMnczyQfDohbxyow"
      script.setAttribute("domain", "www.chatbase.co")
      document.body.appendChild(script)
    }

    if (document.readyState === "complete") {
      onLoad()
    } else {
      window.addEventListener("load", onLoad)
      return () => window.removeEventListener("load", onLoad)
    }
  }, [])

  // The Chatbase widget renders itself in the bottom-right corner
  return null
}
