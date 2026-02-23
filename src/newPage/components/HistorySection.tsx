import { motion } from "framer-motion";
import Image from "next/image";
import type { NewPageContent } from "../content.types";
import styles from "../styles.module.css";

interface HistorySectionProps {
  history: NewPageContent["history"];
}

const HistorySection = ({ history }: HistorySectionProps) => {

  return (
    <section className={`${styles.paperTexture} py-24 px-6 bg-card relative overflow-hidden`}>
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-primary tracking-[0.25em] uppercase text-sm [font-family:var(--np-font-body)] font-semibold mb-3">
            {history.kicker}
          </p>
          <h2 className="[font-family:var(--np-font-heading)] text-4xl md:text-6xl font-bold text-foreground">
            {history.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/newPage/reenactment.jpg"
              alt={history.imageAlt}
              width={1200}
              height={800}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="w-full rounded shadow-lg border border-border"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <blockquote className="text-xl md:text-2xl [font-family:var(--np-font-heading)] italic text-foreground leading-relaxed mb-6 border-l-4 border-primary pl-6">
              {`"${history.quote}"`}
            </blockquote>
            <p className="text-muted-foreground [font-family:var(--np-font-body)] leading-relaxed mb-4">
              {history.paragraph1}
            </p>
            <p className="text-muted-foreground [font-family:var(--np-font-body)] leading-relaxed">
              {history.paragraph2}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
