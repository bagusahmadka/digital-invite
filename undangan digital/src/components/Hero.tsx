"use strict";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { weddingConfig } from "@/config/wedding.config";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const groomFirst = weddingConfig.couple.displayOrder === "groom-first";
  const names = groomFirst 
    ? `${weddingConfig.couple.groom.shortName} & ${weddingConfig.couple.bride.shortName}`
    : `${weddingConfig.couple.bride.shortName} & ${weddingConfig.couple.groom.shortName}`;

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-ivory">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src={weddingConfig.assets.heroBackground}
          alt="Bride and Groom"
          className="w-full h-full object-cover opacity-40 transition-transform duration-1000 group-hover:scale-105"
        />
      </motion.div>

      {/* Decorative Batik Overlay */}
      <div className="absolute inset-0 bg-batik-pattern z-10 pointer-events-none opacity-[0.05]" />

      <div className="relative z-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="inline-block mb-8"
        >
          <div className="relative p-8">
            <div className="absolute inset-0 border border-gold-metallic/30 rotate-45" />
            <div className="absolute inset-0 border border-gold-metallic/30 -rotate-45" />
            <h3 className="text-xl md:text-2xl font-serif-secondary italic text-dark-brown">Ngunduh Mantu</h3>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="text-6xl md:text-9xl font-serif-primary text-gold mb-4 drop-shadow-sm pb-4 leading-normal"
        >
          {names}
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="h-[1px] bg-gold-metallic w-full max-w-md mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-dark-brown font-serif-secondary italic text-xl md:text-2xl tracking-[0.2em] uppercase"
        >
          {weddingConfig.events[1]?.displayDate || weddingConfig.events[0]?.displayDate}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-dark-brown/60">Scroll Down</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold-metallic to-transparent" />
      </motion.div>
    </section>
  );
}
