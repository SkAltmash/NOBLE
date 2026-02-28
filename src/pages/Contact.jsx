import { Phone, Mail, MapPin, MessageCircle, Send, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="bg-[#000000] py-24 px-6 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-400/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xs font-bold tracking-[0.4em] uppercase text-yellow-400 block mb-4"
          >
            Get In Touch
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            Let's Build Something <br />
            <span className="text-gray-500 italic font-light">Great Together.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: CONTACT INFO CARDS */}
          <div className="lg:col-span-5 space-y-4">
            {[
              { 
                icon: <Phone size={20} />, 
                label: "Call Us", 
                value: "+91 97423 56908", 
                href: "tel:9742356908" 
              },
              { 
                icon: <MessageCircle size={20} />, 
                label: "WhatsApp", 
                value: "Chat with an Expert", 
                href: "https://wa.me/919742356908" 
              },
              { 
                icon: <Mail size={20} />, 
                label: "Email", 
                value: "nobleads@email.com", 
                href: "mailto:nobleads@email.com" 
              },
              { 
                icon: <MapPin size={20} />, 
                label: "Location", 
                value: "Serving Local & Nearby Areas", 
                href: "#" 
              },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-yellow-400/30 hover:bg-white/[0.05] transition-all group"
              >
                <div className="p-3 bg-white/5 rounded-xl text-yellow-400 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">{item.label}</p>
                  <p className="text-white font-bold group-hover:text-yellow-400 transition-colors">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* RIGHT: THE INQUIRY FORM */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-7 bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Send an Inquiry</h3>
              <p className="text-gray-500">We usually respond within 2 business hours.</p>
            </div>

            <form className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-white/[0.03] border border-white/10 p-4 rounded-xl text-white placeholder:text-gray-700 focus:outline-none focus:border-yellow-400/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 ..."
                  className="w-full bg-white/[0.03] border border-white/10 p-4 rounded-xl text-white placeholder:text-gray-700 focus:outline-none focus:border-yellow-400/50 transition-all"
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Service Required</label>
                <select className="w-full bg-white/[0.03] border border-white/10 p-4 rounded-xl text-white focus:outline-none focus:border-yellow-400/50 transition-all appearance-none">
                  <option className="bg-black">CCTV Installation</option>
                  <option className="bg-black">Electrical Work</option>
                  <option className="bg-black">Civil Projects</option>
                  <option className="bg-black">Interior / UPVC</option>
                  <option className="bg-black">Cleaning Services</option>
                </select>
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Message</label>
                <textarea
                  rows="4"
                  placeholder="How can we help you?"
                  className="w-full bg-white/[0.03] border border-white/10 p-4 rounded-xl text-white placeholder:text-gray-700 focus:outline-none focus:border-yellow-400/50 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="md:col-span-2 group flex items-center justify-center gap-3 bg-yellow-400 text-black py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white transition-all shadow-[0_10px_30px_rgba(250,204,21,0.2)]"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>

        {/* Footer Credit */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-sm">© 2026 Noble Ads. All Rights Reserved.</p>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
            <a href="#" className="hover:text-yellow-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </section>
  );
}