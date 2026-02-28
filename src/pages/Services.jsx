import { useState } from "react";
import {
  Wrench, Camera, Paintbrush, Hammer, Sparkles, ShieldCheck,
  Tv, Zap, Home, Layout, Gift, Scissors, ArrowRight, X
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  { title: "Appliance Repair", icon: Tv, items: ["Washing Machine", "TV Service", "Fridge"] },
  { title: "CCTV Services", icon: Camera, items: ["Installation", "Maintenance", "Repair"] },
  { title: "Electrical", icon: Zap, items: ["Wiring", "Lighting", "Maintenance"] },
  { title: "Civil Work", icon: Home, items: ["Renovation", "Construction", "Repairs"] },
  { title: "UPVC & Glass", icon: Layout, items: ["Doors", "Windows", "Glass"] },
  { title: "Painting", icon: Paintbrush, items: ["Interior", "Exterior", "Touch-ups"] },
  { title: "Deep Cleaning", icon: Sparkles, items: ["Home", "Office", "Post-Work"] },
  { title: "Carpenter", icon: Hammer, items: ["Furniture", "Repairs", "Custom"] },
  { title: "Signage", icon: ShieldCheck, items: ["Boards", "LED", "Displays"] },
  { title: "Event Support", icon: Wrench, items: ["Setup", "Logistics", "Gear"] },
  { title: "Gifting", icon: Gift, items: ["Custom", "Bulk", "Branding"] },
  { title: "Blinds", icon: Scissors, items: ["Install", "Fit", "Repair"] }
];

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  return (
    <section className="bg-[#000000] py-16 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Left Aligned on Mobile for that 'Premium Agency' feel */}
        <div className="mb-12 md:text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs font-bold tracking-[0.3em] uppercase text-yellow-400 block mb-2"
          >
            Our Expertise
          </motion.span>
          <h1 className="text-3xl md:text-6xl font-black text-white leading-tight">
            Premium <span className="text-gray-500">Solutions.</span>
          </h1>
        </div>

        {/* Grid - 2 columns on mobile, 3 on tablet, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setActiveService(service)}
              className="group relative cursor-pointer bg-[#0a0a0a] border border-white/5 rounded-2xl p-4 md:p-8 hover:border-yellow-400/40 transition-all active:scale-95"
            >
              <div className="text-yellow-400 mb-3 md:mb-6 transition-transform group-hover:scale-110">
                <service.icon size={22} />
              </div>
              
              <h3 className="text-sm md:text-xl font-bold text-white mb-2 md:mb-4">
                {service.title}
              </h3>

              {/* Hide list on very small screens to keep it clean, or keep it tight */}
              <ul className="hidden md:block space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-gray-500">
                    <div className="h-1 w-1 rounded-full bg-yellow-400/40" />
                    {item}
                  </li>
                ))}
              </ul>
              
              {/* Mobile "Learn More" Hint */}
              <div className="md:hidden flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-yellow-400/70">
                Details <ArrowRight size={10} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Sticky-style CTA */}
        <div className="mt-12">
          <Link
            to="/contact"
            className="flex items-center justify-between bg-yellow-400 text-black p-5 rounded-2xl font-black uppercase tracking-tighter text-lg hover:bg-white transition-all shadow-[0_20px_40px_rgba(250,204,21,0.2)]"
          >
            <span>Book A Service</span>
            <div className="bg-black text-yellow-400 p-2 rounded-xl">
               <ArrowRight size={20} />
            </div>
          </Link>
        </div>

      </div>

      {activeService && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-0 md:items-center md:p-6"
          onClick={() => setActiveService(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            className="w-full rounded-t-3xl border border-white/10 bg-[#0d0d0d] p-6 text-white md:max-w-lg md:rounded-3xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-5 flex items-start justify-between">
              <div>
                <div className="mb-3 text-yellow-400">
                  <activeService.icon size={24} />
                </div>
                <h2 className="text-2xl font-black">{activeService.title}</h2>
                <p className="mt-1 text-sm text-gray-400">Service details</p>
              </div>
              <button
                onClick={() => setActiveService(null)}
                className="rounded-xl border border-white/15 p-2 text-gray-300"
                aria-label="Close details"
              >
                <X size={18} />
              </button>
            </div>

            <ul className="space-y-3">
              {activeService.items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-4 py-3 text-sm font-bold text-black"
            >
              Book This Service
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
