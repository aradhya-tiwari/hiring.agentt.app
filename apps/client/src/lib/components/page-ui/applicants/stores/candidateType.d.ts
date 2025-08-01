export type candidatesType = {
    id?: number,
    name: string,
    email: string,
    createdAt: Date,
    ai_details: string, // this is where we store all info of candidate and and query it with llm, is it fitting into the role
    description: string,
    resumeUrl: string,
    phone?: string,
    pictureUrl?: string,
    skills?: Array<{ name: string, level: "expert" | "beginner" | "intermediate" }>,
    experience?: Array<{ company: string, role: string, duration: string }>
    education?: Array<{ institution: string, degree: string, year: string }>,
    certifications?: Array<{ name: string, year: string }>,
    notes?: any
}