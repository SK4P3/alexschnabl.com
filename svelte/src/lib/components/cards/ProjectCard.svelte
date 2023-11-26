<script lang="ts">
    import {getWebpUrl, ImageQuality, type Project} from "$lib/common";

    export let project: Project;

    let imageId = project.cover ? project.cover : project.image;
</script>

<a class="projectCard" href="/projects/{project.id}">
    <img class="h-full w-full rounded-md object-contain" src={getWebpUrl(imageId, ImageQuality.LOW)} alt="Project - {project.name}"/>
</a>

