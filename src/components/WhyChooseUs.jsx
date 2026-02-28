import { ShieldCheck, Clock, Award, Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: <ShieldCheck size={28} />,
    title: "Vetted Professionals",
    desc: "Every technician undergoes a rigorous background check and skill certification process.",
    stat: "100%",
    statLabel: "Verified"
  },
  {
    icon: <Clock size={28} />,
    title: "Express Support",
    desc: "Emergency repairs or urgent installations? Our team is on standby 24/7 for your peace of mind.",
    stat: "2hr",
    statLabel: "Response"
  },
  {
    icon: <Award size={28} />,
    title: "Premium Quality",
    desc: "We only use industry-grade materials and the latest technology for every project.",
    stat: "5yr",
    statLabel: "Warranty"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#000000] py-24 px-6 border-t border-white/5 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-400/5 skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header - Centered for impact */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Star size={14} className="text-yellow-400 fill-yellow-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300">The Noble Standard</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            Why Noble Ads <br />
            <span className="text-gray-500">Stands Apart.</span>
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 rounded-[2.5rem] bg-[#0a0a0a] border border-white/5 hover:border-yellow-400/30 transition-all duration-500"
            >
              {/* Stat Badge - Floating Top Right */}
              <div className="absolute top-8 right-8 text-right">
                <p className="text-2xl font-black text-white group-hover:text-yellow-400 transition-colors leading-none">{item.stat}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mt-1">{item.statLabel}</p>
              </div>

              <div className="mb-8 p-4 bg-white/5 rounded-2xl w-fit text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-all">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {item.title}
              </h3>
              
              <p className="text-gray-500 leading-relaxed mb-8 group-hover:text-gray-400 transition-colors">
                {item.desc}
              </p>

              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-yellow-400 opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                Quality Guaranteed <ArrowRight size={12} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom "Fast Facts" Bar - Great for Mobile */}
        <div className="mt-16 p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-wrap justify-center md:justify-between items-center gap-8">
           <div className="flex items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse" />
              <p className="text-sm font-bold text-white uppercase tracking-widest">Available Now</p>
           </div>
           <div className="hidden md:block h-8 w-[1px] bg-white/10" />
           <p className="text-gray-500 text-sm font-medium">Trusted by 2000+ Residential & Commercial Clients</p>
           <a href="tel:9742356908" className="px-6 py-3 bg-white text-black text-xs font-black uppercase tracking-widest rounded-full hover:bg-yellow-400 transition-colors">
             Verify Our Work
           </a>
        </div>

      </div>
    </section>
  );
}