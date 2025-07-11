import type { candidatesType } from "./candidateType";
import { sampleCandidatesData } from "./sampleCandidateData.svelte"



class CandidateStore {
    candidates = $state<Array<candidatesType>>([]);
    query = $state('')
    queryParams = $state<{ [key: string]: string | number | boolean | string[] | undefined | null }>({})
    add(obj: candidatesType) {

        // TODO add validation

        this.candidates.push(obj)

        // TODO add server query 
    }
    update(id: number, obj: candidatesType) {
        for (let i = 0; i < this.candidates.length; i++) {
            if (this.candidates[i].id === id) {
                let updatedRes: candidatesType = {
                    name: "Aradhya Tiwari",
                    email: "aradhya.prad@agentt.app",
                    createdAt: new Date(),
                    ai_details: "Not availa ble",
                    description: "a very long description",
                    resumeUrl: ""
                }
                this.candidates[i] = updatedRes
                return
            }
        }
        throw "No object with id" + id
    }
    // Fetch data with ? query 
    getQuery() {
        // getch data ?query
        return this.candidates
    }
    sample() {
        this.candidates = [...this.candidates, ...sampleCandidatesData]
    }
    modifyQuery(qry: string) {
        this.query = qry
        console.log(this.query)
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
export let candidateStore = new CandidateStore()

