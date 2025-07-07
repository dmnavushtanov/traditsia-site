'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Branch } from '@/lib/content';
import { useLanguage } from '@/contexts/LanguageContext';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Mail, User } from 'lucide-react';

const GoogleMap = dynamic(() => import('@/components/GoogleMap'), { ssr: false });

interface BranchesClientProps {
  branches: Branch[];
}

export default function BranchesClient({ branches }: BranchesClientProps) {
  const { t } = useLanguage();
  const [activeBranch, setActiveBranch] = useState<string | null>(null);

  const markers = branches.map(branch => ({
    lat: branch.Latitude,
    lng: branch.Longitude,
    title: `Регионален Клон - ${branch.City}`,
    city: branch.City,
    head: branch.Head,
    phone: branch.Phone,
    email: branch.Email,
  }));

  return (
    <div className="container mx-auto py-8 px-6">
      <h1 className="text-3xl font-bold mb-8">{t('branches')}</h1>
      
      <div className="mb-8">
        <GoogleMap markers={markers} zoom={7} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {branches.map((branch, index) => (
          <div
            key={branch.City}
            className={`p-4 rounded-xl shadow ${index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'}`}
          >
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value={branch.City}>
                <AccordionTrigger className="text-xl font-semibold text-primary">Регионален Клон - {branch.City}</AccordionTrigger>
                <AccordionContent className="text-foreground">
                  {branch.Head && (
                    <p className="flex items-center"><User className="mr-2 h-4 w-4" /><strong className="mr-1">{t('head')}</strong>{branch.Head}</p>
                  )}
                  {branch.Phone && <p className="flex items-center"><Phone className="mr-2 h-4 w-4" /><strong className="mr-1">{t('phone')}</strong>{branch.Phone}</p>}
                  {branch.Email && <p className="flex items-center"><Mail className="mr-2 h-4 w-4" /><strong className="mr-1">{t('email')}</strong>{branch.Email}</p>}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
}