'use client';

import { motion } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const bullets = [
    'aboutBullet1',
    'aboutBullet2',
    'aboutBullet3',
    'aboutBullet4',
    'aboutBullet5',
    'aboutBullet6',
    'aboutBullet7',
    'aboutBullet8',
    'aboutBullet9',
    'aboutBullet10',
  ] as const;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto p-8 text-foreground"
    >
      <h1 className="text-3xl font-bold mb-6">{t('about')}</h1>
      <h2 className="text-2xl font-semibold mb-4">{t('aboutMissionTitle')}</h2>
      <ul className="list-disc pl-5 space-y-2">
        {bullets.map(key => (
          <li key={key}>{t(key)}</li>
        ))}
      </ul>
    </motion.div>
  )
}