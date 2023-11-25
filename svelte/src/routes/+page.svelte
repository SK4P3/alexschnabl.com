<script lang="ts">
    import SlideButton from "$lib/components/SlideButton.svelte";
    import {writable} from "svelte/store";
    import Timeline from "$lib/components/Timeline.svelte";
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import {onMount} from "svelte";
    import {currentSection, getWebpUrl, ImageQuality, sections} from "$lib/common";
    import type {PageData} from "./$types";

    export let data: PageData;

    let ms = +new Date() - +new Date(2002, 9, 23);
    let age = writable<number>(Math.floor(ms / 1000));

    setInterval(() => {
        ms = +new Date() - +new Date(2002, 9, 23);
        age.set(Math.floor(ms / 1000));
    }, 1000);

    let scrollContainer: HTMLDivElement;
    let scrollingDisabled = false;

    let startY: number;

    let home: HTMLAnchorElement;
    let about: HTMLAnchorElement;
    let projects: HTMLAnchorElement;
    let contact: HTMLAnchorElement;
    let imprint: HTMLAnchorElement;

    onMount(() => {
        sections.set([home, about, projects, contact, imprint]);
        scrollContainer.addEventListener('wheel', snapScrolling);
        scrollContainer.addEventListener('touchstart', swipeStart);
        scrollContainer.addEventListener('touchmove', snapSwipe);

        document.addEventListener("keydown", arrowScroll);
    });

    function arrowScroll(evt: any) {
        if (evt.key === "ArrowDown") {
            evt.preventDefault();
            handleScroll(true);
        } else if (evt.key === "ArrowUp") {
            evt.preventDefault();
            handleScroll(false);
        }
    }

    function excludedSnapScrolling(scrollDown: boolean) {
        const isMobile = window.innerWidth < 768;
        const projectsHeight = contact.offsetTop - projects.offsetTop;
        const scrollUpInProjects = scrollDown || (window.scrollY >= (projects.offsetTop + projectsHeight * 0.1) && (projects.offsetTop + projectsHeight * 0.7) >= window.scrollY)
        return scrollUpInProjects && isMobile && window.scrollY >= projects.offsetTop && (projects.offsetTop + projectsHeight * 0.7) >= window.scrollY
    }

    function snapScrolling(evt: any) {
        const scrollDown = evt.deltaY > 0;
        if (!excludedSnapScrolling(scrollDown)) {
            evt.preventDefault();
            handleScroll(scrollDown);
        }
    }

    function swipeStart(evt: any) {
        const touch = evt.touches[0];
        startY = touch.clientY;
    }

    function snapSwipe(evt: any) {
        if (!startY) return;

        const touch = evt.touches[0];
        const diffY = touch.clientY - startY;
        const scrollDown = diffY < 0;

        if (!excludedSnapScrolling(scrollDown)) {
            evt.preventDefault();
            handleScroll(scrollDown);
        }
    }

    function handleScroll(scrollDown: boolean) {
        if (!scrollingDisabled) {
            scrollingDisabled = true;

            if (scrollDown && $currentSection < $sections.length - 1) {
                currentSection.update((n) => ++n);
                scrollToSection($currentSection);
            } else if (!scrollDown && $currentSection !== 0) {
                currentSection.update((n) => --n);
                scrollToSection($currentSection);
            }

            setTimeout(() => {
                scrollingDisabled = false;
            }, 500);
        }
    }

    function scrollToSection(i: number) {
        currentSection.set(i);
        window.scrollTo({top: $sections[i].offsetTop, behavior: 'smooth'});
    }
</script>

<svelte:head>
    <title>Alex Schnabl | Personal Website</title>
    <meta name="description" content="Portfolio of Alex Schnabl - Co-Founder, CEO and Developer at S&S Technologies GmbH. View Alex's projects and learn about his work as an expert web and IT entrepreneur.">
    <meta name="author" content="Alexander Schnabl">
    <meta name="keywords" content="Alex Schnabl, Alexander Schnabl, Software Developer, Software Entrepreneur, Entrepreneur, S&S Technologies GmbH, CEO, Co-Founder">
</svelte:head>

<div class="hidden sm:block">
    <div class="fixed right-8 h-screen flex items-center text-[4rem] z-50">
        <div class="flex flex-col gap-4 justify-center items-center w-4 my-8">
            <button class="dot" class:dotActive={$currentSection === 0} on:click={() => scrollToSection(0)}/>
            <button class="dot" class:dotActive={$currentSection === 1} on:click={() => scrollToSection(1)}/>
            <button class="dot" class:dotActive={$currentSection === 2} on:click={() => scrollToSection(2)}/>
            <button class="dot" class:dotActive={$currentSection === 3} on:click={() => scrollToSection(3)}/>
            <button class="dot" class:dotActive={$currentSection === 4} on:click={() => scrollToSection(4)}/>
        </div>
    </div>
</div>

<div bind:this={scrollContainer} class="overflow-x-hidden">
    <a id="home" bind:this={home}/>
    <section class="relative flex items-center h-screen w-screen bg-neutral-900">
        <img src={getWebpUrl("b39bf6c9-1506-4a5b-9d7a-6a16922ffa9d", ImageQuality.HIGH)} class="absolute right-0 h-screen object-cover brightness-50 sm:brightness-100" alt='Alex Schnabl Profile'/>
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
                <SlideButton text="my work" sectionNum={2}/>
                <SlideButton text="get in touch" sectionNum={3}/>
            </div>
        </div>
        <img src={getWebpUrl("f5689639-755a-4132-881b-fdfd594716e2", ImageQuality.LOW)} class="absolute top-0 left-0 h-0 w-0" alt='what could it be? the cookie monster would certainly like it!'/>
    </section>

    <a id="about" bind:this={about}/>
    <section class="relative h-screen w-screen bg-neutral-900 z-20">
        <div class="absolute top-32 sm:top-48 left-5 sm:left-[10vw]">
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

    <a id="projects" bind:this={projects}/>
    <section class="relative min-h-screen w-screen bg-neutral-900">

        <div class="w-full flex items-center justify-center pt-28 lg:pt-32 relative mb-20">
            <div class="hidden sm:block w-[60vw] h-[0.1rem] bg-white"></div>
            <div class="absolute z-10 w-full flex justify-center">
                <h2 class="text-white font-bold text-3xl lg:text-5xl py-2 px-8 bg-neutral-900">My Projects</h2>
            </div>
        </div>

        <div class="grid lg:grid-cols-4 gap-8 py-4 px-4 lg:px-[10vw] overflow-y-auto">
            {#each data.projects as project}
                <ProjectCard {project}/>
            {/each}
        </div>
    </section>

    <a id="contact" bind:this={contact}/>
    <section class="h-screen w-screen flex flex-col lg:flex-row items-center justify-center gap-8 bg-neutral-900">
        <a class="contactCard bg-[#0077b7] " target="_blank" href="https://www.linkedin.com/in/alexander-schnabl/">
            <img src={getWebpUrl("0a516210-2d0b-400c-a6aa-34bcb0e1810b", ImageQuality.LOW)} alt="contact alexander schnabl on LinkedIn" class="h-full w-full object-contain"/>
        </a>
        <a class="contactCard bg-[#5865f2]" target="_blank" href="https://discordapp.com/users/415490584665522177">
            <img src={getWebpUrl("d158def5-2206-4cc1-b359-a47eb0c8b7fc", ImageQuality.LOW)} alt="contact alex schnabl on Discord" class="h-full w-full object-contain"/>
        </a>
        <a class="contactCard bg-[#29a9eb]" target="_blank" href="https://t.me/botlx">
            <img src={getWebpUrl("b793b5fc-06a5-41a5-8964-a6d60e1c4ef5", ImageQuality.LOW)} alt="contact alex schnabl on Telegram" class="h-full w-full object-contain"/>
        </a>
        <a class="contactCard bg-gradient-to-b from-[#5770ff] to-[#70edff]" target="_blank"
           href="mailto:alexander.schnabl@ss-technologies.at">
            <img src={getWebpUrl("08f5027a-021a-43b7-9778-3f71cea582e6", ImageQuality.LOW)} alt="contact alexander schnabl via Mail" class="h-full w-full object-contain"/>
        </a>
    </section>

    <a id="imprint" bind:this={imprint}/>
    <section class="relative w-screen bg-neutral-900 h-screen">
        <footer class="w-screen h-full bg-neutral-800 flex flex-col items-center justify-center text-gray-400 font-medium ">
            <h3>Copyright Alexander Schnabl {new Date().getFullYear()}, <a href="/imprint" class="hover:underline">Imprint</a></h3>
            <span>
                Website hosted by
                <a href="https://www.ss-technologies.at" target="_blank" class="pl-1 hover:underline">S&S Technologies GmbH</a>
            </span>
        </footer>
    </section>
</div>