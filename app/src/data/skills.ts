export interface SkillColumnItem {
    name: string;
    icon: string;
    color: string;
}

export interface SkillColumn {
    title: string;
    skills: SkillColumnItem[];
}

export const skillColumns: SkillColumn[] = [
    {
        title: "Frontend & UI",
        skills: [
            { name: 'React', icon: 'R', color: '#61DAFB' },
            { name: 'Next.js', icon: 'N', color: '#000000' },
            { name: 'TypeScript', icon: 'TS', color: '#007ACC' },
            { name: 'Tailwind CSS', icon: 'T', color: '#38B2AC' },
            { name: 'Astro', icon: 'A', color: '#0C1222' },
            { name: 'SASS', icon: 'S', color: '#CC6699' },
            { name: 'Figma', icon: 'F', color: '#F24E1E' }
        ]
    },
    {
        title: "Backend & APIs",
        skills: [
            { name: 'Node.js', icon: 'N', color: '#339933' },
            { name: 'Python', icon: 'PY', color: '#FFD43B' },
            { name: 'PHP', icon: 'PHP', color: '#777BB4' },
            { name: 'FastAPI', icon: 'F', color: '#009688' },
            { name: 'Symfony', icon: 'S', color: '#000000' },
            { name: 'Express.js', icon: 'E', color: '#000000' },
            { name: 'API Platform', icon: 'AP', color: '#2F303E' }
        ]
    },
    {
        title: "Data & DevOps",
        skills: [
            { name: 'PostgreSQL', icon: 'P', color: '#4169E1' },
            { name: 'MongoDB', icon: 'M', color: '#47A248' },
            { name: 'Prisma', icon: 'PR', color: '#2D3748' },
            { name: 'Docker', icon: 'D', color: '#2CA5E0' },
            { name: 'GitHub Actions', icon: 'GA', color: '#2088FF' },
            { name: 'scikit-learn', icon: 'SK', color: '#F7931E' },
            { name: 'Jest', icon: 'J', color: '#C21325' }
        ]
    }
];