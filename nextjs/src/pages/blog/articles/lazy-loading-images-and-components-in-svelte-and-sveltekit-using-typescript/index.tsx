import Navbar from "@/components/navbar";
import Image from "next/image";
import { CopyBlock, dracula } from "react-code-blocks";
import CommentSection from "@/components/comments";
import Footer from "@/components/footer";
import Head from "next/head";
// todo get blogs from bucket/persistent storage
export default function article1() {

    const lazy_load_modifier =
        `let observer: IntersectionObserver;

function getObserver() {

    if (observer) return;

    observer = new IntersectionObserver(
        (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.dispatchEvent(new CustomEvent('isVisible'));
                }
            });
        }
    );
}

export default function lazyLoad(element: any) {
    getObserver();
    
    observer.observe(element);

    return {
        destroy() {
            observer.unobserve(element);
        }
    }
}`

    const load_property =
        `// will become true if component comes into viewport
$: load = false;`

    const load_function =
        `async function loadImage() {
  const res = await supabase.storage.from("images").download("image.png");
  return await blobToBase64(res.data!);
}`

    const component_html =
        `<a use:lazyLoad on:isVisible={() => (load = true)}>
  {#if load}
    {#await loadImage()}
        <!--  Add Loading Animation here -->
    {:then data}
      <img src={data} alt="" />
    {/await}
  {/if}
</a>
}`

    const component =
        `<script lang = "ts" >
    import type { SupabaseClient } from "@supabase/supabase-js";
    import lazyLoad from "$lib/LazyLoadModifier";
    export let supabase: SupabaseClient;

    $: load = false;

    function blobToBase64(blob: Blob): any {
        return new Promise((resolve, _) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.readAsDataURL(blob);
        });
    }

    async function loadImage() {
        const res = await supabase.storage.from("binders").download("image.png");
        return await blobToBase64(res.data!);
    }
</script >

<a use:lazyLoad on:isVisible={() => (load = true)}>
    {#if load}
    {#await loadImage()}
        <!--  Add Loading Animation here -->
    {:then data}
        <img src={data} alt="" />
    {/await}
    {/if}
</a>
`




    return (
        <div className="w-screen bg-neutral-900 text-white pt-[10vh] overflow-x-scroll scroll-y">
            <Head>
                <title>Lazy-Loading Images and Components in Svelte and SvelteKit using Typescript</title>
                <meta name="description" content="Learn how to optimize website performance using lazy-loading in Svelte and SvelteKit with TypeScript. Enhance user experience and SEO ranking with reduced load times." />
                <meta name="keywords" content="Svelte, SvelteKit, TypeScript, Lazy-loading, Website Performance Optimization, User Experience, Reduce Load Times, SEO Ranking, Progressive JavaScript, Web Development" />
            </Head>
            <Navbar showDots={false}></Navbar>
            <div className="article">
                <a href="/blog">back</a>
                <h1 className="article-h1">Lazy-Loading Images and Components in Svelte and SvelteKit using Typescript</h1>
                <p className="article-h2">Overview</p>
                <ul className="article-overview-list">
                    <li><a href="#introduction">Introduction</a></li>
                    <li><a href="#modifier">Creating a custom modifier</a></li>
                    <li><a href="#lazyload">Using the modifier to lazy load a component</a></li>
                    <li><a href="#conclusion">Conclusion</a></li>
                </ul>
                <div className="article-content">
                    <span className="anchor" id="introduction"></span>
                    <p className="article-h2">Introduction</p>
                    <p>
                        User experience on websites and applications is one if not the most important part that must not be overlooked in the development process. A crucial part of offering an excellent user experience involves making sure your website or application loads quickly and efficiently. Lazy-loading images and components have emerged as a popular methodology to minimize load times and enhance your overall performance. This article focuses on the amalgamation of the progressive JavaScript framework Svelte, along with SvelteKit and Typescript, to implement meticulous lazy-loading. I will walk you through the process, explaining how Svelte and SvelteKit, when combined with the strict syntactical superset of JavaScript, i.e, Typescript, can aid in incorporating the lazy-loading strategy to significantly improve the performance of your web application.
                    </p>
                    <span className="anchor" id="modifier"></span>
                    <h2 className="article-h2">Creating a custom modifier</h2>
                    <h3 className="article-h3">LazyLoadModifier.ts</h3>
                    <ul className="article-list">
                        <li>
                            Create a new file called <b className="keyboard-shortcut">LazyLoadModifier.ts</b> in your <b className="keyboard-shortcut">$lib</b>.
                        </li>
                        <li>
                            The file should have the following content:
                        </li>
                        <div className="overflow-x-scroll">
                            <CopyBlock
                                text={lazy_load_modifier}
                                language="ts"
                                theme={dracula}
                                wrapLines
                            />
                        </div>
                        <li>
                            We are creating a new observer for the element where we will use the modifier. The observer will emit an event called 'isVisible' when the element
                            comes into the users viewport. This will make it easy to trigger the loading process of the element when the user wants to view it and thus 'lazy loading' it!
                        </li>
                    </ul>
                    <span className="anchor" id="lazyload"></span>
                    <h2 className="article-h2">Using the modifier to lazy load a component</h2>
                    <h3 className="article-h3">Lazy Loading a Component</h3>
                    <p>
                        To lazy load your component you will have to set up the modifier on the component and define a load function where your data fetching is handled. Once the
                        component comes into the users viewport, we will trigger the async function to load the data and then render the component!
                    </p>
                    <ul className="article-list">
                        <li>
                            Create your component called <b className="keyboard-shortcut">Component.svelte</b>.
                        </li>
                        <li className="overflow-x-scroll">
                            Create a reactive property called load like so:
                            <CopyBlock
                                text={load_property}
                                language="ts"
                                theme={dracula}
                                wrapLines
                            />
                        </li>
                        <li className="overflow-x-scroll">
                            Create an async function where your data gathering takes place. This is an example where an image is fetched from supabase and the base64 dataUrl is then
                            returned:
                            <CopyBlock
                                text={load_function}
                                language="ts"
                                theme={dracula}
                                wrapLines
                            />
                        </li>
                        <li className="overflow-x-scroll">
                            In the component, add <b className="keyboard-shortcut">use:lazyLoad</b> and <b className="keyboard-shortcut">on:isVisible={"{() => (load = true)}"}</b>
                            to the outer most html tag and wrap the inside with the content that should be lazy loaded in <b className="keyboard-shortcut">{"{#if load}"}</b>.
                            <div className="h-2" />
                            <CopyBlock
                                text={component_html}
                                language="html"
                                theme={dracula}
                                wrapLines
                            />
                        </li>
                    </ul>
                    <h3 className="article-h3">The whole component should look like this:</h3>
                    <div className="overflow-x-scroll">
                        <CopyBlock
                            text={component}
                            language="ts"
                            theme={dracula}
                            wrapLines
                        />
                    </div>
                    <span className="anchor" id="conclusion"></span>
                    <h2 className="article-h2">Conclusion</h2>
                    <p>
                        Wrapping up, it is undeniable that harnessing the power of Svelte and SvelteKit using Typescript to implement lazy-loading for images and components can vastly boost your website's performance. This not only enhances your user experience but also aids in better SEO rankings due to reduced page load times. By understanding and applying these progressive methodologies in your web development projects, you set yourself up for success in crafting fast and efficient applications. Remember, in the rapidly-evolving digital world, staying updated with the latest strategies like lazy-loading can prove pivotal in taking your web development game to the next level. Get started with Svelte, SvelteKit, and Typescript today, and experience a substantial difference in your application's performance!
                    </p>
                </div>
                <CommentSection />
            </div>
            <Footer />

        </div>
    )
}