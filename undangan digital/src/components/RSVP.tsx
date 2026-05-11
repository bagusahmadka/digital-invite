"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { weddingConfig } from "@/config/wedding.config";

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: "",
    status: "Hadir",
    guestCount: 1,
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error("Error submitting RSVP:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 px-6 bg-ivory bg-paper-texture border-y border-gold-metallic/20">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif-primary text-gold mb-4 pb-2 leading-normal">RSVP</h2>
          <p className="text-lg font-serif-secondary italic text-dark-brown/70">
            Konfirmasi kehadiran Anda pada acara pernikahan kami
          </p>
        </motion.div>

        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-panel p-8 rounded-2xl border border-gold/30 text-center"
          >
            <h3 className="text-2xl font-serif-primary text-gold mb-4">Terima Kasih!</h3>
            <p className="text-lg font-serif-secondary text-dark-brown/80">
              Konfirmasi kehadiran Anda telah kami terima.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-panel p-8 md:p-12 rounded-2xl border border-gold/30 text-left space-y-6 shadow-[0_0_50px_rgba(212,175,55,0.05)]"
          >
            <div>
              <label htmlFor="name" className="block font-poppins text-sm uppercase tracking-widest text-dark-brown/80 mb-2">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full bg-white/50 border border-gold-metallic/30 p-3 rounded-lg focus:outline-none focus:border-gold-metallic focus:ring-1 focus:ring-gold-metallic transition-all font-serif-secondary text-lg text-dark-brown placeholder-dark-brown/40"
                placeholder="Masukkan nama Anda"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="status" className="block font-poppins text-sm uppercase tracking-widest text-dark-brown/80 mb-2">
                Konfirmasi Kehadiran
              </label>
              <select
                id="status"
                className="w-full bg-white/50 border border-gold-metallic/30 p-3 rounded-lg focus:outline-none focus:border-gold-metallic focus:ring-1 focus:ring-gold-metallic transition-all font-serif-secondary text-lg text-dark-brown"
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              >
                <option value="Hadir">Ya, Saya Akan Hadir</option>
                <option value="Tidak Hadir">Maaf, Saya Tidak Bisa Hadir</option>
                <option value="Masih Ragu">Masih Ragu / Mungkin Hadir</option>
              </select>
            </div>

            {formData.status === "Hadir" && (
              <div>
                <label htmlFor="guestCount" className="block font-poppins text-sm uppercase tracking-widest text-dark-brown/80 mb-2">
                  Jumlah Kehadiran
                </label>
                <select
                  id="guestCount"
                  className="w-full bg-white/50 border border-gold-metallic/30 p-3 rounded-lg focus:outline-none focus:border-gold-metallic focus:ring-1 focus:ring-gold-metallic transition-all font-serif-secondary text-lg text-dark-brown"
                  value={formData.guestCount}
                  onChange={(e) => setFormData({ ...formData, guestCount: parseInt(e.target.value) })}
                >
                  <option value={1}>1 Orang</option>
                  <option value={2}>2 Orang</option>
                  <option value={3}>3 Orang</option>
                  <option value={4}>4 Orang</option>
                </select>
              </div>
            )}

            <div>
              <label htmlFor="phone" className="block font-poppins text-sm uppercase tracking-widest text-dark-brown/80 mb-2">
                Nomor WhatsApp (Opsional)
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full bg-white/50 border border-gold-metallic/30 p-3 rounded-lg focus:outline-none focus:border-gold-metallic focus:ring-1 focus:ring-gold-metallic transition-all font-serif-secondary text-lg text-dark-brown placeholder-dark-brown/40"
                placeholder="Contoh: 081234567890"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-4 flex items-center justify-center gap-2 bg-gold text-black-elegant py-4 rounded-full font-poppins text-sm tracking-widest uppercase font-bold hover:bg-opacity-80 transition-all disabled:opacity-50"
            >
              {isSubmitting ? "Mengirim..." : (
                <>
                  <Send className="w-4 h-4" />
                  Kirim Konfirmasi
                </>
              )}
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
