export interface SkillColumnItem {
    name: string;
    color: string;
}

export interface SkillColumn {
    title: string;
    skills: SkillColumnItem[];
}

export const skillColumns: SkillColumn[] = [
    {
        title: "Front-end & Interface",
        skills: [
            { name: 'React', color: '#61DAFB' },
            { name: 'Next.js', color: '#000000' },
            { name: 'TypeScript', color: '#007ACC' },
            { name: 'Tailwind CSS', color: '#38B2AC' },
            { name: 'Astro', color: '#0C1222' },
            { name: 'SASS', color: '#CC6699' },
            { name: 'Figma', color: '#F24E1E' }
        ]
    },
    {
        title: "Back-end & API",
        skills: [
            { name: 'Node.js', color: '#339933' },
            { name: 'Python', color: '#FFD43B' },
            { name: 'PHP', color: '#777BB4' },
            { name: 'FastAPI', color: '#009688' },
            { name: 'Symfony', color: '#000000' },
            { name: 'Express.js', color: '#000000' },
            { name: 'API Platform', color: '#2F303E' }
        ]
    },
    {
        title: "Données & DevOps",
        skills: [
            { name: 'PostgreSQL', color: '#4169E1' },
            { name: 'MongoDB', color: '#47A248' },
            { name: 'Prisma', color: '#2D3748' },
            { name: 'Docker', color: '#2CA5E0' },
            { name: 'GitHub Actions', color: '#2088FF' },
            { name: 'scikit-learn', color: '#F7931E' },
            { name: 'Jest', color: '#C21325' }
        ]
    }
];
