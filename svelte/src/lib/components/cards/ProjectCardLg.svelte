<script lang="ts">
    import {getWebpUrl, ImageQuality, type Project} from "$lib/common";

    export let project: Project;

    let imageId = project.cover ? project.cover : project.image;
</script>

<a href="/projects/{project.id}" class="hover:scale-[102%] transition-all shadow-md">
    <div class="w-full aspect-[16/9] bg-neutral-800 rounded-md">
        <img class="h-full w-full rounded-md rounded-b-none object-contain" src={getWebpUrl(imageId, ImageQuality.LOW)} alt="Project - {project.name}"/>
    </div>
    <div class="bg-neutral-800 p-2 text-white font-bold rounded-b-md">
        {project.name}
    </div>
</a>
