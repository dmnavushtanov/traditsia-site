import type { NewPageContent } from "./content.types";

export const newPageContentEn: NewPageContent = {
  metadata: {
    title: "April Uprising Reenactment",
    description:
      "Standalone historical event page for the April Uprising 1876 reenactment.",
  },
  hero: {
    backgroundAlt: "Dramatic painting of the April Uprising of 1876",
    kicker: "Historical Reenactment",
    title: "Courage and Sacrifice",
    subtitle: "April Uprising 1876",
    description: "Join us in honoring the heroes who dared to dream of a free Bulgaria.",
    primaryCta: "View Schedule",
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
            time: "16:00",
            title: "Courage and Sacrifice - Historical Reenactment",
            description:
              "Battle scenes and theatrical performance depicting the heroic uprising against Ottoman rule.",
          },
          {
            time: "19:00",
            title: "Memorial Service and Torchlight Procession",
            description:
              "A solemn tribute to the fallen, followed by a moving procession through the historic streets.",
          },
        ],
      },
      {
        day: "Day 2",
        items: [
          {
            time: "10:00",
            title: "Traditional Crafts Fair and Historical Exhibition",
            description:
              "Explore authentic 19th-century crafts, weaponry, and artifacts from the era of the uprising.",
          },
          {
            time: "13:00",
            title: "Folk Music and Traditional Bulgarian Lunch",
            description:
              "Enjoy traditional Bulgarian cuisine accompanied by live folk music performances.",
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
        title: "Dress Code",
        text: "Traditional Bulgarian wear is encouraged. Bring a Bulgarian flag to show your support.",
      },
      {
        id: "parking",
        title: "Parking",
        text: "Free parking available at the designated areas near the event grounds.",
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
