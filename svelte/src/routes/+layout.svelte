<script lang="ts">
    import "../app.css";
    import Navbar from "$lib/components/Navbar.svelte";
    import {fade} from "svelte/transition";
    import Footer from "$lib/components/Footer.svelte";

    export let data: any;
</script>

<Navbar/>

<!--{#key data.urlPathname}-->
<!--    <div-->
<!--            in:fade={{duration: 200, delay: 200}}-->
<!--            out:fade={{duration: 200}}-->
<!--    >-->
<slot/>
<!--</div>-->
<!--{/key}-->

<Footer/>