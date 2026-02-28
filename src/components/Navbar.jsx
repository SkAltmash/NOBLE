import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring, useTransform, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  
  const { scrollYProgress, scrollY } = useScroll();
  
  // Smooth scroll progress bar for the bottom of the nav
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Dynamic background opacity based on scroll
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.85)"]
  );

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setIsHidden(true);
      setIsOpen(false);
    } else {
      setIsHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      style={{ backgroundColor }}
      className="fixed top-0 z-[100] w-full border-b border-white/5 backdrop-blur-md"
    >
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="absolute bottom-0 left-0 h-[1px] bg-yellow-400 origin-left w-full" 
        style={{ scaleX }} 
      />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5">
        
        {/* Logo with Magnetic Pulse */}
        <NavLink to="/" className="group relative flex items-center gap-2 overflow-hidden">
          <div className="flex flex-col">
            <span className="text-xl font-[900] leading-none tracking-tighter text-white md:text-2xl">
              NOBLE<span className="text-yellow-400">ADS</span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500 transition-colors group-hover:text-yellow-400/80">
              Solutions Group
            </span>
          </div>
        </NavLink>

        {/* Desktop Links - Minimalist Editorial Style */}
        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "group relative text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-300",
                  isActive ? "text-yellow-400" : "text-gray-400 hover:text-white"
                )
              }
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10">{link.label}</span>
                  {/* Sliding Underline Animation */}
                  <span className={cn(
                    "absolute -bottom-1 left-0 h-[1.5px] bg-yellow-400 transition-all duration-500 ease-out",
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  )} />
                </>
              )}
            </NavLink>
          ))}

          {/* Magnetic CTA Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:9742356908"
            className="flex items-center gap-3 rounded-full bg-white px-6 py-2.5 text-xs font-black uppercase tracking-widest text-black transition-all hover:bg-yellow-400"
          >
            <Phone size={14} className="fill-black" />
            Get A Quote
          </motion.a>
        </div>

        {/* Mobile Toggle with Burger-to-X Animation */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-[110] flex h-10 w-10 flex-col items-center justify-center rounded-full bg-white/5 md:hidden"
        >
          <motion.span 
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 1 : -4 }}
            className="h-[1.5px] w-5 bg-white"
          />
          <motion.span 
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -1 : 4 }}
            className="h-[1.5px] w-5 bg-white"
          />
        </button>
      </div>

      {/* Full Screen Mobile Command Center */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[105] flex flex-col bg-black  md:hidden"
          >
            <div className="mt-20 flex flex-col p-8 space-y-8 bg-black min-w-screen">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600">Navigation</p>
              {links.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <NavLink
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center justify-between text-5xl font-black uppercase tracking-tighter transition-all",
                        isActive ? "text-yellow-400" : "text-white/20 hover:text-white"
                      )
                    }
                  >
                    {link.label}
                    <ArrowUpRight size={32} className="opacity-20" />
                  </NavLink>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto border-t border-white/5 pt-10">
               <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-yellow-400" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Available Now</span>
                  </div>
                  <a href="tel:9742356908" className="text-2xl font-bold text-white tracking-tight">
                    +91 97423 56908
                  </a>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
