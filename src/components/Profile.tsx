import { motion } from "framer-motion";
import { weddingConfig } from "@/config/wedding.config";

export default function Profile() {
  const Card = ({ name, parents, label, image }: any) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex flex-col items-center"
    >
      {/* Arch Shaped Image */}
      <div className="relative w-64 md:w-80 aspect-[3/4] mb-8">
        <div className="absolute inset-0 border-[3px] border-gold-metallic/30 rounded-t-full -m-2 z-0" />
        <div className="relative h-full w-full rounded-t-full overflow-hidden border border-gold-metallic/20 shadow-xl z-10">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
          />
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-4xl md:text-5xl font-serif-primary text-gold-metallic mb-3 pb-2 leading-normal">{name}</h3>
        <p className="text-[10px] md:text-xs font-poppins text-dark-brown/50 uppercase tracking-[0.3em] mb-4">{label}</p>
        <div className="space-y-1">
          {parents.split("&").map((parent: string, i: number) => (
            <p key={i} className="text-xl md:text-2xl font-serif-secondary text-dark-brown/80 leading-tight">
              {i > 0 ? `& ${parent.trim()}` : parent.trim()}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const groomFirst = weddingConfig.couple.displayOrder === "groom-first";
  
  const GroomCard = (
    <Card
      name={weddingConfig.couple.groom.fullName}
      label={weddingConfig.couple.groom.parentLabel}
      parents={weddingConfig.couple.groom.parents}
      image={weddingConfig.couple.groom.photo}
    />
  );

  const BrideCard = (
    <Card
      name={weddingConfig.couple.bride.fullName}
      label={weddingConfig.couple.bride.parentLabel}
      parents={weddingConfig.couple.bride.parents}
      image={weddingConfig.couple.bride.photo}
    />
  );

  return (
    <section className="py-24 px-6 bg-ivory relative overflow-hidden">
      {/* Subtle Batik Background Overlay */}
      <div className="absolute inset-0 bg-batik-pattern opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-16 md:gap-8 items-start">
          {groomFirst ? GroomCard : BrideCard}
          
          <div className="flex justify-center items-center h-full pt-32 md:pt-48">
            <span className="text-6xl md:text-8xl font-serif-primary text-gold-metallic/30 italic">&</span>
          </div>

          {groomFirst ? BrideCard : GroomCard}
        </div>
      </div>
    </section>
  );
}
