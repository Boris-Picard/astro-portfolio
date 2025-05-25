export interface SkillItem {
    label: string;
    icon: string;
    color: string;
    bgColor: string;
}

export interface SkillCategory {
    title: string;
    subtitle: string;
    theme: 'orange' | 'amber' | 'yellow';
    icon: string;
    items: SkillItem[];
}

export const skills: SkillCategory[] = [
    {
        title: 'Languages', subtitle: 'Programming Languages', theme: 'orange', icon: 'Code',
        items: [
            { label: 'JavaScript', icon: 'JS', color: 'orange', bgColor: '#F7DF1E' },
            { label: 'TypeScript', icon: 'TS', color: 'orange', bgColor: '#3178C6' },
            { label: 'PHP', icon: 'PHP', color: 'orange', bgColor: '#777BB4' },
            { label: 'Python', icon: 'PY', color: 'orange', bgColor: '#3776AB' },
        ],
    },
    {
        title: 'Frontend', subtitle: 'User Interface Technologies', theme: 'amber', icon: 'Globe',
        items: [
            { label: 'React', icon: 'R', color: 'amber', bgColor: '#61DAFB' },
            { label: 'Next.js', icon: 'N', color: 'amber', bgColor: '#000000' },
            { label: 'Tailwind', icon: 'T', color: 'amber', bgColor: '#06B6D4' },
            { label: 'SASS', icon: 'S', color: 'amber', bgColor: '#CF649A' },
            { label: 'Astro', icon: 'A', color: 'amber', bgColor: '#FF5D01' },
            { label: 'Twig', icon: 'T', color: 'amber', bgColor: '#8BC34A' },
        ],
    },
    {
        title: 'Backend', subtitle: 'Server-side Technologies', theme: 'yellow', icon: 'Database',
        items: [
            { label: 'Node.js', icon: 'N', color: 'yellow', bgColor: '#339933' },
            { label: 'Express.js', icon: 'E', color: 'yellow', bgColor: '#000000' },
            { label: 'Symfony', icon: 'S', color: 'yellow', bgColor: '#000000' },
            { label: 'FastAPI', icon: 'F', color: 'yellow', bgColor: '#009688' },
            { label: 'API Platform', icon: 'AP', color: 'yellow', bgColor: '#38BDF8' },
        ],
    },
    {
        title: 'Databases', subtitle: 'Data Storage Solutions', theme: 'orange', icon: 'Database',
        items: [
            { label: 'PostgreSQL', icon: 'P', color: 'orange', bgColor: '#336791' },
            { label: 'MongoDB', icon: 'M', color: 'orange', bgColor: '#47A248' },
        ],
    },
    {
        title: 'ORMs & Query Builders', subtitle: 'Database Abstraction', theme: 'amber', icon: 'Wrench',
        items: [
            { label: 'Prisma', icon: 'P', color: 'amber', bgColor: '#2D3748' },
            { label: 'SQLModel', icon: 'S', color: 'amber', bgColor: '#3776AB' },
            { label: 'Doctrine', icon: 'D', color: 'amber', bgColor: '#FC6A31' },
        ],
    },
    {
        title: 'Testing', subtitle: 'Quality Assurance', theme: 'yellow', icon: 'TestTube',
        items: [
            { label: 'Jest', icon: 'J', color: 'yellow', bgColor: '#C21325' },
            { label: 'PHPUnit', icon: 'PU', color: 'yellow', bgColor: '#777BB4' },
        ],
    },
    {
        title: 'DevOps & CI/CD', subtitle: 'Deployment & Infrastructure', theme: 'orange', icon: 'Cloud',
        items: [
            { label: 'Docker', icon: 'D', color: 'orange', bgColor: '#2496ED' },
            { label: 'GitHub Actions', icon: 'GA', color: 'orange', bgColor: '#2088FF' },
            { label: 'Vercel', icon: 'V', color: 'orange', bgColor: '#000000' },
        ],
    },
    {
        title: 'Data Science', subtitle: 'Analytics & ML', theme: 'amber', icon: 'BarChart3',
        items: [
            { label: 'NumPy', icon: 'N', color: 'amber', bgColor: '#013243' },
            { label: 'Pandas', icon: 'P', color: 'amber', bgColor: '#150458' },
            { label: 'scikit-learn', icon: 'SK', color: 'amber', bgColor: '#F7931E' },
        ],
    },
    {
        title: 'CMS & Design', subtitle: 'Content & Design Tools', theme: 'yellow', icon: 'Palette',
        items: [
            { label: 'Drupal', icon: 'D', color: 'yellow', bgColor: '#0678BE' },
            { label: 'WordPress', icon: 'W', color: 'yellow', bgColor: '#21759B' },
            { label: 'Figma', icon: 'F', color: 'yellow', bgColor: '#F24E1E' },
        ],
    },
    {
        title: 'Project Management', subtitle: 'Organization & Planning', theme: 'orange', icon: 'Trello',
        items: [
            { label: 'Trello', icon: 'T', color: 'orange', bgColor: '#0079BF' },
            { label: 'Redmine', icon: 'R', color: 'orange', bgColor: '#C5282F' },
        ],
    },
];