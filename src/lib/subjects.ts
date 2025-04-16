import type { SubjectInfo } from './types';

export const subjectsInfo: SubjectInfo[] = [
    { name: "Biology", iconClass: "fas fa-dna" },
    { name: "Chemistry", iconClass: "fas fa-flask" },
    { name: "Physics", iconClass: "fas fa-atom" },
    { name: "Neuroscience", iconClass: "fas fa-brain" },
    { name: "Psychology", iconClass: "fas fa-head-side-virus" },
    { name: "Organic Chemistry", iconClass: "fas fa-mortar-pestle" }
];

// Optionally, export just the names if needed elsewhere frequently
export const subjectNames: string[] = subjectsInfo.map(s => s.name); 
