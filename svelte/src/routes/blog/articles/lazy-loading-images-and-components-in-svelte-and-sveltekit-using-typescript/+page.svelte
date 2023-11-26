<script lang="ts">
    import type {PageData} from "./$types";
    import ArticleRenderer from "$lib/components/ArticleRenderer.svelte";

    export let data: PageData;
</script>

<svelte:head>
    <title>{data.article.name}</title>
    <meta name="author" content="Alexander Schnabl">
    <meta name="keywords" content={`Alex Schnabl, ${data.article.keywords.join(", ")}`}>
    <meta name="description" content={`${data.article.description}`}>
</svelte:head>

<ArticleRenderer article={data.article}/>