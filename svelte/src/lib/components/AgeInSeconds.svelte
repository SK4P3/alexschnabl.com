<script lang="ts">
    import {writable} from "svelte/store";

    let ms = +new Date() - +new Date(2002, 9, 23);
    let age = writable<number>(Math.floor(ms / 1000));

    setInterval(() => {
        ms = +new Date() - +new Date(2002, 9, 23);
        age.set(Math.floor(ms / 1000));
    }, 1000);
</script>

<div class="agetext">{$age} seconds</div>