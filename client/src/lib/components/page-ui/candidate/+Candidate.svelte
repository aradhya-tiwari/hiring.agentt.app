<script>
    import DataTableCandidate from "./dataTable/DataTableCandidate.svelte";
    import { sampleCandidatesData } from "./stores/sampleCandidateData.svelte";
    import { candidateColumns } from "./stores/Columns.svelte";
    import InfoCandidate from "./InfoCandidate.svelte";
</script>

<DataTableCandidate data={sampleCandidatesData} columns={candidateColumns} />
<InfoCandidate />
