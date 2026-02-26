import type { NewPageContent } from "./content.types";

export const newPageContentEn: NewPageContent = {
  metadata: {
    title: "April Uprising Reenactment",
    description:
      "Standalone historical event page for the April Uprising 1876 reenactment.",
  },
  hero: {
    backgroundAlt: "Dramatic painting of the April Uprising of 1876",
    kicker: "April Uprising 1876",
    title: "WE REMEMBER.",
    subtitle: "And we carry the memory forward.",
    description:
      "150 years later\nwe do not celebrate.",
    primaryCta: "Program",
    secondaryCta: "Location Map",
  },
  spectacle: {
    targetDateIso: "2026-05-01T00:00:00",
    kicker: "The Main Event",
    title: "Historical Reenactment",
    dateLabel: "1 May 2026",
    description:
      "Witness the dramatic recreation of the uprising: the ringing of the church bells that signaled the start of the revolt, the thunderous roar of the legendary Cherry Tree Cannon, and the fierce battle scenes that changed the course of history.",
    timeUnits: {
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
    },
  },
  program: {
    kicker: "Two-Day Itinerary",
    title: "The Full Program",
    days: [
      {
        day: "Day 1",
        items: [
          {
            time: "10:00",
            title: "Liturgical Procession",
            description:
              "Liturgical procession from the History Museum to 20 April Square with the participation of Regional Club Traditsia Panagyurishte.",
          },
          {
            time: "15:00",
            title: 'Military-historical reenactment "Courage and Sacrifice - Panagyurishte 1876"',
            description:
              'The historical reenactment "Courage and Sacrifice" takes the audience back to the turbulent days of April 1876, when Panagyurishte proclaimed freedom and embarked on the difficult path of the uprising. The most dramatic moments of its suppression come to life - the rebels\' last stand and the self-sacrifice of men, women, children, and elders in the name of freedom.',
          },
          {
            time: "20:30",
            title: "National Ceremonial Roll Call",
            description:
              "A tribute to the heroes who gave their lives for Bulgaria's freedom, with a ceremonial military roll call featuring the National Guards Unit.",
          },
        ],
      },
      {
        day: "Day 2",
        items: [
          {
            time: "10:00 - 17:00",
            title: 'Military History Festival "Living History" - Oborishte Historical Site',
            description:
              "Four themed zones with craft reenactments and attractions presenting a medieval camp from the period of the Second Bulgarian Empire (12th-14th century), the National Revival era and the activity of the 4th Revolutionary District (18th-19th century), the period of the Liberation Wars - the Balkan War and the First World War (1912-1918), as well as a soldiers' garrison from the time of the Second World War (1939-1945).",
          },
          {
            time: "20:00",
            title: 'Multigenre Festive Spectacle "Freedom Does Not Fall Silent"',
            description:
              "Panagyurishte, 20 April Square.",
          },
        ],
      },
    ],
  },
  history: {
    kicker: "Historical Context",
    title: "About the Uprising",
    imageAlt: "Historical reenactment of the April Uprising",
    quote:
      "The April Uprising was not just a rebellion; it was the ultimate sacrifice. Though bloodily suppressed, it turned the eyes of the world toward the Bulgarian cause.",
    paragraph1:
      "In April 1876, Bulgarian revolutionaries rose against five centuries of Ottoman rule. The uprising, centered in towns like Koprivshtitsa, Panagyurishte, and Batak, was a watershed moment that shocked Europe and ultimately led to the Russo-Turkish War of 1877-78 and Bulgaria's liberation.",
    paragraph2:
      "Today, we honor their courage through this living memorial, bringing history to life so that the sacrifice of thousands is never forgotten.",
  },
  visitor: {
    kicker: "Plan Your Visit",
    title: "Visitor Information",
    mapTitle: "Event Location - Panagyurishte",
    tips: [
      {
        id: "dress-code",
        title: "In Memory of the Heroes",
        text: "As a sign of respect for the heroes' sacrifice, we invite you to bring Bulgarian flags to the event.",
      },
      {
        id: "location",
        title: "Location",
        text: "Panagyurishte, \"20 April\" Square - \"Apriltsi\" Memorial Complex.",
      },
      {
        id: "date-time",
        title: "Time and Date:",
        text: "15:00, 1 May 2026.",
      },
    ],
  },
  footer: {
    titleBg: "Courage and Sacrifice",
    subtitle: "Courage and Sacrifice - April Uprising Reenactment 1876",
    copyrightPrefix: "©",
    copyrightSuffix: "April Uprising Reenactment. All rights reserved.",
  },
};
