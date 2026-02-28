import { ShieldCheck, Users, Briefcase, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <ShieldCheck className="text-yellow-400" size={24} />,
    title: "Trusted Service",
    desc: "Reliable and professional solutions you can count on daily."
  },
  {
    icon: <Users className="text-yellow-400" size={24} />,
    title: "Customer Focus",
    desc: "We prioritize your satisfaction in every single project."
  },
  {
    icon: <Briefcase className="text-yellow-400" size={24} />,
    title: "All-in-One",
    desc: "Multiple services handled by one elite professional team."
  }
];

export default function About() {
  return (
    <section className="bg-[#000000] py-20 px-6 sm:px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* LEFT: Text Content (Occupies 7 columns on desktop) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-xs font-bold tracking-[0.4em] uppercase text-yellow-400"
              >
                Our Legacy
              </motion.span>
              <h2 className="text-4xl md:text-6xl font-black text-white mt-4 leading-tight tracking-tighter">
                Redefining <br />
                <span className="text-gray-500 italic font-light">Service Excellence.</span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed max-w-2xl">
              <p>
                Noble Ads isn't just a service provider; we are your 
                <span className="text-white font-medium"> strategic maintenance partner</span>. 
                We’ve built a reputation for bringing complex home and commercial 
                needs under a single, high-standards umbrella.
              </p>
              <p>
                Whether it's the precision required for <span className="text-yellow-400/80">CCTV systems</span> or 
                the heavy lifting of <span className="text-yellow-400/80">civil construction</span>, our 
                team ensures quality that lasts.
              </p>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block pt-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-4 text-white font-bold group"
              >
                <span className="text-xl border-b-2 border-yellow-400 pb-1 group-hover:text-yellow-400 transition-colors">
                  Learn about our process
                </span>
                <div className="bg-yellow-400 p-2 rounded-full text-black group-hover:rotate-45 transition-transform">
                  <ArrowUpRight size={20} />
                </div>
              </Link>
            </div>
          </div>

          {/* RIGHT: Feature Cards (Occupies 5 columns on desktop) */}
          <div className="lg:col-span-5 grid gap-4">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-yellow-400/20 hover:bg-white/[0.04] transition-all"
              >
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Mobile CTA (Visible only on small screens) */}
            <div className="md:hidden mt-8">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-3 bg-white text-black py-5 rounded-2xl font-black uppercase tracking-widest"
              >
                Contact Our Team
              </Link>
            </div>
          </div>

        </div>

        {/* Stats Section (Bonus Pro touch) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-white/5">
          {[
            { label: "Projects Done", val: "2.5k+" },
            { label: "Happy Clients", val: "1.8k+" },
            { label: "Services", val: "15+" },
            { label: "Expert Staff", val: "50+" },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-3xl md:text-4xl font-black text-white">{stat.val}</p>
              <p className="text-xs uppercase tracking-widest text-yellow-400 font-bold mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
