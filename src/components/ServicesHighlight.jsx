import { ArrowRight, Zap, Camera, Home, Sparkles, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    title: "CCTV & Security",
    desc: "Advanced surveillance systems with remote monitoring.",
    icon: <Camera size={32} />,
    size: "md:col-span-2 md:row-span-2",
    color: "from-blue-500/20 to-cyan-500/10",
  },
  {
    title: "Electrical Work",
    desc: "Industrial & residential wiring and maintenance.",
    icon: <Zap size={24} />,
    size: "md:col-span-1 md:row-span-1",
    color: "from-yellow-500/20 to-orange-500/10",
  },
  {
    title: "Civil Projects",
    desc: "Structural work, renovations, and construction.",
    icon: <Home size={24} />,
    size: "md:col-span-1 md:row-span-1",
    color: "from-purple-500/20 to-pink-500/10",
  },
  {
    title: "Deep Cleaning",
    desc: "Professional sanitization for corporate and home spaces.",
    icon: <Sparkles size={24} />,
    size: "md:col-span-2 md:row-span-1",
    color: "from-emerald-500/20 to-teal-500/10",
  }
];

export default function ServicesHighlight() {
  return (
    <section className="bg-[#000000] py-20 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Logic */}
        <div className="flex items-end justify-between mb-12">
          <div className="max-w-xl">
            <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase text-yellow-400 mb-3">
              Premium Expertise
            </h2>
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
              Featured <span className="text-gray-500">Solutions.</span>
            </h1>
          </div>
          
          {/* Desktop "View All" */}
          <a href="/services" className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white border-b border-yellow-400 pb-2 hover:text-yellow-400 transition-colors">
            All Services <ArrowRight size={16} />
          </a>
        </div>

        {/* MOBILE SWIPE CONTAINER */}
        {/* We use 'snap-x' for that snappy mobile feel and 'overflow-x-auto' */}
        <div className="flex md:grid md:grid-cols-4 md:grid-rows-2 gap-4 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 md:h-[550px]">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              className={`
                relative flex-shrink-0 w-[85%] sm:w-[60%] md:w-auto snap-center 
                overflow-hidden rounded-[2rem] bg-[#0a0a0a] border border-white/10 
                p-8 flex flex-col justify-between group cursor-pointer 
                ${item.size}
              `}
            >
              {/* Gradient Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-white/5 text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-yellow-400">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed md:max-w-[250px]">
                  {item.desc}
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between mt-10">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-yellow-400 md:text-gray-600 md:group-hover:text-white transition-colors">
                  Details
                </span>
                <div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-white md:group-hover:bg-white md:group-hover:text-black transition-all">
                  <ChevronRight size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Swipe Indicator Dots */}
        <div className="flex md:hidden justify-center gap-2 mt-2">
           <div className="h-1 w-8 bg-yellow-400 rounded-full" />
           <div className="h-1 w-2 bg-white/20 rounded-full" />
           <div className="h-1 w-2 bg-white/20 rounded-full" />
        </div>

      </div>
    </section>
  );
}