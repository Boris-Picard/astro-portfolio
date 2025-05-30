import test from "../assets/mountains-5173728_1280.jpg";
import cesizen from "../assets/cesizen.png";
import portfolio_view from "../assets/portfolio_view.png";
import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";
import transaction from "../assets/transaction.png";

export interface Links {
    name: string;
    link: string;
}

export interface Project {
    title: string;
    type: 'Featured' | 'Client' | 'Personal' | 'Study';
    description: string;
    techs: string[];
    techColors: Record<string, { color: string; bgColor: string; borderColor: string }>;
    image: ImageMetadata;
    gallery: ImageMetadata[];
    github: Links[];
    site: Links[];
    theme: {
        primary: string;
        light: string;
        border: string;
        hover: string;
        gradient: string;
    };
}

export const projects: Project[] = [
    {
        title: 'CESIZen',
        type: 'Study',
        description: "Application web dédiée au bien-être mental, développée dans le cadre d’un projet de fin d’études pour le CESI. Elle offre un espace personnel avec suivi des exercices, préférences utilisateur, et accès à des ressources ainsi qu’à des exercices de respiration. L’architecture repose sur une API REST modulaire avec Symfony et API Platform, un système d’authentification sécurisé, et un back-office réservé aux administrateurs. Le projet a été conçu pour être évolutif, conforme RGPD et facilement maintenable.",
        techs: ['React', 'Symfony', 'API Platform', 'PostgreSQL', 'Docker', 'CI/CD'],
        github: [
            {
                name: "Voir sur GitHub",
                link: "https://github.com/Boris-Picard/cesizen"
            }
        ],
        site: [
            {
                name: "Voir le site",
                link: "https://cesizen.vercel.app"
            }
        ],
        techColors: {
            React: {
                color: '#3DA8D2',
                bgColor: 'rgba(61, 168, 210, 0.15)',
                borderColor: 'rgba(61, 168, 210, 0.3)'
            },
            Symfony: {
                color: '#B197FC',
                bgColor: 'rgba(116, 76, 158, 0.15)',
                borderColor: 'rgba(116, 76, 158, 0.3)'
            },
            'API Platform': {
                color: '#0099A1',
                bgColor: 'rgba(0, 153, 161, 0.15)',
                borderColor: 'rgba(0, 153, 161, 0.3)'
            },
            PostgreSQL: {
                color: '#336791',
                bgColor: 'rgba(51, 103, 145, 0.15)',
                borderColor: 'rgba(51, 103, 145, 0.3)'
            },
            Docker: {
                color: '#2496ED',
                bgColor: 'rgba(36, 150, 237, 0.15)',
                borderColor: 'rgba(36, 150, 237, 0.3)'
            },
            'CI/CD': {
                color: '#8B5CF6',
                bgColor: 'rgba(139, 92, 246, 0.15)',
                borderColor: 'rgba(139, 92, 246, 0.3)'
            }
        },
        image: cesizen,
        gallery: [cesizen, test, test, test],
        theme: {
            primary: '#f97316',
            light: 'rgba(249, 115, 22, 0.1)',
            border: 'rgba(249, 115, 22, 0.2)',
            hover: 'rgba(249, 115, 22, 0.15)',
            gradient: 'linear-gradient(to right, #f97316, #ea580c)'
        }
    },
    {
        title: 'myCryptoFolio',
        type: 'Personal',
        description: "Tableau de bord de suivi d’investissements en cryptomonnaies, développé avec React, Node.js et MongoDB. Il intègre une authentification sécurisée (JWT, cookies, hashage Argon2), un suivi en temps réel des prix via l’API CoinGecko, et des calculs dynamiques de profits et pertes. L'application inclut la réinitialisation de mot de passe par email, une gestion d’état centralisée avec Zustand, et une validation robuste des données (Zod). Le projet a été testé avec Jest et déployé sur Render.",
        techs: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Zustand', 'Tailwind', 'Zod'],
        github: [
            {
                name: "Code (Front)",
                link: "https://github.com/Boris-Picard/mycryptofolio"
            },
            {
                name: "Code (Back)",
                link: "https://github.com/Boris-Picard/mycryptofolio-backend"
            }
        ],
        site: [
            {
                name: "",
                link: ""
            }
        ],
        techColors: {
            React: {
                color: '#3DA8D2',
                bgColor: 'rgba(61, 168, 210, 0.15)',
                borderColor: 'rgba(61, 168, 210, 0.3)'
            },
            'Node.js': {
                color: '#3C873A',
                bgColor: 'rgba(60, 135, 58, 0.15)',
                borderColor: 'rgba(60, 135, 58, 0.3)'
            },
            Express: {
                color: '#9CA3AF',
                bgColor: 'rgba(68, 68, 68, 0.15)',
                borderColor: 'rgba(68, 68, 68, 0.3)'
            },
            MongoDB: {
                color: '#47A248',
                bgColor: 'rgba(71, 162, 72, 0.15)',
                borderColor: 'rgba(71, 162, 72, 0.3)'
            },
            JWT: {
                color: '#E1A800',
                bgColor: 'rgba(225, 168, 0, 0.15)',
                borderColor: 'rgba(225, 168, 0, 0.3)'
            },
            Zustand: {
                color: '#F97316',
                bgColor: 'rgba(249, 115, 22, 0.15)',
                borderColor: 'rgba(249, 115, 22, 0.3)'
            },
            Tailwind: {
                color: '#38BDF8',
                bgColor: 'rgba(56, 189, 248, 0.15)',
                borderColor: 'rgba(56, 189, 248, 0.3)'
            },
            Zod: {
                color: '#A855F7',
                bgColor: 'rgba(168, 85, 247, 0.15)',
                borderColor: 'rgba(168, 85, 247, 0.3)'
            }
        },
        image: step1,
        gallery: [step1, step2, portfolio_view, transaction],
        theme: {
            primary: '#6366F1',
            light: 'rgba(99, 102, 241, 0.1)',
            border: 'rgba(99, 102, 241, 0.2)',
            hover: 'rgba(99, 102, 241, 0.15)',
            gradient: 'linear-gradient(to right, #6366F1, #4F46E5)'
        }
    },
    {
        title: 'BlazeRifle',
        type: 'Study',
        description: "Projet de fin d’études validant le titre RNCP de niveau 5 « Développeur Web & Web Mobile ». L'application propose une gestion complète des utilisateurs, articles, commentaires et favoris. La sécurité est assurée par une validation d’email via JWT, un système de hashage des mots de passe, et une conformité RGPD. L’architecture orientée objet repose sur un singleton et l’utilisation de transactions SQL pour garantir la cohérence des opérations. L’interface respecte les standards W3C, avec un SEO optimisé. Le projet a été déployé sur Hostinger.",
        techs: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'PHP', 'MySQL', 'POO'],
        github: [
            {
                name: "Voir sur GitHub",
                link: "https://github.com/Boris-Picard/blazerifle"
            }
        ],
        site: [
            {
                name: "",
                link: ""
            }
        ],
        techColors: {
            HTML: {
                color: '#E34F26',
                bgColor: 'rgba(227, 79, 38, 0.15)',
                borderColor: 'rgba(227, 79, 38, 0.3)'
            },
            CSS: {
                color: '#1572B6',
                bgColor: 'rgba(21, 114, 182, 0.15)',
                borderColor: 'rgba(21, 114, 182, 0.3)'
            },
            Bootstrap: {
                color: '#7952B3',
                bgColor: 'rgba(121, 82, 179, 0.15)',
                borderColor: 'rgba(121, 82, 179, 0.3)'
            },
            JavaScript: {
                color: '#C9A227',
                bgColor: 'rgba(201, 162, 39, 0.15)',
                borderColor: 'rgba(201, 162, 39, 0.3)'
            },
            PHP: {
                color: '#777BB4',
                bgColor: 'rgba(119, 123, 180, 0.15)',
                borderColor: 'rgba(119, 123, 180, 0.3)'
            },
            MySQL: {
                color: '#00758F',
                bgColor: 'rgba(0, 117, 143, 0.15)',
                borderColor: 'rgba(0, 117, 143, 0.3)'
            },
            POO: {
                color: '#10B981',
                bgColor: 'rgba(16, 185, 129, 0.15)',
                borderColor: 'rgba(16, 185, 129, 0.3)'
            }
        },
        image: test,
        gallery: [test],
        theme: {
            primary: '#f97316',
            light: 'rgba(249, 115, 22, 0.1)',
            border: 'rgba(249, 115, 22, 0.2)',
            hover: 'rgba(249, 115, 22, 0.15)',
            gradient: 'linear-gradient(to right, #f97316, #ea580c)'
        }
    }

];
