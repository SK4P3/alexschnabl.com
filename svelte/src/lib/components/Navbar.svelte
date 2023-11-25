<script lang="ts">
    import {currentSection, sections} from "$lib/common";
    import {goto} from "$app/navigation";
    import {page} from "$app/stores";

    async function scrollToSection(i: number) {
        if ($page.url.pathname !== "/")
            await goto("/");
        currentSection.set(i);
        window.scrollTo({top: $sections[i].offsetTop, behavior: 'smooth'});
    }
</script>

<div class="navbar fixed top-0 bg-neutral-800/20 z-50 backdrop-blur-sm">
    <div class="navbar-start">
        <div class="dropdown">
            <label tabindex="-1" class="btn btn-ghost lg:hidden" for="">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"/>
                </svg>
            </label>
            <ul tabindex="-1" class="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 w-52 text-white font-medium">
                <li>
                    <button on:click={() => scrollToSection(0)}>Home</button>
                </li>
                <li>
                    <button on:click={() => scrollToSection(1)}>About</button>
                </li>
                <li>
                    <button on:click={() => scrollToSection(2)}>Projects</button>
                </li>
                <li>
                    <button on:click={() => scrollToSection(3)}>Contact</button>
                </li>
                <li><a href="/blog">Blog</a></li>
            </ul>
        </div>
        <button class="hidden lg:block font-bold text-3xl text-white pl-16" on:click={() => scrollToSection(0)}>AS</button>
    </div>
    <div class="navbar-end text-white">
        <ul class="hidden lg:flex gap-8 text-base font-semibold pr-16">
            <li>
                <button class="hover:underline underline-offset-2" on:click={() => scrollToSection(0)}>Home</button>
            </li>
            <li>
                <button class="hover:underline underline-offset-2" on:click={() => scrollToSection(1)}>About</button>
            </li>
            <li>
                <button class="hover:underline underline-offset-2" on:click={() => scrollToSection(2)}>Projects</button>
            </li>
            <li>
                <button class="hover:underline underline-offset-2" on:click={() => scrollToSection(3)}>Contact</button>
            </li>
            <li><a class="hover:underline underline-offset-2" href="/blog">Blog</a></li>
        </ul>
        <button class="lg:hidden font-bold text-3xl pr-4" on:click={() => scrollToSection(0)}>AS</button>
    </div>
</div>