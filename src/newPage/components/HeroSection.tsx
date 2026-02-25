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
  const [firstLine = "", secondLine = ""] = descriptionLines;

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
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/62 to-foreground/74" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="[font-family:var(--np-font-heading)] text-[#F2EFE8] text-[clamp(1.6rem,2.56vw,2.8rem)] leading-tight mb-6 md:mb-10">
            {hero.kicker}
          </p>
          <div className={`${styles.memorialDivider} max-w-md mx-auto mb-8 md:mb-12`} />
          <motion.div
            className="[font-family:var(--np-font-body)] max-w-3xl mx-auto mb-16 md:mb-24"
            variants={descriptionContainerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.p
              variants={descriptionLineVariants}
              className="text-[clamp(1.08rem,1.76vw,1.8rem)] font-light tracking-[0.02em] text-[#F2EFE8]/85 text-center"
            >
              {firstLine}
            </motion.p>
            <motion.p
              variants={descriptionLineVariants}
              className="mt-3 md:mt-4 text-[clamp(1.08rem,1.76vw,1.8rem)] font-light tracking-[0.02em] text-[#F2EFE8]/85 text-center"
            >
              {secondLine}
            </motion.p>
          </motion.div>

          <div className={`${styles.memorialDivider} max-w-xl mx-auto mb-10 md:mb-16`} />
          <h1 className="[font-family:var(--np-font-heading)] text-[clamp(2.88rem,6.56vw,8rem)] font-semibold uppercase tracking-[0.11em] text-[#F2EFE8] leading-[0.95] mb-12 md:mb-20 drop-shadow-[0_8px_30px_rgba(0,0,0,0.48)]">
            {hero.title}
          </h1>
          <p className="[font-family:var(--np-font-heading)] text-[clamp(1.6rem,3.04vw,3.36rem)] italic font-normal tracking-[0.04em] text-[#EDE7D9]">
            {hero.subtitle}
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 md:mt-10 -translate-y-[28%] mb-8 md:mb-12 flex flex-col sm:flex-row gap-4 justify-center"
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
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
