import { WeddingConfig } from "@/types/wedding.types";

export const weddingConfig: WeddingConfig = {
  meta: {
    title: "Pernikahan Danang & Alin",
    description: "Undangan Digital Ngunduh Mantu Danang & Alin. Minggu, 2 Agustus 2026. Gg. Prenjak 01 RT 05/01, Kuncen Lama, Ungaran.",
    favicon: "/favicon.ico",
  },

  theme: {
    primaryFont: "Playfair Display",
    secondaryFont: "Cormorant Garamond",
    bodyFont: "Poppins",
    colors: {
      primary: "#D4AF37",      // Gold
      secondary: "#3E2723",    // Dark Brown
      background: "#FFFFF0",   // Ivory
      accent: "#F7E7CE",       // Champagne
      text: "#1A1A1A",         // Elegant Black
    },
    backgroundMusic: "/audio/background-music.m4a",
  },

  couple: {
    groom: {
      fullName: "Danang Hadi Setiawan, S.M",
      shortName: "Danang",
      photo: "/images/groom.png",
      parentLabel: "PUTRA DARI",
      parents: "Bapak Agus Tri Mulyanto & Ibu Jumitri",
      instagram: "@danang",
    },
    bride: {
      fullName: "Arlina",
      shortName: "Alin",
      photo: "/images/bride.png",
      parentLabel: "PUTRI DARI",
      parents: "Bapak Murgiyono & Ibu Merdeka Wati",
      instagram: "@arlina",
    },
    displayOrder: "groom-first",
  },

  events: [
    {
      name: "Akad Nikah",
      date: "2026-07-27",
      displayDate: "Senin, 27 Juli 2026",
      time: "08.00 WIB - Selesai",
      venue: "Gg. Prenjak 01 RT 05/01, Kuncen Lama, Ungaran",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Gg.+Prenjak+01+RT+05/01,+Kuncen+Lama,+Ungaran",
      mapsEmbed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3959.0125829099784!2d110.41131607499841!3d-7.124537992879278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMDcnMjguMyJTIDExMMKwMjQnNTAuMCJF!5e0!3m2!1sen!2sid!4v1778463731893!5m2!1sen!2sid",
    },
    {
      name: "Ngunduh Mantu",
      date: "2026-08-02",
      displayDate: "Minggu, 2 Agustus 2026",
      time: "Pukul 10.00 WIB - Selesai",
      venue: "Sitalang Susukan RT 06/08, Susukan, Ungaran Timur",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=-7.124538,110.413889",
      mapsEmbed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3959.0125829099784!2d110.41131607499841!3d-7.124537992879278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMDcnMjguMyJTIDExMMKwMjQnNTAuMCJF!5e0!3m2!1sen!2sid!4v1778463731893!5m2!1sen!2sid",
    },
  ],

  countdown: {
    targetDate: "2026-08-02T10:00:00",
    label: "Menuju Hari Bahagia",
  },

  gift: {
    accounts: [
      { bank: "Bank Mandiri", number: "1360016400159", name: "DANANG HADI SETIAWAN" },
      { bank: "BNI", number: "1116460993", name: "DANANG HADI SETIAWAN" },
    ],
    whatsapp: {
      number: "6281229245807",
      message: "Halo, saya ingin konfirmasi pengiriman kado pernikahan.",
    },
  },

  greeting: {
    mainQuote: "Assalamu'alaikum Wr. Wb.",
    verse: "\"Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.\"",
    verseSource: "QS. Ar-Rum: 21",
    closingQuote: "Matur Nuwun sanget dhumateng rawuh lan doa restunipun Bapak/Ibu/Sederek sedoyo.",
  },

  assets: {
    heroBackground: "/images/hero-bg.png",
    ornament: "/images/ornament.png",
  },

  branding: {
    companyName: "TECHNORRA",
    companyUrl: "https://technorra.vercel.app",
    companyLogo: "/logo-t.png",
    year: 2026,
  },
};
