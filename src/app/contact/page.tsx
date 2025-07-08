"use client";

import { useLanguage } from '@/contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="max-w-6xl mx-auto p-8 text-[var(--text-charcoal)]">
      <h1 className="text-3xl font-bold mb-6">{t('contact')}</h1>
      <p className="text-lg mb-6">
        {t('contactSubtitle')}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">{t('contactInformation')}</h2>
          <p className="mb-2"><strong>{t('email')}:</strong> nationaltradition@abv.bg</p>
          <p className="mb-2"><strong>{t('address')}:</strong> {t('addressDetails')}</p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">{t('sendUsMessage')}</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder={t('yourName')}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder={t('yourEmail')}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <textarea
              placeholder={t('yourMessage')}
              rows={4}
              className="w-full p-2 border border-gray-300 rounded"
            ></textarea>
            <button
              type="submit"
              className="bg-[var(--primary-accent-green)] text-white px-6 py-2 rounded hover:bg-[var(--secondary-accent-ochre)]"
            >
              {t('sendMessage')}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
} 