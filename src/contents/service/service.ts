
// service tow
import serviceIcon1 from '../../assets/images/custom/lmt.png';
import serviceIcon2 from '../../assets/images/custom/telent.png';
import serviceIcon3 from '../../assets/images/custom/Tech-talent.png';
import serviceIcon4 from '../../assets/images/custom/Flexible.png';
import type { ServiceOneItem, ServicesTow } from './type';
import productDesignIcon from '../../assets/images/custom/lmt.png';
import digitalMarketingIcon from '../../assets/images/custom/telent.png';
import userResearchIcon from '../../assets/images/custom/Tech-talent.png';
import webDesignIcon from '../../assets/images/custom/Flexible.png';
import icon5 from '../../assets/images/custom/Consulting.png';
import icon6 from '../../assets/images/custom/Support.png';
import icon7 from '../../assets/images/custom/workforce.png';
import icon8 from '../../assets/images/custom/seo.png';




export const servicesTow: ServicesTow[] = [
    {
        id: 1,
        icon: serviceIcon1,
        title: 'Labour Market Testing (LMT)',
        link: '/services',
        description:
            "We produce compliant LMT reports including job ad drafting, applicant tracking, and rejection summaries. Professionally prepared, fully nomination-ready.",
    },
    {
        id: 2,
        icon: serviceIcon2,
        title: 'Talent Recruitment',
        link: '/services',
        description:
            'Permanent and contract recruitment solutions connecting skilled, qualified candidates with inclusive employers across Australia.',
    },
    {
        id: 3,
        icon: serviceIcon3,
        title: 'Specialized Tech Talent',
        link: '/services',
        description:
            'Access niche technology professionals for your projects — from software engineers to data analysts and cloud architects.',
    },
    {
        id: 4,
        icon: serviceIcon4,
        title: 'Flexible Contract',
        link: '/services',
        description:
            'Scalable workforce solutions for short-term projects or ongoing operational needs. We handle sourcing, vetting, and onboarding..',
    },
];


//service three
export const servicesThree: ServicesTow[] = [
    {
        id: 1,
        icon: 'icon-information-technology',
        title: 'Managed IT Services',
        description:
            'Managed IT Services offer a comprehensive, cost-effective solution for businesses...',
        link: '/services',
    },
    {
        id: 2,
        icon: 'icon-software-development',
        title: 'Software Development',
        description:
            'We deliver powerful, scalable, and user-focused applications built for performance.',
        link: '/services',
    },
    {
        id: 3,
        icon: 'icon-cybersecurity',
        title: 'Cybersecurity Services',
        description:
            'Protect your business from digital threats with robust cybersecurity frameworks.',
        link: '/services',
    },
    {
        id: 4,
        icon: 'icon-data-security',
        title: 'Incident Responder',
        description:
            'Swift and efficient incident response to minimize damage and recovery time.',
        link: '/services',
    },
    {
        id: 5,
        icon: 'icon-encrypted',
        title: 'Data Encryption',
        description:
            'Advanced encryption techniques to secure sensitive data and maintain compliance.',
        link: '/services',
    },
    {
        id: 6,
        icon: 'icon-planning',
        title: 'Disaster Planning',
        description:
            'Ensure business continuity with disaster recovery and proactive planning.',
        link: '/services',
    },
    {
        id: 7,
        icon: 'icon-cyber-threat',
        title: 'Threat Hunter',
        description:
            'Identify and neutralize emerging threats before they impact operations.',
        link: '/services',
    },
    {
        id: 8,
        icon: 'icon-data-recovery',
        title: 'Data Recovery',
        description:
            'Recover lost or corrupted data efficiently with our expert recovery solutions.',
        link: '/services',
    },
];




export const servicesOneData: ServiceOneItem[] = [
    {
        id: 1,
        icon: productDesignIcon,
        title: 'Labour Market Testing (LMT)',
        link: '/services',
        description:
            "We produce compliant LMT reports including job ad drafting, applicant tracking, and rejection summaries. Professionally prepared and nomination-ready.",
        include: [
            "Job advertising",
            "Market research",
            "LMT reporting",
            "Documentation",
            "Compliance support",
        ],
    },
    {
        id: 2,
        icon: digitalMarketingIcon,
        title: 'Talent Recruitment | Permanent & Contract',
        link: '/services',
        description:
            "Permanent and contract recruitment solutions connecting skilled and qualified candidates with Australian employers.",
        include: [
            "Candidate sourcing",
            "Screening",
            "Interviews",
            "Shortlisting",
            "Hiring support",
        ],
    },
    {
        id: 3,
        icon: userResearchIcon,
        title: 'Specialized Tech Talent',
        link: '/services',
        description:
            "Access niche technology professionals for your business, from software engineers to cloud and data specialists.",
        include: [
            "Developers",
            "IT Engineers",
            "Tech Specialists",
            "DevOps engineers",
            "UI/UX designers",
        ],
    },
    {
        id: 4,
        icon: webDesignIcon,
        title: 'Flexible Contract & Project Staffing',
        link: '/services',
        description:
            "Scalable workforce solutions for short-term projects or long-term operational support with flexible staffing options.",
        include: [
            "Contract staffing",
            "Project-based hires",
            "Flexible workforce",
            "Temporary hiring",
            "Scalable workforce",
        ],
    },
    {
        id: 5,
        icon: icon5,
        title: 'Recruitment Consulting & Advisory',
        link: '/services',
        description:
            "Strategic recruitment consulting to improve hiring processes, workforce planning, and compliance with Australian standards.",
        include: [
            "Business advisory",
            "Hiring strategy",
            "Workforce planning",
            "Compliance assurance",
            "Performance evaluation",
        ],
    },
    {
        id: 6,
        icon: icon6,
        title: 'End-to-End Hiring Support',
        link: '/services',
        description:
            "Complete hiring support from Labour Market Testing to onboarding, ensuring smooth and compliant recruitment processes.",
        include: [
            "Labour Market Testing",
            "Candidate sourcing",
            "Screening and interviews",
            "Documentation support",
            "Onboarding assistance",
        ],
    },
    {
        id: 7,
        icon: icon7,
        title: 'Workforce Solutions',
        link: '/services',
        description:
            "Reliable workforce solutions designed to help Australian businesses manage staffing, operations, and growth efficiently.",
        include: [
            "Workforce planning",
            "Staff management",
            "Business support",
            "Operational efficiency",
            "Growth strategies",
        ],
    },
    {
        id: 8,
        icon: icon8,
        title: 'Website & SEO Services',
        link: '/services',
        description:
            "Modern website development and SEO services to improve online visibility and strengthen your business presence.",
        include: [
            "Website design",
            "SEO optimization",
            "Content creation",
            "Analytics tracking",
            "Technical support",
        ],
    },
];