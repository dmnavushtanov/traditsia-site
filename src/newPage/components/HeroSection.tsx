import { motion } from "framer-motion";
import Image from "next/image";
import type { NewPageContent } from "../content.types";
import styles from "../styles.module.css";

interface HeroSectionProps {
  hero: NewPageContent["hero"];
}

const HeroSection = ({ hero }: HeroSectionProps) => {
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
          <p className="text-base md:text-lg text-primary-foreground/70 [font-family:var(--np-font-body)] font-light max-w-2xl mx-auto mb-10">
            {hero.description}
          </p>
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
            className="px-8 py-3 border border-primary-foreground/30 text-primary-foreground [font-family:var(--np-font-body)] font-semibold tracking-wide uppercase text-sm rounded hover:bg-primary-foreground/10 transition-colors"
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
