"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import HistorySection from "../components/HistorySection";
import ProgramSection from "../components/ProgramSection";
import SpectacleSection from "../components/SpectacleSection";
import VisitorSection from "../components/VisitorSection";
import { getNewPageContent } from "../content";
import styles from "../styles.module.css";

const Index = () => {
  const { language } = useLanguage();
  const content = getNewPageContent(language);

  return (
    <div className={`${styles.theme} ${styles.themeRoot}`}>
      <HeroSection hero={content.hero} />
      <SpectacleSection spectacle={content.spectacle} />
      <ProgramSection program={content.program} />
      <HistorySection history={content.history} />
      <VisitorSection visitor={content.visitor} language={language} />
      <Footer footer={content.footer} />
    </div>
  );
};

export default Index;
