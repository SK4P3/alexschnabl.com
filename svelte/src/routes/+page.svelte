<script lang="ts">
    import SlideButton from "$lib/components/SlideButton.svelte";
    import {writable} from "svelte/store";
    import Timeline from "$lib/components/Timeline.svelte";
    import ProjectCard from "$lib/components/ProjectCard.svelte";

    let ms = +new Date() - +new Date(2002, 9, 23);
    let age = writable<number>(Math.floor(ms / 1000));

    setInterval(() => {
        ms = +new Date() - +new Date(2002, 9, 23);
        age.set(Math.floor(ms / 1000));
    }, 1000);
</script>

<a id="home"/>
<section class="relative flex items-center h-screen w-screen bg-neutral-900">
    <img src="/alex.png" class="absolute right-0 h-screen object-cover brightness-50 sm:brightness-100" alt='Alex Schnabl Profile'/>
    <div class="flex flex-col gap-6 text-white z-20 lg:px-20">
        <div class="flex flex-col gap-4 text-center lg:text-start">
            <h1 class="text-2xl lg:text-3xl font-semibold uppercase">Alexander Schnabl</h1>
            <h2 class="text-4xl lg:text-5xl font-bold uppercase ">Software Entrepreneur</h2>
            <div class="w-full text-justify font-medium px-12 lg:px-0">
                <h3 class="inline lg:block">Here you can find my projects and general information about me!</h3>
                <p class="inline lg:block">I've hidden 3 cookies on the website, maybe you can find them :)</p>
            </div>
        </div>
        <div class="flex flex-col lg:flex-row items-center gap-8 uppercase">
            <SlideButton text="my work" href="/#projects"/>
            <SlideButton text="get in touch" href="/#contact"/>
        </div>
    </div>
    <img src="/cookie2.jpg" class="absolute top-0 left-0 h-0 w-0" alt='what could it be? the cookie monster would certainly like it!'/>
</section>

<a id="about"/>
<section class="relative h-screen w-screen bg-neutral-900 z-20">
    <div class="absolute top-48 sm:top-48 left-5 sm:left-[10vw]">
        <Timeline/>
    </div>
    <div class="hidden sm:grid grid-cols-3">
        <div class="col-start-2 col-span-2 flex items-center w-full h-screen">
            <div class="flex flex-col justify-center w-full font-medium">
                <div class="agetext">I'm currently</div>
                <div class="agetext">{$age} seconds</div>
                <div class="agetext">old</div>
            </div>
        </div>
    </div>
</section>

<a id="projects"/>
<section class="relative h-screen w-screen bg-neutral-900">

    <div class="w-full flex items-center justify-center pt-28 lg:pt-32 relative mb-20">
        <div class="hidden sm:block w-[60vw] h-[0.1rem] bg-white"></div>
        <div class="absolute z-10 w-full flex justify-center">
            <h2 class="text-white font-bold text-3xl lg:text-5xl py-2 px-8 bg-neutral-900">My Projects</h2>
        </div>
    </div>

    <div class="grid lg:grid-cols-4 gap-8 px-4 lg:px-[10vw] h-[72%] overflow-y-auto">
        {#each Array(12) as project}
            <ProjectCard/>
        {/each}
    </div>
</section>

<a id="contact"/>
<section class="h-screen w-screen flex flex-col lg:flex-row items-center justify-center gap-8 bg-neutral-900">
    <a class="contactCard bg-[#0077b7] " target="_blank" href="https://www.linkedin.com/in/alexander-schnabl/">
        <img src="/socials/linkedin.png" alt="contact alexander schnabl on LinkedIn" class="h-full w-full object-contain"/>
    </a>
    <a class="contactCard bg-[#5865f2]" target="_blank" href="https://discordapp.com/users/415490584665522177">
        <img src="/socials/discord.png" alt="contact alex schnabl on Discord" class="h-full w-full object-contain"/>
    </a>
    <a class="contactCard bg-[#29a9eb]" target="_blank" href="https://t.me/botlx">
        <img src="/socials/telegram.png" alt="contact alex schnabl on Telegram" class="h-full w-full object-contain"/>
    </a>
    <a class="contactCard bg-gradient-to-b from-[#5770ff] to-[#70edff]" target="_blank"
       href="mailto:alexander.schnabl@ss-technologies.at">
        <img src="/socials/mail.png" alt="contact alexander schnabl via Mail" class="h-full w-full object-contain"/>
    </a>
</section>

<section class="relative w-screen bg-neutral-900 h-screen">
    <footer class="w-screen bg-neutral-800 flex flex-col items-center justify-center text-gray-400 font-medium h-screen">
        <h3>Copyright Alexander Schnabl {new Date().getFullYear()}, <a href="/imprint" class="hover:underline">Imprint</a></h3>
        <span>
            Website hosted by
            <a href="https://www.ss-technologies.at" target="_blank" class="pl-1 hover:underline">S&S Technologies GmbH</a>
        </span>
    </footer>
</section>