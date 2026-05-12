"use strict";

import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, Navigation } from "lucide-react";

export default function EventDetail() {
  return (
    <section className="py-24 px-6 relative bg-ivory bg-paper-texture">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-batik-pattern opacity-10 rotate-180 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-batik-pattern opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif-primary text-gold mb-4 pb-2 leading-normal">Rangkaian Acara</h2>
          <div className="w-24 h-[1px] bg-gold-metallic mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Akad Nikah */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative bg-white/40 backdrop-blur-sm p-8 md:p-12 border border-gold-metallic/20 shadow-xl text-center"
          >
            <div className="absolute inset-2 border border-gold-metallic/10 pointer-events-none" />
            <div className="flex flex-col items-center gap-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-serif-primary text-gold uppercase tracking-widest">Akad Nikah</h3>
                <Calendar className="w-6 h-6 text-gold mx-auto mb-2" />
                <h4 className="text-xl font-serif-primary text-dark-brown">Senin, 27 Juli 2026</h4>
                <div className="flex items-center justify-center gap-3 text-gold-metallic">
                  <div className="w-8 h-[1px] bg-gold-metallic/30" />
                  <Clock className="w-4 h-4" />
                  <div className="w-8 h-[1px] bg-gold-metallic/30" />
                </div>
                <p className="text-lg font-serif-secondary italic text-dark-brown/80">08.00 WIB - Selesai</p>
              </div>

              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold-metallic/20 to-transparent" />

              <div className="space-y-4">
                <MapPin className="w-6 h-6 text-gold mx-auto mb-2" />
                <div className="space-y-1">
                  <p className="text-base font-serif-secondary text-dark-brown/70 max-w-xs mx-auto italic">
                    Gg. Prenjak 01 RT 05/01, <br />
                    Kuncen Lama, Ungaran
                  </p>
                </div>
                <motion.a
                  href="https://www.google.com/maps/search/?api=1&query=Gg.+Prenjak+01+RT+05/01,+Kuncen+Lama,+Ungaran"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, backgroundColor: "#3E2723", color: "#FFFFF0" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-dark-brown text-dark-brown font-serif-secondary text-sm tracking-widest transition-all duration-300"
                >
                  <Navigation className="w-4 h-4" />
                  BUKA LOKASI
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Ngunduh Mantu */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative bg-white/40 backdrop-blur-sm p-8 md:p-12 border border-gold-metallic/20 shadow-xl text-center"
          >
            <div className="absolute inset-2 border border-gold-metallic/10 pointer-events-none" />
            <div className="flex flex-col items-center gap-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-serif-primary text-gold uppercase tracking-widest">Ngunduh Mantu</h3>
                <Calendar className="w-6 h-6 text-gold mx-auto mb-2" />
                <h4 className="text-xl font-serif-primary text-dark-brown">Minggu, 2 Agustus 2026</h4>
                <div className="flex items-center justify-center gap-3 text-gold-metallic">
                  <div className="w-8 h-[1px] bg-gold-metallic/30" />
                  <Clock className="w-4 h-4" />
                  <div className="w-8 h-[1px] bg-gold-metallic/30" />
                </div>
                <p className="text-lg font-serif-secondary italic text-dark-brown/80">Pukul 10.00 WIB - Selesai</p>
              </div>

              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold-metallic/20 to-transparent" />

              <div className="space-y-4">
                <MapPin className="w-6 h-6 text-gold mx-auto mb-2" />
                <div className="space-y-1">
                  <p className="text-base font-serif-secondary text-dark-brown/70 max-w-xs mx-auto italic">
                    Sitalang susukan RT 06/08, <br />
                    Susukan, Ungaran Timur
                  </p>
                </div>
                <motion.a
                  href="https://www.google.com/maps/search/?api=1&query=-7.124538,110.413889"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, backgroundColor: "#3E2723", color: "#FFFFF0" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-dark-brown text-dark-brown font-serif-secondary text-sm tracking-widest transition-all duration-300"
                >
                  <Navigation className="w-4 h-4" />
                  BUKA LOKASI
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Embedded Map */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-12 h-80 w-full border border-gold-metallic/20 grayscale hover:grayscale-0 transition-all duration-1000 shadow-lg overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3959.0125829099784!2d110.41131607499841!3d-7.124537992879278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMDcnMjguMyJTIDExMMKwMjQnNTAuMCJF!5e0!3m2!1sen!2sid!4v1778463731893!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
