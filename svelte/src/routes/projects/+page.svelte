<script lang="ts">
    import type {PageData} from "./$types";
    import ArticleCard from "$lib/components/ArticleCard.svelte";
    import DividerH2 from "$lib/components/DividerH2.svelte";

    export let data: PageData;
</script>

<svelte:head>
    <title>Alex Schnabl | Projects</title>
    <meta name="author" content="Alexander Schnabl">
    <meta name="keywords" content="Alex Schnabl, Alexander Schnabl, Software Developer, S&S Technologies GmbH, Coding, Projects">
    <meta name="description" content={`Find out more about Alex Schnabl's Projects including SaaS Projects, Websites, Open Source Projects, and Publications!`}>
</svelte:head>

<div class="min-h-screen bg-neutral-900 pt-[8vh]">
    <div class="relative w-screen flex items-center justify-center mb-8">
        <h1 class="font-medium text-white text-5xl bg-neutral-900 py-2 px-8">Projects</h1>
    </div>

    <DividerH2 title="SaaS"/>
    {#each data.projects as project}
        {#if project.type === "saas"}
            {project.name}
        {/if}
    {/each}

    <DividerH2 title="Websites"/>
    {#each data.projects as project}
        {#if project.type === "website"}
            {project.name}
        {/if}
    {/each}

    <DividerH2 title="Open Source"/>
    {#each data.projects as project}
        {#if project.type === "open-source"}
            {project.name}
        {/if}
    {/each}

    <DividerH2 title="Publications"/>
    {#each data.projects as project}
        {#if project.type === "publication"}
            {project.name}
        {/if}
    {/each}

    <!--<div class="grid grid-cols-1 xl:grid-cols-2 w-full gap-8 px-[10vw] py-8">-->
    <!--    {#each data.projects as project}-->
    <!--        {project.type}-->
    <!--     <ArticleCard {article}/>-->
    <!--    {/each}-->
    <!--</div>-->
</div>