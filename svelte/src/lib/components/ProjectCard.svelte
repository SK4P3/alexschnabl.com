<script lang="ts">
    import {getWebpUrl, ImageQuality, type Project} from "$lib/common";

    export let project: Project;

</script>

<a class="w-full aspect-[16/9] bg-neutral-800 rounded-md hover:scale-[102%] transition-all shadow-md" href="/projects/{project.id}">
    <img class="h-full w-full rounded-md" src={getWebpUrl(project.image, ImageQuality.LOW)} alt="Project - {project.name}"/>
</a>

