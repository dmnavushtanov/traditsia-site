import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import type { NewPageContent } from "../content.types";
import styles from "../styles.module.css";

interface HeroSectionProps {
  hero: NewPageContent["hero"];
}

const descriptionContainerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.14,
    },
  },
};

const descriptionLineVariants: Variants = {
  hidden: { opacity: 0, y: 8, filter: "blur(2px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const HeroSection = ({ hero }: HeroSectionProps) => {
  const descriptionLines = hero.description
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  const [firstLine = "", secondLine = "", thirdLine = "", ...extraLines] =
    descriptionLines;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/newPage/hero-bg.jpg"
          alt={hero.backgroundAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-background" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className={`${styles.goldLightText} text-gold-light tracking-[0.3em] uppercase text-sm md:text-base mb-4 [font-family:var(--np-font-body)] font-light`}>
            {hero.kicker}
          </p>
          <h1 className="[font-family:var(--np-font-heading)] text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-tight mb-6">
            {hero.title}
          </h1>
          <div className={`${styles.ornamentalDivider} max-w-md mx-auto mb-6`}>
            <span className="text-[hsl(var(--np-gold))] text-2xl">*</span>
          </div>
          <p className="text-2xl md:text-3xl [font-family:var(--np-font-heading)] italic text-primary-foreground/80 mb-4">
            {hero.subtitle}
          </p>
          <motion.div
            className="[font-family:var(--np-font-body)] max-w-3xl mx-auto mb-10"
            variants={descriptionContainerVariants}
            initial="hidden"
            animate="show"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8 items-end">
              <motion.p
                variants={descriptionLineVariants}
                className="text-lg md:text-xl font-bold text-primary-foreground/90 text-center md:text-left"
              >
                {firstLine}
              </motion.p>
              <motion.p
                variants={descriptionLineVariants}
                className="[font-family:var(--np-font-heading)] text-4xl sm:text-5xl md:text-6xl italic font-bold text-primary-foreground leading-none text-center md:text-right"
              >
                {secondLine}
              </motion.p>
            </div>
            <motion.p
              variants={descriptionLineVariants}
              className="mt-3 md:mt-4 text-base md:text-lg [font-family:var(--np-font-heading)] font-semibold tracking-[0.04em] text-primary-foreground drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] text-center"
            >
              {thirdLine}
            </motion.p>
            {extraLines.length > 0 && (
              <div className="mt-2 space-y-1">
                {extraLines.map((line, index) => (
                  <motion.p
                    key={`${line}-${index}`}
                    variants={descriptionLineVariants}
                    className="text-sm md:text-base font-medium text-primary-foreground/70 text-center"
                  >
                    {line}
                  </motion.p>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#schedule"
            className={`${styles.pulseGlow} px-8 py-3 bg-primary text-primary-foreground [font-family:var(--np-font-body)] font-semibold tracking-wide uppercase text-sm rounded border border-[hsl(var(--np-crimson-light)/0.3)] hover:bg-[hsl(var(--np-crimson-light))] transition-colors`}
          >
            {hero.primaryCta}
          </a>
          <a
            href="#visitor-info"
            className={`${styles.pulseGlow} px-8 py-3 bg-primary text-primary-foreground [font-family:var(--np-font-body)] font-semibold tracking-wide uppercase text-sm rounded border border-[hsl(var(--np-crimson-light)/0.3)] hover:bg-[hsl(var(--np-crimson-light))] transition-colors`}
          >
            {hero.secondaryCta}
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
