import { motion } from "framer-motion";
import { Car, Shirt, UtensilsCrossed } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { NewPageContent, VisitorTipId } from "../content.types";

const tipIcons: Record<VisitorTipId, LucideIcon> = {
  "dress-code": Shirt,
  parking: Car,
  "food-drink": UtensilsCrossed,
};

interface VisitorSectionProps {
  visitor: NewPageContent["visitor"];
}

const VisitorSection = ({ visitor }: VisitorSectionProps) => {
  const tipsGridCols = visitor.tips.length <= 2 ? "md:grid-cols-2" : "md:grid-cols-3";

  return (
    <section id="visitor-info" className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-primary tracking-[0.25em] uppercase text-sm [font-family:var(--np-font-body)] font-semibold mb-3">
            {visitor.kicker}
          </p>
          <h2 className="[font-family:var(--np-font-heading)] text-4xl md:text-6xl font-bold text-foreground">
            {visitor.title}
          </h2>
        </motion.div>

        <div className={`grid ${tipsGridCols} gap-6 mb-12`}>
          {visitor.tips.map((tip, i) => {
            const Icon = tipIcons[tip.id];

            return (
              <motion.div
                key={tip.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-card border border-border rounded p-6 text-center"
              >
                <Icon className="w-10 h-10 mx-auto mb-4 text-primary" aria-hidden />
                <h3 className="[font-family:var(--np-font-heading)] text-xl font-bold text-foreground mb-2">
                  {tip.title}
                </h3>
                <p className="text-muted-foreground [font-family:var(--np-font-body)] text-sm">
                  {tip.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded overflow-hidden border border-border shadow-lg"
        >
          <iframe
            title={visitor.mapTitle}
            src="https://www.google.com/maps?q=Panagyurishte,+Bulgaria&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default VisitorSection;
