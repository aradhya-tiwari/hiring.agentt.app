export type jobType = {
    id?: number,
    iconUrl: string,
    coverImg_url: string,
    title: string,
    description: string,
    role: string,
    minExperience: number,
    technologies: string, // CSV
    location: string,
    mode: string,
    documents: File[],
    extraInfo: any,

}
