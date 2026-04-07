import processShape1 from '../../assets/images/shapes/process-two-shape-1.png';
import processShape2 from '../../assets/images/shapes/process-two-shape-2.png';
import processIcon1 from '../../assets/images/icon/process-two-icon-1.png';
import processIcon2 from '../../assets/images/icon/process-two-icon-2.png';
import processIcon3 from '../../assets/images/icon/process-two-icon-3.png';
import processIcon4 from '../../assets/images/icon/process-two-icon-4.png';
import type { ProcessItem, ProcessStepThree } from './processType';



export const processData: ProcessItem[] = [
    {
        id: 1,
        title: 'Discovery & Consultation',
        description:
            'We learn about your business, workforce needs, and hiring goals to craft a tailored strategy.',
        icon: processIcon1,
        shape: processShape1,
        animation: 'fadeInLeft',
    },
    {
        id: 2,
        title: 'Strategy & Compliance',
        description:
            'We prepare compliant documentation, job ads, and recruitment plans aligned with your requirements.',
        icon: processIcon2,
        shape: processShape2,
        animation: 'fadeInRight',
    },
    {
        id: 3,
        title: 'Sourcing & Vetting',
        description:
            'Our team identifies, screens, and shortlists pre-qualified candidates from our extensive network.',
        icon: processIcon3,
        shape: processShape1,
        animation: 'fadeInLeft',
    },
    {
        id: 4,
        title: 'Placement & Support',
        description:
            'We finalise placements with full onboarding support and ongoing account management.',
        icon: processIcon4,
        shape: processShape2,
        animation: 'fadeInRight',
    },
];


export const processSteps: ProcessStepThree[] = [
    {
        id: 1,
        icon: 'icon-information-technology',
        title: 'Choose A Service',
        text: 'Choose a Service: Like IT Support & Maintenance',
        delay: 200,
    },
    {
        id: 2,
        icon: 'icon-define',
        title: 'Define Requirements',
        text: 'Define Requirements: Like IT Support & Maintenance',
        delay: 300,
        reverse: true,
    },
    {
        id: 3,
        icon: 'icon-seminar',
        title: 'Request A Meeting',
        text: 'Request A Meeting: Like IT Support & Maintenance',
        delay: 400,
    },
    {
        id: 4,
        icon: 'icon-solution',
        title: 'Final Solution',
        text: 'Final Solution: Like IT Support & Maintenance',
        delay: 500,
        reverse: true,
    },
]