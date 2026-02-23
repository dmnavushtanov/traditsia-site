import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { NewPageContent } from "../content.types";
import styles from "../styles.module.css";

const emptyTimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

const getTimeLeft = (targetDateIso: string) => {
  const targetDate = new Date(targetDateIso);
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();

  if (diff <= 0) {
    return emptyTimeLeft;
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

interface SpectacleSectionProps {
  spectacle: NewPageContent["spectacle"];
}

const SpectacleSection = ({ spectacle }: SpectacleSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [timeLeft, setTimeLeft] = useState(emptyTimeLeft);
  const [dateDay, ...dateRestParts] = spectacle.dateLabel.trim().split(/\s+/);
  const dateRest = dateRestParts.join(" ");

  useEffect(() => {
    setIsHydrated(true);
    setTimeLeft(getTimeLeft(spectacle.targetDateIso));
    const timer = setInterval(() => setTimeLeft(getTimeLeft(spectacle.targetDateIso)), 1000);
    return () => clearInterval(timer);
  }, [spectacle.targetDateIso]);

  const timeUnits = [
    { label: spectacle.timeUnits.days, value: timeLeft.days },
    { label: spectacle.timeUnits.hours, value: timeLeft.hours },
    { label: spectacle.timeUnits.minutes, value: timeLeft.minutes },
    { label: spectacle.timeUnits.seconds, value: timeLeft.seconds },
  ];

  return (
    <section className={`${styles.paperTexture} py-24 px-6 bg-card relative overflow-hidden`}>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary tracking-[0.25em] uppercase text-sm [font-family:var(--np-font-body)] font-semibold mb-3">
            {spectacle.kicker}
          </p>
          <h2 className="[font-family:var(--np-font-heading)] text-[3.6rem] md:text-[5.4rem] font-bold text-foreground mb-6 leading-[1.05]">
            {spectacle.title}
          </h2>
          <p className="text-accent [font-family:var(--np-font-heading)] mb-10">
            <span className="text-3xl md:text-4xl font-bold">{dateDay}</span>
            {dateRest ? (
              <span className="ml-2 text-xl md:text-2xl font-bold">{dateRest}</span>
            ) : null}
          </p>

          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-muted-foreground text-lg leading-relaxed [font-family:var(--np-font-body)]">
              {spectacle.description}
            </p>
          </div>

          <div className="flex justify-center gap-4 md:gap-8">
            {timeUnits.map((unit) => (
              <div key={unit.label} className="flex flex-col items-center">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-primary/10 border border-primary/20 rounded flex items-center justify-center mb-2">
                  <span
                    suppressHydrationWarning
                    className="text-3xl md:text-4xl [font-family:var(--np-font-heading)] font-bold text-primary"
                  >
                    {String(isHydrated ? unit.value : 0).padStart(2, "0")}
                  </span>
                </div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground [font-family:var(--np-font-body)]">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpectacleSection;
