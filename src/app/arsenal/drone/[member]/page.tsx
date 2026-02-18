"use client";

import { GridBackground } from "@/components/grid-background";
import { PixelCard } from "@/components/pixel-card";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { use } from "react";

// Member data
const memberData: Record<string, MemberCV> = {
    shafira: {
        name: "Shafira Kurnia Fasya",
        photo: "/members/shafira.png",
        role: "Chief of Digital Media",
        team: "Drone",
        status: "ACTIVE",
        email: "shafirakf@gmail.com",
        phone: "+62 896 3002 5755",
        location: "Bandung, Indonesia",
        bio: "Dedicated and enthusiastic fourth-year Informatics student with a solid understanding in Artificial Intelligence, Internet of Things (IoT), UI/UX Design, and Website Development. Known for excellent problem-solving abilities, strong analytical skills, and a collaborative team player with effective communication skills.",
        education: [
            { degree: "Bachelor of Informatics", institution: "Bandung National Institute of Technology (ITENAS)", year: "2022 - Present", gpa: "3.97/4.00" },
        ],
        experience: [
            { title: "Chief of Digital Media", company: "Innovative Laboratory I-WILL", period: "2024 - Present", description: "Lead and managed the Digital Media Team, responsible for documentation, publication, and design. Ensuring efficient collaboration, clear communication, and successful completion of tasks." },
            { title: "Lab Assistant IoT Programming", company: "ITENAS", period: "2025 - 2026", description: "Teaching IoT communication protocols (MQTT, HTTP, WebSocket) and end-to-end IoT hardware/software development, from device-level programming to data communication and system integration." },
            { title: "Lab Assistant Computer Network", company: "ITENAS", period: "2024 - 2025", description: "Teaching network fundamentals, topologies, and hands-on practice using eNSP (Enterprise Network Simulation Platform)." },
            { title: "Lab Assistant Basic Programming", company: "ITENAS", period: "2024 - 2026", description: "Teaching Python programming fundamentals, API development, Flask-based web applications, and Raspberry Pi integration." },
            { title: "Lab Assistant Database Programming", company: "ITENAS", period: "2024 - 2025", description: "Delivering lessons on database principles, supervising practical sessions, and offering mentorship to enhance technical skills." },
            { title: "Lab Assistant Object Oriented Programming", company: "ITENAS", period: "2024 - 2025", description: "Teaching OOP concepts with Java and Java-based web development fundamentals." },
        ],
        skills: [
            { name: "Python", level: 90 },
            { name: "React / Vite / Tailwind", level: 85 },
            { name: "PHP / Laravel", level: 80 },
            { name: "IoT (Arduino/ESP32)", level: 85 },
            { name: "UI/UX Design", level: 80 },
            { name: "HTML / CSS / JavaScript", level: 88 },
        ],
        projects: [
            { name: "Drone for Indo Defence 2024", description: "IoT drone with AI 'friend and foe' detection system using camera for enemy location detection", tech: ["Python", "IoT", "AI", "OpenCV"] },
            { name: "AI Speech Evaluation", description: "Web app integrated with AI to evaluate speeches based on 7 parameters: articulation, filler words, gestures, head/eye movement, emotion, and intonation", tech: ["Python", "AI", "Web"] },
            { name: "eGeos Website", description: "Geospatial web application for PT Ekosistem Geospasial Mandiri integrated with AI", tech: ["React", "Vite", "Tailwind", "AI"] },
            { name: "Bio-CNG Project (2.8B)", description: "Industrial-scale Bio-CNG system managing sensors, actuators, and control/monitoring system", tech: ["IoT", "Python", "Sensors"] },
            { name: "16 AR Cikapundung Village", description: "Created 16 Augmented Reality effects using Spark AR by Meta for community service project", tech: ["Spark AR", "Meta"] },
            { name: "inCube", description: "IoT-integrated egg incubator with control, monitoring, and reporting via website and mobile app", tech: ["IoT", "UI/UX", "Arduino"] },
            { name: "Anthrobo", description: "Tomato ripeness detection application using KNN, OpenCV, and PyQt5", tech: ["Python", "OpenCV", "KNN", "PyQt5"] },
            { name: "Smart Farm Lembang Agri", description: "Smart farm system demonstration and implementation for young farmers education", tech: ["IoT", "Sensors"] },
            { name: "The Oasis", description: "Fashion e-commerce website with admin dashboard", tech: ["PHP", "Laravel", "MySQL"] },
        ],
        achievements: [
            "Huawei ICT Competition 2024 - National Level (Network Category)",
            "Prokimnas 2023 Winner (PKM)",
        ],
        social: {
            github: "https://github.com/shafira",
            linkedin: "https://linkedin.com/in/shafira",
            instagram: "https://instagram.com/shafira",
        },
    },
    zakhwa: {
        name: "Zakhwa",
        photo: "/members/zakhwa.png",
        role: "Member",
        team: "Drone",
        status: "ACTIVE",
        email: "zakhwa@iwill-lab.com",
        phone: "+62 813 4567 8901",
        location: "Bandung, Indonesia",
        bio: "Focused on autonomous systems and environmental reconnaissance. Specializes in sensor integration and data processing for field deployments.",
        education: [
            { degree: "Bachelor of Electrical Engineering", institution: "Institut Teknologi Bandung", year: "2023 - Present", gpa: "3.72/4.00" },
        ],
        experience: [
            { title: "Drone Team Member", company: "I-WILL Laboratory", period: "2024 - Present", description: "Working on sensor integration and autonomous flight systems." },
        ],
        skills: [
            { name: "ROS/ROS2", level: 85 },
            { name: "Embedded Systems", level: 80 },
            { name: "Python", level: 75 },
            { name: "SLAM", level: 70 },
            { name: "PCB Design", level: 65 },
        ],
        projects: [
            { name: "Environmental Monitoring Payload", description: "Sensor suite for air quality and weather data collection", tech: ["Arduino", "LoRa", "Python"] },
        ],
        achievements: [
            "2nd Place - IoT Innovation Challenge 2024",
            "Best Technical Implementation Award",
        ],
        social: {
            github: "https://github.com/zakhwa",
            linkedin: "https://linkedin.com/in/zakhwa",
        },
    },
    najwa: {
        name: "Najwa",
        photo: "/members/najwa.png",
        role: "Member",
        team: "Drone",
        status: "ACTIVE",
        email: "najwa@iwill-lab.com",
        phone: "+62 814 5678 9012",
        location: "Bandung, Indonesia",
        bio: "Passionate about brain-computer interfaces and neural signal processing. Working on experimental control systems for direct human-machine interaction.",
        education: [
            { degree: "Bachelor of Biomedical Engineering", institution: "Institut Teknologi Bandung", year: "2023 - Present", gpa: "3.80/4.00" },
        ],
        experience: [
            { title: "Drone Team Member", company: "I-WILL Laboratory", period: "2024 - Present", description: "Developing BCI-based control interfaces for drone systems." },
            { title: "Research Intern", company: "Neuroscience Lab ITB", period: "2023 - 2024", description: "Assisted in EEG signal processing research." },
        ],
        skills: [
            { name: "Python", level: 88 },
            { name: "Signal Processing", level: 82 },
            { name: "TensorFlow", level: 75 },
            { name: "MATLAB", level: 70 },
            { name: "Neurosky/OpenBCI", level: 68 },
        ],
        projects: [
            { name: "BCI Drone Controller", description: "EEG-based control system for hands-free drone operation", tech: ["Python", "OpenBCI", "PyTorch"] },
            { name: "Neural Signal Classifier", description: "Real-time classification of motor imagery signals", tech: ["TensorFlow", "MNE-Python"] },
        ],
        achievements: [
            "Best Research Poster - Biomedical Conference 2024",
            "Innovation Grant Recipient",
        ],
        social: {
            github: "https://github.com/najwa",
            linkedin: "https://linkedin.com/in/najwa",
            instagram: "https://instagram.com/najwa",
        },
    },
};

interface MemberCV {
    name: string;
    photo: string;
    role: string;
    team: string;
    status: string;
    email: string;
    phone: string;
    location: string;
    bio: string;
    education: { degree: string; institution: string; year: string; gpa: string }[];
    experience: { title: string; company: string; period: string; description: string }[];
    skills: { name: string; level: number }[];
    projects: { name: string; description: string; tech: string[] }[];
    achievements: string[];
    social: { github?: string; linkedin?: string; instagram?: string };
}

export default function MemberPage({ params }: { params: Promise<{ member: string }> }) {
    const { member } = use(params);
    const data = memberData[member];

    if (!data) {
        return (
            <main className="min-h-screen bg-background text-foreground font-mono p-6 relative flex items-center justify-center">
                <GridBackground />
                <div className="text-center z-10">
                    <h1 className="font-pixel text-4xl text-primary mb-4">MEMBER NOT FOUND</h1>
                    <p className="mb-6 opacity-80">The requested profile does not exist.</p>
                    <Link href="/arsenal/drone" className="text-primary hover:underline">← Back to Drone Team</Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-background text-foreground font-mono p-6 relative">
            <GridBackground />
            
            <div className="max-w-5xl mx-auto relative z-10 space-y-8">
                {/* Back button */}
                <div>
                    <Link href="/arsenal/drone" className="inline-flex items-center gap-2 text-sm hover:text-primary transition-colors">
                        <span>←</span> Back to Drone Team
                    </Link>
                </div>

                {/* Header Section */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="bg-background border-4 border-black dark:border-white p-6 shadow-pixel"
                >
                    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                        {/* Profile Photo */}
                        <div className="w-32 h-32 relative rounded-lg overflow-hidden border-4 border-black dark:border-white bg-gray-200 dark:bg-zinc-700 flex-shrink-0">
                            <Image 
                                src={data.photo}
                                alt={data.name}
                                fill
                                className="object-cover"
                                onError={(e) => {
                                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(data.name)}&background=random&size=128`;
                                }}
                            />
                        </div>

                        {/* Basic Info */}
                        <div className="flex-1 text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                                <h1 className="font-pixel text-2xl md:text-3xl text-primary">{data.name}</h1>
                                <span className={`text-xs px-2 py-1 font-pixel border-2 border-black dark:border-white ${data.status === 'ACTIVE' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'}`}>
                                    {data.status}
                                </span>
                            </div>
                            <p className="text-lg opacity-80 mb-1">{data.role} • {data.team} Team</p>
                            <p className="text-sm opacity-60 mb-4">{data.location}</p>
                            
                            <div className="flex flex-wrap gap-4 text-sm justify-center md:justify-start">
                                <a href={`mailto:${data.email}`} className="hover:text-primary transition-colors">📧 {data.email}</a>
                                <span>📱 {data.phone}</span>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-3 mt-4 justify-center md:justify-start">
                                {data.social.github && (
                                    <a href={data.social.github} target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-gray-800 text-white text-xs rounded hover:bg-gray-700 transition-colors">GitHub</a>
                                )}
                                {data.social.linkedin && (
                                    <a href={data.social.linkedin} target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-500 transition-colors">LinkedIn</a>
                                )}
                                {data.social.instagram && (
                                    <a href={data.social.instagram} target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-pink-600 text-white text-xs rounded hover:bg-pink-500 transition-colors">Instagram</a>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Bio */}
                    <div className="mt-6 pt-6 border-t-2 border-dashed border-gray-300 dark:border-gray-700">
                        <h3 className="font-pixel text-sm text-primary mb-2">ABOUT</h3>
                        <p className="text-sm leading-relaxed opacity-80">{data.bio}</p>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Skills */}
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                    >
                        <PixelCard title="SKILLS" className="h-full">
                            <div className="space-y-3 mt-4">
                                {data.skills.map((skill) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span>{skill.name}</span>
                                            <span className="opacity-60">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-gray-200 dark:bg-zinc-700 border border-black dark:border-white">
                                            <motion.div 
                                                className="h-full bg-primary"
                                                initial={{ width: 0 }}
                                                animate={{ width: `${skill.level}%` }}
                                                transition={{ duration: 0.8, delay: 0.2 }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </PixelCard>
                    </motion.div>

                    {/* Achievements */}
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.15 }}
                    >
                        <PixelCard title="ACHIEVEMENTS" className="h-full">
                            <ul className="space-y-2 mt-4">
                                {data.achievements.map((achievement, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm">
                                        <span className="text-primary">🏆</span>
                                        <span className="opacity-80">{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </PixelCard>
                    </motion.div>
                </div>

                {/* Education */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <PixelCard title="EDUCATION">
                        <div className="space-y-4 mt-4">
                            {data.education.map((edu, idx) => (
                                <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-3 bg-gray-100 dark:bg-zinc-800 border-l-4 border-primary">
                                    <div>
                                        <h4 className="font-bold">{edu.degree}</h4>
                                        <p className="text-sm opacity-70">{edu.institution}</p>
                                    </div>
                                    <div className="text-sm mt-2 md:mt-0 md:text-right">
                                        <p className="opacity-60">{edu.year}</p>
                                        <p className="text-primary font-bold">GPA: {edu.gpa}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </PixelCard>
                </motion.div>

                {/* Experience */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.25 }}
                >
                    <PixelCard title="EXPERIENCE">
                        <div className="space-y-4 mt-4">
                            {data.experience.map((exp, idx) => (
                                <div key={idx} className="p-3 bg-gray-100 dark:bg-zinc-800 border-l-4 border-green-500">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                        <h4 className="font-bold">{exp.title}</h4>
                                        <span className="text-xs opacity-60">{exp.period}</span>
                                    </div>
                                    <p className="text-sm text-primary mb-1">{exp.company}</p>
                                    <p className="text-sm opacity-70">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </PixelCard>
                </motion.div>

                {/* Projects */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <PixelCard title="PROJECTS">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                            {data.projects.map((project, idx) => (
                                <div key={idx} className="p-4 bg-gray-100 dark:bg-zinc-800 border-2 border-black dark:border-white hover:shadow-pixel transition-all">
                                    <h4 className="font-bold text-primary mb-2">{project.name}</h4>
                                    <p className="text-sm opacity-70 mb-3">{project.description}</p>
                                    <div className="flex flex-wrap gap-1">
                                        {project.tech.map((t) => (
                                            <span key={t} className="text-[10px] px-2 py-0.5 bg-background border border-foreground/30">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </PixelCard>
                </motion.div>

                {/* Footer */}
                <div className="text-center py-8 opacity-50 text-sm">
                    <p>Last updated: January 2026</p>
                </div>
            </div>
        </main>
    );
}
