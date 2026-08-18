import type { ImageData } from "@/utils/types/Image";
import { Technologies, type Technology } from "@/utils/types/Technology";

export interface ProjectTechnology {
  technology: Technology;
  isFrontEnd: boolean | null;
}

export interface Project {
  id: string;
  image: ImageData;
  title: string;
  description: string;
  isOpenSource: boolean;
  isProfessional: boolean;
  sourceCodeLink: string | null;
  technologies: ProjectTechnology[];
  isDecoupled: boolean;
}

export interface FlagshipProject extends Project {
  clients: string[];
	numTeamFrontEnd: number;
	numTeamBackEnd: number;
}

export const flagshipProject: FlagshipProject = {
  id: "fms",
  image: {
    path: "/images/profile.jpg",
    alt: "PLACEHOLDER",
  },
  title: "Financial Management System",
  description: "A B2B monoapp for managing finances",
  isOpenSource: false,
  isProfessional: true,
  sourceCodeLink: null,
  isDecoupled: true,
	numTeamFrontEnd: 1,
	numTeamBackEnd: 2,
  technologies: [
    {
      technology: Technologies.dart,
      isFrontEnd: true,
    },
    {
      technology: Technologies.flutter,
      isFrontEnd: true,
    },
    {
      technology: Technologies.coldfusion,
      isFrontEnd: false,
    },
    {
      technology: Technologies.msSQL,
      isFrontEnd: false,
    },
  ],
  clients: ["Tiwi Resources", "Mantiyupwi Family Trust"],
};

export const projects: Project[] = [
  {
    id: "kakadu-info-interactive-guide",
    image: {
      path: "/images/profile.jpg",
      alt: "PLACEHOLDER",
    },
    title: "Kakadu Info Interative Guide",
    description:
      "An educational mobile app for learning about Kakadu National Park",
    isOpenSource: false,
    isProfessional: true,
    sourceCodeLink: null,
    technologies: [
      {
        technology: Technologies.dart,
        isFrontEnd: true,
      },
      {
        technology: Technologies.flutter,
        isFrontEnd: true,
      },
      {
        technology: Technologies.coldfusion,
        isFrontEnd: false,
      },
    ],
    isDecoupled: true,
  },
  {
    id: "entity1-toolbox",
    image: {
      path: "/images/profile.jpg",
      alt: "PLACEHOLDER",
    },
    title: "eNTITy1 Toolbox",
    description:
      "An internal tool for employee timesheets, project & client management, and internal reporting",
    isOpenSource: false,
    isProfessional: true,
    sourceCodeLink: null,
    technologies: [
      {
        technology: Technologies.html,
        isFrontEnd: null,
      },
      {
        technology: Technologies.js,
        isFrontEnd: null,
      },
			{
        technology: Technologies.css,
        isFrontEnd: null,
      },
      {
        technology: Technologies.coldfusion,
        isFrontEnd: null,
      },
			{
        technology: Technologies.msSQL,
        isFrontEnd: null,
      },
    ],
    isDecoupled: false,
  },
  {
    id: "entity1-website",
    image: {
      path: "/images/profile.jpg",
      alt: "PLACEHOLDER",
    },
    title: "eNTITy1 Website",
    description: "eNTITy1's public marketing website",
    isOpenSource: false,
    isProfessional: true,
    sourceCodeLink: null,
    technologies: [
			      {
        technology: Technologies.html,
        isFrontEnd: null,
      },
      {
        technology: Technologies.js,
        isFrontEnd: null,
      },
			{
        technology: Technologies.css,
        isFrontEnd: null,
      },
      {
        technology: Technologies.coldfusion,
        isFrontEnd: null,
      },
		],
    isDecoupled: false,
  },
];
