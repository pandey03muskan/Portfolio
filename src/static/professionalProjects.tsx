import React from "react";
import { PROJECT_IMAGES } from "./urls";

/**
 * Professional project data interface
 */
export interface ProfessionalProject {
  title: string;
  techStack: string;
  description: React.ReactNode;
  imageUrl: string;
  liveUrl?: string;
}

/**
 * Professional projects data
 */
export const professionalProjects: ProfessionalProject[] = [
  {
    title: "Initializ.ai Console",
    techStack: "Next.js, MUI, React",
    imageUrl: PROJECT_IMAGES.PRODUCT_CONSOLE,
    liveUrl: "https://console.initializ.ai/login/",
    description: (
      <>
         Contributed UI for <strong style={{color:"var(--imp-text)"}}>RAG</strong>, <strong style={{color:"var(--imp-text)"}}>MCP</strong>, and <strong style={{color:"var(--imp-text)"}}>Workflow</strong> integrations.
      </>
    ),
  },
  {
    title: "Assistant.ai",
    techStack: "Next.js, MUI, React",
    imageUrl: PROJECT_IMAGES.EXTERNAL_ASSISTANT,
    liveUrl: "https://assistant.initializ.ai/login/",
    description: (
      <>
        Platform for sharing and managing AI assistants with intuitive UI.
      </>
    ),
  },
  {
    title: "Prometheia",
    techStack: "Next.js, MUI, React",
    imageUrl: PROJECT_IMAGES.PROMETHEIA,
    description: (
      <>
        <strong style={{color:"var(--imp-text)"}}>Client Project</strong> - Automated Procurement process solution with dashboards and AI workflow.

      </>
    ),
  },
];
