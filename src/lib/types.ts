export interface Testimonial {
  id: number; // Add an ID for keying loops
  name: string;
  grade: string; // e.g., "Grade 11", "College Year 1"
  subjects: string[]; // e.g., ["Biology", "Chemistry"]
  message: string;
  imageUrl?: string; // Optional image URL
}

// Add SubjectInfo type
export interface SubjectInfo {
  name: string;
  iconClass: string; // e.g., "fas fa-flask"
}
