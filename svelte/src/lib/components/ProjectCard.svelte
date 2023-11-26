<script lang="ts">
    import {getWebpUrl, ImageQuality, type Project} from "$lib/common";

    export let project: Project;
</script>

<a class="projectCard" href="/projects/{project.id}">
    <img class="h-full w-full rounded-md" src={getWebpUrl(project.image, ImageQuality.LOW)} alt="Project - {project.name}"/>
</a>

