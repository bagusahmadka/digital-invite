"use strict";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
  const targetDate = new Date("2026-08-02T10:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center"
    >
      <div className="relative group">
        {/* Background Arch Shape */}
        <div className="absolute inset-0 border border-gold-metallic/30 rounded-t-full -m-1 group-hover:scale-105 transition-transform duration-500" />
        <div className="w-20 md:w-28 h-24 md:h-32 flex flex-col items-center justify-center bg-white/40 backdrop-blur-md rounded-t-full shadow-xl border border-gold-metallic/10 relative z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gold-metallic/5 to-transparent pointer-events-none" />
          <span className="text-4xl md:text-6xl font-serif-primary text-gold drop-shadow-sm leading-none">
            {value.toString().padStart(2, "0")}
          </span>
        </div>
      </div>
      <span className="mt-4 text-[10px] md:text-xs font-poppins uppercase tracking-[0.4em] text-dark-brown/50">
        {label}
      </span>
    </motion.div>
  );

  return (
    <section className="py-32 px-6 bg-ivory relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-batik-pattern opacity-[0.03] pointer-events-none" />
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.08, 0.05]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-metallic rounded-full blur-[150px] pointer-events-none"
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-serif-secondary italic text-gold-metallic mb-2 tracking-widest">Counting down to the big day...</h2>
          <div className="w-24 h-[1px] bg-gold-metallic/30 mx-auto mt-4" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          <TimeUnit value={timeLeft.days} label="Hari" />
          <TimeUnit value={timeLeft.hours} label="Jam" />
          <TimeUnit value={timeLeft.minutes} label="Menit" />
          <TimeUnit value={timeLeft.seconds} label="Detik" />
        </div>
      </div>
    </section>
  );
}
