export interface Chronicle {
    id: string;
    title: string;
    excerpt: string;
    content?: string; // Full content for future expansion
    image: string;
    category: "COMPETITION" | "EXHIBITION" | "PKM" | "GRANT" | "WORKSHOP";
    status: "ACTIVE" | "UPCOMING" | "COMPLETED";
    date: string; // Publish date or Event date
    author: string; // Team name or Member name
    tags: string[];
    link: string; // External link or internal slug
}

export const chronicles: Chronicle[] = [
    // ACTIVE
    {
        id: "c-001",
        title: "PKM-KC 2024: Securing the Funding Stage",
        excerpt: "Our teams are working hard to finalize their prototypes and logbooks for the PKM-KC funding phase. Here is the latest progress report.",
        image: "/images/pkm-progress.jpg", // Placeholder
        category: "PKM",
        status: "ACTIVE",
        date: "2024-06-15",
        author: "Laboratory Admin",
        tags: ["PKM", "Research", "Innovation"],
        link: "#"
    },
    {
        id: "c-002",
        title: "Gemastik XVII: Smart City Innovation",
        excerpt: "NetraDUMP team proposes a revolutionary IoT waste management system for the Smart City division at Gemastik XVII.",
        image: "/images/gemastik.jpg", // Placeholder
        category: "COMPETITION",
        status: "ACTIVE",
        date: "2024-06-10",
        author: "NetraDUMP Team",
        tags: ["IoT", "Smart City", "Competition"],
        link: "#"
    },
    {
        id: "c-003",
        title: "KRTI 2024: VTOL Flight Tests Successful",
        excerpt: "The Drone Astra Versa team has successfully completed the initial stability tests for their new VTOL unit.",
        image: "/images/drone-test.jpg", // Placeholder
        category: "COMPETITION",
        status: "ACTIVE",
        date: "2024-06-05",
        author: "Drone Team",
        tags: ["UAV", "Robotics", "KRTI"],
        link: "#"
    },

    // UPCOMING
    {
        id: "c-004",
        title: "Upcoming: IndoDefence 2024 Exhibition",
        excerpt: "I-WILL Laboratory has been invited to showcase our latest defense technologies at the prestigious IndoDefence 2024.",
        image: "/images/indodefence.jpg", // Placeholder
        category: "EXHIBITION",
        status: "UPCOMING",
        date: "2024-10-01",
        author: "External Relations",
        tags: ["Exhibition", "Defense", "Tech Showcase"],
        link: "#"
    },
    {
        id: "c-005",
        title: "Workshop: Mastering ROS2 for Robotics",
        excerpt: "A comprehensive workshop for new members to learn the fundamentals of Robot Operating System 2.",
        image: "/images/ros-workshop.jpg", // Placeholder
        category: "WORKSHOP",
        status: "UPCOMING",
        date: "2024-05-20",
        author: "R.O.V.E.R Team",
        tags: ["Workshop", "Education", "ROS2"],
        link: "#"
    },

    // COMPLETED
    {
        id: "c-006",
        title: "Recap: PKM 2023 Achievements",
        excerpt: "Reflecting on our journey in PKM 2023, where 3 of our teams managed to reach the PIMNAS stage.",
        image: "/images/pkm-2023.jpg", // Placeholder
        category: "PKM",
        status: "COMPLETED",
        date: "2023-12-01",
        author: "Laboratory Admin",
        tags: ["PKM", "History", "Achievement"],
        link: "#"
    },
    {
        id: "c-007",
        title: "Innovillage 2023: Top 100 Funded",
        excerpt: "Angklungine X team secured funding and reached the Top 100 in the Innovillage 2023 social innovation competition.",
        image: "/images/innovillage.jpg", // Placeholder
        category: "COMPETITION",
        status: "COMPLETED",
        date: "2023-11-15",
        author: "Angklungine X",
        tags: ["Social Impact", "Competition", "Music"],
        link: "#"
    }
];
