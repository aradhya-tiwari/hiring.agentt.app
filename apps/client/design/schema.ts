export type scheduleTableType = {
    id?: number,
    date: Date,
    candidateId: number,
    notes: Array<any>,
    assignedTo?: number,
    status?: string,
}
export type candidatesType = {
    id?: number,
    name: string,
    email: string,
    phone: string,
    resumeUrl: string,
    createdAt: Date,
    pictureUrl?: string,
    description: string,
    skills: Array<{ name: string, level: "expert" | "beginner" | "intermediate" }>,
    experience: Array<{ company: string, role: string, duration: string }>
    education: Array<{ institution: string, degree: string, year: string }>,
    certifications: Array<{ name: string, year: string }>,
    extraDetails?: any
}
export type applications = {
    id?: number,
    jdId: number,
    candidateId: number,
    resumeUrl: string,
    pictureUrl: string,
    description: string,
    fields: any // { json obj that user has added for candidates }
}
export type jobs = {
    id?: number,
    title: string,
    description: string,
    role: string,
    minExperience: number,
    technologies: string, // CSV
    location: string,
    mode: string,
    documets: File[],
    extraInfo: any
}
