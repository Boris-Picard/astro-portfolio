import type { ImageMetadata } from 'astro';
import actimageLogo from '../assets/actimage_logo.jpg';
import cesiLogo from '../assets/cesi_logo.png';
import lamanuLogo from '../assets/la_manu_logo.png';
import epitechLogo from '../assets/epitech.jpg';
import pp from "../assets/boris-picard.jpg"
import cv from "../assets/cv_boris_picard.pdf"

export interface Institution {
    name: string;
    logo: ImageMetadata;
    location: string;
}

export interface EducationItem {
    degree: string;
    period: string;
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
    location: string;
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
    role: "Développeur full stack",
    location: "Strasbourg, France",
    available: false,
    image: pp,
    cv: cv,
};

export const education: EducationItem[] = [
        {
        degree: "Master of Science – spécialisation IA & Big Data (Niveau 7)",
        period: "oct. 2025 – en cours",
        institution: [
            {
                name: "Epitech",
                logo: epitechLogo,
                location: "Strasbourg",
            }
        ],
        color: 'orange'
    },
    {
        degree: "Concepteur Développeur d'Applications (Niveau 6)",
        period: "Sept. 2024 – Sept. 2025",
        institution: [
            {
                name: "CESI École d'Ingénieurs",
                logo: cesiLogo,
                location: "Strasbourg",
            }
        ],
        color: 'orange'
    },
    {
        degree: "Développeur Web et Web Mobile (Niveau 5)",
        period: "Sept. 2023 – Mars 2024",
        institution: [
            {
                name: "LA MANU",
                logo: lamanuLogo,
                location: "Amiens",
            }
        ],
        color: 'orange'
    },
];

export const certifications: CertificationItem[] = [
    { title: "Concepteur Développeur d'Applications (CDA) Niveau 6", year: "2025" },
    { title: "Développeur Web et Web Mobile (DWWM) Niveau 5", year: "2024" },
];

export const experiences: ExperienceItem[] = [
    {
        title: "Développeur Full Stack",
        company: [{
            name: "Actimage (Alternance)",
            logo: actimageLogo,
            location: "Strasbourg",
        }],
        period: "Sept. 2024 – Présent",
        description:
            "Participation au développement d’applications web sur mesure dans un environnement full stack, dont des sites institutionnels destinés à des acteurs publics. Intégration front-end avec Twig, SCSS et JavaScript. Développement back-end avec Drupal, PHP et Symfony, gestion des entités, création de modules personnalisés, et respect des bonnes pratiques. Travail en équipe Agile avec utilisation de Docker pour l’environnement local et Jenkins pour l’automatisation CI/CD.",

        highlights: [
            { name: "Drupal", color: "#0678BE" },
            { name: "NuxtJS", color: "#00DC82" },
            { name: "Twig", color: "#CCBF00" },
            { name: "Symfony", color: "#6c6e73" },
            { name: "SCSS", color: "#CD6799" },
            { name: "JavaScript", color: "#F7DF1E" },
            { name: "Docker", color: "#2496ED" },
        ],
        color: "orange",
    },
];
