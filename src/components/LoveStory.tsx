"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function LoveStory() {
  const stories = [
    {
      year: "2020",
      title: "Pertemuan Pertama",
      description: "Kami pertama kali bertemu di sebuah acara reuni kampus. Saling bertukar pandang dan memulai percakapan sederhana yang ternyata menjadi awal segalanya.",
    },
    {
      year: "2022",
      title: "Menjalin Kasih",
      description: "Setelah mengenal satu sama lain lebih dalam, kami memutuskan untuk menjalin hubungan yang lebih serius dan saling berkomitmen.",
    },
    {
      year: "2025",
      title: "Lamaran",
      description: "Dengan restu dari kedua orang tua, kami melangsungkan acara lamaran yang dihadiri oleh keluarga dekat. Sebuah janji untuk melangkah ke jenjang pernikahan.",
    },
    {
      year: "2026",
      title: "Pernikahan",
      description: "Kini, kami mengundang Anda untuk menjadi bagian dari hari bahagia kami. Memulai lembaran baru sebagai sepasang suami istri.",
    }
  ];

  return (
    <section className="py-24 px-6 bg-ivory bg-paper-texture">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Heart className="w-10 h-10 text-gold mx-auto mb-6 opacity-60" />
          <h2 className="text-4xl md:text-5xl font-serif-primary text-gold mb-4 pb-2 leading-normal">Love Story</h2>
          <div className="w-24 h-[1px] bg-gold-metallic mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gold-metallic/30 md:-translate-x-1/2" />

          <div className="space-y-12">
            {stories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center justify-between md:justify-normal gap-8 w-full ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-gold-metallic shadow-[0_0_10px_rgba(212,175,55,0.5)] -translate-x-[7px] md:-translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`w-[calc(100%-40px)] md:w-5/12 pl-12 md:pl-0 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                  <div className="glass-panel p-6 rounded-2xl border border-gold/20 shadow-sm relative overflow-hidden group hover:border-gold/50 transition-colors">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gold-metallic/10 to-transparent rounded-bl-full pointer-events-none" />
                    <span className="inline-block font-poppins text-xs uppercase tracking-[0.2em] text-gold-metallic bg-gold-metallic/10 px-3 py-1 rounded-full mb-3">
                      {story.year}
                    </span>
                    <h3 className="text-xl font-serif-primary text-dark-brown mb-2">{story.title}</h3>
                    <p className="font-serif-secondary italic text-dark-brown/70 leading-relaxed">
                      {story.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
