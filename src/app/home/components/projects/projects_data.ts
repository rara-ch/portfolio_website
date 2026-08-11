import type { ImageData } from "@/utils/types/Image";

export type Project = {
  id: string;
  image: ImageData;
  title: string;
  description: string;
  isOpenSource: boolean;
  isProfessional: boolean;
  sourceCodeLink: string | null;
  technologies: string[];
  clients: string[];
};

export const projects : Project[] = [
    {
        id: 'fms',
        image: {
            path: '/images/profile.jpg',
            alt: 'PLACEHOLDER',
        },
        title: 'Financial Management System',
        description: 'A B2B monoapp for managing finances',
        isOpenSource: false,
        isProfessional: true,
        sourceCodeLink: null,
        technologies: [],
        clients: ['Tiwi Resources', 'Mantiyupwi Family Trust'],
    },
    {
        id: 'kakadu-info-interactive-guide',
        image: {
            path: '/images/profile.jpg',
            alt: 'PLACEHOLDER',
        },
        title: 'Kakadu Info Interative Guide',
        description: 'An educational mobile app for learning about Kakadu National Park',
        isOpenSource: false,
        isProfessional: true,
        sourceCodeLink: null,
        technologies: [],
        clients: ['Kakadu Info'],
    },
    {
        id: "entity1-toolbox",
        image: {
            path: '/images/profile.jpg',
            alt: 'PLACEHOLDER',
        },
        title: "eNTITy1 Toolbox",
        description: "An internal tool for employee timesheets, project & client management, and internal reporting",
        isOpenSource: false,
        isProfessional: true,
        sourceCodeLink: null,
        technologies: [],
        clients: ['eNTITy1'],
    },
    {
        id: 'entity1-website',
        image: {
            path: '/images/profile.jpg',
            alt: 'PLACEHOLDER',
        },
        title: "eNTITy1 Website",
        description: "eNTITy1's public marketing website",
        isOpenSource: false,
        isProfessional: true,
        sourceCodeLink: null,
        technologies: [],
        clients: ['eNTITy1'],
    },
    {
        id: 'http-package',
        image: {
            path: '/images/profile.jpg',
            alt: 'PLACEHOLDER',
        },
        title: "HTTP Package in Go",
        description: "In order to understand HTTP, I rebuilt the HTTP standard library package in Go",
        isOpenSource: true,
        isProfessional: false,
        sourceCodeLink: null,
        technologies: [],
        clients: [],
    }
]