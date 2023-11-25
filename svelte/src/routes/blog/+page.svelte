<script lang="ts">
    import type {PageData} from "./$types";
    import ArticleCard from "$lib/components/ArticleCard.svelte";
    export let data: PageData;
</script>

<div class="h-screen bg-neutral-900 pt-[8vh]">
    <div class="relative w-screen flex items-center justify-center">
        <div class="left-[10vw] absolute w-[80vw] h-[0.1rem] bg-white"></div>
        <div class="z-10 w-full flex justify-center">
            <h1 class="font-medium text-white text-[4rem] bg-neutral-900 py-2 px-8">Blog</h1>
        </div>
    </div>
    <div class="w-screen h-maxflex jusitfy-center px-[10vw] pt-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 w-full gap-8">
            {#each data.articles as article}
                    <ArticleCard {article}/>
            {/each}
        </div>
    </div>
</div>