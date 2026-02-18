"use client";

import { GridBackground } from "@/components/grid-background";
import { motion } from "framer-motion";
import Image from "next/image";

// Team logos - place your logo images in public/logos/ folder
const teams = [
    { 
        name: "Angklungine X", 
        logo: "/logos/angklungine-x.png",
        category: "IoT & AI", 
        desc: "An innovative robotic system that modernizes the traditional West Javanese angklung by combining IoT and AI. Designed to preserve and promote Indonesia's cultural heritage through smart, automated performances." 
    },
    { 
        name: "Drone", 
        logo: "/logos/drone.png",
        category: "Robotics & Computer Vision", 
        desc: "F450-based IoT drone for Indodefence 2024. Features real-time control, human detection, surveillance capabilities, and web-based visualization dashboard for tracking and monitoring." 
    },
    { 
        name: "Smart Train", 
        logo: "/logos/smart-train.png",
        category: "AI & Computer Vision", 
        desc: "Transforming rail travel with AI and computer vision. Analyzes surroundings in real time to improve safety and efficiency through obstacle detection, infrastructure monitoring, and adaptive performance." 
    },
    { 
        name: "R.O.V.E.R", 
        logo: "/logos/rover.png",
        category: "IoT & Computer Vision", 
        desc: "Remote Operated Vehicle for Environmental Reconnaissance. A multifunctional RC car with cameras, distance sensors, and web/mobile control for area mapping, human tracking, and obstacle detection." 
    },
    { 
        name: "NetraDUMP", 
        logo: "/logos/netradump.png",
        category: "IoT & Computer Vision", 
        desc: "Integrated waste management system using AI cameras for detection, collection, and disposal. Features steering wheel/joystick control and real-time wireless monitoring via web dashboard." 
    },
    { 
        name: "S.A.R.A.H", 
        logo: "/logos/sarah.png",
        category: "Robotics", 
        desc: "Search And Rescue Autonomous Hexapod. A six-legged robot with tripod gait, self-balancing via Inverse Kinematics, LiDAR mapping, obstacle avoidance, and voice command control." 
    },
    { 
        name: "Donimal", 
        logo: "/logos/donimal.png",
        category: "Educational IoT", 
        desc: "Interactive educational toy for early childhood learning. Responds to RFID cards, buttons, and LED signals. Integrates audio storytelling and visual feedback to develop cognitive and emotional skills." 
    },
    { 
        name: "Skysense", 
        logo: "/logos/skysense.png",
        category: "IoT", 
        desc: "Intelligent weather monitoring system providing real-time data on temperature, humidity, rainfall, wind speed, and light intensity. Future plans include AI predictions and disaster warning systems." 
    },
    { 
        name: "CarryMate", 
        logo: "/logos/carrymate.png",
        category: "IoT & AI", 
        desc: "A trolley robot that follows its owner using camera detection integrated with Raspberry Pi. Perfect for supermarkets or suitcases, carrying items without manual pushing or lifting." 
    },
    { 
        name: "Vending Machine", 
        logo: "/logos/vending-machine.png",
        category: "IoT & AI", 
        desc: "Student entrepreneurship training system with automation, QRIS/Virtual Account payments, and integrated web dashboard. Features stock monitoring and product sales analytics for MSMEs." 
    },
];

export default function ArsenalPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-mono p-6 relative">
      <GridBackground />
      
      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        <div className="text-center space-y-4">
            <h1 className="font-pixel text-4xl md:text-6xl text-primary text-shadow-pixel">TEAMS</h1>
            <p className="text-xl opacity-80">&gt; I-WILL LABORATORY PROJECTS &lt;</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teams.map((item, index) => (
                <motion.div
                    key={item.name}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="h-full bg-background border-4 border-black dark:border-white p-4 shadow-pixel hover:shadow-pixel-lg transition-all relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-2 opacity-50 text-[10px] font-pixel border-b-2 border-l-2 border-black dark:border-white bg-gray-100 dark:bg-zinc-800">
                            LVL 99
                        </div>
                        
                        {/* Team Logo */}
                        <div className="w-16 h-16 mx-auto mb-3 relative bg-gray-100 dark:bg-zinc-800 rounded-lg overflow-hidden border-2 border-black dark:border-white">
                            <Image 
                                src={item.logo} 
                                alt={`${item.name} logo`}
                                fill
                                className="object-contain p-1"
                                onError={(e) => {
                                    // Fallback to placeholder if image doesn't exist
                                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=random&size=64`;
                                }}
                            />
                        </div>
                        
                        <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors text-center">{item.name}</h4>
                        <p className="text-xs text-muted-foreground uppercase mb-2 text-center">[{item.category}]</p>
                        <p className="text-sm opacity-80">{item.desc}</p>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </main>
  );
}
