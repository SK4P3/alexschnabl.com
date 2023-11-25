<script lang="ts">
    import {page} from "$app/stores";

    $: height = $page.url.pathname === "/" ? "h-screen" : "h-16";
</script>

<section class="relative w-screen bg-neutral-900 h-16">
    <footer class="w-screen h-full bg-neutral-800 flex flex-col items-center justify-center text-gray-400 font-medium ">
        <h4>Copyright Alexander Schnabl {new Date().getFullYear()}, <a href="/imprint" class="hover:underline">Imprint</a></h4>
        <span>
                Website hosted by
                <a href="https://www.ss-technologies.at" target="_blank" class="pl-1 hover:underline">S&S Technologies GmbH</a>
            </span>
    </footer>
</section>