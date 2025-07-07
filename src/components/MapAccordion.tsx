
import React from 'react';

interface MapAccordionProps {
  children: React.ReactNode;
}

const MapAccordion: React.FC<MapAccordionProps> = ({ children }) => {
  return (
    <details className="mb-4 md:hidden">
      <summary className="cursor-pointer font-semibold">Виж на картата</summary>
      <div className="h-48 mt-2 rounded-lg">
        {children}
      </div>
    </details>
  );
};

export default MapAccordion;
