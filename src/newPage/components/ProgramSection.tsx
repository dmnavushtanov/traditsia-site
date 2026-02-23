import { motion } from "framer-motion";
import type { NewPageContent } from "../content.types";

interface ProgramSectionProps {
  program: NewPageContent["program"];
}

const ProgramSection = ({ program }: ProgramSectionProps) => {

  return (
    <section id="schedule" className="py-24 px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-[0.25em] uppercase text-sm [font-family:var(--np-font-body)] font-semibold mb-3">
            {program.kicker}
          </p>
          <h2 className="[font-family:var(--np-font-heading)] text-4xl md:text-6xl font-bold text-foreground">
            {program.title}
          </h2>
        </motion.div>

        {program.days.map((day) => (
          <div key={day.day} className="mb-16 last:mb-0">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="[font-family:var(--np-font-heading)] text-2xl font-bold text-primary mb-8 border-b border-primary/20 pb-3"
            >
              {day.day}
            </motion.h3>

            <div className="relative pl-8 border-l-2 border-primary/20">
              {day.items.map((item, itemIdx) => (
                <motion.div
                  key={`${day.day}-${item.time}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: itemIdx * 0.15 }}
                  className="mb-10 last:mb-0 relative"
                >
                  <div className="absolute -left-[calc(2rem+5px)] top-1 w-3 h-3 rounded-full bg-primary border-2 border-background" />

                  <span className="text-sm [font-family:var(--np-font-body)] font-semibold text-accent tracking-wider uppercase">
                    {item.time}
                  </span>
                  <h4 className="[font-family:var(--np-font-heading)] text-xl md:text-2xl font-bold text-foreground mt-1 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground [font-family:var(--np-font-body)] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramSection;
