"use strict";

import { motion } from "framer-motion";
import { Copy, Check, CreditCard, Gift as GiftIcon } from "lucide-react";
import { useState } from "react";

export default function Gift() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const accounts = [
    {
      bank: "Bank Mandiri",
      number: "1360016400159",
      name: "DANANG HADI SETIAWAN"
    },
    {
      bank: "BNI",
      number: "1116460993",
      name: "DANANG HADI SETIAWAN"
    }
  ];

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="py-24 px-6 bg-ivory bg-paper-texture">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <GiftIcon className="w-12 h-12 text-gold mx-auto mb-6 opacity-50" />
          <h2 className="text-4xl md:text-5xl font-serif-primary text-gold mb-6 pb-2 leading-normal">Wedding Gift</h2>
          <p className="text-lg font-serif-secondary italic text-dark-brown/70 max-w-2xl mx-auto">
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika Anda ingin memberikan tanda kasih, Anda dapat mengirimkannya melalui:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12">
          {accounts.map((account, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-2xl border border-gold/30 hover:border-gold/60 transition-colors shadow-[0_0_50px_rgba(212,175,55,0.1)] flex flex-col justify-between"
            >
              <div>
                <h3 className="font-playfair text-xl text-black-elegant mb-2 uppercase tracking-widest">{account.bank}</h3>
                <p className="font-poppins text-gold text-xl tracking-widest font-semibold mb-2">{account.number}</p>
                <p className="font-cormorant text-lg text-black-elegant/80 mb-6 italic">a.n. {account.name}</p>
              </div>
              
              <button
                onClick={() => copyToClipboard(account.number, index)}
                className="inline-flex items-center justify-center w-full px-6 py-3 border border-gold/50 text-gold hover:bg-gold hover:text-black-elegant transition-all duration-300 rounded-full font-poppins text-xs tracking-widest uppercase"
              >
                {copiedIndex === index ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                {copiedIndex === index ? "Berhasil Disalin" : "Salin Rekening"}
              </button>
            </motion.div>
          ))}
        </div>

        <div className="max-w-md mx-auto">
          <a
            href="https://wa.me/6281229245807?text=Halo%20Arlina,%20saya%20ingin%20konfirmasi%20pengiriman%20kado%20pernikahan."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-8 py-4 bg-gold text-black-elegant hover:bg-ivory border border-gold transition-all duration-300 rounded-full font-poppins text-sm tracking-widest uppercase font-bold shadow-lg"
          >
            Konfirmasi WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
