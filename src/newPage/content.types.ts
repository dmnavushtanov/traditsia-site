export type VisitorTipId = "dress-code" | "location" | "date-time";

export interface NewPageContent {
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    backgroundAlt: string;
    kicker: string;
    title: string;
    subtitle: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  spectacle: {
    targetDateIso: string;
    kicker: string;
    title: string;
    dateLabel: string;
    description: string;
    timeUnits: {
      days: string;
      hours: string;
      minutes: string;
      seconds: string;
    };
  };
  program: {
    kicker: string;
    title: string;
    days: Array<{
      day: string;
      items: Array<{
        time: string;
        title: string;
        description: string;
      }>;
    }>;
  };
  history: {
    kicker: string;
    title: string;
    imageAlt: string;
    quote: string;
    paragraph1: string;
    paragraph2: string;
  };
  visitor: {
    kicker: string;
    title: string;
    mapTitle: string;
    tips: Array<{
      id: VisitorTipId;
      title: string;
      text: string;
    }>;
  };
  footer: {
    titleBg: string;
    subtitle: string;
    copyrightPrefix: string;
    copyrightSuffix: string;
  };
}
