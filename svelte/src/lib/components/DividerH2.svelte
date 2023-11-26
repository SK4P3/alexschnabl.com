<script lang="ts">
    export let title: string;
</script>

<div class="relative w-screen flex items-center justify-center">
    <div class="left-[10vw] absolute w-[80vw] h-[0.1rem] bg-white"></div>
    <div class="z-10 w-full flex justify-center">
        <h2 class="font-medium text-white text-3xl bg-neutral-900 py-2 px-8 lg:px-0 lg:w-56 text-center">{title}</h2>
    </div>
</div>