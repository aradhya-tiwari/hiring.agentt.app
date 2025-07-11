import DataTableCandidate from "../dataTable/DataTableCandidate.svelte";
import type { ColumnDef } from "@tanstack/table-core";
import type { candidatesType } from "./candidateType";

export const sampleCandidatesData: candidatesType[] = [
    {
        id: 1,
        name: "Alice Johnson",
        email: "alice.j@example.com",
        phone: "123-456-7890",
        resumeUrl: "http://example.com/resume_alice.pdf",
        createdAt: new Date("2023-01-15T10:00:00Z"),
        description: "Experienced software engineer with a focus on web development.",
        skills: [
            { name: "JavaScript", level: "expert" },
            { name: "React", level: "expert" },
        ],
        experience: [
            {
                company: "Tech Corp",
                role: "Software Engineer",
                duration: "3 years",
            },
        ],
        education: [
            {
                institution: "University A",
                degree: "B.Sc. Computer Science",
                year: "2019",
            },
        ],
        certifications: [],
        ai_details: ""
    },
    {
        id: 2,
        name: "Bob Williams",
        email: "bob.w@example.com",
        phone: "098-765-4321",
        resumeUrl: "http://example.com/resume_bob.pdf",
        createdAt: new Date("2023-02-20T11:30:00Z"),
        description: "Data scientist with a strong background in machine learning.",
        skills: [
            { name: "Python", level: "expert" },
            { name: "Machine Learning", level: "intermediate" },
        ],
        experience: [
            {
                company: "Data Insights",
                role: "Data Scientist",
                duration: "2 years",
            },
        ],
        education: [
            {
                institution: "University B",
                degree: "M.Sc. Data Science",
                year: "2021",
            },
        ],
        certifications: [
            { name: "AWS Certified Machine Learning", year: "2022" },
        ],
        ai_details: ""
    },
    {
        id: 3,
        name: "Charlie Brown",
        email: "charlie.b@example.com",
        phone: "555-123-4567",
        resumeUrl: "http://example.com/resume_charlie.pdf",
        createdAt: new Date("2023-03-01T09:00:00Z"),
        description: "Junior developer eager to learn and contribute.",
        skills: [
            { name: "HTML", level: "beginner" },
            { name: "CSS", level: "beginner" },
        ],
        experience: [],
        education: [
            {
                institution: "Coding Bootcamp",
                degree: "Fullstack Web Dev",
                year: "2023",
            },
        ],
        certifications: [],
        ai_details: ""
    },
];
