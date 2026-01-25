"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Moon, Sun, Languages, Instagram, User, Briefcase } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "./context/ThemeContext";

// Translations
const translations = {
  pl: {
    bio: "AI Developer & Freelancer. Specjalizuję się w tworzeniu inteligentnych rozwiązań wykorzystujących sztuczną inteligencję oraz nowoczesnych interfejsów użytkownika.",
    selectedWorks: "Wybrane Projekty",
    stack: "Stack",
    letsTalk: "POROZMAWIAJMY",
    copyright: "© 2026. Wszelkie prawa zastrzeżone.",
    id: "[ID]",
    project: "Projekt",
    category: "Kategoria",
    year: "Rok",
    link: "Link",
    aboutMe: "O Mnie",
    experience: "Doświadczenie",
    cyclingTitle: "Kolarstwo",
    cyclingText: "Trenuję kolarstwo szosowe oraz torowe od 2020 roku. Aktualnie jestem zawodowym kolarzem w klubie kolarskim Tarnovia.",
    bestResults: "Najlepsze Wyniki",
    education: "Edukacja",
    techSchool: "Technikum Komunikacji w Poznaniu",
    techProgram: "Technik Programista",
    techYear: "2025",
    qualifications: "Kwalifikacje: INF.03, INF.04",
    university: "Collegium Da Vinci",
    universityYear: "Student 1 roku",
  },
  en: {
    bio: "AI Developer & Freelancer. Specializing in creating intelligent solutions using artificial intelligence and modern user interfaces.",
    selectedWorks: "Selected Works",
    stack: "Stack",
    letsTalk: "LET'S TALK",
    copyright: "© 2026. All rights reserved.",
    id: "[ID]",
    project: "Project",
    category: "Category",
    year: "Year",
    link: "Link",
    aboutMe: "About Me",
    experience: "Experience",
    cyclingTitle: "Cycling",
    cyclingText: "I've been training road and track cycling since 2020. Currently, I'm a professional cyclist at Tarnovia Cycling Club.",
    bestResults: "Best Results",
    education: "Education",
    techSchool: "Technical School of Communication in Poznań",
    techProgram: "IT Technician",
    techYear: "2025",
    qualifications: "Qualifications: INF.03, INF.04",
    university: "Collegium Da Vinci",
    universityYear: "1st Year Student",
  },
};

// Project Data
const projects = [
  {
    id: 1,
    name: { pl: "Solvio", en: "Solvio" },
    category: { pl: "AI Development", en: "AI Development" },
    year: "2025",
    link: "https://solvioaitracking.vercel.app",
    image: "/solvio.png",
  },
  {
    id: 2,
    name: { pl: "DriveFlow", en: "DriveFlow" },
    category: { pl: "AI CRM", en: "AI CRM" },
    year: "2026",
    link: "https://car-salesman-nj4a.vercel.app",
    image: "/driveflow.png",
  },
  {
    id: 3,
    name: { pl: "Vision Seller", en: "Vision Seller" },
    category: { pl: "AI Development", en: "AI Development" },
    year: "2025",
    link: "https://olx-turbo-sprzedawca.vercel.app",
    image: "/Visionseller.png",
  },
  {
    id: 4,
    name: { pl: "Portfolio", en: "Portfolio" },
    category: { pl: "Web Development", en: "Web Development" },
    year: "2025",
    link: "#",
    image: "/portfolio.png",
  },
];

// Control Buttons Component
const ControlButtons = () => {
  const { theme, language, toggleTheme, toggleLanguage } = useTheme();
  const t = translations[language];
  const [leftButtonsOpacity, setLeftButtonsOpacity] = useState(1);
  const [rightButtonsOpacity, setRightButtonsOpacity] = useState(1);

  // Check for collisions with text elements
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const checkCollisions = () => {
      const leftButtons = document.querySelector('[data-left-buttons]') as HTMLElement;
      const rightButtons = document.querySelector('[data-right-buttons]') as HTMLElement;
      
      if (!leftButtons || !rightButtons) return;

      const leftRect = leftButtons.getBoundingClientRect();
      const rightRect = rightButtons.getBoundingClientRect();

      // Get all text elements (headings, paragraphs)
      const textElements = document.querySelectorAll('h1, h2, h3, p, span:not(button span, a span)');
      
      let leftCollision = false;
      let rightCollision = false;

      textElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        
        // Check left buttons collision
        if (
          rect.left < leftRect.right &&
          rect.right > leftRect.left &&
          rect.top < leftRect.bottom &&
          rect.bottom > leftRect.top
        ) {
          leftCollision = true;
        }

        // Check right buttons collision
        if (
          rect.left < rightRect.right &&
          rect.right > rightRect.left &&
          rect.top < rightRect.bottom &&
          rect.bottom > rightRect.top
        ) {
          rightCollision = true;
        }
      });

      setLeftButtonsOpacity(leftCollision ? 0.6 : 1);
      setRightButtonsOpacity(rightCollision ? 0.6 : 1);
    };

    // Check on mount and scroll
    checkCollisions();
    window.addEventListener('scroll', checkCollisions);
    window.addEventListener('resize', checkCollisions);

    // Use Intersection Observer for better performance
    const observer = new IntersectionObserver(
      () => {
        checkCollisions();
      },
      { threshold: 0.1 }
    );

    const textElements = document.querySelectorAll('h1, h2, h3, p');
    textElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', checkCollisions);
      window.removeEventListener('resize', checkCollisions);
      observer.disconnect();
    };
  }, []);

  // Get background color with opacity - only background becomes transparent, text stays visible
  const getBackgroundColor = (opacity: number) => {
    // Use CSS variable and convert to rgba with opacity
    if (theme === "light") {
      return `rgba(255, 248, 231, ${opacity})`; // #FFF8E7 converted to rgba
    } else {
      return `rgba(10, 10, 10, ${opacity})`; // #0A0A0A converted to rgba
    }
  };

  return (
    <>
      {/* Left Side - Navigation */}
      <div
        data-left-buttons
        className="fixed left-4 top-4 z-50 flex gap-2 md:left-8 md:top-8"
      >
        <Link
          href="/about-me"
          className="relative flex h-10 items-center justify-center gap-2 border-2 border-[var(--border)] px-3 text-xs font-bold uppercase transition-all active:bg-[var(--accent-pink)] md:h-12 md:px-4 md:text-sm md:hover:bg-[var(--accent-pink)]"
          style={{
            backgroundColor: getBackgroundColor(leftButtonsOpacity),
          }}
          aria-label="About Me"
        >
          <User size={14} className="md:w-4 md:h-4" style={{ opacity: 1 }} />
          <span className="hidden sm:inline" style={{ opacity: 1 }}>{t.aboutMe}</span>
        </Link>
        <Link
          href="/experience"
          className="relative flex h-10 items-center justify-center gap-2 border-2 border-[var(--border)] px-3 text-xs font-bold uppercase transition-all active:bg-[var(--accent-green)] md:h-12 md:px-4 md:text-sm md:hover:bg-[var(--accent-green)]"
          style={{
            backgroundColor: getBackgroundColor(leftButtonsOpacity),
          }}
          aria-label="Experience"
        >
          <Briefcase size={14} className="md:w-4 md:h-4" style={{ opacity: 1 }} />
          <span className="hidden sm:inline" style={{ opacity: 1 }}>{t.experience}</span>
        </Link>
      </div>

      {/* Right Side - Settings */}
      <div
        data-right-buttons
        className="fixed right-4 top-4 z-50 flex gap-2 md:right-8 md:top-8"
      >
        <button
          onClick={toggleLanguage}
          className="relative flex h-10 w-10 items-center justify-center border-2 border-[var(--border)] transition-all active:bg-[var(--accent-blue)] md:h-12 md:w-12 md:hover:bg-[var(--accent-blue)]"
          style={{
            backgroundColor: getBackgroundColor(rightButtonsOpacity),
          }}
          aria-label="Toggle language"
        >
          <Languages size={18} className="md:w-5 md:h-5" style={{ opacity: 1 }} />
        </button>
        <button
          onClick={toggleTheme}
          className="relative flex h-10 w-10 items-center justify-center border-2 border-[var(--border)] transition-all active:bg-[var(--accent-orange)] md:h-12 md:w-12 md:hover:bg-[var(--accent-orange)]"
          style={{
            backgroundColor: getBackgroundColor(rightButtonsOpacity),
          }}
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <Moon size={18} className="md:w-5 md:h-5" style={{ opacity: 1 }} />
          ) : (
            <Sun size={18} className="md:w-5 md:h-5" style={{ opacity: 1 }} />
          )}
        </button>
      </div>
    </>
  );
};

// Marquee Component
const Marquee = () => {
  const text = "";
  return (
    <div
      className="relative overflow-hidden border-t border-b border-[var(--border)]"
      style={{ backgroundColor: "var(--marquee-bg)", color: "var(--marquee-text)" }}
    >
      <motion.div
        className="flex whitespace-nowrap text-sm font-bold uppercase tracking-wider"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        <span className="px-4">{text}</span>
        <span className="px-4">{text}</span>
        <span className="px-4">{text}</span>
        <span className="px-4">{text}</span>
      </motion.div>
    </div>
  );
};

// Project Row Component
const ProjectRow = ({
  project,
  index,
  language,
}: {
  project: typeof projects[0];
  index: number;
  language: "pl" | "en";
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const accentColors = [
    "var(--accent-blue)",
    "var(--accent-orange)",
    "var(--accent-pink)",
    "var(--accent-green)",
  ];
  const hoverColor = accentColors[index % accentColors.length];

  // Calculate preview position to avoid going off-screen
  const getPreviewPosition = () => {
    // Only calculate if window is available (client-side)
    if (typeof window === 'undefined') {
      return { left: 0, top: 0 };
    }

    const previewWidth = 400;
    const previewHeight = 300;
    const offsetX = 20;
    const offsetY = -150;
    
    let left = mousePosition.x + offsetX;
    let top = mousePosition.y + offsetY;
    
    // Adjust if going off right edge
    if (left + previewWidth > window.innerWidth) {
      left = mousePosition.x - previewWidth - offsetX;
    }
    
    // Adjust if going off bottom edge
    if (top + previewHeight > window.innerHeight) {
      top = mousePosition.y - previewHeight - offsetY;
    }
    
    // Adjust if going off top edge
    if (top < 0) {
      top = 10;
    }
    
    // Adjust if going off left edge
    if (left < 0) {
      left = 10;
    }
    
    return { left, top };
  };
  
  const previewPos = getPreviewPosition();

  return (
    <motion.a
      href={project.link}
      target={project.link !== "#" ? "_blank" : undefined}
      rel={project.link !== "#" ? "noopener noreferrer" : undefined}
      className="group relative block border-b border-[var(--border)] transition-colors duration-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Desktop Layout */}
      <div
        className="hidden grid-cols-12 gap-2 py-4 px-4 transition-colors duration-200 md:grid"
        style={{
          backgroundColor: isHovered ? hoverColor : "transparent",
          color: isHovered ? "white" : "var(--foreground)",
        }}
      >
        <div className="col-span-1 text-xs font-bold md:text-sm">[0{project.id}]</div>
        <div className="col-span-5 text-base font-bold md:text-lg">
          {project.name[language]}
        </div>
        <div className="col-span-3 text-xs md:text-sm">{project.category[language]}</div>
        <div className="col-span-2 text-xs md:text-sm">{project.year}</div>
        <div className="col-span-1 flex items-center justify-end">
          <ArrowRight
            className={`transition-transform duration-200 ${isHovered ? "translate-x-1" : ""}`}
            size={20}
          />
        </div>
      </div>

      {/* Mobile Layout */}
      <div
        className="grid grid-cols-1 gap-3 py-4 px-4 transition-colors duration-200 md:hidden"
        style={{
          backgroundColor: isHovered ? hoverColor : "transparent",
          color: isHovered ? "white" : "var(--foreground)",
        }}
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold">[0{project.id}]</span>
          <span className="text-xs">{project.year}</span>
        </div>
        <div className="text-base font-bold">{project.name[language]}</div>
        <div className="flex items-center justify-between">
          <span className="text-xs">{project.category[language]}</span>
          <ArrowRight size={18} />
        </div>
      </div>

      {isHovered && mousePosition.x > 0 && mousePosition.y > 0 && (
        <motion.div
          className="pointer-events-none fixed z-50 hidden border-2 md:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          style={{
            height: "300px",
            width: "400px",
            left: `${previewPos.left}px`,
            top: `${previewPos.top}px`,
            borderColor: "var(--border)",
            backgroundColor: "var(--background)",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
          }}
        >
          <div className="relative h-full w-full overflow-hidden">
            {/* Screenshot Image */}
            <div className="relative h-full w-full">
              <Image
                src={project.image}
                alt={project.name[language]}
                fill
                className="object-cover"
                unoptimized
                onError={(e) => {
                  // Fallback jeśli obrazek się nie załaduje
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
              {/* Overlay gradient */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background: `linear-gradient(to bottom, ${hoverColor}00, ${hoverColor}40)`,
                }}
              />
            </div>
            
            {/* Project Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-[var(--background)] p-3 opacity-95">
              <div
                className="mb-1 text-lg font-bold"
                style={{ color: hoverColor }}
              >
                {project.name[language]}
              </div>
              <div className="flex items-center justify-between text-xs opacity-70">
                <span>{project.category[language]}</span>
                <span>{project.year}</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.a>
  );
};

// Stack Component
const Stack = ({ language }: { language: "pl" | "en" }) => {
  const technologies = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Node.js",
    "Figma",
    "Three.js",
  ];

  const t = translations[language];

  return (
    <motion.section
      className="border-t border-[var(--border)] py-12 px-4 md:py-16"
      style={{ borderColor: "var(--border)" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 text-3xl font-bold uppercase md:mb-8 md:text-6xl">{t.stack}</h2>
        <div className="flex flex-wrap items-center gap-2 text-sm font-medium md:gap-4 md:text-lg">
          {technologies.map((tech, index) => (
            <span key={tech} className="flex items-center">
              {tech}
              {index < technologies.length - 1 && (
                <span className="mx-2 md:mx-4" style={{ color: "var(--border)" }}>
                  |
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Footer Component
const Footer = ({ language }: { language: "pl" | "en" }) => {
  const socialLinks = [
    { name: "Email", icon: Mail, href: "mailto:plonkawojtek57@gmail.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/wojciech-płonka-308596262/" },
    { name: "GitHub", icon: Github, href: "https://github.com/Plonkawojciech" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/wojtekplonka_?igsh=aDJjanh2YjkzejRw&utm_source=qr" },
  ];

  const t = translations[language];
  const accentColors = ["var(--accent-blue)", "var(--accent-orange)", "var(--accent-pink)", "var(--accent-green)"];

  return (
    <motion.footer
      className="border-t"
      style={{
        borderColor: "var(--border)",
        backgroundColor: "var(--footer-bg)",
        color: "var(--footer-text)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-20">
        <motion.h2
          className="mb-8 text-3xl font-bold uppercase md:mb-12 md:text-5xl lg:text-8xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          {t.letsTalk}
        </motion.h2>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 md:gap-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border-2 bg-transparent p-4 transition-colors active:border-[var(--accent-blue)] active:bg-[var(--accent-blue)] md:p-6 md:hover:border-[var(--accent-blue)] md:hover:bg-[var(--accent-blue)]"
              style={{
                borderColor: "var(--footer-text)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
            >
              <span className="text-base font-bold uppercase md:text-xl">{social.name}</span>
              <social.icon size={20} className="md:w-6 md:h-6" />
            </motion.a>
          ))}
        </div>
        <motion.div
          className="mt-8 border-t pt-6 text-center text-xs md:mt-12 md:pt-8 md:text-sm"
          style={{ borderColor: "var(--footer-text)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <p>{t.copyright}</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default function Home() {
  const { theme, language } = useTheme();
  const t = translations[language];

  return (
    <main
      className="min-h-screen transition-colors duration-300"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <ControlButtons />

      {/* Hero Section */}
      <section className="border-b" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto max-w-7xl px-4 pt-24 pb-12 md:py-20 lg:py-32">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
            {/* Name */}
            <motion.div
              className="col-span-12 md:col-span-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold uppercase leading-none tracking-tight sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl">
                Wojciech
                <br />
                Płonka
              </h1>
            </motion.div>

            {/* Bio */}
            <motion.div
              className="col-span-12 border-2 bg-transparent p-4 md:col-span-4 md:p-6"
              style={{ borderColor: "var(--border)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">{t.bio}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <Marquee />

      {/* Selected Works Section */}
      <section className="border-b" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="border-b px-4 py-8"
            style={{ borderColor: "var(--border)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-4xl font-bold uppercase md:text-6xl">{t.selectedWorks}</h2>
          </motion.div>

          {/* Table Header - Desktop Only */}
          <div
            className="hidden grid-cols-12 border-b-2 md:grid"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--table-header-bg)",
              color: "var(--table-header-text)",
            }}
          >
            <div className="col-span-1 px-4 py-4 text-xs font-bold md:text-sm">{t.id}</div>
            <div className="col-span-5 px-4 py-4 text-xs font-bold uppercase md:text-sm">
              {t.project}
            </div>
            <div className="col-span-3 px-4 py-4 text-xs font-bold uppercase md:text-sm">
              {t.category}
            </div>
            <div className="col-span-2 px-4 py-4 text-xs font-bold uppercase md:text-sm">
              {t.year}
            </div>
            <div className="col-span-1 px-4 py-4 text-xs font-bold uppercase md:text-sm">
              {t.link}
            </div>
          </div>

          {/* Projects */}
          {projects.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} language={language} />
          ))}
        </div>
      </section>

      {/* Stack Section */}
      <Stack language={language} />

      {/* Footer */}
      <Footer language={language} />
    </main>
  );
}
