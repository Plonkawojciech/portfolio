"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";

const translations = {
  pl: {
    experience: "Doświadczenie",
    education: "Edukacja",
    techSchool: "Technikum Komunikacji w Poznaniu",
    techProgram: "Technik Programista",
    techYear: "2025",
    qualifications: "Kwalifikacje: INF.03, INF.04",
    university: "Collegium Da Vinci",
    universityYear: "Student 1 roku",
    back: "Powrót",
  },
  en: {
    experience: "Experience",
    education: "Education",
    techSchool: "Technical School of Communication in Poznań",
    techProgram: "IT Technician",
    techYear: "2025",
    qualifications: "Qualifications: INF.03, INF.04",
    university: "Collegium Da Vinci",
    universityYear: "1st Year Student",
    back: "Back",
  },
};

export default function ExperiencePage() {
  const { language } = useTheme();
  const t = translations[language];

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
          <h1 className="text-5xl font-bold uppercase md:text-7xl lg:text-9xl">{t.experience}</h1>
        </motion.div>

        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="mb-8 text-3xl font-bold uppercase md:text-5xl">{t.education}</h2>

          {/* Technical School */}
          <motion.div
            className="mb-6 border-2 p-8"
            style={{ borderColor: "var(--border)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="mb-3 text-2xl font-bold md:text-3xl">{t.techSchool}</div>
            <div className="mb-2 text-xl font-semibold md:text-2xl">{t.techProgram}</div>
            <div className="mb-4 text-base opacity-70 md:text-lg">{t.techYear}</div>
            <div className="text-lg font-semibold" style={{ color: "var(--accent-blue)" }}>
              {t.qualifications}
            </div>
          </motion.div>

          {/* University */}
          <motion.div
            className="border-2 p-8"
            style={{ borderColor: "var(--border)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="mb-3 text-2xl font-bold md:text-3xl">{t.university}</div>
            <div className="text-xl font-semibold md:text-2xl" style={{ color: "var(--accent-green)" }}>
              {t.universityYear}
            </div>
          </motion.div>
        </motion.section>
      </div>
    </main>
  );
}
