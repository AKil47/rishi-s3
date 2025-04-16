import { featuredTestimonials } from '$lib/testimonials';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
    return {
        testimonials: featuredTestimonials
    };
};

export const prerender = true;
