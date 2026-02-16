"use client";

import { PixelCard } from "@/components/pixel-card";
import { GridBackground } from "@/components/grid-background";
import { motion } from "framer-motion";
import { Trophy, Star, Medal } from "lucide-react";

const achievements = [
    { title: "Best Innovation Award", event: "National Robotics Contest 2024", icon: Trophy, color: "text-yellow-500" },
    { title: "Published Research", event: "IEEE International Conference 2023", icon: Star, color: "text-blue-500" },
    { title: "Hackathon Winner", event: "Global AI Hack 2023", icon: Medal, color: "text-purple-500" },
];

export default function HallOfHonorPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-mono p-6 relative">
      <GridBackground />
      
      <div className="max-w-4xl mx-auto relative z-10 space-y-12">
        <div className="text-center space-y-4">
            <h1 className="font-pixel text-3xl md:text-5xl text-primary text-shadow-pixel">HALL OF HONOR</h1>
            <p className="text-xl opacity-80">&gt; ACHIEVEMENTS & RECOGNITION &lt;</p>
        </div>

        <div className="space-y-6">
            {achievements.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                >
                    <PixelCard className="flex items-center gap-6 p-6">
                        <div className={`w-16 h-16 flex items-center justify-center border-4 border-black dark:border-white bg-black/5 dark:bg-white/5 ${item.color}`}>
                            <item.icon size={32} />
                        </div>
                        <div>
                            <h3 className="font-pixel text-lg md:text-xl mb-1">{item.title}</h3>
                            <p className="text-muted-foreground">{item.event}</p>
                        </div>
                    </PixelCard>
                </motion.div>
            ))}
        </div>
      </div>
    </main>
  );
}
