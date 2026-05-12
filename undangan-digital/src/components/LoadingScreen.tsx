"use strict";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ivory bg-paper-texture"
    >
      <div className="relative mb-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-32 h-32 border-2 border-gold-metallic/30 rounded-full flex items-center justify-center relative overflow-hidden"
        >
          {/* Subtle spinning glow */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-t-2 border-gold-metallic"
          />
          
          {/* Gunungan Silhouette or Initials */}
          <span className="text-4xl font-serif-primary text-gold">NM</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-center"
      >
        <h2 className="text-2xl font-serif-primary tracking-widest text-dark-brown uppercase mb-2">
          Ngunduh Mantu
        </h2>
        <p className="font-serif-secondary italic text-gold-metallic mb-6 pb-2 leading-normal">
          Danang & Alin
        </p>
        
        <div className="w-48 h-[1px] bg-gold-metallic/20 relative mx-auto overflow-hidden">
          <motion.div
            className="absolute left-0 top-0 h-full bg-gold-metallic"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-2 text-xs font-sans tracking-[0.2em] text-dark-brown/60 uppercase">
          {progress}%
        </p>
      </motion.div>

      {/* Decorative corners */}
      <div className="absolute top-10 left-10 w-20 h-20 border-t border-l border-gold-metallic/30" />
      <div className="absolute top-10 right-10 w-20 h-20 border-t border-r border-gold-metallic/30" />
      <div className="absolute bottom-10 left-10 w-20 h-20 border-b border-l border-gold-metallic/30" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-b border-r border-gold-metallic/30" />
    </motion.div>
  );
}
