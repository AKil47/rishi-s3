import { testimonials } from '$lib/testimonials';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
    // In a real app, you might fetch this data, but here we import static data
    return {
        testimonials: testimonials
    };
};

// Enable prerendering for this page if using adapter-static
export const prerender = true;
