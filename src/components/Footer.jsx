import { Phone, Mail, MapPin, Globe, ArrowUpRight } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#000000] text-white pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* BRAND SECTION (4 Columns) */}
          <div className="md:col-span-4 space-y-6">
            <h2 className="text-3xl font-black uppercase tracking-tighter">
              Noble<span className="text-yellow-400">Ads</span>
            </h2>
            <p className="text-gray-500 leading-relaxed max-w-sm">
              The gold standard in home and commercial infrastructure. 
              We bring elite engineering and maintenance solutions under one professional roof.
            </p>
            <div className="flex gap-4">
              <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all cursor-pointer">
                <Globe size={18} />
              </div>
              {/* Add other social icons here if needed */}
            </div>
          </div>

          {/* QUICK LINKS (3 Columns) */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-400 mb-6">
              Expertise
            </h3>
            <ul className="grid grid-cols-1 gap-3 text-gray-400 text-sm font-medium">
              {["CCTV Systems", "Electrical Work", "Civil Projects", "UPVC & Glass", "Deep Cleaning", "Premium Signage"].map((item) => (
                <li key={item} className="hover:text-white transition-colors cursor-pointer flex items-center gap-2 group">
                  <div className="h-1 w-0 group-hover:w-2 bg-yellow-400 transition-all" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT SECTION (5 Columns) */}
          <div className="md:col-span-5">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-400 mb-6">
              Get Started
            </h3>
            <div className="space-y-6">
              <a href="tel:9742356908" className="group block">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/5 rounded-xl group-hover:bg-yellow-400/10 transition-colors">
                    <Phone size={20} className="text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Direct Line</p>
                    <p className="text-lg font-bold group-hover:text-yellow-400 transition-colors">+91 97423 56908</p>
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/5 rounded-xl">
                  <MapPin size={20} className="text-yellow-400" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Service Area</p>
                  <p className="text-gray-300 font-medium">Pan India • Commercial & Residential</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-600 text-[11px] font-bold uppercase tracking-[0.2em]">
            © {currentYear} Noble Ads Service Provider.
          </div>

          {/* YOUR SIGNATURE - PRO VERSION */}
          <a 
            href="https://altamashdev.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/5 hover:border-yellow-400/30 transition-all"
          >
            <span className="text-gray-500 text-[11px] font-bold uppercase tracking-widest">Crafted by</span>
            <span className="text-white text-[11px] font-black uppercase tracking-widest group-hover:text-yellow-400 transition-colors">
              SK Altamash
            </span>
            <ArrowUpRight size={14} className="text-gray-600 group-hover:text-yellow-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
        </div>
      </div>
    </footer>
  );
}