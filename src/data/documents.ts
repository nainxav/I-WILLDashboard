export interface Document {
    id: string;
    title: string;
    category: "PROPOSAL" | "REPORT" | "MANUAL" | "RESEARCH";
    teamSlug: string; // Matches slug in teams.ts
    date: string;
    size: string;
    status: "CONFIDENTIAL" | "PUBLIC" | "RESTRICTED";
    downloadUrl: string;
}

export const documents: Document[] = [
    // DRONE ASTRA VERSA
    {
        id: "d-001",
        title: "Drone Astra Versa - System Architecture Proposal",
        category: "PROPOSAL",
        teamSlug: "drone",
        date: "2023-11-15",
        size: "2.4 MB",
        status: "PUBLIC",
        downloadUrl: "#"
    },
    {
        id: "d-002",
        title: "Flight Test Report: Stability Analysis v1.0",
        category: "REPORT",
        teamSlug: "drone",
        date: "2024-01-20",
        size: "5.1 MB",
        status: "RESTRICTED",
        downloadUrl: "#"
    },
    
    // R.O.V.E.R
    {
        id: "r-001",
        title: "R.O.V.E.R - Navigation System Blueprint",
        category: "MANUAL",
        teamSlug: "rover",
        date: "2023-12-05",
        size: "3.8 MB",
        status: "CONFIDENTIAL",
        downloadUrl: "#"
    },
    {
        id: "r-002",
        title: "IndoDefence 2024 - Field Deployment Log",
        category: "REPORT",
        teamSlug: "rover",
        date: "2024-02-14",
        size: "1.2 MB",
        status: "PUBLIC",
        downloadUrl: "#"
    },

    // ANGKLUNGINE X
    {
        id: "a-001",
        title: "Angklungine X - Automated Melody Algorithm",
        category: "RESEARCH",
        teamSlug: "angklungine-x",
        date: "2024-03-10",
        size: "890 KB",
        status: "PUBLIC",
        downloadUrl: "#"
    },

    // SMART TRAIN
    {
        id: "st-001",
        title: "Smart Train - Obstacle Detection Dataset",
        category: "RESEARCH",
        teamSlug: "smart-train",
        date: "2024-01-05",
        size: "150 MB",
        status: "PUBLIC",
        downloadUrl: "#"
    },

    // NETRADUMP
    {
        id: "nd-001",
        title: "NetraDUMP - Waste Classification Model v2",
        category: "RESEARCH",
        teamSlug: "netradump",
        date: "2024-02-28",
        size: "45 MB",
        status: "RESTRICTED",
        downloadUrl: "#"
    },

    // S.A.R.A.H
    {
        id: "sh-001",
        title: "S.A.R.A.H - Hexapod Walking Gait Analysis",
        category: "REPORT",
        teamSlug: "sarah",
        date: "2024-03-01",
        size: "4.2 MB",
        status: "CONFIDENTIAL",
        downloadUrl: "#"
    },

    // GENERAL
    {
        id: "g-001",
        title: "I-WILL Laboratory - Safety Guidelines 2024",
        category: "MANUAL",
        teamSlug: "general",
        date: "2024-01-01",
        size: "1.5 MB",
        status: "PUBLIC",
        downloadUrl: "#"
    }
];
