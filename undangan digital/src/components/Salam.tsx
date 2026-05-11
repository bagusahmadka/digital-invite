"use strict";

import { motion } from "framer-motion";

export default function Salam() {
  return (
    <section className="py-24 px-6 bg-ivory bg-paper-texture overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <p className="text-xl md:text-2xl font-serif-secondary text-dark-brown italic mb-4">
            Assalamu'alaikum Warahmatullahi Wabarakatuh
          </p>
          <div className="w-16 h-1 bg-gold-metallic/30 mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="relative px-8 md:px-16"
        >
          {/* Subtle Javanese Ornaments */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold-metallic/20" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold-metallic/20" />

          <p className="text-lg md:text-xl font-serif-secondary leading-relaxed text-dark-brown/80 mb-8 italic">
            "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang."
          </p>
          <p className="font-poppins text-xs uppercase tracking-[0.2em] text-gold-metallic">
            QS. Ar-Rum: 21
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16"
        >
          <p className="text-lg md:text-xl font-serif-secondary leading-relaxed text-dark-brown">
            "Tresna iku dudu mung amarga rupa, nanging amarga ati kang tulus lan suci. Nyawiji ing rasa, mbangun bale wisma ingkang rahayu."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
