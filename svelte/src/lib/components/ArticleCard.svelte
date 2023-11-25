<script lang="ts">
    import type {Blog} from "$lib/common";
    import {getWebpUrl, ImageQuality} from "$lib/common";

    export let article: Blog;

    const dateOptions: any = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    };
</script>

<a href="/blog/{article.id}" class="w-full bg-neutral-800 rounded-md h-auto text-white p-4 flex items-center gap-4 group hover:scale-[102%] transition-all cursor-pointer">
    <div class='w-1/4 rounded-md overflow-hidden'>
        <img src={getWebpUrl(article.image, ImageQuality.LOW)} class="object-cover" alt='{article.name} Logo'/>
    </div>
    <div class='flex flex-col justify-start items-start gap-2 h-full w-3/4'>
        <h2 class="text-xl sm:text-2xl font-bold h-2/5 group-hover:underline">{article.name}</h2>
        <p class='text-sm font-medium h-3/5 hidden sm:block'>{article.description}</p>
        <div class="flex items-end justify-between w-full">
            <div class="flex gap-2">
                {#each article.keywords as kw}
                    <b class="badge badge-sm text-gray-500 badge-outline">{kw}</b>
                {/each}
            </div>
            <b class="text-xs text-gray-500">{new Date(article.date_created).toLocaleDateString('de-DE', dateOptions)}</b>
        </div>
    </div>
</a>