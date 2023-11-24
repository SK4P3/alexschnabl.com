<script lang="ts">
    import {getWebpUrl, ImageQuality} from "$lib/common";

    interface Project {
        Name: string;
        Image: string;
        Keywords: string[];
        Project_URL: string;
    }

    export let project: Project;

</script>

<button class="w-full aspect-[16/9] bg-neutral-800 rounded-md hover:scale-[102%] transition-all">
    <img class="h-full w-full rounded-md" src={getWebpUrl(project.Image, ImageQuality.LOW)} alt="Project - {project.Name}"/>
</button>

