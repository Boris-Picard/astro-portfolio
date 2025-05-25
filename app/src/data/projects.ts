export interface Project {
    title: string;
    type: 'Featured' | 'Client' | 'Personal';
    description: string;
    techs: string[];
    techColors: Record<string, { color: string; bgColor: string; borderColor: string }>;
    image: string;
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
        title: 'E-Commerce Platform',
        type: 'Featured',
        description: 'A comprehensive e-commerce platform with advanced features including real-time inventory management, payment processing, and analytics dashboard.',
        techs: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
        techColors: {
            React: {
                color: '#61DAFB',
                bgColor: 'rgba(97, 218, 251, 0.15)',
                borderColor: 'rgba(97, 218, 251, 0.3)'
            },
            'Node.js': {
                color: '#4ADE80',
                bgColor: 'rgba(74, 222, 128, 0.15)',
                borderColor: 'rgba(74, 222, 128, 0.3)'
            },
            PostgreSQL: {
                color: '#60A5FA',
                bgColor: 'rgba(96, 165, 250, 0.15)',
                borderColor: 'rgba(96, 165, 250, 0.3)'
            },
            TypeScript: {
                color: '#60A5FA',
                bgColor: 'rgba(96, 165, 250, 0.15)',
                borderColor: 'rgba(96, 165, 250, 0.3)'
            },
        },
        image: '/images/projects/e-commerce.png',
        theme: {
            primary: '#f97316',
            light: 'rgba(249, 115, 22, 0.1)',
            border: 'rgba(249, 115, 22, 0.2)',
            hover: 'rgba(249, 115, 22, 0.15)',
            gradient: 'linear-gradient(to right, #f97316, #ea580c)'
        },
    },
    {
        title: 'Data Analytics Dashboard',
        type: 'Client',
        description: 'Real-time data analytics platform with interactive visualizations and machine learning insights.',
        techs: ['Python', 'FastAPI', 'React', 'PostgreSQL'],
        techColors: {
            Python: {
                color: '#60A5FA',
                bgColor: 'rgba(96, 165, 250, 0.15)',
                borderColor: 'rgba(96, 165, 250, 0.3)'
            },
            FastAPI: {
                color: '#14B8A6',
                bgColor: 'rgba(20, 184, 166, 0.15)',
                borderColor: 'rgba(20, 184, 166, 0.3)'
            },
            React: {
                color: '#61DAFB',
                bgColor: 'rgba(97, 218, 251, 0.15)',
                borderColor: 'rgba(97, 218, 251, 0.3)'
            },
            PostgreSQL: {
                color: '#60A5FA',
                bgColor: 'rgba(96, 165, 250, 0.15)',
                borderColor: 'rgba(96, 165, 250, 0.3)'
            },
        },
        image: '/images/projects/data-dashboard.png',
        theme: {
            primary: '#f59e0b',
            light: 'rgba(245, 158, 11, 0.1)',
            border: 'rgba(245, 158, 11, 0.2)',
            hover: 'rgba(245, 158, 11, 0.15)',
            gradient: 'linear-gradient(to right, #f59e0b, #d97706)'
        },
    },
    {
        title: 'Content Management System',
        type: 'Personal',
        description: 'Modern headless CMS built with Symfony and API Platform, featuring a React admin interface.',
        techs: ['Symfony', 'API Platform', 'React', 'Docker'],
        techColors: {
            Symfony: {
                color: '#6B7280',
                bgColor: 'rgba(107, 114, 128, 0.15)',
                borderColor: 'rgba(107, 114, 128, 0.3)'
            },
            'API Platform': {
                color: '#38BDF8',
                bgColor: 'rgba(56, 189, 248, 0.15)',
                borderColor: 'rgba(56, 189, 248, 0.3)'
            },
            React: {
                color: '#61DAFB',
                bgColor: 'rgba(97, 218, 251, 0.15)',
                borderColor: 'rgba(97, 218, 251, 0.3)'
            },
            Docker: {
                color: '#3B82F6',
                bgColor: 'rgba(59, 130, 246, 0.15)',
                borderColor: 'rgba(59, 130, 246, 0.3)'
            },
        },
        image: '/images/projects/cms.png',
        theme: {
            primary: '#eab308',
            light: 'rgba(234, 179, 8, 0.1)',
            border: 'rgba(234, 179, 8, 0.2)',
            hover: 'rgba(234, 179, 8, 0.15)',
            gradient: 'linear-gradient(to right, #eab308, #ca8a04)'
        },
    },
];