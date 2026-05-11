"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";

export default function Gallery() {
  const images = [
    "/images/gallery-1.png",
    "/images/gallery-2.png",
    "/images/gallery-3.png",
    "/images/gallery-4.png",
    "/images/gallery-5.png",
    "/images/gallery-6.png",
  ];

  return (
    <section className="py-24 px-6 relative bg-elegant-black overflow-hidden">
      <div className="absolute inset-0 bg-batik-pattern opacity-[0.02] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Camera className="w-10 h-10 text-gold mx-auto mb-6 opacity-60" />
          <h2 className="text-4xl md:text-5xl font-serif-primary text-gold mb-4 pb-2 leading-normal">Our Moments</h2>
          <div className="w-24 h-[1px] bg-gold-metallic mx-auto mb-6" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-[4/5] overflow-hidden group cursor-pointer border border-gold-metallic/20 rounded-xl shadow-lg"
            >
              <div className="absolute inset-0 bg-gold-metallic/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800";
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
