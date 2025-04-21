<script lang="ts">
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    import Button from '$lib/components/Button.svelte';
    import TestimonialCard from '$lib/components/TestimonialCard.svelte';
    import type { PageData } from './$types';
    import { subjectsInfo, subjectNames } from '$lib/subjects';
    import Typed from 'typed.js';

    export let data: PageData;

    onMount(async () => {
        new Typed('#subjects', {
            strings: subjectNames.map(str => ":" + str),
            typeSpeed: 50,
            showCursor: false,
            smartBackspace: true,
            loop: true
        });
    });
</script>

<svelte:head>
    <title>RS3 Tutoring | Free STEM Tutoring by Rishi Soni</title>

    <meta name="description" content="RS3 offers free, personalized STEM tutoring in Biology, Chemistry, Physics, and more for high school and early college students." />
</svelte:head>

<!-- Hero Section -->
<section class="text-center py-16 md:py-24 border-b border-gray-200">
        <h1 class="text-4xl md:text-6xl font-bold text-blue-900 mb-4">
            <span class="block">Unlock Your Potential in</span>
            <span id="subjects" class="typing text-yellow-500 block mt-1 md:mt-2 text-center"></span>
        </h1>
    <p class="max-w-2xl mx-auto text-lg text-gray-700 mb-8">
        Welcome to RS3! I'm Rishi Soni, offering dedicated, free one-on-one and small group tutoring in key STEM subjects to help you excel academically. Let's tackle challenging concepts together.
    </p>
    <div class="space-x-4">
        <Button href="/about" label="Learn More About Rishi" variant="secondary" />
        <Button href="/signup" label="Request Tutoring" variant="primary" />
    </div>
</section>

<!-- Services/Subjects Section -->
<section class="py-16 md:py-24">
     <h2 class="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">Subjects Offered</h2>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {#each subjectsInfo as subject}
        <div class="flex items-center space-x-3">
             <i class="{subject.iconClass} fa-fw text-blue-900 text-xl"></i><span class="text-lg">{subject.name}</span>
        </div>
        {/each}
        <div class="flex items-center space-x-3">
             <i class="fas fa-question-circle fa-fw text-blue-900 text-xl"></i><span class="text-lg">Other (Specify)</span>
        </div>
    </div>
</section>

<!-- Why Choose RS3 Section -->
<section class="py-16 md:py-24 bg-sky-50 rounded-lg">
     <h2 class="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">Why Choose RS3 Tutoring?</h2>
    <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
        <div class="text-center p-6 border border-sky-200 rounded-md bg-white shadow-sm">
             <i class="fas fa-user-graduate fa-fw text-blue-900 text-3xl mb-4"></i>
            <h3 class="text-xl font-semibold text-blue-900 mb-2">Personalized Approach</h3>
            <p class="text-gray-600 text-sm">Sessions tailored to your specific learning style, pace, and goals.</p>
        </div>
         <div class="text-center p-6 border border-sky-200 rounded-md bg-white shadow-sm">
             <i class="fas fa-hand-holding-heart fa-fw text-blue-900 text-3xl mb-4"></i>
            <h3 class="text-xl font-semibold text-blue-900 mb-2">Completely Free</h3>
            <p class="text-gray-600 text-sm">Access high-quality STEM support without any financial barriers. Passion-driven initiative.</p>
        </div>
         <div class="text-center p-6 border border-sky-200 rounded-md bg-white shadow-sm">
             <i class="fas fa-chalkboard-teacher fa-fw text-blue-900 text-3xl mb-4"></i>
            <h3 class="text-xl font-semibold text-blue-900 mb-2">Experienced Tutor</h3>
            <p class="text-gray-600 text-sm">Learn from an experienced tutor with a deep understanding of STEM subjects.</p>
        </div>
    </div>
</section>

<!-- Testimonials Snippet Section -->
<section class="py-16 md:py-24">
    <h2 class="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">What Students Say</h2>
     {#if data.testimonials && data.testimonials.length > 0}
     <!-- Use CSS Columns: 1 col mobile, 2 tablet/desktop -->
    <div class="columns-1 md:columns-2 gap-8 max-w-4xl mx-auto mb-12">
        {#each data.testimonials as testimonial (testimonial.id)}
             <TestimonialCard
                name={testimonial.name}
                grade={testimonial.grade}
                subjects={testimonial.subjects}
                message={testimonial.message}
                imageUrl={testimonial.imageUrl}
             />
        {/each}
    </div>
     {:else}
         <p class="text-center text-gray-500">No testimonials available yet.</p>
     {/if}
    <div class="text-center">
        <Button href="/testimonials" label="View More Testimonials" variant="secondary" />
    </div>
</section>

<!-- Final Call to Action Section -->
<section class="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg text-center">
     <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
    <p class="max-w-xl mx-auto text-lg text-blue-100 mb-8">
        Take the first step towards mastering STEM subjects. Fill out the quick interest form today!
    </p>
    <Button href="/signup" label="Sign Up for Free Tutoring" variant="primary" />
</section>

<style>
    :global(.typed-element) {
        display: block;
    }
</style>
