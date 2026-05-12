"use strict";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Play, Pause, Mail } from "lucide-react";
import { useState } from "react";

interface OpeningScreenProps {
  onOpen: () => void;
  guestName?: string;
}

export default function OpeningScreen({ onOpen, guestName = "Tamu Undangan" }: OpeningScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-elegant-black overflow-hidden"
    >
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="/hero_bg.png"
          alt="Javanese Wedding Background"
          className="w-full h-full object-cover scale-110 animate-pulse"
          style={{ animationDuration: '20s' }}
        />
      </div>

      {/* Wayang Gunungan Decor */}
      <div className="absolute inset-0 z-5 flex items-center justify-center opacity-10 pointer-events-none">
        <img src="/wayang_gunungan.png" alt="Gunungan" className="w-[80%] max-w-2xl object-contain" />
      </div>

      {/* Decorative Ornaments */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gold-metallic/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gold-metallic/20 to-transparent" />
      </div>

      <div className="relative z-20 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-champagne font-serif-secondary italic text-lg md:text-xl mb-4 tracking-widest"
        >
          Ngunduh Mantu
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1.5 }}
          className="text-5xl md:text-8xl font-serif-primary text-gold mb-6 leading-normal pb-4"
        >
          Danang & Alin
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 1.5, duration: 1.5 }}
          className="h-[1px] bg-gold-metallic/40 max-w-xs mx-auto mb-8"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mb-12"
        >
          <p className="text-ivory/80 font-sans uppercase tracking-[0.3em] text-xs mb-4">
            Kepada Bapak/Ibu/Saudara/i:
          </p>
          <h2 className="text-2xl md:text-3xl font-serif-secondary text-champagne">
            {guestName}
          </h2>
        </motion.div>

        <motion.button
          onClick={onOpen}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-gold-metallic/50 overflow-hidden"
        >
          <span className="absolute inset-0 bg-gold-metallic/10 translate-y-full transition-transform group-hover:translate-y-0" />
          <Mail className="w-5 h-5 text-gold animate-pulse" />
          <span className="relative font-serif-secondary text-gold tracking-widest text-lg">
            BUKA UNDANGAN
          </span>
        </motion.button>
      </div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-gold-metallic/50" />
      </motion.div>
    </motion.div>
  );
}
