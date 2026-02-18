"use client";

import { motion } from "framer-motion";
import { PixelCard } from "./pixel-card";
import Image from "next/image";

const founders = [
  {
    id: 1,
    name: "Dr. sc. Lisa Kristiana, S.T., M.T.",
    role: "Founder",
    desc: "Strategizing the future of the lab.",
    image: "/members/bulisa.jpg",
  },
  {
    id: 2,
    name: "Ir. Muhammad Ichwan M.T.",
    role: "Co-Founder",
    desc: "Building the digital foundation.",
    image: "/members/pakichwan.jpg",
  },
  {
    id: 3,
    name: "Galih ashari rakhmat S.Si., M.T.",
    role: "Co-Founder",
    desc: "Ensuring smooth daily operations.",
    image: "/members/pak_galih.jpg",
  },
  {
    id: 4,
    name: "Zaelani Mursid",
    role: "Co-Founder",
    desc: "Designing the visual identity.",
    image: "/members/pakzae.jpg",
  },
];

export function FoundersSection() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-background relative overflow-hidden z-20">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <div className="max-w-6xl w-full z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
            >
                <h2 className="font-pixel text-4xl md:text-6xl text-primary text-shadow-pixel mb-4">
                    THE FOUNDERS
                </h2>
                <p className="font-mono text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
                    &gt; Identifying core personnel responsible for the initiative.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {founders.map((founder, index) => (
                    <motion.div
                        key={founder.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ y: -5 }}
                    >
                        <PixelCard className="h-full border-2 hover:border-primary transition-colors flex flex-col group relative overflow-hidden">
                            
                            {/* Role Badge */}
                            <div className="absolute top-4 right-4 z-10">
                                <span className="px-2 py-1 bg-primary text-black dark:text-white font-pixel text-[10px] uppercase tracking-widest">
                                    {founder.role}
                                </span>
                            </div>

                            {/* Image Container */}
                            <div className="relative w-full aspect-square bg-muted mb-6 overflow-hidden border-b-4 border-black dark:border-white">
                                <Image
                                    src={founder.image}
                                    alt={founder.name}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                            </div>
                            
                            {/* Content */}
                            <div className="flex-1 flex flex-col justify-end px-2 pb-2 text-center md:text-left">
                                <h3 className="font-pixel text-xl md:text-2xl leading-none text-foreground group-hover:text-primary transition-colors mb-2 min-h-[5rem] md:min-h-[6rem] flex flex-col justify-end">
                                    {founder.name}
                                </h3>
                                <div className="h-1 w-12 bg-primary mb-2 hidden md:block group-hover:w-full transition-all duration-300" />
                            </div>

                        </PixelCard>
                    </motion.div>
                ))}
            </div>
        </div>
    </div>
  );
}
