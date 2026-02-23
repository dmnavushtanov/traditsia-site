import type { NewPageContent } from "../content.types";
import styles from "../styles.module.css";

interface FooterProps {
  footer: NewPageContent["footer"];
}

const Footer = ({ footer }: FooterProps) => {

  return (
    <footer className="py-12 px-6 bg-card border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="[font-family:var(--np-font-heading)] text-2xl font-bold text-foreground mb-2">
          {footer.titleBg}
        </p>
        <p className="text-muted-foreground [font-family:var(--np-font-body)] text-sm mb-4">
          {footer.subtitle}
        </p>
        <div className={`${styles.ornamentalDivider} max-w-xs mx-auto mb-4`}>
          <span className="text-primary">*</span>
        </div>
        <p className="text-muted-foreground/60 [font-family:var(--np-font-body)] text-xs">
          {footer.copyrightPrefix} {new Date().getFullYear()} {footer.copyrightSuffix}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
