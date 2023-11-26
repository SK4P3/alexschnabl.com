<script lang="ts">
    import SvelteMarkdown from "svelte-markdown";
    import {onMount} from "svelte";
    import "$lib/article.css"
    import hljs from 'highlight.js/lib/core';
    import 'highlight.js/styles/github-dark.css';
    import xml from 'highlight.js/lib/languages/xml';
    import css from 'highlight.js/lib/languages/css';
    import json from 'highlight.js/lib/languages/json';
    import javascript from 'highlight.js/lib/languages/javascript';
    import typescript from 'highlight.js/lib/languages/typescript';
    import shell from 'highlight.js/lib/languages/shell';
    import type {Blog} from "$lib/common";

    export let article: Blog;

    hljs.registerLanguage('xml', xml);
    hljs.registerLanguage('css', css);
    hljs.registerLanguage('json', json);
    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('typescript', typescript);
    hljs.registerLanguage('shell', shell);

    onMount(() => {
        hljs.highlightAll();
    })
</script>

<div class="w-screen min-h-screen flex justify-center py-20 text-white overflow-x-hidden">
    <div id="article" class="flex flex-col gap-4 px-6 w-screen xl:w-[60%] break-words">
        <a class="btn btn-sm btn-outline text-white hover:bg-white w-14" href="/blog">back</a>
        <h1 class="text-3xl font-bold underline">{article.name}</h1>
        <SvelteMarkdown source={article.markdown}/>
    </div>
</div>