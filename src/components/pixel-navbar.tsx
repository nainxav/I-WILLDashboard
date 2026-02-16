"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { ModeToggle } from "@/components/theme-toggle";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { House, BookOpen, Gamepad2, Cpu, Trophy, Radio, Pause, Play } from "lucide-react";

const navItems = [
  { name: "BASE", href: "/", label: "Base Operations", icon: House, desc: "Return to HQ" },
  { name: "CODEX", href: "/codex", label: "The Codex", icon: BookOpen, desc: "Lab Data & Stats" },
  { name: "CONSTRUCTS", href: "/constructs", label: "Constructs", icon: Gamepad2, desc: "Active Projects" },
  { name: "ARSENAL", href: "/arsenal", label: "Arsenal", icon: Cpu, desc: "Tech Stack" },
  { name: "HALL OF HONOR", href: "/hall-of-honor", label: "Hall of Honor", icon: Trophy, desc: "Achievements" },
  { name: "TRANSMISSION", href: "/transmission", label: "Transmission", icon: Radio, desc: "Comms Link" },
];

export function PixelNavbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
        {/* Toggle Button (Always Visible) */}
        <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={clsx(
                    "bg-background/90 backdrop-blur-md border-4 border-black dark:border-white shadow-pixel px-6 py-2 flex items-center gap-3 transition-colors",
                    isOpen ? "bg-primary text-primary-foreground border-primary" : "hover:bg-accent"
                )}
            >
                {isOpen ? <Play size={20} fill="currentColor" /> : <Pause size={20} fill="currentColor" />}
                <span className="font-pixel text-xs md:text-sm tracking-widest">
                    {isOpen ? "Menu" : "Menu"}
                </span>
            </motion.button>
        </header>

        {/* Pause Menu Overlay */}
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   className="fixed inset-0 z-40 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center p-6"
                   onClick={(e) => {
                       if (e.target === e.currentTarget) setIsOpen(false);
                   }}
                >
                   <motion.div 
                       initial={{ scale: 0.9, y: 20 }}
                       animate={{ scale: 1, y: 0 }}
                       exit={{ scale: 0.9, y: 20 }}
                       className="w-full max-w-4xl bg-background border-4 border-black dark:border-white shadow-pixel-lg p-6 md:p-12 relative overflow-hidden"
                    >
                       
                       {/* Header */}
                       <div className="flex justify-between items-center mb-8 border-b-4 border-black dark:border-white pb-4">
                           <div className="flex items-center gap-4">
                               <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                               <div>
                                   <h2 className="font-pixel text-2xl md:text-4xl text-primary text-shadow-pixel tracking-tighter">GAME PAUSED</h2>
                                   <p className="font-mono text-xs md:text-sm opacity-70 mt-2">&gt; SELECT DESTINATION...</p>
                               </div>
                           </div>
                           <div className="hidden md:block">
                               <ModeToggle />
                           </div>
                       </div>

                       {/* Grid */}
                       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                           {navItems.map((item) => {
                               const isActive = pathname === item.href;
                               return (
                                   <Link 
                                       key={item.href}
                                       href={item.href}
                                       className={clsx(
                                           "group flex items-center gap-4 p-4 border-2 border-dashed transition-all hover:border-solid hover:bg-accent hover:border-primary",
                                           isActive ? "border-primary bg-primary/10 border-solid" : "border-gray-400 dark:border-gray-700"
                                       )}
                                   >
                                       <div className={clsx(
                                           "w-12 h-12 flex items-center justify-center border-2 border-black dark:border-white bg-background group-hover:scale-110 transition-transform",
                                           isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                                       )}>
                                           <item.icon size={24} />
                                       </div>
                                       <div>
                                           <h3 className={clsx(
                                               "font-pixel text-sm mb-1 group-hover:text-primary transition-colors",
                                               isActive && "text-primary"
                                           )}>
                                               {item.label}
                                           </h3>
                                           <p className="font-mono text-xs opacity-60">
                                               {item.desc}
                                           </p>
                                       </div>
                                   </Link>
                               )
                           })}
                       </div>

                       {/* Footer / Mobile Theme Toggle */}
                       <div className="mt-8 pt-4 border-t-2 border-dashed border-gray-400 dark:border-gray-700 flex justify-between items-center">
                           <p className="font-pixel text-[10px] opacity-50 blinking-cursor">PRESS START TO RESUME...</p>
                           <div className="md:hidden">
                               <ModeToggle />
                           </div>
                       </div>
                   </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    </>
  );
}
