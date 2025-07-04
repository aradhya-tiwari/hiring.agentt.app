export type scheduleTableType = {
    id?: number,
    date: Date,
    type: string,
    candidateId: number,
    notes?: any,
    assignedTo?: number,
    status?: string,
}

class ScheduleStore {
    schedule = $state<Array<scheduleTableType>>([])
    add(obj: scheduleTableType) {

        // TODO add validation

        this.schedule.push(obj)
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
                    status: obj.status
                }
                this.schedule[i] = updatedRes
                return
            }
        }
        throw "No object with id" + id
    }
}

let s = new ScheduleStore()
s.update(1002, { candidateId: 1, date: new Date(), type: "" })