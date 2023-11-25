<script lang="ts">
    import type {PageData} from "./$types";
    import SvelteMarkdown from "svelte-markdown";
    import {onMount} from "svelte";
    import "./article.css"

    export let data: PageData;

    onMount(() => {

    })
</script>

<div class="w-full min-h-screen flex justify-center pt-20 text-white">
    <div class="flex flex-col gap-4 w-1/2">
        <a class="btn btn-sm btn-outline text-white hover:bg-white w-14" href="/blog">back</a>
        <h1 class="text-3xl font-bold underline">{data.article.name}</h1>
        <SvelteMarkdown source={data.article.markdown} />
    </div>
</div>
