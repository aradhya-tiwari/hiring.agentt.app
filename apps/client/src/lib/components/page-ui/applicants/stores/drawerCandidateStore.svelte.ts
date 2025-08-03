class CandidateDrawerStore {
    open = $state(false)
    data = $state({})
    constructor() {
    }
    openIt(data: any) {
        this.open = true
        this.data = data
    }
    isOpen() {
        return this.open
    }
}
export const candidateDrawerStore = new CandidateDrawerStore()
