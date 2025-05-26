import actimageLogo from '../assets/actimage_logo.jpg';

export interface EducationItem {
    degree: string;
    period: string;
    institution: string;
    honors?: string;
    color: "orange" | "amber" | "yellow";
}

export interface CertificationItem {
    title: string;
    year: string;
}

export interface HighlightsColumnItem {
    name: string;
    color: string;
}

export interface Company {
    name: string;
    color: string;
    logo: ImageMetadata;
}

export interface ExperienceItem {
    title: string;
    company: Company[];
    period: string;
    description: string;
    highlights: HighlightsColumnItem[];
    color: "orange" | "amber" | "yellow";
}

export interface Profile {
    name: string;
    role: string;
    location: string;
    available: boolean;
}

export const profile: Profile = {
    name: "Boris Picard",
    role: "Développeur Full Stack",
    location: "Strasbourg, France",
    available: false,
};

export const education: EducationItem[] = [
    {
        degree: "Concepteur Développeur d'Applications (Niveau 6)",
        period: "Sept. 2024 – En cours",
        institution: "CESI École d'Ingénieurs",
        honors: "En alternance",
        color: 'orange'
    },
    {
        degree: "Développeur Web et Web Mobile (Niveau 5)",
        period: "Sept. 2023 - Mars 2024",
        institution: "LA MANU - Amiens",
        honors: "Diplôme obtenu",
        color: 'orange'
    },
];

export const certifications: CertificationItem[] = [
    { title: "Développeur Web et Web Mobile (DWWM) Niveau 5", year: "2024" },
];

export const experiences: ExperienceItem[] = [
    {
        title: "Développeur Full Stack",
        company: [{
            name: "Actimage (Alternance)",
            color: "#1A10A3",
            logo: actimageLogo,
        }],
        period: "Sept. 2024 – Présent",
        description:
            "Développement d'applications web complètes en React et Symfony. Conception de cahiers des charges, modélisation UML/MERISE, mise en place de l'architecture avec API Platform et Docker. Déploiement avec CI/CD GitHub Actions sur Vercel, Koyeb et Neon PostgreSQL.",
        highlights: [
            { name: "React & Symfony", color: "#61DBFB" },
            { name: "API Platform", color: "#2F303E" },
            { name: "Docker", color: "#2496ED" },
            { name: "CI/CD", color: "#8B5CF6" },
            { name: "UML/MERISE", color: "#F97316" },
            { name: "Déploiement Cloud", color: "#0EA5E9" }
        ],
        color: "orange",
    },
];