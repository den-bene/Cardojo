"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle2, Loader2 } from "lucide-react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Basic email validation
    if (!validateEmail(email)) {
      setError("Inserisci un indirizzo email valido");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Qualcosa è andato storto");
      }

      console.log("Email sent successfully:", data);
      setIsSubmitted(true);

      // Track conversion in Google Analytics
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "waitlist_signup", {
          event_category: "engagement",
          event_label: "Waitlist Signup Success",
          value: 1,
        });
      }

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    } catch (err) {
      console.error("Error submitting email:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Qualcosa è andato storto. Riprova."
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-500/50 rounded-lg px-6 py-4 max-w-md mx-auto animate-in fade-in-0 zoom-in-95">
        <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
        <div className="text-center">
          <p className="font-semibold text-green-700 dark:text-green-400">
            Iscrizione completata! 🎉
          </p>
          <p className="text-sm text-green-600 dark:text-green-500">
            Controlla la tua email
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-500" />
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Il tuo indirizzo email"
            required
            disabled={isLoading}
            className="pl-11 pr-4 py-6 rounded-lg border-2 border-orange-300 dark:border-orange-700 bg-white dark:bg-gray-900 text-foreground placeholder:text-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-base"
          />
        </div>
        <Button
          type="submit"
          disabled={isLoading}
          className="px-6 py-6 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold rounded-lg shadow-lg shadow-orange-500/50 hover:shadow-xl hover:shadow-orange-500/70 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap text-base"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span className="hidden sm:inline">Iscrizione...</span>
            </>
          ) : (
            <span>Unisciti alla Waitlist</span>
          )}
        </Button>
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-500 text-center animate-in fade-in-0 slide-in-from-top-1">
          {error}
        </p>
      )}
      <p className="mt-3 text-xs text-center text-gray-400 dark:text-gray-500">
        Ti invieremo aggiornamenti sul lancio. Zero spam, promettiamo! 🤝
      </p>
    </form>
  );
}