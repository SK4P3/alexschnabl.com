<script lang="ts">
    import type {PageData} from "./$types";
    import {getWebpUrl, ImageQuality} from "$lib/common";

    export let data: PageData;
    const project = data.project;
</script>

<svelte:head>
    <title>Alex Schnabl | Project {project.name}</title>
    <meta name="author" content="Alexander Schnabl">
    <meta name="keywords" content={`Alex Schnabl, ${project.keywords.join(", ")}, ${project.name}`}>
    <meta name="description" content={`Learn more about Alex Schnabls Project: ${project.name}`}>
</svelte:head>

<div class="w-full min-h-screen flex flex-col justify-center bg-neutral-900 px-4 lg:px-20 pt-20 lg:pt-0">
    <div class="grid lg:grid-cols-2 gap-8 mb-8">
        <img class="rounded-md" src={getWebpUrl(project.image, ImageQuality.LOW)} alt="Project - {project.name}"/>
        <div class="flex flex-col justify-between w-full">
            <div class="flex flex-col gap-4 w-full">
                <h1 class="text-2xl lg:text-4xl font-bold text-white ">Project: {project.name}</h1>
                <div class="flex flex-wrap gap-2">
                    {#each project.keywords as kw}
                        <b class="badge badge-outline">{kw}</b>
                    {/each}
                </div>
                <p class="text-justify">{project.description}</p>
            </div>
            <a class="btn btn-primary mt-4" target="_blank" href={project.url}>Visit Site</a>
        </div>
    </div>
</div>