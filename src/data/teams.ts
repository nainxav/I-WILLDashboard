// Centralized team and member data

export interface MemberCV {
    slug: string;
    name: string;
    photo: string;
    role: string;
    status: "ACTIVE" | "INACTIVE" | "ALUMNI";
    email: string;
    phone: string;
    location: string;
    bio: string;
    shortDesc: string;
    tags: string[];
    education: { degree: string; institution: string; year: string; gpa: string }[];
    experience: { title: string; company: string; period: string; description: string }[];
    skills: { name: string; level: number }[];
    projects: { name: string; description: string; tech: string[] }[];
    achievements: string[];
    social: { github?: string; linkedin?: string; instagram?: string };
}

export interface Team {
    slug: string;
    name: string;
    fullName: string;
    logo: string;
    category: string;
    description: string;
    longDescription: string;
    members: MemberCV[];
}

export const teams: Team[] = [
    {
        slug: "drone",
        name: "Drone Astra Versa",
        fullName: "IoT Drone System",
        logo: "/logos/drone.png",
        category: "Robotics & Computer Vision",
        description: "F450-based IoT drone for Indodefence 2024. Features real-time control, human detection, surveillance capabilities, and web-based visualization dashboard for tracking and monitoring.",
        longDescription: "The Drone Astra Versa team develops F450-based IoT drones integrated with AI for the 'friend and foe' detection concept. Our systems feature real-time control, human detection, surveillance capabilities, and web-based visualization dashboards for tracking and monitoring applications.",
        members: [
            {
                slug: "shafira",
                name: "Shafira Kurnia Fasya",
                photo: "/members/shafira.JPG",
                role: "Team Leader & AI Integrator",
                status: "ACTIVE",
                email: "shafirakf@gmail.com",
                phone: "+62 896 3002 5755",
                location: "Bandung, Indonesia",
                bio: "Dedicated and enthusiastic fourth-year Informatics student with a solid understanding in Artificial Intelligence, Internet of Things (IoT), UI/UX Design, and Website Development. Known for excellent problem-solving abilities, strong analytical skills, and a collaborative team player with effective communication skills.",
                shortDesc: "High Interest in Robotics and AI Implementation through Robotics. Drone Team Leader for a year.",
                tags: ["Robotics", "AI", "Front End Developer"],
                education: [
                    { degree: "Bachelor of Informatics", institution: "Bandung National Institute of Technology (ITENAS)", year: "2022 - Present", gpa: "3.97/4.00" },
                ],
                experience: [
                    { title: "Team Leader & AI Integrator", company: "I-WILL Laboratory", period: "2024 - Present", description: "Memimpin pengembangan Drone Astra Versa, mengintegrasikan AI untuk deteksi 'friend and foe'." },
                    { title: "Chief of Digital Media", company: "Innovative Laboratory I-WILL", period: "2024 - Present", description: "Lead and managed the Digital Media Team, responsible for documentation, publication, and design." },
                    { title: "Lab Assistant IoT Programming", company: "ITENAS", period: "2025 - 2026", description: "Teaching IoT communication protocols (MQTT, HTTP, WebSocket) and end-to-end IoT hardware/software development." },
                    { title: "Lab Assistant Computer Network", company: "ITENAS", period: "2024 - 2025", description: "Teaching network fundamentals, topologies, and hands-on practice using eNSP." },
                ],
                skills: [
                    { name: "Python", level: 90 },
                    { name: "React / Vite / Tailwind", level: 85 },
                    { name: "IoT (Arduino/ESP32)", level: 85 },
                    { name: "UI/UX Design", level: 80 },
                    { name: "HTML / CSS / JavaScript", level: 88 },
                ],
                projects: [
                    { name: "Drone for Indo Defence 2024", description: "IoT drone with AI 'friend and foe' detection system", tech: ["Python", "IoT", "AI", "OpenCV"] },
                    { name: "AI Speech Evaluation", description: "Web app to evaluate speeches based on 7 parameters", tech: ["Python", "AI", "Web"] },
                    { name: "eGeos Website", description: "Geospatial web application integrated with AI", tech: ["React", "Vite", "Tailwind"] },
                ],
                achievements: [
                    "Huawei ICT Competition 2024 - National Level",
                    "GPA 3.97/4.00 - Dean's List",
                    "Chief of Digital Media at I-WILL Laboratory",
                ],
                social: { github: "https://github.com/shafira", linkedin: "https://linkedin.com/in/shafira", instagram: "https://instagram.com/shafira" },
            },
            {
                slug: "zufar",
                name: "Muhammad Zufar Dafy",
                photo: "/members/zufar.png",
                role: "IoT System Integrator",
                status: "ACTIVE",
                email: "zufar.dafy@iwill-lab.com",
                phone: "+62 812 0000 0002",
                location: "Bandung, Indonesia",
                bio: "Passionate about drone technology and IoT systems. Contributing to the Drone Astra Versa project with focus on system integration.",
                shortDesc: "Working on drone system integration and IoT development.",
                tags: ["IoT", "Drone", "Systems"],
                education: [
                    { degree: "Bachelor of Informatics", institution: "Bandung National Institute of Technology", year: "2022 - Present", gpa: "3.75/4.00" },
                ],
                experience: [
                    { title: "IoT System Integrator", company: "I-WILL Laboratory", period: "2024 - Present", description: "Mengembangkan dan mengintegrasikan sistem IoT serta komunikasi pada Drone Astra Versa." },
                    { title: "Drone Team Member", company: "I-WILL Laboratory", period: "2024 - Present", description: "Contributing to drone system development and testing." },
                ],
                skills: [
                    { name: "Python", level: 80 },
                    { name: "Arduino/ESP32", level: 78 },
                    { name: "IoT Systems", level: 75 },
                    { name: "Drone Technology", level: 72 },
                    { name: "Backend Development", level: 90 },
                ],
                projects: [
                    { name: "Drone Astra Versa", description: "IoT drone system for surveillance applications", tech: ["Python", "IoT", "Sensors"] },
                ],
                achievements: [ "Drone Astra Versa Team Member" ],
                social: { github: "https://github.com/zufar", linkedin: "https://linkedin.com/in/zufar" },
            },
            {
                slug: "zakhwa",
                name: "Zakhwa Aliya Maryam",
                photo: "public/members/zakhwa.png",
                role: "Drone Researcher & 3D Designer",
                status: "ACTIVE",
                email: "zakhwa.aliya@mhs.itenas.ac.id",
                phone: "+62 813 4567 8901",
                location: "Bandung, Indonesia",
                bio: "Informatics student with a strong interest in robotics and the broader world of IT. Quick to understand new material and highly motivated to explore and learn new technologies, especially in robotics and innovation with I-WILL.",
                shortDesc: "Informatics student passionate about robotics and learning new IT technologies.",
                tags: ["Robotics", "Informatics", "Leadership", "UI/UX", "Social Media"],
                education: [
                    { degree: "Bachelor of Informatics", institution: "Institut Teknologi Nasional Bandung", year: "2024 - Present", gpa: "" },
                    { degree: "High School (Science)", institution: "SMA Negeri 1 Baleendah", year: "2022 - 2024", gpa: "" },
                ],
                experience: [
                    { title: "Drone Researcher & 3D Designer", company: "I-WILL Laboratory", period: "2024 - Present", description: "Tim peneliti untuk Drone Astra Versa dan desain mekanik 3D Drone Astra Versa." },
                    {
                        title: "Participant - Bootcamp Codespace (UI/UX Division)",
                        company: "Codespace",
                        period: "2024",
                        description: "Mengikuti pelatihan dan praktik di bidang UI/UX design."
                    },
                    {
                        title: "Participant - JuaraGCP Season 11",
                        company: "Google",
                        period: "2024",
                        description: "Mengikuti bootcamp cloud dan teknologi Google."
                    },
                    { 
                        title: "Best Innovators - ICSIT 2025",
                        company: "-",
                        period: "2025",
                        description: "Mengikuti kompetisi riset pengembangan pembaharuan teknologi tingkat internasional dengan fokus pada AI dan IoT."
                    }
                ],
                skills: [
                    { name: "Robotics Fundamentals", level: 79 },
                    { name: "Basic Programming", level: 78 },
                    { name: "UI/UX Design (Figma)", level: 85 },
                ],
                projects: [],
                achievements: [ "Drone Astra Versa Team Member" ],
                social: { github: "https://github.com/cheese-voyager", linkedin: "https://linkedin.com/in/zakhwa" },
            },
            {
                slug: "farhan",
                name: "Farhan Kamil",
                photo: "/members/farhan.jpg",
                role: "AI & Backend Engineer",
                status: "ACTIVE",
                email: "farhan.kamil@iwill-lab.com",
                phone: "+62 812 0000 0004",
                location: "Bandung, Indonesia",
                bio: "Informatics student with a strong interest in Artificial Intelligence, data science, and backend engineering. Experienced in building AI/ML-powered systems, retrieval-augmented generation (RAG), and graph-based AI applications using modern Python ecosystems and cloud tools.",
                shortDesc: "AI and backend-focused Informatics student working on applied AI systems.",
                tags: ["AI", "Machine Learning", "Backend", "Data Science"],
                education: [
                    { degree: "Bachelor of Informatics Engineering", institution: "Institut Teknologi Nasional (ITENAS)", year: "2024 - Present", gpa: "3.94/4.00" },
                ],
                experience: [
                    { title: "AI & Backend Engineer", company: "I-WILL Laboratory", period: "2024 - Present", description: "Membangun sistem AI, RAG, dan arsitektur backend untuk pemrosesan data Drone Astra Versa." },],
                skills: [
                    { name: "Python", level: 88 },
                    { name: "SQL", level: 85 },
                    { name: "JavaScript / Java", level: 80 },
                    { name: "FastAPI / Flask / MCP", level: 85 },
                    { name: "LangGraph / LangChain / RAG", level: 90 },
                ],
                projects: [
                    { name: "GraphWeaver", description: "AI-powered forensic investigator system dengan multi-agent workflow menggunakan LangGraph dan Neo4j untuk knowledge graph reasoning.", tech: ["Python", "LangGraph", "Neo4j", "Llama-3"] },
                    { name: "SecondBrain (ScholarSync)", description: "Sistem RAG untuk document intelligence dengan chunking, vector database retrieval, dan jawaban berbasis sitasi.", tech: ["Python", "LangChain", "Vector DB"] },
                    { name: "Farmile", description: "Platform ekosistem karier berbasis AI multi-agent dengan ATS checker, CV builder, dan AI interviewer.", tech: ["Python", "AI", "RAG"] },
                ],
                achievements: [
                    "Top 20 Finalist - AI Talent Hub 2025",
                    "Research grant Prokimnas untuk Computer Vision pada drone penebar benih"
                ],
                social: { github: "https://github.com/cheese-voyager", linkedin: "-" },
            },
            {
                slug: "najwa",
                name: "Najwa Hikmatyar",
                photo: "/members/najwa.png",
                role: "Multimedia & Simulator Developer",
                status: "ACTIVE",
                email: "najwa@iwill-lab.com",
                phone: "+62 814 5678 9012",
                location: "Bandung, Indonesia",
                bio: "Informatics undergraduate student at Institut Teknologi Nasional Bandung with a strong interest in multimedia and game development. Actively developing skills in C# programming, Unity game development, and video editing with DaVinci Resolve while contributing as a member of the Drone team at I-WILL Laboratory.",
                shortDesc: "Informatics student focused on Unity game development and multimedia.",
                tags: ["C#", "Unity", "Multimedia", "Video Editing"],
                education: [
                    { degree: "Bachelor of Informatics", institution: "Institut Teknologi Nasional Bandung", year: "2023 - Present", gpa: "3.60/4.00" },
                ],
                experience: [
                    { title: "Multimedia & Simulator Developer", company: "I-WILL Laboratory", period: "2024 - Present", description: "Mengembangkan simulasi game engine (Unity) dan materi video/multimedia untuk Drone Astra Versa." },
                    {
                        title: "Anggota – Tim Drone | Arc-01",
                        company: "Innovative Workingspace Integrated Living Laboratory (I-WILL)",
                        period: "2023 - Present",
                        description: "Berpartisipasi dalam pengembangan sistem drone dan aktivitas laboratorium inovasi."
                    }
                ],
                skills: [
                    { name: "C#", level: 85 },
                    { name: "Unity Game Engine", level: 80 },
                    { name: "DaVinci Resolve", level: 78 },
                ],
                projects: [],
                achievements: [ "Drone Astra Versa Team Member" ],
                social: { github: "https://github.com/najwa", linkedin: "https://linkedin.com/in/najwa" },
            },
        ],
    },
    {
        slug: "rover",
        name: "R.O.V.E.R",
        fullName: "Remote Operated Vehicle for Environmental Reconnaissance",
        logo: "/logos/rover.png",
        category: "IoT & Computer Vision",
        description: "Remote Operated Vehicle for Environmental Reconnaissance. A multifunctional RC car with cameras, distance sensors, and web/mobile control for area mapping, human tracking, and obstacle detection.",
        longDescription: "R.O.V.E.R (Remote Operated Vehicle for Environmental Reconnaissance) is a multifunctional RC car equipped with cameras, distance sensors, and web/mobile control capabilities. The team focuses on developing autonomous systems for area mapping, human tracking, and obstacle detection in various terrains and environments.",
        members: [
            {
                slug: "deden",
                name: "Deden Roga",
                photo: "/members/deden.jpg",
                role: "Team Leader & Hardware Specialist",
                status: "ACTIVE",
                email: "deden.roga@iwill-lab.com",
                phone: "+62 812 0000 0001",
                location: "Bandung, Indonesia",
                bio: "Informatics student with a strong interest in programming and technology development. Coming from a social sciences (IPS) high school background, highly motivated to keep learning and growing in IT through projects, online courses, and organizational experience.",
                shortDesc: "Informatics student passionate about programming and technology development.",
                tags: ["Programming", "Team Leadership", "Creativity"],
                education: [
                    { degree: "Bachelor of Informatics", institution: "Institut Teknologi Nasional", year: "2024 - Present", gpa: "" },
                    { degree: "High School (IPS)", institution: "SMA Negeri 3 Rambah Hilir", year: "2021 - 2024", gpa: "" },
                ],
                experience: [
                    { title: "Team Leader & Hardware Specialist", company: "I-WILL Laboratory", period: "2024 - Present", description: "Memimpin tim R.O.V.E.R dan menangani perbaikan infrastruktur perangkat keras." },
                    {
                        title: "Team Leader / Project Member",
                        company: "I-WILL Laboratory Projects",
                        period: "2024 - Present",
                        description: "Berperan sebagai pemimpin dan anggota tim dalam berbagai proyek IoT, web, dan game seperti R.O.V.E.R, StreamForte, Ruang Seduh, dan Echoes of The Deep: First Descent."
                    }
                ],
                skills: [
                    { name: "Electronics & Hardware Prototyping", level: 80 },
                    { name: "Team Leadership in Tech Projects", level: 82 },
                    { name: "IoT Development", level: 80 },
                ],
                projects: [
                    { name: "R.O.V.E.R", description: "Proyek kendaraan IoT untuk eksplorasi dan pengintaian.", tech: ["IoT", "Robotik"] },
                    { name: "StreamForte", description: "Proyek berbasis web.", tech: ["Web", "Programming"] },
                    { name: "Ruang Seduh", description: "Platform web bertema kedai/kopi.", tech: ["Web", "Programming"] },
                    { name: "Echoes of The Deep: First Descent", description: "Proyek gabungan IoT dan game.", tech: ["IoT", "Game"] },
                ],
                achievements: ["R.O.V.E.R Team Leader"],
                social: { github: "https://github.com/deden", linkedin: "https://linkedin.com/in/deden" },
            },
            {
                slug: "dzakiyya",
                name: "Dzakiyya Putri Aulia",
                photo: "/members/dzakiyya.png",
                role: "Navigation & SLAM Engineer",
                status: "ACTIVE",
                email: "dzakiyya@iwill-lab.com",
                phone: "+62 812 0000 0002",
                location: "Bandung, Indonesia",
                bio: "Contributing to R.O.V.E.R development with focus on navigation and mapping systems.",
                shortDesc: "Working on navigation and SLAM systems for R.O.V.E.R.",
                tags: ["Navigation", "SLAM", "Python"],
                education: [{ degree: "Bachelor of Informatics", institution: "Bandung National Institute of Technology", year: "2022 - Present", gpa: "3.80/4.00" }],
                experience: [
                    { title: "Navigation & SLAM Engineer", company: "I-WILL Laboratory", period: "2024 - Present", description: "Mengembangkan sistem navigasi pemetaan presisi tinggi (SLAM) untuk R.O.V.E.R." },{ title: "R.O.V.E.R Team Member", company: "I-WILL Laboratory", period: "2024 - Present", description: "Developing navigation and mapping systems." }],
                skills: [{ name: "Python", level: 82 }, { name: "SLAM", level: 78 }, { name: "ROS", level: 75 }, { name: "Computer Vision", level: 72 }],
                projects: [{ name: "Mapping System", description: "Real-time environment mapping using SLAM", tech: ["ROS", "Cartographer", "LiDAR"] }],
                achievements: ["R.O.V.E.R Team Member"],
                social: { github: "https://github.com/dzakiyya", linkedin: "https://linkedin.com/in/dzakiyya" },
            },
            {
                slug: "asri",
                name: "Asri Tanisha R.",
                photo: "/members/asri.png",
                role: "Computer Vision Engineer",
                status: "ACTIVE",
                email: "asri.tanisha@iwill-lab.com",
                phone: "+62 812 0000 0003",
                location: "Bandung, Indonesia",
                bio: "Dedicated Informatics student focusing on Computer Vision, Artificial Intelligence, and Mobile Development. Experienced in YOLO-based detection, MobileNetV2+LSTM violence detection, and remote-controlled ROVER systems. Actively participating in national and international technology competitions.",
                shortDesc: "Informatics student specializing in computer vision, AI, and mobile development.",
                tags: ["Computer Vision", "AI", "Mobile Development", "YOLO", "LSTM"],
                education: [{ degree: "Bachelor of Informatics", institution: "Institut Teknologi Nasional", year: "2023 - 2027", gpa: "3.64/4.00" }],
                experience: [
                    { title: "Computer Vision Engineer", company: "I-WILL Laboratory", period: "2024 - Present", description: "Mengimplementasikan model deteksi objek (YOLO) pada robot R.O.V.E.R." },
                    {
                        title: "Research Division Member",
                        company: "I-WILL Laboratory",
                        period: "2024 - Present",
                        description: "Berpartisipasi dalam penelitian berbasis computer vision dan AI."
                    }
                ],
                skills: [
                    { name: "Python", level: 85 },
                    { name: "YOLO", level: 82 },
                    { name: "CNN / LSTM", level: 82 },
                    { name: "OpenCV", level: 80 },
                    { name: "Java", level: 75 },
                    { name: "JavaScript", level: 75 },
                    { name: "Data Analysis / MySQL", level: 78 },
                ],
                projects: [
                    { name: "Rover – Augmented Security Patrol System", description: "Sistem keamanan berbasis AI dan monitoring jarak jauh dengan teknologi Python, YOLO, MQTT, dan Raspberry Pi.", tech: ["Python", "YOLO", "MQTT", "Raspberry Pi"] },
                    { name: "Violence Detection System", description: "Deteksi kekerasan real-time menggunakan CNN (MobileNetV2) dan LSTM.", tech: ["Python", "MobileNetV2", "LSTM", "OpenCV"] },
                ],
                achievements: ["R.O.V.E.R Team Member"],
                social: { github: "https://github.com/asri", linkedin: "https://linkedin.com/in/asri" },
            },
            {
                slug: "matilde",
                name: "Matilde Ina",
                photo: "/members/matilde.png",
                role: "IoT & Web Developer",
                status: "ACTIVE",
                email: "matilde.ina@iwill-lab.com",
                phone: "+62 812 0000 0004",
                location: "Bandung, Indonesia",
                bio: "Active 6th-semester Informatics student at ITENAS Bandung with strong interest in Internet of Things (IoT), web development, and digital image processing. Experienced with Python, Java, JavaScript, Node.js, React.js, C++, Pascal, and hands-on projects using Arduino and Raspberry Pi.",
                shortDesc: "Informatics student focusing on IoT, web development, and digital image processing.",
                tags: ["IoT", "Web Development", "Digital Image Processing", "UI/UX"],
                education: [{ degree: "Bachelor of Informatics", institution: "Institut Teknologi Nasional (ITENAS) Bandung", year: "2023 - Present", gpa: "" }],
                experience: [
                    { title: "IoT & Web Developer", company: "I-WILL Laboratory", period: "2024 - Present", description: "Membangun dashboard web pemantauan jarak jauh dan integrasi IoT untuk R.O.V.E.R." },
                    {
                        title: "R.O.V.E.R Team Member",
                        company: "I-WILL Laboratory",
                        period: "2024 - Present",
                        description: "Mengembangkan sistem R.O.V.E.R berbasis IoT untuk eksplorasi dan reconnaissance."
                    }
                ],
                skills: [
                    { name: "Python", level: 85 },
                    { name: "Java", level: 80 },
                    { name: "JavaScript / Node.js / React.js", level: 82 },
                    { name: "C++ / Pascal", level: 78 },
                    { name: "SQL / Database Programming", level: 80 },
                    { name: "Arduino / Raspberry Pi", level: 82 },
                ],
                projects: [
                    { name: "Automatic Cigarette Smoke Detection and Air Purification", description: "Prototype sistem deteksi asap rokok dan pemurnian udara menggunakan Arduino Uno.", tech: ["Arduino", "Sensors", "IoT"] },
                    { name: "Distance Warning System", description: "Sistem peringatan jarak menggunakan sensor ultrasonik dan inframerah dengan Raspberry Pi 4.", tech: ["Raspberry Pi", "Sensors"] },
                    { name: "Violence Detection Using MobileNetV2 and TSM", description: "Deteksi kekerasan real-time dengan MobileNetV2 dan Temporal Shift Module.", tech: ["Python", "MobileNetV2", "TSM"] },
                    { name: "Indonesian Supreme Court Decision Retrieval (BM25 + BERT)", description: "Sistem information retrieval untuk putusan MA menggunakan BM25 dan BERT.", tech: ["Python", "BM25", "BERT"] },
                    { name: "Skysense Mobile Application", description: "Aplikasi mobile Skysense untuk informasi cuaca dan lingkungan.", tech: ["Mobile", "IoT"] },
                ],
                achievements: ["R.O.V.E.R Team Member"],
                social: { github: "https://github.com/matilde", linkedin: "https://linkedin.com/in/matilde" },
            },
        ],
    },
    {
        slug: "angklungine-x",
        name: "Angklungine X",
        fullName: "Smart Robotic Angklung System",
        logo: "/logos/angklungine-x.png",
        category: "IoT & AI",
        description: "An innovative robotic system that modernizes the traditional West Javanese angklung by combining IoT and AI. Designed to preserve and promote Indonesia's cultural heritage through smart, automated performances.",
        longDescription: "Angklungine X is an innovative robotic system that modernizes the traditional West Javanese angklung by combining IoT and AI technologies. The project aims to preserve and promote Indonesia's cultural heritage through smart, automated performances while making the instrument accessible to a wider audience.",
        members: [
            {
                slug: "shandy",
                name: "Shandy Handika",
                photo: "/members/shandy.png",
                role: "Team Leader & Automation Engineer",
                status: "ACTIVE",
                email: "shandy.handika@iwill-lab.com",
                phone: "+62 812 1111 0001",
                location: "Bandung, Indonesia",
                bio: "Leading the Angklungine X team to create an innovative robotic angklung system that combines tradition with IoT and AI.",
                shortDesc: "Leading the development of smart robotic angklung system.",
                tags: ["IoT", "Robotics", "Cultural Tech"],
                education: [{ degree: "Bachelor of Informatics", institution: "Bandung National Institute of Technology", year: "2022 - Present", gpa: "3.78/4.00" }],
                experience: [
                    { title: "Team Leader & Automation Engineer", company: "I-WILL Laboratory", period: "2024 - Present", description: "Memimpin Angklungine X dan merekayasa kontrol servo otomatisasi melalui Arduino." },{ title: "Angklungine X Team Leader", company: "I-WILL Laboratory", period: "2024 - Present", description: "Leading the development of automated angklung performance system." }],
                skills: [{ name: "Arduino/ESP32", level: 90 }, { name: "Python", level: 85 }, { name: "Servo Control", level: 88 }, { name: "MIDI", level: 75 }],
                projects: [{ name: "Angklungine X v1.0", description: "Automated angklung with multiple notes", tech: ["Arduino", "Servo", "MIDI"] }],
                achievements: ["Angklungine X Team Leader", "Cultural Innovation Award"],
                social: { github: "https://github.com/shandy", linkedin: "https://linkedin.com/in/shandy" },
            },
            {
                slug: "rainova",
                name: "Rainova",
                photo: "/members/rainova.png",
                role: "Mechanical & Hardware Engineer",
                status: "ACTIVE",
                email: "rainova@iwill-lab.com",
                phone: "+62 812 1111 0002",
                location: "Bandung, Indonesia",
                bio: "Contributing to the Angklungine X project with focus on hardware and mechanical systems.",
                shortDesc: "Working on mechanical systems for automated angklung.",
                tags: ["Hardware", "Mechanical", "Arduino"],
                education: [{ degree: "Bachelor of Informatics", institution: "Bandung National Institute of Technology", year: "2022 - Present", gpa: "3.72/4.00" }],
                experience: [
                    { title: "Mechanical & Hardware Engineer", company: "I-WILL Laboratory", period: "2024 - Present", description: "Merancang aktuator fisik, komponen mekanik, dan cetakan 3D pada Angklungine X." },{ title: "Angklungine X Member", company: "I-WILL Laboratory", period: "2024 - Present", description: "Hardware development for robotic angklung." }],
                skills: [{ name: "Arduino", level: 82 }, { name: "Servo Motors", level: 80 }, { name: "3D Printing", level: 75 }, { name: "Mechanical Design", level: 72 }],
                projects: [{ name: "Actuator System", description: "Servo-based mechanism for angklung", tech: ["Servo", "Arduino", "3D Print"] }],
                achievements: ["Angklungine X Team Member"],
                social: { github: "https://github.com/rainova", linkedin: "https://linkedin.com/in/rainova" },
            },
            {
                slug: "melvina",
                name: "Melvina",
                photo: "/members/melvina.png",
                role: "Control Software Engineer",
                status: "ACTIVE",
                email: "melvina@iwill-lab.com",
                phone: "+62 812 1111 0003",
                location: "Bandung, Indonesia",
                bio: "Developing software and control systems for the Angklungine X project.",
                shortDesc: "Building control software for robotic angklung.",
                tags: ["Software", "Python", "Control"],
                education: [{ degree: "Bachelor of Informatics", institution: "Bandung National Institute of Technology", year: "2022 - Present", gpa: "3.75/4.00" }],
                experience: [
                    { title: "Control Software Engineer", company: "I-WILL Laboratory", period: "2024 - Present", description: "Mengembangkan perangkat lunak kendali MIDI dan serial Python untuk Angklungine X." },{ title: "Angklungine X Member", company: "I-WILL Laboratory", period: "2024 - Present", description: "Software development for robotic angklung." }],
                skills: [{ name: "Python", level: 85 }, { name: "MIDI", level: 78 }, { name: "React", level: 75 }, { name: "Serial Comm", level: 72 }],
                projects: [{ name: "Music Controller", description: "Software control for angklung performance", tech: ["Python", "MIDI", "Serial"] }],
                achievements: ["Angklungine X Team Member"],
                social: { github: "https://github.com/melvina", linkedin: "https://linkedin.com/in/melvina" },
            },
            {
                slug: "yuddha-angklung",
                name: "Yuddha",
                photo: "/members/yuddha.png",
                role: "Backend & Embedded Engineer",
                status: "ACTIVE",
                email: "yuddha@iwill-lab.com",
                phone: "+62 812 1111 0004",
                location: "Bandung, Indonesia",
                bio: "Informatics student with strong interest and experience in software development and Internet of Things (IoT). Used to designing and developing backend web applications as well as microcontroller-based systems integrated with sensors and actuators.",
                shortDesc: "Backend and IoT-oriented Informatics student working on full-stack and embedded systems.",
                tags: ["Backend Development", "IoT", "Embedded Systems"],
                education: [{ degree: "Bachelor of Informatics", institution: "Institut Teknologi Nasional Bandung", year: "2024 - Present", gpa: "" }],
                experience: [
                    { title: "Backend & Embedded Engineer", company: "I-WILL Laboratory", period: "2024 - Present", description: "Menghubungkan mikrokontroler dengan backend system untuk operasional mandiri Angklungine X." },
                    {
                        title: "Software & IoT Developer",
                        company: "Independent / Academic Projects",
                        period: "2021 - Present",
                        description: "Merancang dan mengembangkan aplikasi backend berbasis web serta sistem mikrokontroler terintegrasi sensor dan aktuator."
                    }
                ],
                skills: [
                    { name: "PHP / JavaScript / Python", level: 82 },
                    { name: "REST API Development", level: 80 },
                    { name: "SQL & Database Design", level: 80 },
                    { name: "Object-Oriented Programming", level: 80 },
                    { name: "Git Version Control", level: 78 },
                    { name: "ESP32 / Arduino & Sensor Integration", level: 82 },
                ],
                projects: [],
                achievements: ["Angklungine X Team Member"],
                social: { github: "https://github.com/yuddha", linkedin: "https://linkedin.com/in/yuddha" },
            },
        ],
    },
    {
        slug: "smart-train",
        name: "Smart Train Simulator",
        fullName: "AI-Powered Railway Simulation System",
        logo: "/logos/smart-train.png",
        category: "AI & Computer Vision",
        description: "Transforming rail travel with AI and computer vision. Analyzes surroundings in real time to improve safety and efficiency through obstacle detection, infrastructure monitoring, and adaptive performance.",
        longDescription: "Smart Train Simulator is transforming rail travel with AI and computer vision technology. The system analyzes surroundings in real time to improve safety and efficiency through obstacle detection, infrastructure monitoring, and adaptive performance adjustments.",
        members: [
            {
                slug: "hasby",
                name: "Muhammad Hasby A",
                photo: "/members/hasby.png",
                role: "Team Leader & AI System Designer",
                status: "ACTIVE",
                email: "hasby@iwill-lab.com",
                phone: "+62 812 2222 0001",
                location: "Bandung, Indonesia",
                bio: "Dedicated Computer Science student experienced in leading technical projects from planning to implementation. Skilled in digital image processing and computer vision algorithms using Python for intelligent systems, and comfortable mentoring and troubleshooting in laboratory environments.",
                shortDesc: "Computer vision-focused Informatics student leading AI and embedded projects.",
                tags: ["Computer Vision", "Digital Image Processing", "AI", "Technical Leadership"],
                education: [{ degree: "Bachelor of Informatics", institution: "Institut Teknologi Nasional Bandung", year: "2023 - Present", gpa: "3.70/4.00" }],
                experience: [
                    { title: "Team Leader & AI System Designer", company: "I-WILL Laboratory", period: "2024 - Present", description: "Memimpin Smart Train Simulator dan merekayasa arsitektur AI deteksi objek cerdas." },
                    {
                        title: "Smart Train Team Leader",
                        company: "I-WILL Laboratory",
                        period: "2025 - Present",
                        description: "Memimpin tim miniatur SmartTrain berbasis IoT dan AI dengan ESP32, deteksi kendaraan dengan YOLO, dan kontrol palang via MQTT/HTTP."
                    },
                    {
                        title: "Member of I-WILL Laboratory",
                        company: "I-WILL",
                        period: "2025 - Present",
                        description: "Aktif mengembangkan proyek-proyek AI dan embedded seperti KainVision dan SmartTrain."
                    }
                ],
                skills: [
                    { name: "Python", level: 90 },
                    { name: "TensorFlow / PyTorch / scikit-learn", level: 88 },
                    { name: "OpenCV / scikit-image", level: 86 },
                    { name: "React.js / Express.js / Tailwind CSS", level: 82 },
                    { name: "MySQL / MongoDB", level: 80 },
                ],
                projects: [
                    { name: "KainVision – Fabric Type Classification", description: "Klasifikasi jenis kain menggunakan fitur tekstur (GLCM, LBP, Gabor) dan warna dengan Random Forest, SVM, serta KNN, dilengkapi GUI Tkinter.", tech: ["Python", "scikit-learn", "OpenCV", "Tkinter"] },
                    { name: "Car Obstacle Detection Mobile", description: "Sistem keselamatan kendaraan real-time di Android menggunakan Kotlin dan TensorFlow Lite dengan model YOLOv5su terkuantisasi.", tech: ["Kotlin", "TensorFlow Lite", "OpenCV"] },
                    { name: "ForUStudio", description: "Full-stack platform manajemen proyek kreatif dengan ticketing, file management, pembayaran, dan RBAC.", tech: ["JavaScript", "Express.js", "React.js", "MongoDB"] },
                    { name: "Itenas Youth Innovation Platform (IYIP)", description: "Platform manajemen aktivitas akademik kampus dengan event, jurnal, komunitas, dan workflow persetujuan.", tech: ["JavaScript", "Express.js", "React.js", "MongoDB"] },
                ],
                achievements: [
                    "Smart Train Team Leader",
                    "Participant - Data Science Bootcamp (Dibimbing DSF 36)",
                    "Participant - Codespace Machine Learning Bootcamp"
                ],
                social: { github: "https://github.com/hasby", linkedin: "https://linkedin.com/in/hasby" },
            },
            {
                slug: "hickham",
                name: "Hickham Amwala K",
                photo: "/members/hickham.jpg",
                role: "3D Mechanical Designer",
                status: "ACTIVE",
                email: "hickham@iwill-lab.com",
                phone: "+62 812 2222 0002",
                location: "Bandung, Indonesia",
                bio: "Informatics student with a strong interest and experience in 3D parametric modeling for functional and technical components. Focused on precision modeling for prototyping and mechanical components with attention to manufacturability and structured design.",
                shortDesc: "Informatics student specializing in precise 3D parametric modeling for mechanical components.",
                tags: ["3D Modeling", "Parametric Design", "Prototyping"],
                education: [{ degree: "Bachelor of Informatics", institution: "Institut Teknologi Nasional Bandung", year: "2023 - Present", gpa: "" }],
                experience: [
                    { title: "3D Mechanical Designer", company: "I-WILL Laboratory", period: "2024 - Present", description: "Memodelkan komponen mekanikal presisi 3D untuk Smart Train Simulator." },
                    {
                        title: "3D Modeling for Academic Projects",
                        company: "ITENAS",
                        period: "2025 - Present",
                        description: "Membuat desain 3D komponen mekanikal dan struktural, melakukan iterasi desain, dan mendokumentasikan hasil sebagai laporan teknis."
                    }
                ],
                skills: [
                    { name: "3D Mechanical Design", level: 85 },
                    { name: "Parametric Modeling", level: 82 },
                    { name: "3D Printing Prototyping", level: 80 },
                    { name: "Technical Documentation", level: 78 },
                ],
                projects: [],
                achievements: ["Smart Train Team Member"],
                social: { github: "https://github.com/hickham", linkedin: "https://linkedin.com/in/hickham" },
            },
            {
                slug: "eka",
                name: "Eka Fajar R",
                photo: "/members/eka.png",
                role: "Embedded Hardware Engineer",
                status: "ACTIVE",
                email: "eka.fajar@iwill-lab.com",
                phone: "+62 812 2222 0003",
                location: "Bandung, Indonesia",
                bio: "Working on embedded systems and hardware integration for Smart Train Simulator.",
                shortDesc: "Integrating hardware and embedded systems for railway simulation.",
                tags: ["Embedded", "IoT", "Hardware"],
                education: [{ degree: "Bachelor of Informatics", institution: "Bandung National Institute of Technology", year: "2022 - Present", gpa: "3.70/4.00" }],
                experience: [
                    { title: "Embedded Hardware Engineer", company: "I-WILL Laboratory", period: "2024 - Present", description: "Merancang dan mengintegrasikan sensor Raspberry Pi/Arduino pada Smart Train Simulator." },{ title: "Smart Train Member", company: "I-WILL Laboratory", period: "2024 - Present", description: "Hardware and embedded systems development." }],
                skills: [{ name: "Arduino", level: 85 }, { name: "Python", level: 80 }, { name: "Raspberry Pi", level: 78 }, { name: "Sensors", level: 75 }],
                projects: [{ name: "Hardware Module", description: "Embedded systems for train simulation", tech: ["Arduino", "Raspberry Pi", "Sensors"] }],
                achievements: ["Smart Train Team Member"],
                social: { github: "https://github.com/eka", linkedin: "https://linkedin.com/in/eka" },
            },
        ],
    },
    {
        slug: "netradump",
        name: "NetraDUMP",
        fullName: "Intelligent Waste Management System",
        logo: "/logos/netradump.png",
        category: "IoT & Computer Vision",
        description: "Integrated waste management system using AI cameras for detection, collection, and disposal. Features steering wheel/joystick control and real-time wireless monitoring via web dashboard.",
        longDescription: "NetraDUMP is an integrated waste management system using AI cameras for detection, collection, and disposal. The system features steering wheel/joystick control and real-time wireless monitoring via web dashboard for efficient waste management operations.",
        members: [
            {
                slug: "ari",
                name: "Ari Ferdiana",
                photo: "/members/ari.jpg",
                role: "Team Leader & IoT Architect",
                status: "ACTIVE",
                email: "ari.ferdiana@iwill-lab.com",
                phone: "+62 812 3333 0001",
                location: "Bandung, Indonesia",
                bio: "Informatics undergraduate with strong passion for computer networks, IoT, and creative design. Experienced in IT support, microcontroller-based IoT systems, network infrastructure, and UI/UX prototyping.",
                shortDesc: "Informatics student leading IoT and computer network-based projects.",
                tags: ["IoT", "Computer Networks", "UI/UX", "Raspberry Pi", "Arduino"],
                education: [{ degree: "Bachelor of Informatics", institution: "Institut Teknologi Nasional", year: "2024 - Present", gpa: "" }],
                experience: [
                    { title: "Team Leader & IoT Architect", company: "I-WILL Laboratory", period: "2024 - Present", description: "Memimpin strategi sistem operasi, navigasi, dan infrastruktur IoT terpadu untuk NetraDUMP." },
                    {
                        title: "IT Support Intern",
                        company: "Hotel Holiday Inn Pasteur",
                        period: "Aug 2022 – Dec 2022",
                        description: "Memberikan dukungan teknis harian untuk hardware, software, dan jaringan, termasuk troubleshooting POS dan infrastruktur jaringan."
                    }
                ],
                skills: [
                    { name: "Python / PHP / HTML / CSS / Laravel", level: 82 },
                    { name: "Raspberry Pi / Arduino / ESP32", level: 82 },
                    { name: "Network Troubleshooting", level: 80 },
                    { name: "Figma & Creative Design", level: 80 },
                    { name: "MySQL / Git / GitHub", level: 80 },
                ],
                projects: [
                    { name: "NetraDUMP – Remote Trash Collection Mobile Robot", description: "Robot pengambil sampah dengan lengan robotik dan AI camera, dikendalikan secara remote dengan Raspberry Pi.", tech: ["Raspberry Pi", "Motors", "AI Camera"] },
                    { name: "Smart Parking System", description: "Sistem parkir otomatis berbasis RFID untuk kontrol akses dan panduan tempat kosong.", tech: ["Arduino", "RFID", "Sensors"] },
                    { name: "ecoGrow (Plant Care App UI/UX)", description: "Konsep UI/UX aplikasi perawatan tanaman dengan agenda perawatan dan scanning penyakit.", tech: ["Figma"] },
                    { name: "Itenas Resource Center (Inventory Web App)", description: "Aplikasi manajemen inventaris berbasis Laravel dan MySQL untuk pengelolaan ruangan dan barang.", tech: ["Laravel", "MySQL"] },
                ],
                achievements: [
                    "Online Scholarship Competition (OSC) – Fully Funded Undergraduate Scholarship (2023)",
                ],
                social: { github: "https://github.com/ari", linkedin: "https://linkedin.com/in/ari" },
            },
            {
                slug: "malendra",
                name: "Malendra Sahla Rizky",
                photo: "/members/malendra.png",
                role: "Backend API & Data Engineer",
                status: "ACTIVE",
                email: "malendra@iwill-lab.com",
                phone: "+62 812 3333 0002",
                location: "Bandung, Indonesia",
                bio: "Inquisitive Informatics undergraduate proficient in Python and experienced in building web applications with Flask and FastAPI. Has industry experience in data science, API development, and applied machine learning.",
                shortDesc: "Informatics student focusing on Python, data science, and backend APIs.",
                tags: ["Python", "Data Science", "FastAPI", "Flask"],
                education: [
                    { degree: "Bachelor of Informatics", institution: "Institut Teknologi Nasional", year: "2024 - Present", gpa: "3.88/4.00" },
                    { degree: "Vocational High School in Software Engineering", institution: "SMK Negeri 2 Bandung", year: "2021 - 2024", gpa: "85.21/100.00" },
                ],
                experience: [
                    { title: "Backend API & Data Engineer", company: "I-WILL Laboratory", period: "2024 - Present", description: "Membangun infrastruktur API Flask, WebSocket dan komunikasi logik AI untuk NetraDUMP." },
                    {
                        title: "Data Science Intern",
                        company: "PT. Kazee Digital Indonesia",
                        period: "Jan 2023 – Jun 2023",
                        description: "Meningkatkan akurasi layanan face recognition, membangun API baru dengan FastAPI untuk model data science, dan meningkatkan akurasi model melalui labeling citra dan teks."
                    },
                    {
                        title: "Researcher",
                        company: "I-WILL Laboratory",
                        period: "Jun 2025 – Aug 2025",
                        description: "Mengelola software project NetraDUMP dan berkontribusi pada pipeline data dan kontrol."
                    }
                ],
                skills: [
                    { name: "Python", level: 90 },
                    { name: "Flask / FastAPI", level: 88 },
                    { name: "Pandas / SQL", level: 85 },
                    { name: "C / C++", level: 80 },
                    { name: "HTML / CSS / Express.js", level: 80 },
                ],
                projects: [
                    { name: "NetraDUMP – Raspberry Pi-powered Trash-picking Robot", description: "Robot pengambil sampah berbasis Raspberry Pi dengan lengan robotik, beberapa webcam, dan komunikasi Flask & WebSocket.", tech: ["Python", "Raspberry Pi", "Flask", "WebSocket"] },
                    { name: "Presense – Event Attendance Tracker", description: "Sistem presensi acara berbasis web dengan autentikasi dan dashboard kehadiran.", tech: ["Web", "Python", "Flask"] },
                ],
                achievements: [
                    "Finalist PIKIR 2025 – Scientific Paper Competition",
                    "Online Scholarship Competition (OSC) – Fully Funded Undergraduate Scholarship (2023)",
                ],
                social: { github: "https://github.com/malendra", linkedin: "https://linkedin.com/in/malendra" },
            },
            {
                slug: "lingga",
                name: "M. Lingga Darmawan",
                photo: "/members/lingga.jpg",
                role: "IoT & Database Administrator",
                status: "ACTIVE",
                email: "lingga@iwill-lab.com",
                phone: "+62 812 3333 0003",
                location: "Bandung, Indonesia",
                bio: "Informatics student with portfolio focused on IoT prototypes, computer vision, web development, and academic projects integrating sensors and AI-based analysis.",
                shortDesc: "Informatics student working on IoT and computer vision-based academic projects.",
                tags: ["IoT", "Digital Image Processing", "Database Programming"],
                education: [{ degree: "Bachelor of Informatics", institution: "Institut Teknologi Nasional", year: "2023 - Present", gpa: "" }],
                experience: [
                    { title: "IoT & Database Administrator", company: "I-WILL Laboratory", period: "2024 - Present", description: "Mengelola server basis data dan menopang konektivitas sensor telemetri NetraDUMP." },
                    {
                        title: "IT Support Intern",
                        company: "PT. Sarana Pactindo Bandung",
                        period: "Jan 2023 – 2023",
                        description: "Memantau performa jaringan, troubleshooting hardware/software, dan perbaikan sistem server."
                    }
                ],
                skills: [
                    { name: "Python", level: 82 },
                    { name: "Arduino / Raspberry Pi", level: 80 },
                    { name: "Network & Server Administration", level: 80 },
                ],
                projects: [],
                achievements: ["NetraDUMP Team Member"],
                social: { github: "https://github.com/lingga", linkedin: "https://linkedin.com/in/lingga" },
            },
        ],
    },
    {
        slug: "sarah",
        name: "S.A.R.A.H & Citra",
        fullName: "Search And Rescue Autonomous Hexapod",
        logo: "/logos/sarah.png",
        category: "Robotics",
        description: "Search And Rescue Autonomous Hexapod. A six-legged robot with tripod gait, self-balancing via Inverse Kinematics, LiDAR mapping, obstacle avoidance, and voice command control.",
        longDescription: "S.A.R.A.H (Search And Rescue Autonomous Hexapod) is a six-legged robot designed for search and rescue operations. It features tripod gait locomotion, self-balancing via Inverse Kinematics, LiDAR mapping, obstacle avoidance, and voice command control.",
        members: [
            {
                slug: "viktorikus",
                name: "Viktorikus Nokia",
                photo: "/members/viktorikus.png",
                role: "Team Leader & Embedded Robotics",
                status: "ACTIVE",
                email: "viktorikus@iwill-lab.com",
                phone: "+62 812 4444 0001",
                location: "Bandung, Indonesia",
                bio: "Informatics student passionate about robotics, IoT, and bridging software with physical hardware. Experienced in hexapod robots, HRI systems, and integrated IoT systems using microcontrollers and sensors, aiming for a career in firmware or hardware engineering.",
                shortDesc: "Robotics and embedded-systems focused Informatics student leading hexapod development.",
                tags: ["Robotics", "IoT", "Embedded Systems", "HRI"],
                education: [{ degree: "Bachelor of Informatics", institution: "Institut Teknologi Nasional", year: "2023 - Present", gpa: "3.38/4.00" }],
                experience: [
                    { title: "Team Leader & Embedded Robotics", company: "I-WILL Laboratory", period: "2024 - Present", description: "Memimpin dan memprogram kontrol motor sinkronis (Tripod Gait) berbasis Inverse Kinematics pada hexapod S.A.R.A.H." },
                    {
                        title: "S.A.R.A.H - Search And Rescue Adaptive Hexapod",
                        company: "Freelance IoT & Robotic Project",
                        period: "2025",
                        description: "Mengembangkan robot hexapod berbasis Raspberry Pi dengan kontrol teleoperation, Tripod Gait, dan kinematika untuk gerakan kompleks."
                    },
                    {
                        title: "Tabletop-bot Companion Robot",
                        company: "IFAC (Lecturer Project, On Progress)",
                        period: "2026",
                        description: "Mengembangkan sistem Human-Robot Interaction, integrasi IMU dan aktuator, serta NLP berbasis ChatGPT untuk interaksi alami."
                    }
                ],
                skills: [
                    { name: "C / C# / Java / Python", level: 85 },
                    { name: "Robotics & Kinematics", level: 88 },
                    { name: "IoT & Microcontrollers", level: 85 },
                    { name: "Information Retrieval & NLP", level: 80 },
                ],
                projects: [
                    { name: "S.A.R.A.H Hexapod", description: "Robot hexapod dengan Tripod Gait, omnidirectional walking, dan kontrol postur.", tech: ["Python", "Raspberry Pi", "Servo"] },
                    { name: "AI-Based Adaptive Learning System for SPLTV", description: "Sistem pembelajaran adaptif dengan Random Forest, BFS untuk alur kurikulum, dan rule-based error detection.", tech: ["Python", "Random Forest", "Rule-based System"] },
                    { name: "Astronomy Document Search", description: "Sistem information retrieval jurnal astronomi dengan TF-IDF dan Cosine Similarity serta summarization otomatis.", tech: ["Python", "NLP", "TF-IDF"] },
                ],
                achievements: ["S.A.R.A.H Team Leader", "Robotics Competition Winner"],
                social: { github: "https://github.com/viktorikus", linkedin: "https://linkedin.com/in/viktorikus" },
            },
            {
                slug: "yuddha-sarah",
                name: "Yuddha",
                photo: "/members/yuddha-sarah.png",
                role: "Backend & Systems Integrator",
                status: "ACTIVE",
                email: "yuddha.sarah@iwill-lab.com",
                phone: "+62 812 4444 0002",
                location: "Bandung, Indonesia",
                bio: "Informatics student with strong interest and experience in software development and Internet of Things (IoT). Used to designing backend web applications and microcontroller-based systems that integrate sensors and actuators.",
                shortDesc: "Backend developer and IoT enthusiast working on end-to-end systems.",
                tags: ["Backend Development", "IoT", "Embedded Systems"],
                education: [{ degree: "Bachelor of Informatics", institution: "Institut Teknologi Nasional Bandung", year: "2024 - Present", gpa: "" }],
                experience: [
                    { title: "Backend & Systems Integrator", company: "I-WILL Laboratory", period: "2024 - Present", description: "Mengembangkan arsitektur backend navigasi serta menunjang aktuator teleoperasi S.A.R.A.H." },
                    {
                        title: "Software & IoT Developer",
                        company: "Independent / Academic Projects",
                        period: "2021 - Present",
                        description: "Membangun aplikasi backend REST API serta sistem berbasis ESP32/Arduino dengan integrasi sensor dan aktuator."
                    }
                ],
                skills: [
                    { name: "PHP / JavaScript / Python", level: 82 },
                    { name: "REST API Development", level: 80 },
                    { name: "SQL & Database Design", level: 80 },
                    { name: "ESP32 / Arduino", level: 82 },
                    { name: "Sensor Integration (DHT22, LDR, dsb.)", level: 80 },
                ],
                projects: [],
                achievements: ["S.A.R.A.H Team Member"],
                social: { github: "https://github.com/yuddha-sarah", linkedin: "https://linkedin.com/in/yuddha-sarah" },
            },
            {
                slug: "alfarabi",
                name: "Alfarabi",
                photo: "/members/alfarabi.png",
                role: "Multimedia & Visual Content Designer",
                status: "ACTIVE",
                email: "alfarabi@iwill-lab.com",
                phone: "+62 812 4444 0003",
                location: "Bandung, Indonesia",
                bio: "Informatics student at ITENAS with strong interest in Internet of Things (IoT), programming, and databases. Highly curious about technology and actively building skills through projects and organizational activities.",
                shortDesc: "Informatics student focused on IoT, programming, and multimedia.",
                tags: ["IoT", "Programming", "Multimedia", "Video Production"],
                education: [
                    { degree: "Bachelor of Informatics", institution: "Institut Teknologi Nasional (ITENAS)", year: "2024 - Present", gpa: "" },
                    { degree: "High School", institution: "SMA Negeri 19 Bandung", year: "2021 - 2024", gpa: "" },
                ],
                experience: [
                    { title: "Multimedia & Visual Content Designer", company: "I-WILL Laboratory", period: "2024 - Present", description: "Memproduksi aset video dokumenter, desain visual, dan presentasi profil robot S.A.R.A.H." },
                    {
                        title: "Multimedia & Visual Content Lead",
                        company: "Various Organizations (SMAN 19 Bandung)",
                        period: "2022 - 2024",
                        description: "Mengelola dokumentasi, memproduksi konten multimedia, dan mengorganisasi event teknologi."
                    }
                ],
                skills: [
                    { name: "IoT Fundamentals", level: 75 },
                    { name: "Basic Programming", level: 75 },
                    { name: "Database Application", level: 78 },
                    { name: "Multimedia Design", level: 85 },
                ],
                projects: [],
                achievements: [
                    "Juara 3 Lomba Film Pendek FLS2N Tingkat Kota Bandung (2023)",
                    "Peserta Lomba Film Pendek FLS2N Tingkat Kota Bandung (2022)",
                    "S.A.R.A.H Team Member",
                ],
                social: { github: "https://github.com/alfarabi", linkedin: "https://linkedin.com/in/alfarabi" },
            },
        ],
    },
    {
        slug: "donimal",
        name: "Donimal",
        fullName: "Interactive Educational Toy",
        logo: "/logos/donimal.png",
        category: "Educational IoT",
        description: "Interactive educational toy for early childhood learning. Responds to RFID cards, buttons, and LED signals. Integrates audio storytelling and visual feedback to develop cognitive and emotional skills.",
        longDescription: "Donimal is an interactive educational toy designed for early childhood learning. It responds to RFID cards, buttons, and LED signals, integrating audio storytelling and visual feedback to help develop cognitive and emotional skills in young children.",
        members: [
            {
                slug: "ikrima",
                name: "Ikrima Nurul",
                photo: "/members/ikrima.png",
                role: "Team Leader & Mobile Developer",
                status: "ACTIVE",
                email: "ikrima@iwill-lab.com",
                phone: "+62 812 5555 0001",
                location: "Bandung, Indonesia",
                bio: "Informatics student with strong interest in software development, mobile apps, IoT, and AI. Experienced in building interactive learning applications with Flutter, developing computer vision models using CNN and YOLOv8, and designing end-to-end IoT systems with microcontrollers and sensors. Comfortable working from system design to implementation and motivated to grow in Software Engineering and Artificial Intelligence.",
                shortDesc: "Informatics student focused on mobile, IoT, and AI-based educational systems.",
                tags: ["Mobile Development", "IoT", "Computer Vision", "AI", "Software Engineering"],
                education: [{ degree: "Bachelor of Informatics", institution: "Bandung National Institute of Technology", year: "2022 - Present", gpa: "3.80/4.00" }],
                experience: [
                    { title: "Team Leader & Mobile Developer", company: "I-WILL Laboratory", period: "2024 - Present", description: "Memimpin tim Donimal dan mengembangkan aplikasi berbasis Flutter untuk pengendalian edukasi anak." },
                    {
                        title: "Donimal – Aplikasi Pembelajaran Interaktif",
                        company: "I-WILL Laboratory",
                        period: "2025 - Present",
                        description: "Mengembangkan aplikasi mobile dan website edukasi untuk anak usia dini menggunakan Flutter; merancang antarmuka interaktif dan modul pembelajaran warna, bentuk, dan angka."
                    }
                ],
                skills: [
                    { name: "Flutter / Mobile Development", level: 85 },
                    { name: "Python", level: 82 },
                    { name: "Computer Vision (CNN, YOLOv8)", level: 82 },
                    { name: "IoT (Arduino / Raspberry Pi)", level: 80 },
                    { name: "Web Development (HTML / Laravel / Spring Boot)", level: 78 }
                ],
                projects: [
                    { name: "Donimal – Aplikasi Pembelajaran Interaktif", description: "Aplikasi dan website pembelajaran interaktif untuk anak usia dini dengan modul warna, bentuk, dan angka.", tech: ["Flutter", "Android", "Web"] },
                    { name: "Deteksi Tumor Otak Menggunakan CNN", description: "Sistem klasifikasi citra MRI menggunakan model CNN dengan tahap pra-pemrosesan dan evaluasi akurasi.", tech: ["Python", "CNN", "Computer Vision"] },
                    { name: "Klasifikasi Sampah Organik dan Anorganik Menggunakan YOLOv8", description: "Model deteksi objek real-time untuk klasifikasi sampah berbasis YOLOv8.", tech: ["YOLOv8", "Python", "OpenCV"] },
                    { name: "Sistem Monitoring Ketinggian Air Berbasis IoT", description: "Sistem monitoring ketinggian air real-time menggunakan sensor terintegrasi mikrokontroler.", tech: ["Arduino", "Sensor", "IoT"] },
                    { name: "Lengan Robotik Berbasis Arduino", description: "Perancangan dan implementasi kendali servo motor untuk lengan robotik.", tech: ["Arduino", "Servo Motor"] }
                ],
                achievements: ["Donimal Team Leader", "Educational Innovation Award"],
                social: { github: "https://github.com/ikrima", linkedin: "https://linkedin.com/in/ikrima" },
            },
            {
                slug: "sondang",
                name: "Sondang Anjelina",
                photo: "/members/sondang.png",
                role: "Embedded Systems & Hardware Engineer",
                status: "ACTIVE",
                email: "sondang@iwill-lab.com",
                phone: "+62 812 5555 0002",
                location: "Bandung, Indonesia",
                bio: "Informatics student with strong enthusiasm for learning and trying new technologies, especially programming, Internet of Things (IoT), and project-based development. Experienced working in teams on innovative projects such as interactive educational toys and technical writing, and open to part-time opportunities to keep learning and contributing.",
                shortDesc: "Informatics student active in IoT and interactive educational toy projects.",
                tags: ["IoT", "Arduino", "RFID", "Embedded Systems"],
                education: [{ degree: "Bachelor of Informatics", institution: "Bandung National Institute of Technology", year: "2022 - Present", gpa: "3.72/4.00" }],
                experience: [
                    { title: "Embedded Systems & Hardware Engineer", company: "I-WILL Laboratory", period: "2024 - Present", description: "Mengonfigurasikan RFID, modul audio, dan LED interaktif berbasis Arduino pada boneka Donimal." },
                    {
                        title: "Donimal – Boneka Edukasi Interaktif",
                        company: "I-WILL Laboratory",
                        period: "2024 - Present",
                        description: "Mengembangkan boneka edukasi interaktif berbasis Arduino Uno untuk membantu anak belajar alfabet, angka, warna, dan suara hewan menggunakan kartu RFID, LED strip, dan modul audio."
                    },
                    {
                        title: "Penulis Karya Tulis Ilmiah",
                        company: "PIKIR 2025",
                        period: "2025",
                        description: "Menyusun karya tulis ilmiah tentang boneka edukasi hewan berbasis Raspberry dan meraih Juara Harapan 1 tingkat nasional."
                    }
                ],
                skills: [
                    { name: "Arduino", level: 85 },
                    { name: "RFID", level: 82 },
                    { name: "Embedded IoT Prototyping", level: 80 },
                    { name: "Team Collaboration", level: 78 }
                ],
                projects: [
                    { name: "Donimal – Boneka Edukasi Interaktif", description: "Boneka edukasi interaktif berbasis Arduino Uno dan RFID dengan dukungan LED strip dan audio.", tech: ["Arduino", "RFID", "LED Strip", "Audio Modules"] },
                    { name: "Boneka Edukasi Hewan Berbasis Raspberry", description: "Konsep boneka edukasi interaktif yang dikembangkan sebagai karya tulis ilmiah.", tech: ["Raspberry Pi", "IoT", "Education"] }
                ],
                achievements: ["Donimal Team Member"],
                social: { github: "https://github.com/sondang", linkedin: "https://linkedin.com/in/sondang" },
            },
        ],
    },
    {
        slug: "skysense",
        name: "SkySense",
        fullName: "Intelligent Weather Monitoring",
        logo: "/logos/skysense.png",
        category: "IoT",
        description: "Intelligent weather monitoring system providing real-time data on temperature, humidity, rainfall, wind speed, and light intensity. Future plans include AI predictions and disaster warning systems.",
        longDescription: "SkySense is an intelligent weather monitoring system providing real-time data on temperature, humidity, rainfall, wind speed, and light intensity. Future development plans include AI-powered predictions and disaster warning systems.",
        members: [
            {
                slug: "rida",
                name: "Rida",
                photo: "/members/rida.png",
                role: "Team Leader & Data Analyst",
                status: "ACTIVE",
                email: "rida@iwill-lab.com",
                phone: "+62 812 6666 0001",
                location: "Bandung, Indonesia",
                bio: "Informatics student interested in digital image processing and programming, with experience in basic image processing techniques such as grayscale, histogram, filtering, edge detection, and transformations.",
                shortDesc: "Informatics student focusing on digital image processing and IoT projects.",
                tags: ["Digital Image Processing", "Python", "IoT"],
                education: [
                    { degree: "Bachelor of Informatics", institution: "Institut Teknologi Nasional", year: "2023 - Present", gpa: "" },
                    { degree: "High School (Science)", institution: "SMA Negeri 1 Soreang", year: "2020 - 2023", gpa: "" },
                ],
                experience: [
                    { title: "Team Leader & Data Analyst", company: "I-WILL Laboratory", period: "2024 - Present", description: "Menganalisis hasil pembacaan cuaca, pengolahan citra prediktif, dan pemodelan pada SkySense." },],
                skills: [
                    { name: "Python", level: 82 },
                    { name: "JavaScript", level: 78 },
                    { name: "HTML", level: 78 },
                    { name: "C Language", level: 75 },
                ],
                projects: [
                    { name: "Pendeteksi Maling", description: "Proyek keamanan berbasis sensor untuk mendeteksi maling.", tech: ["IoT", "Sensors"] },
                    { name: "River Cleaner", description: "Proyek pembersih sungai berbasis IoT.", tech: ["IoT", "Sensors"] },
                    { name: "Aplikasi Rental Mobil", description: "Aplikasi rental mobil berbasis pemrograman.", tech: ["Programming"] },
                    { name: "Website Pendidikan", description: "Website edukasi untuk pembelajaran.", tech: ["Web", "HTML", "CSS"] },
                    { name: "Cookingkos Website", description: "Website resep masakan.", tech: ["Web"] },
                    { name: "Keamanan Poliklinik", description: "Proyek keamanan poliklinik menggunakan pengolahan citra.", tech: ["Digital Image Processing"] },
                    { name: "Klasifikasi Karat pada Drum", description: "Klasifikasi karat pada drum dengan teknik pengolahan citra.", tech: ["Digital Image Processing"] },
                    { name: "Skysense", description: "Proyek monitoring cuaca berbasis IoT.", tech: ["IoT", "Sensors"] },
                ],
                achievements: ["SkySense Team Leader", "IoT Innovation Award"],
                social: { github: "https://github.com/rida", linkedin: "https://linkedin.com/in/rida" },
            },
            {
                slug: "angeline",
                name: "Angeline",
                photo: "/members/angel.jpg",
                role: "IoT Hardware Interfacer",
                status: "ACTIVE",
                email: "angeline@iwill-lab.com",
                phone: "+62 812 6666 0002",
                location: "Bandung, Indonesia",
                bio: "Informatics student at ITENAS with strong interest in Internet of Things (IoT) and embedded systems. Experienced in building microcontroller-based projects integrating sensors, actuators, and databases.",
                shortDesc: "Informatics student building IoT systems and database-driven applications.",
                tags: ["IoT", "Arduino", "Database", "Digital Image Processing"],
                education: [{ degree: "Bachelor of Informatics", institution: "Institut Teknologi Nasional Bandung", year: "2023 - Present", gpa: "" }],
                experience: [
                    { title: "IoT Hardware Interfacer", company: "I-WILL Laboratory", period: "2024 - Present", description: "Mengintegrasikan berbagai node sensor kelembapan dan sensor lingkungan mikrokontroler di SkySense." },],
                skills: [
                    { name: "Python / C / PHP / Java (basic)", level: 78 },
                    { name: "Arduino IDE / VSCode / XAMPP / HeidiSQL / Proteus / Delphi-7", level: 80 },
                    { name: "Microsoft Office", level: 82 },
                ],
                projects: [
                    { name: "Sistem Jemuran Pakaian Otomatis Terintegrasi Blynk", description: "Jemuran otomatis berbasis IoT dengan notifikasi hujan dan kontrol jemuran melalui aplikasi.", tech: ["Arduino", "Sensors", "Blynk"] },
                    { name: "Aplikasi Peminjaman Buku", description: "Aplikasi desktop untuk manajemen peminjaman buku menggunakan Delphi-7.", tech: ["Delphi-7", "Database"] },
                    { name: "Klasifikasi Sampah Plastik, Kertas, dan Organik", description: "Implementasi ekstraksi fitur visual dan klasifikasi sampah berdasarkan citra.", tech: ["Digital Image Processing"] },
                    { name: "SkySense IoT Weather Monitoring", description: "Sistem monitoring dan prediksi cuaca lokal berbasis IoT untuk mendukung aktivitas pertanian.", tech: ["IoT", "Sensors"] },
                    { name: "Real-Time Violence Detection Using MobileNetV2 and TSM", description: "Deteksi kekerasan real-time pada video pengawasan dengan notifikasi Telegram.", tech: ["MobileNetV2", "TSM", "Python"] },
                    { name: "Pembelajaran Interaktif Tata Surya", description: "Aplikasi multimedia interaktif untuk pembelajaran tata surya.", tech: ["Multimedia", "Animation"] },
                ],
                achievements: ["SkySense Team Member"],
                social: { github: "https://github.com/angeline", linkedin: "https://linkedin.com/in/angeline" },
            },
            {
                slug: "shafira-aprillia",
                name: "Shafira Aprillia",
                photo: "/members/shafira_aprilia.jpg",
                role: "Web & AI Dashboard Developer",
                status: "ACTIVE",
                email: "shafira.aprillia@iwill-lab.com",
                phone: "+62 812 6666 0003",
                location: "Bandung, Indonesia",
                bio: "Fifth-semester Informatics student with strong interest in web development, AI-based systems, and digital technology. Experienced building websites, IoT systems, digital image processing projects, and mobile applications.",
                shortDesc: "Informatics student working on web, IoT, AI, and mobile projects.",
                tags: ["Web Development", "AI", "IoT", "Mobile"],
                education: [{ degree: "Bachelor of Computer Science (Informatics)", institution: "Institut Teknologi Nasional Bandung", year: "2023 - Present", gpa: "3.65/4.00" }],
                experience: [
                    { title: "Web & AI Dashboard Developer", company: "I-WILL Laboratory", period: "2024 - Present", description: "Merancang website dashboard analitik SkySense dan mengimplementasikan kecerdasan sistem prediksi." },
                    {
                        title: "Relawan Peneliti",
                        company: "Laboratorium I-WILL",
                        period: "2024 - Present",
                        description: "Mendukung kegiatan perancangan, penelitian, dan analisis data untuk sistem IoT dan AI cerdas."
                    }
                ],
                skills: [
                    { name: "HTML / CSS / JavaScript / PHP / Python", level: 82 },
                    { name: "React / Bootstrap / Tailwind CSS", level: 82 },
                    { name: "Laravel / JSON Web / Node.js", level: 80 },
                    { name: "MySQL", level: 80 },
                    { name: "Canva / Figma", level: 80 },
                ],
                projects: [],
                achievements: ["SkySense Team Member"],
                social: { github: "https://github.com/shafira-aprillia", linkedin: "https://linkedin.com/in/shafira-aprillia" },
            },
        ],
    },
    {
        slug: "carrymate",
        name: "CarryMate",
        fullName: "Following Robot Assistant",
        logo: "/logos/carrymate.png",
        category: "IoT & AI",
        description: "A trolley robot that follows its owner using camera detection integrated with Raspberry Pi. Perfect for supermarkets or suitcases, carrying items without manual pushing or lifting.",
        longDescription: "CarryMate is a trolley robot that follows its owner using camera detection integrated with Raspberry Pi. It's designed to be perfect for use in supermarkets or as an automated suitcase, carrying items without the need for manual pushing or lifting.",
        members: [
            {
                slug: "rifqi",
                name: "M. Rifqi Yusufi",
                photo: "/members/rifqi.png",
                role: "Team Leader & Lead CV Engineer",
                status: "ACTIVE",
                email: "rifqi@iwill-lab.com",
                phone: "+62 812 7777 0001",
                location: "Bandung, Indonesia",
                bio: "Sixth-semester Informatics student with deep interest in artificial intelligence, computer vision, and robotics. Experienced in building real-time tracking systems, deep learning pipelines, and perception systems integrated with hardware using Python, C++, TensorFlow, and OpenCV.",
                shortDesc: "AI and computer-vision focused student leading CarryMate development.",
                tags: ["Computer Vision", "Deep Learning", "Robotics", "Python"],
                education: [{ degree: "Bachelor of Informatics", institution: "Institut Teknologi Nasional, Bandung", year: "2023 - Present", gpa: "3.90/4.00" }],
                experience: [
                    { title: "Team Leader & Lead CV Engineer", company: "I-WILL Laboratory", period: "2024 - Present", description: "Memimpin deteksi penglihatan komputer (DeepSORT/YOLOv8) untuk sistem troli otomatis CarryMate." },
                    {
                        title: "Lead Developer – CarryMate",
                        company: "I-WILL Laboratory",
                        period: "Sep 2025 – Jan 2026",
                        description: "Merancang arsitektur navigasi AI CarryMate dan mengoordinasikan pengembangan modul persepsi, kontrol motor, dan AI."
                    },
                    {
                        title: "Machine Learning Developer – Sistem Pendeteksi Kematangan Pisang",
                        company: "Academic Project",
                        period: "Dec 2024 – Jan 2025",
                        description: "Mengembangkan sistem deteksi tingkat kematangan pisang berbasis fitur warna RGB/HSV dan KNN dengan akurasi tinggi."
                    },
                    {
                        title: "Machine Learning Engineer – Sistem Pendeteksi Bahasa Isyarat",
                        company: "Academic Project",
                        period: "Jul 2025 – Aug 2025",
                        description: "Membangun model LSTM untuk klasifikasi 59 variasi bahasa isyarat secara real-time dengan pipeline berbasis MediaPipe."
                    },
                    {
                        title: "Asisten Praktikum Pemrograman Basis Data",
                        company: "ITENAS",
                        period: "Oct 2025 – Jan 2026",
                        description: "Mendampingi praktikum pemrograman basis data dan membantu mahasiswa memahami konsep database."
                    }
                ],
                skills: [
                    { name: "Python", level: 90 },
                    { name: "TensorFlow / Keras", level: 88 },
                    { name: "OpenCV / MediaPipe", level: 85 },
                    { name: "C++ / JavaScript", level: 80 },
                    { name: "ESP32 / Raspberry Pi", level: 82 },
                ],
                projects: [
                    { name: "CarryMate – Sistem Troli Pintar", description: "Sistem human-following real-time menggunakan YOLOv8n, DeepSORT, dan estimasi jarak/sudut geometris.", tech: ["Python", "YOLOv8", "DeepSORT", "OpenCV"] },
                    { name: "Sistem Pendeteksi Kematangan Pisang", description: "Deteksi tingkat kematangan pisang dengan KNN dan fitur warna RGB/HSV.", tech: ["Python", "KNN", "Image Processing"] },
                    { name: "Sistem Pendeteksi Bahasa Isyarat", description: "Klasifikasi bahasa isyarat real-time berbasis LSTM dan keypoint MediaPipe.", tech: ["Python", "LSTM", "MediaPipe"] },
                ],
                achievements: ["CarryMate Team Leader"],
                social: { github: "https://github.com/rifqi", linkedin: "https://linkedin.com/in/rifqi" },
            },
            {
                slug: "luthfiandi",
                name: "Luthfiandi Rizki Kurnia",
                photo: "/members/luthfi.png",
                role: "Computer Vision Engineer",
                status: "ACTIVE",
                email: "luthfiandi@iwill-lab.com",
                phone: "+62 812 7777 0002",
                location: "Bandung, Indonesia",
                bio: "Developing computer vision systems for person detection and tracking.",
                shortDesc: "Building person detection and tracking systems.",
                tags: ["Computer Vision", "Tracking", "Python"],
                education: [{ degree: "Bachelor of Informatics", institution: "Bandung National Institute of Technology", year: "2022 - Present", gpa: "3.76/4.00" }],
                experience: [
                    { title: "Computer Vision Engineer", company: "I-WILL Laboratory", period: "2024 - Present", description: "Menjalankan pemrosesan citra pelacakan objek geometris spasial untuk CarryMate." },{ title: "CarryMate Member", company: "I-WILL Laboratory", period: "2024 - Present", description: "Computer vision development." }],
                skills: [{ name: "Python", level: 85 }, { name: "Object Detection", level: 82 }, { name: "OpenCV", level: 85 }, { name: "Tracking", level: 80 }],
                projects: [{ name: "Person Tracking", description: "Person detection and tracking system", tech: ["Python", "YOLO", "DeepSORT"] }],
                achievements: ["CarryMate Team Member"],
                social: { github: "https://github.com/luthfiandi", linkedin: "https://linkedin.com/in/luthfiandi" },
            },
            {
                slug: "rizky",
                name: "Muhammad Rizky",
                photo: "/members/rizky.jpg",
                role: "Software & Web Developer",
                status: "ACTIVE",
                email: "rizky@iwill-lab.com",
                phone: "+62 812 7777 0003",
                location: "Bandung, Indonesia",
                bio: "Informatics student with strong passion for coding, innovation, and software engineering. Experienced in app development, IoT systems, and web-based solutions using PHP/Laravel and JavaScript stacks.",
                shortDesc: "Software engineer in training focusing on web apps and IoT systems.",
                tags: ["Web Development", "Laravel", "IoT", "Backend"],
                education: [
                    { degree: "Bachelor of Computer Science (Software Engineering)", institution: "Institut Teknologi Nasional Bandung", year: "2023 - Present", gpa: "3.76/4.00" },
                    { degree: "High School", institution: "SMK Bakti Nusantara 666", year: "2020 - 2023", gpa: "" },
                ],
                experience: [
                    { title: "Software & Web Developer", company: "I-WILL Laboratory", period: "2024 - Present", description: "Mengembangkan aplikasi website antarmuka pengguna berbasis PHP/Laravel untuk CarryMate." },
                    {
                        title: "Software Developer – CarryMate",
                        company: "I-WILL Laboratory",
                        period: "Sep 2025 – Present",
                        description: "Mengembangkan komponen software untuk sistem troli pintar dan integrasi sistem."
                    },
                    {
                        title: "Full Stack Developer – Aplikasi Pengaduan Masyarakat",
                        company: "SMK Bakti Nusantara 666",
                        period: "Jan 2023 – Feb 2023",
                        description: "Membangun aplikasi pengaduan masyarakat berbasis Laravel dengan autentikasi dan dashboard pelaporan."
                    },
                    {
                        title: "Full Stack Developer – Computer Assisted Test (CAT)",
                        company: "PRIMKOPPOL SATBRIMOB POLDA JABAR",
                        period: "Aug 2023 – Dec 2023",
                        description: "Mengembangkan sistem ujian berbasis web dengan bank soal, timer, scoring otomatis, dan manajemen pengguna."
                    }
                ],
                skills: [
                    { name: "PHP / Laravel / CodeIgniter", level: 85 },
                    { name: "HTML / CSS / JavaScript / Bootstrap", level: 85 },
                    { name: "MySQL", level: 82 },
                    { name: "Python / C++ / Pascal", level: 75 },
                ],
                projects: [
                    { name: "CarryMate – Smart Trolley System", description: "Kontributor software pada sistem troli pintar berbasis visi komputer.", tech: ["Python", "Web", "IoT"] },
                    { name: "Aplikasi Pengaduan Masyarakat", description: "Sistem pelaporan publik dengan manajemen pengaduan dan autentikasi.", tech: ["Laravel", "MySQL", "Bootstrap"] },
                    { name: "Computer Assisted Test Web Application", description: "Aplikasi ujian berbantuan komputer dengan manajemen soal dan peserta.", tech: ["Laravel", "MySQL"] },
                ],
                achievements: ["CarryMate Team Member"],
                social: { github: "https://github.com/rizky", linkedin: "https://linkedin.com/in/rizky" },
            },
            {
                slug: "nizar",
                name: "Nizar Abdul Malik",
                photo: "/members/nizar.jpg",
                role: "Mobile App & Control Developer",
                status: "ACTIVE",
                email: "nizar@iwill-lab.com",
                phone: "+62 812 7777 0004",
                location: "Bandung, Indonesia",
                bio: "Developing control software and mobile app for CarryMate.",
                shortDesc: "Building control software and mobile application.",
                tags: ["Python", "Mobile App", "IoT"],
                education: [{ degree: "Bachelor of Informatics", institution: "Bandung National Institute of Technology", year: "2022 - Present", gpa: "3.74/4.00" }],
                experience: [
                    { title: "Mobile App & Control Developer", company: "I-WILL Laboratory", period: "2024 - Present", description: "Membangun aplikasi kendali mobile jarak dekat via Bluetooth/WiFi untuk operasional CarryMate." },{ title: "CarryMate Member", company: "I-WILL Laboratory", period: "2024 - Present", description: "Software and app development." }],
                skills: [{ name: "Python", level: 85 }, { name: "Flutter", level: 80 }, { name: "Bluetooth/WiFi", level: 78 }, { name: "REST APIs", level: 75 }],
                projects: [{ name: "CarryMate App", description: "Mobile app for robot control", tech: ["Flutter", "Bluetooth", "Firebase"] }],
                achievements: ["CarryMate Team Member"],
                social: { github: "https://github.com/nizar", linkedin: "https://linkedin.com/in/nizar" },
            },
        ],
    },
    {
        slug: "vending-machine",
        name: "Vending Machine",
        fullName: "Smart Retail System",
        logo: "/logos/vending-machine.png",
        category: "IoT & AI",
        description: "Student entrepreneurship training system with automation, QRIS/Virtual Account payments, and integrated web dashboard. Features stock monitoring and product sales analytics for MSMEs.",
        longDescription: "The Vending Machine project is a student entrepreneurship training system featuring automation, QRIS/Virtual Account payments, and an integrated web dashboard. It includes stock monitoring and product sales analytics designed specifically for MSMEs.",
        members: [
            {
                slug: "erlangga",
                name: "Erlangga Dwi",
                photo: "/members/erlangga.png",
                role: "Team Leader & IoT Business Integrator",
                status: "ACTIVE",
                email: "erlangga@iwill-lab.com",
                phone: "+62 812 8888 0001",
                location: "Bandung, Indonesia",
                bio: "Leading the Vending Machine team in creating smart retail solutions for MSMEs.",
                shortDesc: "Leading smart vending machine development.",
                tags: ["IoT", "Business", "Automation"],
                education: [{ degree: "Bachelor of Informatics", institution: "Bandung National Institute of Technology", year: "2022 - Present", gpa: "3.78/4.00" }],
                experience: [
                    { title: "Team Leader & IoT Business Integrator", company: "I-WILL Laboratory", period: "2024 - Present", description: "Memimpin perancangan purwarupa otomasi mesin penjual otomatis cerdas dengan integrasi kapabilitas bisnis." },{ title: "Vending Machine Team Leader", company: "I-WILL Laboratory", period: "2024 - Present", description: "Leading smart vending machine development." }],
                skills: [{ name: "Project Management", level: 85 }, { name: "Python", level: 82 }, { name: "IoT", level: 80 }, { name: "Business", level: 78 }],
                projects: [{ name: "Smart Vending v1.0", description: "Vending machine with payment integration", tech: ["Arduino", "Servo", "LCD"] }],
                achievements: ["Vending Machine Team Leader", "Student Entrepreneurship Award"],
                social: { github: "https://github.com/erlangga", linkedin: "https://linkedin.com/in/erlangga" },
            },
            {
                slug: "zulfan",
                name: "Muhammad Zulfan",
                photo: "/members/zulfan.png",
                role: "Payment Systems Engineer",
                status: "ACTIVE",
                email: "zulfan@iwill-lab.com",
                phone: "+62 812 8888 0002",
                location: "Bandung, Indonesia",
                bio: "Working on payment integration for the vending machine.",
                shortDesc: "Integrating payment systems for vending machine.",
                tags: ["Payment", "API", "FinTech"],
                education: [{ degree: "Bachelor of Informatics", institution: "Bandung National Institute of Technology", year: "2022 - Present", gpa: "3.72/4.00" }],
                experience: [
                    { title: "Payment Systems Engineer", company: "I-WILL Laboratory", period: "2024 - Present", description: "Mengimplementasikan gateway pembayaran QRIS, Virtual Account, dan Node.js API pada Vending Machine." },
                    { title: "Vending Machine Member", company: "I-WILL Laboratory", period: "2024 - Present", description: "Payment integration development." },
                    { title: "Software Development Intern", company: "PT Dwi Purwa Teknologi", period: "Jul 2025 - Sep 2025", description: "R&D of digital solutions, feature implementation, and performance testing." },
                    { title: "Database & OOP Lab Assistant", company: "ITENAS", period: "Mar 2024 - Jan 2025", description: "Instructor for database concepts, Delphi-7, and Java OOP principles." }
                ],
                skills: [{ name: "Payment APIs", level: 85 }, { name: "Node.js", level: 82 }, { name: "QRIS", level: 80 }, { name: "Security", level: 78 }],
                projects: [{ name: "QRIS Payment", description: "QRIS payment integration", tech: ["Node.js", "QRIS API", "QR Code"] }],
                achievements: ["Vending Machine Team Member"],
                social: { github: "https://github.com/zulfan", linkedin: "https://linkedin.com/in/zulfan" },
            },
            {
                slug: "dedrick",
                name: "Mohamad Dedrick Finnegan",
                photo: "/members/dedrick.png",
                role: "Hardware & Dispensing Engineer",
                status: "ACTIVE",
                email: "dedrick@iwill-lab.com",
                phone: "+62 812 8888 0003",
                location: "Bandung, Indonesia",
                bio: "Building the hardware and dispensing mechanisms for the vending machine.",
                shortDesc: "Designing hardware and dispensing systems.",
                tags: ["Hardware", "Mechanics", "Arduino"],
                education: [{ degree: "Bachelor of Informatics", institution: "Bandung National Institute of Technology", year: "2022 - Present", gpa: "3.70/4.00" }],
                experience: [
                    { title: "Hardware & Dispensing Engineer", company: "I-WILL Laboratory", period: "2024 - Present", description: "Menangani mekanika dispenser, motor servo/stepper, dan perancangan sirkuit Arduino pada Vending Machine." },{ title: "Vending Machine Member", company: "I-WILL Laboratory", period: "2024 - Present", description: "Hardware and mechanical development." }],
                skills: [{ name: "Arduino", level: 88 }, { name: "Servo/Motor", level: 85 }, { name: "Sensors", level: 82 }, { name: "Mechanical", level: 80 }],
                projects: [{ name: "Dispensing System", description: "Product dispensing mechanism", tech: ["Servo", "DC Motor", "Arduino"] }],
                achievements: ["Vending Machine Team Member"],
                social: { github: "https://github.com/dedrick", linkedin: "https://linkedin.com/in/dedrick" },
            },
            {
                slug: "faiz",
                name: "Faiz Fazdlih Dwi",
                photo: "/members/faiz.png",
                role: "Web Dashboard Developer",
                status: "ACTIVE",
                email: "faiz@iwill-lab.com",
                phone: "+62 812 8888 0004",
                location: "Bandung, Indonesia",
                bio: "Developing the web dashboard for vending machine monitoring and analytics.",
                shortDesc: "Building web dashboard and analytics.",
                tags: ["React", "Node.js", "Dashboard"],
                education: [{ degree: "Bachelor of Informatics", institution: "Bandung National Institute of Technology", year: "2022 - Present", gpa: "3.76/4.00" }],
                experience: [
                    { title: "Web Dashboard Developer", company: "I-WILL Laboratory", period: "2024 - Present", description: "Membangun dasbor antarmuka analitik web menggunakan React dan integrasi basis data pada Vending Machine." },{ title: "Vending Machine Member", company: "I-WILL Laboratory", period: "2024 - Present", description: "Dashboard and analytics development." }],
                skills: [{ name: "React", level: 85 }, { name: "Node.js", level: 82 }, { name: "MongoDB", level: 80 }, { name: "Tailwind", level: 85 }],
                projects: [{ name: "Admin Dashboard", description: "Vending machine management dashboard", tech: ["React", "Node.js", "MongoDB"] }],
                achievements: ["Vending Machine Team Member"],
                social: { github: "https://github.com/faiz", linkedin: "https://linkedin.com/in/faiz" },
            },
            {
                slug: "riza",
                name: "Riza Maulana",
                photo: "/members/riza.png",
                role: "IoT Cloud & MQTT Integrator",
                status: "ACTIVE",
                email: "riza@iwill-lab.com",
                phone: "+62 812 8888 0005",
                location: "Bandung, Indonesia",
                bio: "Working on IoT connectivity and cloud integration for the vending machine.",
                shortDesc: "Connecting hardware to cloud systems.",
                tags: ["IoT", "MQTT", "Cloud"],
                education: [{ degree: "Bachelor of Informatics", institution: "Bandung National Institute of Technology", year: "2022 - Present", gpa: "3.72/4.00" }],
                experience: [
                    { title: "IoT Cloud & MQTT Integrator", company: "I-WILL Laboratory", period: "2024 - Present", description: "Membangun gateway telemetri dan integrasi protokol MQTT antara perangkat keras dan cloud layanan Vending Machine." },{ title: "Vending Machine Member", company: "I-WILL Laboratory", period: "2024 - Present", description: "IoT and cloud integration." }],
                skills: [{ name: "MQTT", level: 85 }, { name: "ESP32", level: 82 }, { name: "AWS IoT", level: 78 }, { name: "Python", level: 80 }],
                projects: [{ name: "IoT Gateway", description: "Cloud connectivity for vending machine", tech: ["ESP32", "MQTT", "WiFi"] }],
                achievements: ["Vending Machine Team Member"],
                social: { github: "https://github.com/riza", linkedin: "https://linkedin.com/in/riza" },
            },
        ],
    },
];

// Helper functions
export function getTeamBySlug(slug: string): Team | undefined {
    return teams.find(team => team.slug === slug);
}

export function getMemberBySlug(teamSlug: string, memberSlug: string): MemberCV | undefined {
    const team = getTeamBySlug(teamSlug);
    return team?.members.find(member => member.slug === memberSlug);
}

export function getAllTeamSlugs(): string[] {
    return teams.map(team => team.slug);
}

export function getTeamsWithMembers(): Team[] {
    return teams.filter(team => team.members.length > 0);
}
