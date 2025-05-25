export interface EducationItem {
    degree: string;
    period: string;
    institution: string;
    honors?: string;
}

export interface CertificationItem {
    title: string;
    year: string;
}

export interface ExperienceItem {
    title: string;
    company: string;
    period: string;
    description: string;
    highlights: string[];
    color: "orange" | "amber" | "yellow";
}

export interface Profile {
    name: string;
    role: string;
    location: string;
    available: boolean;
}

export const profile: Profile = {
    name: "Alex Chen",
    role: "Full Stack Developer",
    location: "San Francisco, CA",
    available: false,
};

export const education: EducationItem[] = [
    {
        degree: "Computer Science, B.S.",
        period: "2016–2020",
        institution: "Stanford University",
        honors: "Magna Cum Laude",
    },
];

export const certifications: CertificationItem[] = [
    { title: "AWS Solutions Architect", year: "2022" },
    { title: "Google Cloud Professional", year: "2023" },
    { title: "Meta React Specialist", year: "2023" },
];

export const experiences: ExperienceItem[] = [
    {
        title: "Senior Full Stack Developer",
        company: "TechCorp Inc.",
        period: "2022 – Present",
        description:
            "Leading une équipe de 5 développeurs, architecte des applications web scalables…",
        highlights: ["Team Leadership", "Architecture Design"],
        color: "orange",
    },
    {
        title: "Full Stack Developer",
        company: "StartupXYZ",
        period: "2020 – 2022",
        description:
            "Built la plateforme cœur qui a monté à 50 000+ utilisateurs…",
        highlights: ["Full Stack Development", "Scaling"],
        color: "amber",
    },
    {
        title: "Junior Developer",
        company: "WebAgency Pro",
        period: "2018 – 2020",
        description:
            "Démarrage de ma carrière avec des sites responsives…",
        highlights: ["Frontend Development", "Client Projects"],
        color: "yellow",
    },
];
