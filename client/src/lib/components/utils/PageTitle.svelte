<script>
    let { title, desc = "" } = $props();
</script>

<h1 class="text-2xl my-5 font-semibold border-b-2 w-fit">{title}</h1>
<p class="text-xs text-gray-400">{desc}</p>
