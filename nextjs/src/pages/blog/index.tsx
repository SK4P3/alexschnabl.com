import BlogCard from "@/components/blog-card";
import Navbar from "@/components/navbar";
import Head from "next/head";
// todo get blogs from bucket/persistent storage
import proxyman from '../../../public/blog/proxyman.jpg';
import svelte from '../../../public/blog/svelte.png';
import mlIcon from '../../../public/blog/mlIcon.png';
import matrix from '../../../public/blog/matrix.png';

export default function Blog() {
    const articles = [
        // {
        //     thumb: matrix,
        //     title: "Set up Matrix Synapse and the Element client for end2end encrypted, self-hosted communication.",
        //     description: "Dont trust discord or other free communication platforms, they sell your data and dont value your privacy. Its not hard to setup a self hosted solution with Matrix Synapse and the Element client which provides first class privacy."
        // },
        {
            thumb: svelte,
            title: "Lazy-Loading Images and Components in Svelte and SvelteKit using Typescript",
            description: "Layz loading components and images in svelte kit is really easy. It can be achieved by simply defining a custom action modifier. In this post I walk trough every step of the process!"
        },
        {
            thumb: proxyman,
            title: "Using Proxyman to reverse engineer the Instagram private API",
            description: "The Instagram API traffic is encrypted using SSL/HTTPS. In this post I explain how to build a modified Instagram APK and use Proxyman and a custom certificate to intercetp the traffic sent by the app."
        },
        // {
        //     thumb: mlIcon,
        //     title: "Create image captions using the blip-image-captioning-large model and Docker",
        //     description: "Check out how easy it is to use pre-trained models with some basic python code to "
        // },
        // "10 essential tools for every software developer"
        // How to oAuth: Youtube, Twitter, Pinterest
        // "5 tips for managing a software development team"
        // "Why every entrepreneur should learn to code"
        // "How to hire the best developers for your startup"
        // "The benefits of open-source software for startups"
        // "Top programming languages to learn in 2023"
        // "Why software testing is critical for your startup's success"
        // "The importance of UX design in software development"
        // "How to build a successful software product from scratch"
        // "Why agile development is the future of software development"

    ]
    return (
        <div>
            <Head>
                <title>Alex Schnabl | Blog </title>
                <meta name="description" content="My blog section where I post work related stuff once in a while. Be sure to check it out" />
                <meta name="keywords" content="alex schnabl blog, blog, alexander schnabl, software developer, alex schnabl software, alex schnabl blog" />
            </Head>
            <Navbar showDots={false}></Navbar>
            <div className="h-screen bg-neutral-900 pt-[8vh]">
                <div className="relative w-screen flex items-center jusitfy-center">
                    <div className="left-[10vw] absolute w-[80vw] h-[0.1rem] bg-white"></div>
                    <div className="asolute z-10 w-full flex justify-center">
                        <h1 className="font-medium text-white text-[4rem] bg-neutral-900 py-2 px-8">Blog</h1>
                    </div>
                </div>
                <div className="w-screen h-maxflex jusitfy-center px-[10vw] pt-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-8">
                        {
                            articles.map((article: any) =>
                                <BlogCard
                                    key={article.title}
                                    thumb={article.thumb}
                                    title={article.title}
                                    description={article.description}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}