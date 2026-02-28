import { Phone, Wrench, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-[#000000] text-white overflow-hidden">
      {/* Subtle radial glow for depth */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,#1a1a1a_0%,#000000_70%)] opacity-50" />

      <div className="relative  mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div className="space-y-8">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-400/10 text-yellow-400 text-sm font-bold tracking-wider uppercase mb-4 border border-yellow-400/20">
              Built on Trust
            </span>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
              All Services <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Under One Roof
              </span>
            </h1>
          </div>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg">
            Noble Ads delivers premium home & commercial solutions. From 
            <span className="text-white"> CCTV </span> to <span className="text-white">Civil Work</span>, 
            we handle the details so you don't have to.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="tel:9742356908"
              className="flex items-center gap-2 bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-300 hover:scale-105 transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)]"
            >
              <Phone size={20} />
              Call Now
            </a>

            <a
              href="#services"
              className="flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              <Wrench size={20} />
              View Services
            </a>
          </div>
        </div>

        {/* RIGHT SIDE CARD */}
        <div className="relative group">
          {/* Decorative background glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
          
          <div className="relative bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-yellow-400 rounded-full" />
              Popular Services
            </h3>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
              {[
                "CCTV Installation", "Electrical Work", 
                "Civil Work", "UPVC Solutions", 
                "Professional Painting", "Deep Cleaning", 
                "Premium Signage", "Carpenter Work"
              ].map((service) => (
                <li key={service} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <CheckCircle2 size={18} className="text-yellow-400" />
                  <span className="font-medium">{service}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 pt-6 border-t border-white/5 text-center">
              <p className="text-sm text-gray-500 italic">Trusted by 500+ Local Businesses</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}