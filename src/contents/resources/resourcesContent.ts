import icon1 from '../../assets/images/custom/magnifying-glass-solid-full.svg';
import icon2 from '../../assets/images/custom/file-regular-full.svg';
import icon3 from '../../assets/images/custom/megaphone-line.svg';
import icon4 from '../../assets/images/custom/folder-regular-full.svg';
import icon5 from '../../assets/images/custom/list-check-3.svg';
import icon6 from '../../assets/images/custom/user-regular-full.svg';

export interface ResourceTopic {
    id: number;
    icon: string;
    title: string;
    description: string;
}

export interface ResourceCard {
    id: number;
    title: string;
    blurb: string;
}

export interface DownloadItem {
    id: number;
    title: string;
    kind: string;
}

export interface ArticleItem {
    id: number;
    title: string;
    excerpt: string;
    tag: string;
    image: string;
}

export interface ExternalLinkItem {
    id: number;
    label: string;
    href: string;
}

export const lmtTopics: ResourceTopic[] = [
    { 
        id: 1,
        icon: icon1,
        title: 'What is Labour Market Testing?',
        description: 'Understand the fundamentals of Labour Market Testing (LMT) and its importance in ensuring genuine recruitment efforts before sponsoring overseas workers in Australia.'
      },
      { 
        id: 2,
        icon: icon2,
        title: 'LMT Requirements in Australia',
        description: 'Learn the key Australian Labour Market Testing requirements, including advertising duration, compliance rules, and documentation needed for visa and nomination processes.'
      },
      { 
        id: 3,
        icon: icon3,
        title: 'Job Advertising Requirements',
        description: 'Discover where and how to advertise job vacancies to meet Labour Market Testing standards and demonstrate genuine efforts to recruit local Australian workers.'
      },
      { 
        id: 4,
        icon: icon4,
        title: 'Recruitment Evidence Guidelines',
        description: 'Explore best practices for maintaining structured recruitment records, candidate screening documentation, and organised evidence to support LMT compliance.'
      },
      { 
        id: 5,
        icon: icon5,
        title: 'LMT Compliance Checklist',
        description: 'Follow a step-by-step Labour Market Testing checklist to ensure your recruitment process meets Australian government compliance and nomination requirements.'
      },
      { 
        id: 6,
        icon: icon6,
        title: 'Employer Responsibilities',
        description: 'Understand the responsibilities of employers in maintaining recruitment transparency, compliance documentation, and proper record keeping for Labour Market Testing.'
      },
    ];

export const lmtExampleCards: ResourceCard[] = [
    { 
        id: 1, 
        title: 'LMT Process Guide', 
        blurb: 'A complete end-to-end guide covering role definition, job advertising, candidate screening, and preparation of a compliant Labour Market Testing evidence pack.' 
      },
      { 
        id: 2, 
        title: 'Recruitment Compliance Guide', 
        blurb: 'Understand how to align recruitment processes with Australian Labour Market Testing and migration compliance requirements to ensure successful sponsorship outcomes.' 
      },
      { 
        id: 3, 
        title: 'Employer Checklist', 
        blurb: 'A practical checklist designed for employers and HR teams to quickly verify Labour Market Testing compliance before submitting sponsorship or nomination applications.' 
      },
      { 
        id: 4, 
        title: 'Job Advertising Standards', 
        blurb: 'Learn best practices for job advertisements including content requirements, approved platforms, advertising duration, and compliance with Australian LMT regulations.' 
      },
      { 
        id: 5, 
        title: 'Migration Support Documentation', 
        blurb: 'Guidance on organising recruitment evidence, supporting documents, and compliance materials for migration advisers and government case officers.' 
      },
];

// Add an icon property to each item for ResourceTopic[] so types match and type error is fixed
export const recruitmentTopics: ResourceTopic[] = [
    { 
        id: 1, 
        icon: "ri-user-search-line",
        title: 'Talent Acquisition Guide', 
        description: 'A strategic guide to building strong talent pipelines for skilled, technical, and specialist roles across various industries.' 
      },
      { 
        id: 2, 
        icon: "ri-team-line",
        title: 'Staffing Solution Overview', 
        description: 'An overview of flexible staffing solutions including permanent, contract, and project-based workforce models tailored to business needs.' 
      },
      { 
        id: 3, 
        icon: "ri-checkbox-circle-line",
        title: 'Hiring Best Practices', 
        description: 'Best practices for creating fair, efficient, and structured hiring processes from job intake to candidate selection and final offer.' 
      },
      { 
        id: 4, 
        icon: "ri-bar-chart-2-line",
        title: 'Workforce Planning', 
        description: 'Insights into forecasting workforce requirements, identifying skill gaps, and aligning talent strategies with business growth objectives.' 
      },
      { 
        id: 5, 
        icon: "ri-lightbulb-flash-line",
        title: 'Recruitment Strategy', 
        description: 'Develop effective recruitment strategies by strengthening employer branding, sourcing channels, and candidate engagement approaches.' 
      },
      { 
        id: 6, 
        icon: "ri-profile-line",
        title: 'Candidate Screening Process', 
        description: 'A structured and unbiased candidate screening approach to ensure quality hiring decisions and compliance with recruitment standards.' 
      },
    ];

export const downloads: DownloadItem[] = [
    { id: 1, title: 'LMT Checklist PDF', kind: 'PDF' },
    { id: 2, title: 'Recruitment Template', kind: 'Template' },
    { id: 3, title: 'Job Advertising Template', kind: 'Template' },
    { id: 4, title: 'Employer Guide', kind: 'Guide' },
    { id: 5, title: 'Candidate Screening Template', kind: 'Template' },
];

export const usefulLinks: ExternalLinkItem[] = [
    {
        id: 1,
        label: 'Department of Home Affairs — Immigration and citizenship',
        href: 'https://immi.homeaffairs.gov.au/',
    },
    {
        id: 2,
        label: 'Fair Work Ombudsman',
        href: 'https://www.fairwork.gov.au/',
    },
    {
        id: 3,
        label: 'Workforce Australia',
        href: 'https://www.workforceaustralia.gov.au/',
    },
    {
        id: 4,
        label: 'Australian Government — Jobs and Workplace',
        href: 'https://www.employment.gov.au/',
    },
    {
        id: 5,
        label: 'Australian Bureau of Statistics — Labour statistics',
        href: 'https://www.abs.gov.au/statistics/labour',
    },
];
