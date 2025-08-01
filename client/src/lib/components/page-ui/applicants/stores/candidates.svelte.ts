import { hwc } from "$lib/utils";
import type { candidatesType } from "./candidateType";
import { sampleCandidatesData } from "./sampleCandidateData.svelte"
// import { } from "@hire/workers";


class ApplicantStore {
    candidates = $state<Array<candidatesType>>([]);
    queryParams = $state<{ [key: string]: string }>({})

    add(obj: candidatesType) {

        // TODO add validation or using superform

        this.candidates.push(obj)

        // TODO add server query 
        // hwc.v1[":orgId"][":jobId"]["resume-screener"].

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
    async getQuery() {
        // getch data ?query
        try {

            let res = await (await hwc[":orgId"][":jobId"].applicants.$get({ param: {} })).json()
            // let iop = await (await hwc[":orgId"].health.$get({ param: {} })).json()
            let appp = res
            console.log(appp)
        } catch (e) {
            console.log(e)
        }

        return this.candidates
    }
    sample() {
        this.candidates = [...this.candidates, ...sampleCandidatesData]
    }
    modifyQuery(qry: string) {
        // this.query = qry
        // console.log(this.query)
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
        // this.query = searchParams.toString();
    }
    // 
}
export let applicantStore = new ApplicantStore()

