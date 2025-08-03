import { scheduleStore } from "$lib/components/page-ui/schedules/stores/schedule.svelte";
async function fetchh() {
    scheduleStore.add({
        date: new Date(),
        type: "meeting",
        name: "Meet with Aradhya ",
        candidateId: 10,
        candidateName: "Aradhya Tiwari",
        status: 'Pendings',
        assignedTo: 1010,
        notes: [{ by: 10, text: '' }]
    })
    scheduleStore.sample()
    console.log(scheduleStore.query)

    return scheduleStore.getQuery()
}
export async function load() {


    return { data: await fetchh() }
}