class ScheduleDrawerStore {
    open = $state(false)
    data = $state({})
    constructor() {
    }
    openIt(data: any) {
        this.open = true
        this.data = data
    }
    isOpen() {
        return open
    }
}
export const scheduleDrawerStore = new ScheduleDrawerStore()
