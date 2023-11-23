<script>
    import SlideButton from "$lib/components/SlideButton.svelte";
</script>

<section class="relative flex items-center h-screen w-screen bg-neutral-900">
    <img src="/alex.png" class="absolute right-0 h-screen object-cover brightness-50 sm:brightness-100" alt='A images showing alex schnabl'/>
    <div class="flex flex-col gap-6 text-white z-20 lg:px-20">
        <div class="flex flex-col gap-4 text-center lg:text-start">
            <h1 class="text-2xl lg:text-3xl font-semibold uppercase">Alexander Schnabl</h1>
            <h2 class="text-4xl lg:text-5xl font-bold uppercase ">software entrepreneur</h2>
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

