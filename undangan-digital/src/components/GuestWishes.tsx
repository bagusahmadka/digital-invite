"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, MessageSquare } from "lucide-react";

interface Wish {
  id: string;
  name: string;
  message: string;
  createdAt: string;
}

export default function GuestWishes() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchWishes();
  }, []);

  const fetchWishes = async () => {
    try {
      const response = await fetch("/api/wishes");
      if (response.ok) {
        const data = await response.json();
        setWishes(data);
      }
    } catch (error) {
      console.error("Failed to fetch wishes", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/wishes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setFormData({ name: "", message: "" });
        fetchWishes();
      }
    } catch (error) {
      console.error("Error submitting wish:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 px-6 bg-ivory bg-batik-pattern relative border-b border-gold-metallic/20">
      <div className="absolute inset-0 bg-ivory/80 z-0" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <MessageSquare className="w-10 h-10 text-gold mx-auto mb-6 opacity-60" />
          <h2 className="text-4xl md:text-5xl font-serif-primary text-gold mb-4 pb-2 leading-normal">Ucapan & Doa</h2>
          <p className="text-lg font-serif-secondary italic text-dark-brown/70 max-w-2xl mx-auto">
            Tinggalkan pesan dan doa restu untuk kami
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Form */}
          <div className="md:col-span-2">
            <motion.form
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="glass-panel p-8 rounded-2xl border border-gold/30 shadow-[0_0_30px_rgba(212,175,55,0.05)] sticky top-8"
            >
              <div className="space-y-6">
                <div>
                  <label htmlFor="wishName" className="block font-poppins text-xs uppercase tracking-widest text-dark-brown/80 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="wishName"
                    required
                    className="w-full bg-white/50 border border-gold-metallic/30 p-3 rounded-lg focus:outline-none focus:border-gold-metallic transition-all font-serif-secondary text-base text-dark-brown"
                    placeholder="Nama Anda"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-poppins text-xs uppercase tracking-widest text-dark-brown/80 mb-2">
                    Pesan / Doa
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full bg-white/50 border border-gold-metallic/30 p-3 rounded-lg focus:outline-none focus:border-gold-metallic transition-all font-serif-secondary text-base text-dark-brown resize-none"
                    placeholder="Tuliskan doa restu..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-gold text-black-elegant py-3 rounded-full font-poppins text-xs tracking-widest uppercase font-bold hover:bg-opacity-80 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? "Mengirim..." : (
                    <>
                      <Send className="w-3 h-3" />
                      Kirim Pesan
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          </div>

          {/* Messages List */}
          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel rounded-2xl border border-gold/20 p-6 md:p-8 h-[500px] overflow-y-auto custom-scrollbar"
            >
              {isLoading ? (
                <div className="flex justify-center items-center h-full">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gold" />
                </div>
              ) : wishes.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center opacity-50">
                  <MessageSquare className="w-8 h-8 text-dark-brown mb-4" />
                  <p className="font-serif-secondary italic text-lg text-dark-brown">
                    Belum ada ucapan. Jadilah yang pertama memberikan doa restu.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {wishes.map((wish) => (
                    <motion.div 
                      key={wish.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white/40 p-5 rounded-xl border border-gold-metallic/10 shadow-sm"
                    >
                      <div className="flex justify-between items-baseline mb-2 border-b border-gold-metallic/10 pb-2">
                        <h4 className="font-poppins font-medium text-sm text-dark-brown">{wish.name}</h4>
                        <span className="font-serif-secondary text-xs text-dark-brown/60">
                          {new Date(wish.createdAt).toLocaleDateString('id-ID', { 
                            day: 'numeric', month: 'short', year: 'numeric' 
                          })}
                        </span>
                      </div>
                      <p className="font-serif-secondary italic text-dark-brown/90 leading-relaxed text-sm md:text-base">
                        "{wish.message}"
                      </p>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
