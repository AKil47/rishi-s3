import type { Testimonial } from './types';

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Johnson",
    grade: "Grade 11",
    subjects: ["Physics", "Chemistry"],
    message: "Rishi's explanations made complex Physics topics so much clearer! My grades improved significantly.",
    imageUrl: "https://placehold.co/100x100?text=Alex+J" // Placeholder image
  },
  {
    id: 2,
    name: "Samantha Lee",
    grade: "College Year 1",
    subjects: ["Organic Chemistry"],
    message: "Organic Chemistry was intimidating, but Rishi's patient approach and practice problems really helped build my confidence."
    // No image provided
  },
  {
    id: 3,
    name: "Michael Chen",
    grade: "Grade 10",
    subjects: ["Biology"],
    message: "I actually started looking forward to Biology sessions. Rishi makes learning engaging and fun.",
     imageUrl: "https://placehold.co/100x100?text=Michael+C" // Placeholder image
  },
  {
    id: 4,
    name: "Emily White",
    grade: "Grade 12",
    subjects: ["Physics", "Calculus (Assumed Subject)"],
    message: "Great help preparing for AP exams. Rishi knew exactly which areas to focus on."
     // No image provided
  },
  {
    id: 5,
    name: "Jordan Green",
    grade: "College Year 2",
    subjects: ["Neuroscience", "Psychology"],
    message: "Rishi has a knack for breaking down difficult concepts in Neuroscience. Highly recommend!",
    imageUrl: "https://placehold.co/100x100?text=Jordan+G" // Placeholder image
  },
  {
    id: 6,
    name: "Chloe Davis",
    grade: "Grade 9",
    subjects: ["Chemistry"],
    message: "Made Chemistry less scary and much more understandable. Thanks, Rishi!"
     // No image provided
  },
];

export const featuredTestimonials = testimonials.slice(0, 2); // Get first 2 for home page
