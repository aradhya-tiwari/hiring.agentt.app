<!-- 
  NOTE: This is a complete Svelte 5 application structured into multiple components.
  In a real project, each component would be in its own .svelte file 
  (e.g., App.svelte, Header.svelte, FeatureCard.svelte). 
  For demonstration, they are combined here. You would typically use a 
  build tool like Vite to compile this project.

  To run this:
  1. Set up a Svelte 5 project (e.g., using `npm create vite@latest my-app -- --template svelte`).
  2. Install Tailwind CSS for Svelte: https://tailwindcss.com/docs/guides/sveltekit
  3. Replace the contents of `src/App.svelte` with the App component below.
  4. Create new files in `src/lib/components/` for each subsequent component.
  5. Place the global styles in your main `app.css` or in a `<style global>` tag in `App.svelte`.
-->

<!-- FILE: src/App.svelte -->
<script>
    import Header from "$lib/components/Header.svelte";
    import Hero from "$lib/components/Hero.svelte";
    import Features from "$lib/components/Features.svelte";
    import HowItWorks from "$lib/components/HowItWorks.svelte";
    import Pricing from "$lib/components/Pricing.svelte";
    import Faq from "$lib/components/Faq.svelte";
    import Cta from "$lib/components/Cta.svelte";
    import Footer from "$lib/components/Footer.svelte";

    let isMobileMenuOpen = $state(false);

    function toggleMobileMenu() {
        isMobileMenuOpen = !isMobileMenuOpen;
    }
</script>

<div class="antialiased">
    <Header />
    <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <Faq />
        <Cta />
    </main>
    <Footer />
</div>

<!-- FILE: src/lib/components/Header.svelte -->
<!-- <script>
  let isMobileMenuOpen = $state(false);

  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }
</script> -->

<header
    class="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-lg border-b border-slate-800"
>
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold tracking-tighter">
            <a href="#" class="gradient-text">HireGenius</a>
        </h1>
        <nav class="hidden md:flex items-center space-x-8">
            <a
                href="#features"
                class="text-slate-300 hover:text-white transition-colors"
                >Features</a
            >
            <a
                href="#how-it-works"
                class="text-slate-300 hover:text-white transition-colors"
                >How It Works</a
            >
            <a
                href="#pricing"
                class="text-slate-300 hover:text-white transition-colors"
                >Pricing</a
            >
            <a
                href="#faq"
                class="text-slate-300 hover:text-white transition-colors">FAQ</a
            >
        </nav>
        <a
            href="#"
            class="hidden md:inline-block px-5 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-colors font-semibold"
            >Request a Demo</a
        >
        <button onclick={toggleMobileMenu} class="md:hidden text-white">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                />
            </svg>
        </button>
    </div>
    <!-- Mobile Menu -->
    {#if isMobileMenuOpen}
        <div class="md:hidden px-6 pb-4">
            <a
                href="#features"
                class="block py-2 text-slate-300 hover:text-white">Features</a
            >
            <a
                href="#how-it-works"
                class="block py-2 text-slate-300 hover:text-white"
                >How It Works</a
            >
            <a
                href="#pricing"
                class="block py-2 text-slate-300 hover:text-white">Pricing</a
            >
            <a href="#faq" class="block py-2 text-slate-300 hover:text-white"
                >FAQ</a
            >
            <a
                href="#"
                class="block mt-2 px-5 py-2 text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-500"
                >Request a Demo</a
            >
        </div>
    {/if}
</header>

<!-- FILE: src/lib/components/Hero.svelte -->
<section
    class="pt-32 pb-20 md:pt-48 md:pb-32 text-center relative overflow-hidden"
>
    <div
        class="absolute inset-0 bg-grid-slate-800/[0.2] [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)]"
    ></div>
    <div class="container mx-auto px-6 relative">
        <div
            class="bg-indigo-500/30 blur-[100px] w-96 h-96 absolute -top-16 left-1/2 -translate-x-1/2 rounded-full opacity-50"
        ></div>
        <h2
            class="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-6 leading-tight"
        >
            The Future of Hiring is <span class="gradient-text"
                >Intelligent</span
            >
        </h2>
        <p class="text-lg md:text-xl max-w-3xl mx-auto text-slate-400 mb-10">
            Our AI-powered platform automates screening, interviews, and
            testing, so you can focus on what matters most: hiring the best
            talent.
        </p>
        <div class="flex justify-center items-center gap-4">
            <a
                href="#"
                class="cta-button px-8 py-4 text-white bg-indigo-600 rounded-lg font-bold text-lg"
                >Get Started Free</a
            >
            <a
                href="#how-it-works"
                class="px-8 py-4 text-slate-300 bg-slate-800/50 border border-slate-700 rounded-lg font-bold text-lg hover:bg-slate-800 transition-colors"
                >Learn More</a
            >
        </div>
    </div>
</section>

<!-- FILE: src/lib/components/Features.svelte -->
<!-- <script>
    import FeatureCard from '$lib/components/FeatureCard.svelte';

    const features = [
        {
            title: "Custom Application Forms",
            description: "Create beautiful, branded job application forms that candidates can fill out on any device. No coding required.",
            icon: `<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>`
        },
        {
            title: "AI Resume Screener",
            description: "Instantly screen thousands of resumes to find candidates with the right skills and experience, saving you countless hours.",
            icon: `<path d="M21.5 12c0-5.25-4.25-9.5-9.5-9.5S2.5 6.75 2.5 12c0 5.25 4.25 9.5 9.5 9.5s9.5-4.25 9.5-9.5z"></path><path d="M12 8v4l2 2"></path>`
        },
        {
            title: "AI Voice Interviewer",
            description: "Conduct consistent, unbiased first-round interviews 24/7 with our conversational AI voice agent.",
            icon: `<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>`
        },
        {
            title: "Custom Test Creator",
            description: "Build tailored skill assessments and coding challenges to objectively measure candidate abilities.",
            icon: `<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>`
        },
        {
            title: "Advanced Candidate Insights",
            description: "Get a 360-degree view of every applicant with detailed reports, scores, and interview transcripts.",
            icon: `<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>`
        },
        {
            title: "Hiring Drive Management",
            description: "Organize and manage large-scale hiring events seamlessly from a centralized dashboard.",
            icon: `<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>`
        }
    ];
</script> -->

<section id="features" class="py-20">
    <div class="container mx-auto px-6">
        <div class="text-center mb-16">
            <h3 class="text-3xl md:text-4xl font-bold tracking-tight">
                Everything you need to hire faster
            </h3>
            <p class="text-slate-400 mt-3 max-w-2xl mx-auto">
                From application to offer, streamline your entire hiring
                workflow with our powerful features.
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each features as feature}
                <FeatureCard
                    title={feature.title}
                    description={feature.description}
                    icon={feature.icon}
                />
            {/each}
        </div>
    </div>
</section>

<!-- FILE: src/lib/components/FeatureCard.svelte -->
<!-- <script>
    let { title, description, icon } = $props();
</script> -->

<div class="feature-card p-8 rounded-2xl">
    <div
        class="w-12 h-12 bg-indigo-600/20 text-indigo-400 rounded-lg flex items-center justify-center mb-5"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            {@html icon}
        </svg>
    </div>
    <h4 class="text-xl font-bold mb-2">{title}</h4>
    <p class="text-slate-400">{description}</p>
</div>

<!-- FILE: src/lib/components/HowItWorks.svelte -->
<section id="how-it-works" class="py-20 bg-slate-900/50">
    <div class="container mx-auto px-6">
        <div class="text-center mb-16">
            <h3 class="text-3xl md:text-4xl font-bold tracking-tight">
                Hire in 3 Simple Steps
            </h3>
            <p class="text-slate-400 mt-3 max-w-2xl mx-auto">
                Go from job posting to top candidates in record time.
            </p>
        </div>
        <div class="relative">
            <!-- Dotted line for desktop -->
            <div
                class="hidden md:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-slate-700 -translate-y-1/2"
            ></div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                <!-- Step 1 -->
                <div class="text-center">
                    <div class="relative inline-block">
                        <div
                            class="w-16 h-16 bg-slate-800 border-2 border-slate-700 rounded-full flex items-center justify-center text-2xl font-bold text-indigo-400"
                        >
                            1
                        </div>
                    </div>
                    <h4 class="text-xl font-bold mt-6 mb-2">
                        Create Your Drive
                    </h4>
                    <p class="text-slate-400">
                        Define your job role, set screening criteria, and
                        customize your interview questions.
                    </p>
                </div>
                <!-- Step 2 -->
                <div class="text-center">
                    <div class="relative inline-block">
                        <div
                            class="w-16 h-16 bg-slate-800 border-2 border-slate-700 rounded-full flex items-center justify-center text-2xl font-bold text-indigo-400"
                        >
                            2
                        </div>
                    </div>
                    <h4 class="text-xl font-bold mt-6 mb-2">AI Takes Over</h4>
                    <p class="text-slate-400">
                        Our AI automatically screens resumes and conducts
                        initial voice interviews with qualified applicants.
                    </p>
                </div>
                <!-- Step 3 -->
                <div class="text-center">
                    <div class="relative inline-block">
                        <div
                            class="w-16 h-16 bg-slate-800 border-2 border-slate-700 rounded-full flex items-center justify-center text-2xl font-bold text-indigo-400"
                        >
                            3
                        </div>
                    </div>
                    <h4 class="text-xl font-bold mt-6 mb-2">Hire the Best</h4>
                    <p class="text-slate-400">
                        Receive a shortlist of top candidates with detailed
                        insights, ready for final interviews.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- FILE: src/lib/components/Pricing.svelte -->
<section id="pricing" class="py-20">
    <div class="container mx-auto px-6">
        <div class="text-center mb-16">
            <h3 class="text-3xl md:text-4xl font-bold tracking-tight">
                Fair & Simple Pricing
            </h3>
            <p class="text-slate-400 mt-3 max-w-2xl mx-auto">
                Choose a plan that scales with your hiring needs. No hidden
                fees.
            </p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <!-- Plan 1: Starter -->
            <div class="feature-card p-8 rounded-2xl flex flex-col">
                <h4 class="text-2xl font-bold mb-2">Starter</h4>
                <p class="text-slate-400 mb-6">
                    For small teams getting started.
                </p>
                <p class="text-5xl font-extrabold mb-6">
                    $99<span class="text-lg font-medium text-slate-400"
                        >/mo</span
                    >
                </p>
                <ul class="space-y-4 text-slate-300 mb-8 flex-grow">
                    <li class="flex items-center">
                        <svg
                            class="w-5 h-5 text-indigo-400 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            ><path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            ></path></svg
                        >5 Active Job Posts
                    </li>
                    <li class="flex items-center">
                        <svg
                            class="w-5 h-5 text-indigo-400 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            ><path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            ></path></svg
                        >500 AI Screenings/mo
                    </li>
                    <li class="flex items-center">
                        <svg
                            class="w-5 h-5 text-indigo-400 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            ><path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            ></path></svg
                        >50 AI Interviews/mo
                    </li>
                </ul>
                <a
                    href="#"
                    class="w-full text-center py-3 px-6 bg-slate-800 border border-slate-700 rounded-lg font-semibold hover:bg-slate-700 transition-colors"
                    >Choose Plan</a
                >
            </div>
            <!-- Plan 2: Pro (Featured) -->
            <div
                class="relative border-2 border-indigo-500 p-8 rounded-2xl flex flex-col"
                style="background: linear-gradient(180deg, #0A0A0A 0%, #1E1B4B 100%);"
            >
                <p
                    class="absolute top-0 -translate-y-1/2 bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-semibold"
                >
                    Most Popular
                </p>
                <h4 class="text-2xl font-bold mb-2">Pro</h4>
                <p class="text-slate-400 mb-6">
                    For growing companies that hire regularly.
                </p>
                <p class="text-5xl font-extrabold mb-6">
                    $249<span class="text-lg font-medium text-slate-400"
                        >/mo</span
                    >
                </p>
                <ul class="space-y-4 text-slate-300 mb-8 flex-grow">
                    <li class="flex items-center">
                        <svg
                            class="w-5 h-5 text-indigo-400 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            ><path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            ></path></svg
                        >25 Active Job Posts
                    </li>
                    <li class="flex items-center">
                        <svg
                            class="w-5 h-5 text-indigo-400 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            ><path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            ></path></svg
                        >2,500 AI Screenings/mo
                    </li>
                    <li class="flex items-center">
                        <svg
                            class="w-5 h-5 text-indigo-400 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            ><path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            ></path></svg
                        >250 AI Interviews/mo
                    </li>
                    <li class="flex items-center">
                        <svg
                            class="w-5 h-5 text-indigo-400 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            ><path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            ></path></svg
                        >Custom Test Creator
                    </li>
                </ul>
                <a
                    href="#"
                    class="w-full text-center py-3 px-6 bg-indigo-600 rounded-lg font-semibold hover:bg-indigo-500 transition-colors"
                    >Choose Plan</a
                >
            </div>
            <!-- Plan 3: Enterprise -->
            <div class="feature-card p-8 rounded-2xl flex flex-col">
                <h4 class="text-2xl font-bold mb-2">Enterprise</h4>
                <p class="text-slate-400 mb-6">
                    For large organizations with custom needs.
                </p>
                <p class="text-4xl font-extrabold mb-6">Let's Talk</p>
                <ul class="space-y-4 text-slate-300 mb-8 flex-grow">
                    <li class="flex items-center">
                        <svg
                            class="w-5 h-5 text-indigo-400 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            ><path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            ></path></svg
                        >Unlimited Job Posts
                    </li>
                    <li class="flex items-center">
                        <svg
                            class="w-5 h-5 text-indigo-400 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            ><path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            ></path></svg
                        >Custom Integrations
                    </li>
                    <li class="flex items-center">
                        <svg
                            class="w-5 h-5 text-indigo-400 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            ><path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            ></path></svg
                        >Dedicated Support
                    </li>
                    <li class="flex items-center">
                        <svg
                            class="w-5 h-5 text-indigo-400 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            ><path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            ></path></svg
                        >Advanced Security & SSO
                    </li>
                </ul>
                <a
                    href="#"
                    class="w-full text-center py-3 px-6 bg-slate-800 border border-slate-700 rounded-lg font-semibold hover:bg-slate-700 transition-colors"
                    >Contact Sales</a
                >
            </div>
        </div>
    </div>
</section>

<!-- FILE: src/lib/components/Faq.svelte -->
<!-- <script>
    import FaqItem from '$lib/components/FaqItem.svelte';
    let openFaqId = $state(null);

    const faqs = [
        {
            id: 1,
            question: "How does the AI resume screening work?",
            answer: "Our AI uses Natural Language Processing (NLP) to parse resumes and match them against your job requirements. It understands context, skills, and experience to rank candidates, significantly reducing your manual review time."
        },
        {
            id: 2,
            question: "Is the AI voice interviewer biased?",
            answer: "No, our AI is designed to be completely objective. It asks the same pre-defined questions to every candidate in a consistent tone and evaluates answers based solely on the content, removing unconscious human bias from the initial screening process."
        },
        {
            id: 3,
            question: "Can I integrate HireGenius with my existing ATS?",
            answer: "Yes, our Pro and Enterprise plans offer integrations with popular Applicant Tracking Systems (ATS) like Greenhouse, Lever, and Workday. This allows for a seamless flow of candidate data between platforms."
        }
    ];

    function toggleFaq(id) {
        openFaqId = openFaqId === id ? null : id;
    }
</script> -->

<section id="faq" class="py-20 bg-slate-900/50">
    <div class="container mx-auto px-6">
        <div class="text-center mb-16">
            <h3 class="text-3xl md:text-4xl font-bold tracking-tight">
                Frequently Asked Questions
            </h3>
            <p class="text-slate-400 mt-3 max-w-2xl mx-auto">
                Have questions? We have answers.
            </p>
        </div>
        <div class="max-w-3xl mx-auto">
            {#each faqs as faq}
                <FaqItem
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openFaqId === faq.id}
                    onToggle={() => toggleFaq(faq.id)}
                />
            {/each}
        </div>
    </div>
</section>

<!-- FILE: src/lib/components/FaqItem.svelte -->
<!-- <script>
    import { slide } from 'svelte/transition';
    let { question, answer, isOpen, onToggle } = $props();
</script> -->

<div class="faq-item py-6">
    <button
        onclick={onToggle}
        class="w-full flex justify-between items-center text-left text-lg font-semibold"
    >
        <span>{question}</span>
        <svg
            class="w-5 h-5 transform transition-transform"
            class:rotate-180={isOpen}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
            ></path></svg
        >
    </button>
    {#if isOpen}
        <div
            transition:slide={{ duration: 300 }}
            class="pt-4 text-slate-400 overflow-hidden"
        >
            {answer}
        </div>
    {/if}
</div>

<!-- FILE: src/lib/components/Cta.svelte -->
<section class="py-20">
    <div class="container mx-auto px-6 text-center">
        <div class="max-w-3xl mx-auto">
            <h3 class="text-3xl md:text-4xl font-bold tracking-tight">
                Ready to Revolutionize Your Hiring?
            </h3>
            <p class="text-lg md:text-xl text-slate-400 mt-4 mb-8">
                Join hundreds of innovative companies building their dream teams
                with HireGenius. Start your free trial today and experience the
                future of recruitment.
            </p>
            <a
                href="#"
                class="cta-button px-10 py-5 text-white bg-indigo-600 rounded-lg font-bold text-xl"
            >
                Start Hiring Smarter
            </a>
        </div>
    </div>
</section>

<!-- FILE: src/lib/components/Footer.svelte -->
<footer class="bg-slate-900/50 border-t border-slate-800">
    <div class="container mx-auto px-6 py-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
                <h3 class="text-xl font-bold gradient-text">HireGenius</h3>
                <p class="text-slate-400 mt-2">Intelligent Hiring Automation</p>
            </div>
            <div>
                <h4 class="font-semibold text-white">Product</h4>
                <ul class="mt-4 space-y-2 text-slate-400">
                    <li>
                        <a href="#features" class="hover:text-white">Features</a
                        >
                    </li>
                    <li>
                        <a href="#pricing" class="hover:text-white">Pricing</a>
                    </li>
                    <li>
                        <a href="#" class="hover:text-white">Request Demo</a>
                    </li>
                </ul>
            </div>
            <div>
                <h4 class="font-semibold text-white">Company</h4>
                <ul class="mt-4 space-y-2 text-slate-400">
                    <li><a href="#" class="hover:text-white">About Us</a></li>
                    <li><a href="#" class="hover:text-white">Careers</a></li>
                    <li><a href="#" class="hover:text-white">Contact</a></li>
                </ul>
            </div>
            <div>
                <h4 class="font-semibold text-white">Legal</h4>
                <ul class="mt-4 space-y-2 text-slate-400">
                    <li>
                        <a href="#" class="hover:text-white">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" class="hover:text-white">Terms of Service</a
                        >
                    </li>
                </ul>
            </div>
        </div>
        <div
            class="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500"
        >
            <p>&copy; 2024 HireGenius. All rights reserved.</p>
        </div>
    </div>
</footer>

<style>
    :global(body) {
        font-family: "Inter", sans-serif;
        background-color: #0a0a0a;
        color: #e2e8f0;
    }
    :global(.gradient-text) {
        background: linear-gradient(90deg, #38bdf8, #a78bfa);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    :global(.feature-card) {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        transition: all 0.3s ease;
    }
    :global(.feature-card:hover) {
        transform: translateY(-5px);
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(167, 139, 250, 0.5);
    }
    :global(.cta-button) {
        transition: all 0.3s ease;
    }
    :global(.cta-button:hover) {
        transform: scale(1.05);
        box-shadow: 0 0 20px rgba(167, 139, 250, 0.5);
    }
    :global(.faq-item) {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
</style>
