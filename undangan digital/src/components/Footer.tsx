"use strict";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-elegant-black text-ivory relative overflow-hidden">
      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gold-metallic/5 to-transparent pointer-events-none" />
      
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-xl md:text-2xl font-serif-secondary italic text-champagne mb-8">
            "Matur Nuwun sanget dhumateng rawuh lan doa restunipun Bapak/Ibu/Sederek sedoyo."
          </p>
          <div className="w-16 h-[1px] bg-gold-metallic/30 mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-serif-primary text-gold uppercase tracking-[0.2em] pb-2 leading-normal">Danang & Alin</h2>
          
          <div className="space-y-2 opacity-60">
            <p className="text-sm font-poppins uppercase tracking-widest">Keluarga Besar:</p>
            <p className="text-lg font-serif-secondary">Keluarga Bpk. Agus Tri Mulyanto & Keluarga Bpk. Murgiyono</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-8 border-t border-ivory/5 flex flex-col items-center gap-4"
        >
          <img src="/logo-t.png" alt="Technorra Logo" className="h-8 w-auto opacity-40 hover:opacity-80 transition-opacity" />
          <a 
            href="https://technorra.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[10px] font-sans uppercase tracking-[0.5em] text-ivory/30 hover:text-gold transition-colors"
          >
            © 2026 TECHNORRA. ALL RIGHTS RESERVED.
          </a>
        </motion.div>
      </div>

      {/* Gunungan Silhouette Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none w-full max-w-sm z-0">
        <img src="/wayang_gunungan.png" alt="Gunungan" className="w-full h-auto object-contain grayscale brightness-0 invert" />
      </div>
    </footer>
  );
}
