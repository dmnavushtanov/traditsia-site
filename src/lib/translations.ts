export const translations = {
  en: {
    // Navigation
    home: "Home",
    gallery: "Gallery",
    events: "Events",
    about: "About",
    contact: "Contact",
    
    // Hero section
    heroTitle: "Welcome to Our Site",
    heroSubtitle: "Bringing history to life through immersive events",
    
    // Events section
    upcomingEvents: "Upcoming Historical Re-enactments",
    eventTitle: "Event Title",
    eventDate: "Date: Month DD, YYYY",
    
    // Announcements section
    announcementTitle: "New Membership Benefits Announced",
    announcementText: "We are excited to introduce new benefits for our members, including exclusive access to behind-the-scenes tours and early event registration.",
    secondaryAnnouncement: "Volunteer opportunities available for all skill levels.",
    
    // Footer
    contactEmail: "info@example.org",
    contactPhone: "(123) 456-7890",
    
    // Language switcher
    language: "Language",
    english: "English",
    bulgarian: "Bulgarian",
    
    // Organization name
    organizationName: "NATIONAL SOCIETY \"TRADITION\"",
  },
  bg: {
    // Navigation
    home: "Начало",
    gallery: "Галерия",
    events: "Събития",
    about: "За нас",
    contact: "Контакти",
    
    // Hero section
    heroTitle: "Добре дошли в нашия сайт",
    heroSubtitle: "Съживяваме историята чрез завладяващи събития",
    
    // Events section
    upcomingEvents: "Предстоящи исторически възстановки",
    eventTitle: "Събитие",
    eventDate: "Дата: Месец ДД, ГГГГ",
    
    // Announcements section
    announcementTitle: "Обявени са нови предимства за членове",
    announcementText: "Радваме се да представим новите предимства за нашите членове, включително ексклузивен достъп до обиколки зад кулисите и ранна регистрация за събития.",
    secondaryAnnouncement: "Налични са възможности за доброволчество за всички нива на умения.",
    
    // Footer
    contactEmail: "info@example.org",
    contactPhone: "(123) 456-7890",
    
    // Language switcher
    language: "Език",
    english: "Английски",
    bulgarian: "Български",
    
    // Organization name
    organizationName: "НАЦИОНАЛНО ДРУЖЕСТВО \"ТРАДИЦИЯ\"",
  }
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en; 