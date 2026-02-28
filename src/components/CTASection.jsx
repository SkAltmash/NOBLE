import { Phone, MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="bg-[#000000] py-20 px-6 relative overflow-hidden">
      {/* Intense Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-yellow-400/20 rounded-full blur-[120px] opacity-50" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-b from-white/[0.08] to-transparent border border-white/10 rounded-[3rem] p-8 md:p-20 text-center backdrop-blur-sm"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400 text-black text-[10px] font-black uppercase tracking-[0.2em] mb-8">
            <Sparkles size={12} /> Limited Slots Available
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-[0.9]">
            Ready to start <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              your project?
            </span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Join 2,000+ satisfied clients. Get a professional quote and 
            on-site inspection within 24 hours.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href="tel:9742356908"
              className="w-full md:w-auto flex items-center justify-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-yellow-400 transition-all shadow-[0_20px_40px_rgba(255,255,255,0.1)] hover:scale-105 active:scale-95"
            >
              <Phone size={18} />
              Call Now
            </a>

            <a
              href="https://wa.me/919742356908"
              className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-[#25D366] hover:text-white transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>

          {/* Bottom Trust Note */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 opacity-50">
             <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">No Hidden Costs</p>
             <div className="hidden md:block h-1 w-1 bg-gray-500 rounded-full" />
             <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">Certified Engineers</p>
             <div className="hidden md:block h-1 w-1 bg-gray-500 rounded-full" />
             <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">Service Warranty</p>
          </div>
        </motion.div>
      </div>

      {/* Subtle bottom curve decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
    </section>
  );
}