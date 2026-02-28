import { MessageSquare, InspectionPanel, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Instant Inquiry",
    desc: "Reach out via Call or WhatsApp. Our concierge team captures your requirements immediately.",
    icon: <MessageSquare size={24} />,
    color: "text-blue-400"
  },
  {
    id: "02",
    title: "Expert Inspection",
    desc: "Our certified technicians visit your site for a precision audit and transparent quote.",
    icon: <InspectionPanel size={24} />,
    color: "text-yellow-400"
  },
  {
    id: "03",
    title: "Execution & Delivery",
    desc: "Work is completed to the 'Noble Standard' with a final quality walkthrough.",
    icon: <CheckCircle size={24} />,
    color: "text-emerald-400"
  }
];

export default function ProcessSection() {
  return (
    <section className="bg-[#000000] py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-20 md:text-center">
          <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase text-yellow-400 mb-4">
            Workflow
          </h2>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            How We <span className="text-gray-500">Deliver.</span>
          </h1>
        </div>

        {/* The Process Rail */}
        <div className="relative grid md:grid-cols-3 gap-12 md:gap-8">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="group relative z-10"
            >
              {/* Step Card */}
              <div className="bg-[#0a0a0a] border  p-8 rounded-[2.5rem] border-white/20 transition-all duration-500 h-full flex flex-col items-start">
                
                {/* ID & Icon Header */}
                <div className="w-full flex justify-between items-start mb-10">
                  <div className={`p-4 rounded-2xl bg-white/5 transition-colors duration-500 ${step.color}`}>
                    {step.icon}
                  </div>
                  <span className="text-5xl font-black  text-yellow-400/10 transition-colors duration-500">
                    {step.id}
                  </span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-yellow-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                    {step.desc}
                  </p>
                </div>

                {/* Mobile Connector Arrow */}
                {i < steps.length - 1 && (
                  <div className="md:hidden mt-8 flex justify-center w-full">
                    <ArrowRight size={20} className="text-yellow-400 rotate-90" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-600 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3">
            <span className="h-[1px] w-8 bg-white/10" />
            Average Completion Time: 24-48 Hours
            <span className="h-[1px] w-8 bg-white/10" />
          </p>
        </motion.div>

      </div>
    </section>
  );
}