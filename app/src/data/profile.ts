import type { ImageMetadata } from 'astro';
import actimageLogo from '../assets/actimage_logo.jpg';
import cesiLogo from '../assets/cesi_logo.png';
import lamanuLogo from '../assets/la_manu_logo.png';
import pp from "../assets/pp.jpg"
import cv from "../assets/cv_boris_picard.pdf"

export interface Institution {
    name: string;
    logo: ImageMetadata;
}

export interface EducationItem {
    degree: string;
    period: string;
    location: string;
    institution: Institution[];
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
    image: ImageMetadata;
    cv: string;
}

export const profile: Profile = {
    name: "Boris Picard",
    role: "Développeur Full Stack",
    location: "Strasbourg, France",
    available: false,
    image: pp,
    cv: cv,
};

export const education: EducationItem[] = [
    {
        degree: "Concepteur Développeur d'Applications (Niveau 6)",
        period: "Sept. 2024 – En cours",
        location: "Strasbourg",
        institution: [
            {
                name: "CESI École d'Ingénieurs",
                logo: cesiLogo,
            }
        ],
        honors: "En alternance",
        color: 'orange'
    },
    {
        degree: "Développeur Web et Web Mobile (Niveau 5)",
        period: "Sept. 2023 - Mars 2024",
        location: "Amiens",
        institution: [
            {
                name: "LA MANU - Amiens",
                logo: lamanuLogo,
            }
        ],
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
            logo: actimageLogo,
        }],
        period: "Sept. 2024 – Présent",
        description:
            "a modifier",
        highlights: [
            { name: "React & Symfony", color: "#61DBFB" },
            { name: "API Platform", color: "#0099A1" },
            { name: "Docker", color: "#2496ED" },
            { name: "CI/CD", color: "#8B5CF6" },
            { name: "UML/MERISE", color: "#F97316" },
            { name: "Déploiement Cloud", color: "#0EA5E9" }
        ],
        color: "orange",
    },
];