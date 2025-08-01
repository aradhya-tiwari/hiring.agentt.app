import type { PageLoad } from './$types';
import type { jobType } from '$lib/components/page-ui/jobs/states/jobs.svete';

// This is a simplified version of sampleJobs from +Jobs.svelte
// In a real application, you would fetch this data from a database or API.
const sampleJobs: jobType[] = [
    {
        id: 1,
        title: "Software Engineer",
        description: "Develop and maintain software applications.",
        role: "Full-stack Developer",
        minExperience: 3,
        technologies: "JavaScript, React, Node.js",
        location: "Remote",
        mode: "Full-time",
        documents: [],
        extraInfo: {},
        iconUrl: "https://placehold.co/10",
        coverImg_url: "https://placehold.co/600x400/910/111",
        slug: "software-engineer",
    },
    {
        id: 2,
        title: "DevOps Engineer",
        description: "Manage and improve CI/CD pipelines.",
        role: "DevOps Specialist",
        minExperience: 5,
        technologies: "AWS, Docker, Kubernetes",
        location: "On-site",
        mode: "Full-time",
        documents: [],
        extraInfo: {},
        iconUrl: "https://placehold.co/10",
        coverImg_url: "https://placehold.co/600x400/456/567",
        slug: "devops-engineer",
    },
    {
        id: 3,
        title: "UI/UX Designer",
        description: "Design user interfaces and experiences.",
        role: "Product Designer",
        minExperience: 2,
        technologies: "Figma, Sketch, Adobe XD",
        location: "Hybrid",
        mode: "Full-time",
        documents: [],
        extraInfo: {},
        iconUrl: "https://placehold.co/10",
        coverImg_url: "https://placehold.co/600x400/ff9/cc9",
        slug: "ui-ux-designer",
    },
    {
        id: 4,
        title: "Data Scientist",
        description: "Analyze data and build machine learning models.",
        role: "ML Engineer",
        minExperience: 4,
        technologies: "Python, R, TensorFlow",
        location: "Remote",
        mode: "Full-time",
        documents: [],
        extraInfo: {},
        iconUrl: "https://placehold.co/10",
        coverImg_url: "https://placehold.co/600x400/2c8/456",
        slug: "data-scientist",
    },
    {
        id: 5,
        title: "Project Manager",
        description: "Lead software development projects.",
        role: "Scrum Master",
        minExperience: 7,
        technologies: "Agile, Jira, Confluence",
        location: "On-site",
        mode: "Full-time",
        documents: [],
        extraInfo: {},
        iconUrl: "https://placehold.co/10",
        coverImg_url: "https://placehold.co/600x400",
        slug: "project-manager",
    },
];

export const load: PageLoad = ({ params }) => {
    const job = sampleJobs.find(j => j.slug === params.name);

    return {
        job
    };
};
