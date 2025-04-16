<script lang="ts">
  import type { Testimonial } from '$lib/types';

  // Props matching the Testimonial interface fields
  export let name: Testimonial['name'];
  export let grade: Testimonial['grade'];
  export let subjects: Testimonial['subjects'];
  export let message: Testimonial['message'];
  export let imageUrl: Testimonial['imageUrl'] = undefined;
</script>

<div class="border border-gray-200 rounded-lg p-6 shadow-sm bg-white hover:shadow-md transition-shadow duration-200 flex flex-col h-full text-center break-inside-avoid mb-8">
    {#if imageUrl}
        <img
            src={imageUrl}
            alt={`Photo of ${name}`}
            class="w-20 h-20 rounded-full mx-auto mb-4 object-cover shadow-md"
            loading="lazy"
        />
    {/if}
    <blockquote class="mb-4 text-gray-700 italic flex-grow text-center">
        <span class="inline-block before:content-['\201C'] after:content-['\201D']">
             {message}
        </span>
    </blockquote>
    <div class="mt-auto">
         <p class="font-semibold text-blue-900 mb-3">
            {name}
            <span class="block text-sm font-normal text-gray-500">{grade}</span>
        </p>
        {#if subjects && subjects.length > 0}
        <div class="flex flex-wrap gap-2 justify-center">
            {#each subjects as subject}
                <span class="inline-block bg-sky-100 text-sky-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {subject}
                </span>
            {/each}
        </div>
        {/if}
    </div>
</div>
