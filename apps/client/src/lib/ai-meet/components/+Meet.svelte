<script>
    import AiInterviewer from "./ai-interviewer/+AiInterviewer.svelte";
    import Transcripts from "./transcripts/+Transcripts.svelte";
</script>

<div class="h-[90vh] w-[89%] m-auto mt-10">
    <div class=" h-[90%] gap-[1%] border flex flex-wrap">
        <div class="h-full w-[70%]">
            <Transcripts />
        </div>
        <div class="flex w-[29%] justify-between flex-col">
            <div class="border-2 h-1/2 m-[1%] rounded-2xl">
                <AiInterviewer />
            </div>
            <div class="border-2 h-1/2 rounded-2xl bg-primary-foreground"></div>
        </div>
    </div>
    <footer class="h-[10%] border">
        <div></div>
    </footer>
</div>
