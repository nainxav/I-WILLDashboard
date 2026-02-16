"use client";

import { motion } from "framer-motion";
import { PixelCard } from "./pixel-card";
import { Cpu, FlaskConical, Globe, Radio } from "lucide-react";

const departments = [
  {
    id: "R&D",
    name: "Research & Development",
    desc: "Pushing the boundaries of what is possible through experimentation and innovation.",
    icon: FlaskConical,
  },
  {
    id: "ENG",
    name: "Engineering Division",
    desc: "Building robust systems and hardware integration for seamless operations.",
    icon: Cpu,
  },
  {
    id: "COM",
    name: "Communications",
    desc: "Managing internal and external data flow and community engagement.",
    icon: Radio,
  },
  {
    id: "OPS",
    name: "Global Operations",
    desc: "Coordinating logistics and deployment across all active sectors.",
    icon: Globe,
  },
];

export function DepartmentsSection() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-8 bg-background relative border-y-4 border-black dark:border-white border-dashed z-20">
        <div className="max-w-5xl w-full">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12 flex items-center gap-4 border-b-4 border-primary pb-4"
            >
                <div className="w-4 h-4 bg-primary animate-pulse" />
                <h2 className="font-pixel text-3xl md:text-5xl text-foreground">
                    ACTIVE DIVISIONS
                </h2>
            </motion.div>

            <div className="space-y-6">
                {departments.map((dept, index) => (
                    <motion.div
                        key={dept.id}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <PixelCard className="flex flex-col md:flex-row items-center gap-6 p-6 hover:bg-primary/5 transition-colors group">
                            <div className="w-16 h-16 bg-primary/20 flex items-center justify-center border-2 border-primary rounded-none group-hover:rotate-45 transition-transform duration-300">
                                <dept.icon size={32} className="text-primary" />
                            </div>
                            
                            <div className="flex-1 text-center md:text-left">
                                <div className="flex items-center justify-center md:justify-between mb-2">
                                    <h3 className="font-pixel text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">
                                        {dept.name}
                                    </h3>
                                    <span className="font-mono text-xs bg-primary text-primary-foreground px-2 py-1 hidden md:block">
                                        ID: {dept.id}
                                    </span>
                                </div>
                                <p className="font-mono text-sm md:text-base text-muted-foreground">
                                    {dept.desc}
                                </p>
                            </div>
                        </PixelCard>
                    </motion.div>
                ))}
            </div>
        </div>
    </div>
  );
}
