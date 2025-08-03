import { sampleScheduleData } from "./sample"

export type scheduleTableType = {
    id?: number,
    date: Date,
    type: string,
    name: string,
    candidateId: number,
    candidateName: string,
    notes?: Array<{ by: number, text: string }>,
    assignedTo?: number,
    status?: string,
}

class ScheduleStore {
    schedule = $state<Array<scheduleTableType>>([]);
    query = $state('?')
    queryParams = $state<{ [key: string]: string | number | boolean | string[] | undefined | null }>({})
    add(obj: scheduleTableType) {

        // TODO add validation

        this.schedule.push(obj)

        // TODO add server query 
    }
    update(id: number, obj: scheduleTableType) {
        for (let i = 0; i < this.schedule.length; i++) {
            if (this.schedule[i].id === id) {
                let updatedRes: scheduleTableType = {
                    id: id,
                    date: obj.date,
                    type: obj.type,
                    candidateId: obj.candidateId,
                    assignedTo: obj.assignedTo,
                    notes: obj.notes,
                    status: obj.status,
                    name: obj.name,
                    candidateName: obj.candidateName
                }
                this.schedule[i] = updatedRes
                return
            }
        }
        throw "No object with id" + id
    }
    getQuery() {
        // getch data ?query
        return this.schedule
    }
    sample() {
        this.schedule = [...this.schedule, ...sampleScheduleData]
    }
    modifyQuery(key: string, value: string | Array<string>) {
        this.queryParams[key] = value
    }

    buildQueryParamsWithURLSearchParams() {
        const searchParams = new URLSearchParams();
        for (const key in this.queryParams) {
            if (Object.prototype.hasOwnProperty.call(this.queryParams, key)) {
                const value = this.queryParams[key];
                if (value !== undefined && value !== null) {
                    if (Array.isArray(value)) {
                        value.forEach(item => searchParams.append(key, String(item)));
                    } else {
                        searchParams.append(key, String(value));
                    }
                }
            }
        }
        this.query = searchParams.toString();
    }
    // 
}
export let scheduleStore = new ScheduleStore()

