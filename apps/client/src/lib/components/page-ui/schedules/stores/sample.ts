// type Sample = {
//     id: number,
//     date: Date,
//     type: string,
//     candidateId: number,
//     notes: string,
//     assignedTo?: number,
//     status?: string
// }
// let sampleObj: Sample = {
//     id: 1002,
//     date: new Date(),
//     type: "Interview",
//     candidateId: 1,
//     notes: "This is a sample note.",
//     assignedTo: 2,
//     status: "Scheduled"
// }

// for (let i in sampleObj) {
//     sampleObj[i] = 0
//     console.log(i, sampleObj[i])
// }

// console.log(sampleObj)
export let sampleScheduleData = [{
    id: 1,
    date: new Date("2025-07-01T10:00:00Z"),
    type: "Interview",
    name: "Candidate A Interview",
    candidateId: 101,
    candidateName: "John Doe",
    notes: [{ by: 201, text: "Initial interview scheduled" }],
    assignedTo: 201,
    status: "Scheduled",
},
{
    id: 2,
    date: new Date("2025-07-02T14:30:00Z"),
    type: "Meeting",
    name: "Team Sync",
    candidateId: 102,
    candidateName: "Jane Smith",
    notes: [{ by: 202, text: "Follow-up call" }],
    assignedTo: 202,
    status: "Completed",
},
{
    id: 3,
    date: new Date("2025-07-03T09:00:00Z"),
    type: "Assessment",
    name: "Technical Assessment",
    candidateId: 103,
    candidateName: "Peter Jones",
    notes: [{ by: 201, text: "Technical assessment" }],
    assignedTo: 201,
    status: "Pending",
},
{
    id: 4,
    date: new Date("2025-07-04T11:00:00Z"),
    type: "Interview",
    name: "HR Interview",
    candidateId: 104,
    candidateName: "Alice Brown",
    notes: [{ by: 203, text: "HR interview" }],
    assignedTo: 203,
    status: "Scheduled",
},]