export interface WeddingConfig {
  meta: {
    title: string;
    description: string;
    favicon: string;
  };
  theme: {
    primaryFont: string;
    secondaryFont: string;
    bodyFont: string;
    colors: {
      primary: string;
      secondary: string;
      background: string;
      accent: string;
      text: string;
    };
    backgroundMusic: string;
  };
  couple: {
    groom: {
      fullName: string;
      shortName: string;
      photo: string;
      parentLabel: string;
      parents: string;
      instagram?: string;
    };
    bride: {
      fullName: string;
      shortName: string;
      photo: string;
      parentLabel: string;
      parents: string;
      instagram?: string;
    };
    displayOrder: "groom-first" | "bride-first";
  };
  events: Array<{
    name: string;
    date: string;
    displayDate: string;
    time: string;
    venue: string;
    mapsUrl: string;
    mapsEmbed: string;
  }>;
  countdown: {
    targetDate: string;
    label: string;
  };
  gift: {
    accounts: Array<{
      bank: string;
      number: string;
      name: string;
    }>;
    whatsapp: {
      number: string;
      message: string;
    };
  };
  greeting: {
    mainQuote: string;
    verse: string;
    verseSource: string;
    closingQuote: string;
  };
  assets: {
    heroBackground: string;
    ornament: string;
  };
  branding: {
    companyName: string;
    companyUrl: string;
    companyLogo: string;
    year: number;
  };
}
