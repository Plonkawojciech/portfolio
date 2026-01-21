"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";

const translations = {
  pl: {
    aboutMe: "O Mnie",
    cyclingTitle: "Kolarstwo",
    cyclingText: "Trenuję kolarstwo szosowe oraz torowe od 2020 roku. Aktualnie jestem zawodowym kolarzem w klubie kolarskim Tarnovia.",
    bio: "AI Developer & Freelancer. Specjalizuję się w tworzeniu inteligentnych rozwiązań wykorzystujących sztuczną inteligencję oraz nowoczesnych interfejsów użytkownika.",
    bestResults: "Najlepsze Wyniki",
    back: "Powrót",
    currentlyRiding: "Aktualnie jeżdżę na:",
    stravaLink: "Zobacz na Strava",
    firstCyclingLink: "Zobacz wyniki na FirstCycling",
  },
  en: {
    aboutMe: "About Me",
    cyclingTitle: "Cycling",
    cyclingText: "I've been training road and track cycling since 2020. Currently, I'm a professional cyclist at Tarnovia Cycling Club.",
    bio: "AI Developer & Freelancer. Specializing in creating intelligent solutions using artificial intelligence and modern user interfaces.",
    bestResults: "Best Results",
    back: "Back",
    currentlyRiding: "Currently riding on:",
    stravaLink: "View on Strava",
    firstCyclingLink: "View results on FirstCycling",
  },
};

export default function AboutMePage() {
  const { language } = useTheme();
  const t = translations[language];

  // Best results data
  const bestResults = [
    {
      place: { pl: "5. miejsce", en: "5th place" },
      description: {
        pl: "Młodzieżowe Mistrzostwa Europy na torze - wyścig drużynowy",
        en: "European Youth Track Championships - team pursuit",
      },
      year: "2024",
      category: { pl: "Tor", en: "Track" },
    },
    {
      place: { pl: "1. miejsce", en: "1st place" },
      description: {
        pl: "Scratch UCI na wyścigu 500plus1 kolo",
        en: "UCI Scratch at 500plus1 lap race",
      },
      year: "2024",
      category: { pl: "Tor", en: "Track" },
    },
    {
      place: { pl: "Wicemistrz Polski", en: "Polish Vice-Champion" },
      description: {
        pl: "Par na czas",
        en: "Pairs time trial",
      },
      year: "2024",
      category: { pl: "Szosa", en: "Road" },
    },
    {
      place: { pl: "Mistrz Polski LZS", en: "Polish LZS Champion" },
      description: {
        pl: "Jazda indywidualna na czas",
        en: "Individual time trial",
      },
      year: "2025",
      category: { pl: "Szosa", en: "Road" },
    },
    {
      place: { pl: "4. miejsce", en: "4th place" },
      description: {
        pl: "Klasyfikacja generalna na wyścigu przyjaźni polsko-ukraińskiej",
        en: "General classification at Polish-Ukrainian Friendship Race",
      },
      year: "2025",
      category: { pl: "Szosa", en: "Road" },
    },
  ];

  // Cycling images - dodaj swoje zdjęcia do folderu public/ jako cycling1.jpg, cycling2.jpg, etc.
  // Możesz też użyć innych formatów: .png, .webp
  const cyclingImages = [
    "/rower1.jpeg",
    "/rower2.jpeg", 
    "/rower3.jpeg",
    "/rower4.jpeg",
  ];

  return (
    <main
      className="min-h-screen transition-colors duration-300"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      {/* Back Button */}
      <Link
        href="/"
        className="fixed left-4 top-4 z-50 flex h-10 w-10 items-center justify-center border-2 border-[var(--border)] bg-[var(--background)] transition-colors active:bg-[var(--accent-blue)] md:left-8 md:top-8 md:h-12 md:w-12 md:hover:bg-[var(--accent-blue)]"
      >
        <ArrowLeft size={18} className="md:w-5 md:h-5" />
      </Link>

      <div className="mx-auto max-w-7xl px-4 py-12 md:py-20 lg:py-32">
        {/* Header */}
        <motion.div
          className="mb-12 border-b-2 pb-8 md:mb-16"
          style={{ borderColor: "var(--border)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl font-bold uppercase md:text-7xl lg:text-9xl">{t.aboutMe}</h1>
        </motion.div>

        {/* Cycling Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="mb-6 text-3xl font-bold uppercase md:text-5xl">{t.cyclingTitle}</h2>
          <p className="mb-8 text-lg leading-relaxed md:text-xl lg:text-2xl">{t.cyclingText}</p>

          {/* Cycling Images Grid */}
          <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-2">
            {cyclingImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative aspect-[4/3] overflow-hidden border-2"
                style={{ borderColor: "var(--border)" }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Image
                  src={image}
                  alt={`Cycling photo ${index + 1}`}
                  fill
                  className="object-cover"
                  unoptimized
                  onError={(e) => {
                    // Fallback jeśli obrazek się nie załaduje
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="flex h-full w-full items-center justify-center bg-[var(--background)] text-center text-sm opacity-50">Photo ${index + 1}</div>`;
                    }
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Best Results Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="mb-6 text-2xl font-bold uppercase md:mb-8 md:text-3xl lg:text-5xl">{t.bestResults}</h2>
          <div className="space-y-3 md:space-y-4">
            {bestResults.map((result, index) => (
              <motion.div
                key={index}
                className="border-2 p-4 md:p-6 lg:p-8"
                style={{ borderColor: "var(--border)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-lg font-bold sm:text-xl md:text-2xl" style={{ color: "var(--accent-orange)" }}>
                    {result.place[language]}
                  </div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <span className="text-xs uppercase opacity-60 sm:text-sm">{result.category[language]}</span>
                    <span className="text-base font-semibold sm:text-lg md:text-xl">{result.year}</span>
                  </div>
                </div>
                <p className="text-sm leading-relaxed sm:text-base md:text-lg lg:text-xl">{result.description[language]}</p>
              </motion.div>
            ))}
          </div>

          {/* Strava & Current Bikes */}
          <motion.a
            href="https://strava.app.link/GK1GZGmh7Zb"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block border-2 p-4 transition-colors md:mt-8 md:p-6 lg:p-8"
            style={{ 
              borderColor: "var(--border)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#FFE5D9";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <p className="mb-2 text-base font-bold uppercase sm:text-lg md:text-xl">{t.currentlyRiding}</p>
            <p className="text-sm leading-relaxed sm:text-base md:text-lg lg:text-xl">
              S-Works Shiv TT, Orbea Orca Aero i Track Handsling
            </p>
            <div className="mt-3 space-y-2 sm:mt-4">
              <a
                href="https://strava.app.link/GK1GZGmh7Zb"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs opacity-70 transition-opacity hover:opacity-100 sm:text-sm md:text-base"
                onClick={(e) => e.stopPropagation()}
              >
                {t.stravaLink} →
              </a>
              <a
                href="https://firstcycling.com/rider.php?r=212504"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs opacity-70 transition-opacity hover:opacity-100 sm:text-sm md:text-base"
                onClick={(e) => e.stopPropagation()}
              >
                {t.firstCyclingLink} →
              </a>
            </div>
          </motion.a>
        </motion.section>
      </div>
    </main>
  );
}
