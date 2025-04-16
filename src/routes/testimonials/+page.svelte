<script lang="ts">
    import Button from '$lib/components/Button.svelte';
    import TestimonialCard from '$lib/components/TestimonialCard.svelte';
    import type { PageData } from './$types';

    export let data: PageData;

</script>

<svelte:head>
    <title>Testimonials | RS3 Tutoring</title>
    <meta name="description" content="Read testimonials from students who have benefited from RS3's free STEM tutoring." />
</svelte:head>

<section class="py-12 md:py-16">
    <h1 class="text-3xl md:text-4xl font-bold text-blue-900 mb-12 text-center">Student Testimonials</h1>

    <!-- Introduction (Optional) -->
    <section class="mb-12">
        <p class="text-lg text-gray-700 max-w-3xl mx-auto text-center">
            Hear directly from students about their experiences with RS3 tutoring and how it helped them succeed.
        </p>
    </section>

    <!-- Testimonial List -->
    <section class="mb-16">
        {#if data.testimonials && data.testimonials.length > 0}
             <!-- Use CSS Columns: 1 col mobile, 2 tablet, 3 desktop -->
            <div class="columns-1 md:columns-2 lg:columns-3 gap-8">
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
    </section>

    <!-- Call to Action -->
     <section class="text-center">
         <h2 class="text-2xl font-semibold text-blue-900 mb-4">Ready to Experience the Difference?</h2>
        <p class="text-gray-700 mb-6 max-w-xl mx-auto">
            Join other students who have boosted their confidence and understanding in STEM subjects.
        </p>
        <Button href="/signup" label="Request Free Tutoring Now" variant="primary" />
    </section>

</section>
