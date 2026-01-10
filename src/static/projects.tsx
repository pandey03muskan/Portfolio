import React from "react";

/**
 * Static project data
 */
export interface Project {
  name: string;
  description: React.ReactNode;
  techStack: string[];
  github: string;
  live: string;
  type: "frontend" | "fullstack";
}

export const projects: Project[] = [
  {
    name: "Zaika Zunction",
    description: (
      <>
        <ul>
          <li>Zaika Junction is a two-phase culinary platform.</li>
          <li>
            In Phase 1, users can search and discover recipes using
            ingredient-based filtering and keyword search.
          </li>
          <li>
            In Phase 2, the platform acts as a social network — users can
            create, like, and follow others, and engage through private
            messaging.
          </li>
          <li>
            Real-time, one-on-one chat is implemented using Socket.IO,
            enabling persistent WebSocket connections and instant
            bi-directional communication between users.
          </li>
        </ul>
      </>
    ),
    techStack: ["Next.js", "MUI", "Node.js", "MongoDB"],
    github: "https://github.com/KhushbuY123/Zaika-Junction",
    live: "",
    type: "fullstack",
  },
  {
    name: "Audio Book",
    description: (
      <>
        <ul>
          <li>
            Developed a Python-based Audiobook application that converts
            written content from PDF files into natural-sounding speech using
            libraries like PyPDF2, pyttsx3, and tkinter.
          </li>
          <li>
            Utilizes PyPDF2 to extract text from user-selected PDF files and
            pyttsx3 for offline text-to-speech synthesis, ensuring the
            application works without internet dependency.
          </li>
          <li>
            Provides a simple and interactive GUI built with tkinter, allowing
            users to easily upload PDF files.
          </li>
        </ul>
      </>
    ),
    techStack: ["Python"],
    github: "https://github.com/pandey03muskan/AudioBook",
    live: "",
    type: "frontend",
  },
  {
    name: "Simon Says Game",
    description: (
      <>
        <ul>
          <li>Simon Says is a classic memory and pattern recognition game.</li>
        </ul>
      </>
    ),
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/pandey03muskan/SimonSays-Game",
    live: "https://pandey03muskan.github.io/SimonGame/",
    type: "frontend",
  },
  {
    name: "Colors Playground",
    description: (
      <>
        <ul>
          <li>
            This project is designed for beginners and focuses on basic color
            operations, such as retrieving colors and creating gradient effects.
          </li>
        </ul>
      </>
    ),
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/pandey03muskan/Colors_PalyGround",
    live: "https://pandey03muskan.github.io/PlayWithColors/",
    type: "frontend",
  },
];

