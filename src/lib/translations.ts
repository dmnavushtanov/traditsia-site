export const translations = {
  en: {
    // Navigation
    home: "Home",
    gallery: "Gallery",
    events: "Events",
    about: "About",
    contact: "Contact",
    branches: "Branches",
    
    // Hero section
    heroTitle: "Welcome to Our Site",
    heroSubtitle: "Bringing history to life through immersive events",
    
    // Events section
    upcomingEvents: "Upcoming Historical Re-enactments",
    eventTitle: "Event Title",
    eventDate: "Date: Month DD, YYYY",
    filterByMonth: "Filter by month:",
    all: "All",
    january: "January",
    february: "February",
    march: "March",
    april: "April",
    may: "May",
    june: "June",
    july: "July",
    august: "August",
    september: "September",
    october: "October",
    november: "November",
    december: "December",
    when: "When:",
    where: "Where:",
    eventNotFound: "Event not found",
    eventsMap: "Events Map",
    viewOnMap: "View on map",
    head: "Head",
    phone: "Phone",
    email: "Email",
    endTime: "End Time",
    organizer: "Organizer",
    title: "Title",
    date: "Date",
    location: "Location",
    description: "Description",

    // Announcements section
    newAnnouncement: "A nation that does not remember its past has no present and no future.",
    
    // Footer
    contactEmail: "info@example.org",
    contactPhone: "(123) 456-7890",
    
    // Language switcher
    language: "Language",
    english: "English",
    bulgarian: "Bulgarian",
    
    // Organization name
    organizationName: "NATIONAL SOCIETY \"TRADITION\""
  },
  bg: {
    // Navigation
    home: "Начало",
    gallery: "Галерия",
    events: "Събития",
    about: "За нас",
    contact: "Контакти",
    branches: "Клонове",
    
    // Hero section
    heroTitle: "Добре дошли в нашия сайт",
    heroSubtitle: "Съживяваме историята чрез завладяващи събития",
    
    // Events section
    upcomingEvents: "Предстоящи исторически възстановки",
    eventTitle: "Събитие",
    eventDate: "Дата: Месец ДД, ГГГГ",
    filterByMonth: "Филтриране по месец:",
    all: "Всички",
    january: "Януари",
    february: "Февруари",
    march: "Март",
    april: "Април",
    may: "Май",
    june: "Юни",
    july: "Юли",
    august: "Август",
    september: "Септември",
    october: "Октомври",
    november: "Ноември",
    december: "Декември",
    when: "Кога:",
    where: "Къде:",
    eventNotFound: "Събитието не е намерено",
    eventsMap: "Карта на събитията",
    title: "Име",
    date: "Дата",
    location: "Място",
    description: "Описание",

    // Announcements section
    newAnnouncement: "Народ, който не помни миналото си, няма настояще и бъдеще.",
    
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