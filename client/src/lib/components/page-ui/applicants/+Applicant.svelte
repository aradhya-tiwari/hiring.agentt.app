<script>
    import DataTableCandidate from "./dataTable/DataTableCandidate.svelte";
    import { sampleCandidatesData } from "./stores/sampleCandidateData.svelte";
    import { candidateColumns } from "./stores/Columns.svelte";
    import InfoCandidate from "./InfoCandidate.svelte";
    import { applicantStore } from "./stores/candidates.svelte";
</script>

<DataTableCandidate data={applicantStore.getQuery()} columns={candidateColumns} />
<InfoCandidate />
