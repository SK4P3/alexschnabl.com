<script lang="ts">
    import {fade} from 'svelte/transition';
    import {onMount} from "svelte";

    export let href: string;
    export let text: string;

    let preload = true;

    onMount(() => {
        setTimeout(function () {
            preload = false;
        }, 500);
    })
</script>


<a class="relative w-[18rem] h-16 cursor-pointer overflow-hidden border-2 border-white" href={href}>
    <div class="absolute btn-slide flex w-[36rem]" class:preload={preload}>
        <div class="bg-neutral-900 w-[36rem] h-15"></div>
        <div class="bg-white w-[36rem] h-16"></div>
    </div>
    <div class="mix-blend-difference absolute w-full h-full flex items-center justify-center z-50 pointer-events-none">
        <b class="text-white  text-lg font-bold">{text}</b>
    </div>
</a>

<style>

    .preload {
        animation-duration: 0s !important;
        -webkit-animation-duration: 0s !important;
        transition:background-color 0s, opacity 0s, color 0s, width 0s, height 0s, padding 0s, margin 0s !important;
    }

    .btn-slide {
        animation: slide-rev 0.5s forwards;
    }

    .btn-slide:hover {
        animation: slide 0.5s forwards;
    }

    @keyframes slide-rev {
        0% {
            transform: translate(-50%, 0);
        }

        100% {
            transform: translate(-0%, 0);
        }
    }

    @keyframes slide {
        0% {
            transform: translate(-0%, 0);
        }

        100% {
            transform: translate(-50%, 0);
        }
    }
</style>