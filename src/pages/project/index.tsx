import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Chip, Stack } from "@mui/material";
import { useTheme } from "@/context/themecontext";
import { CardSpotlight } from "@/components/CardSpotlight";
const projects = [
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
  },
];

const ProjectsSection = () => {
  const [active,setActive] = useState("Zaika Zunction");
  const theme = useTheme();
  const isDark = theme.theme === "dark";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            setActive(entry.target.id);
          }
        });
      },
      { root: null, threshold: 0.6 }
    );
    
    const els = Array.from(document.querySelectorAll("[id]"));
    els.forEach(el => observer.observe(el as Element));
    return () => els.forEach(el => observer.unobserve(el as Element));
  }, []);

  return (
    <Box>
      <CardSpotlight
        radius={400}
        color="#1a1a1a"
        className="relative border border-neutral-700 bg-black/90 rounded-xl shadow-lg"
      >
       {/* Hero Section */}
        <Box
          sx={{
            textAlign: "center",
            py: 6,
            opacity: 0.9
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: "var(--imp-text)",
            }}
          >
            Projects
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              color: "var(--imp-text)",
              fontWeight: 600,
              fontSize:"1.1rem"
            }}
          >
            Turning Ideas into Reality — A Showcase of My Work and Technical Journey
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
        {projects.map((project) => {
            const isActive = active === project.name;
            return (
        <Box
          key={project.name}
          id={project.name}
          sx={{
            position: "relative",
            overflow: "hidden",
            transition: "box-shadow 0.5s, transform 0.5s",
            transform: isActive ? "scale(1.02)" : "scale(1)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
            borderRadius: "0.75rem",
            padding: "1.5rem 1.3rem",
            minHeight: "250px",
            margin:"1.2rem 0rem",

            // 👇 Hover style: affect the h5 inside when hovered
            "&:hover h5": {
              color: "var(--imp-text)",
            },
          }}
        >
          {/* Spotlight overlay */}
          <Box
            sx={{
              position: "absolute",
              top: "-50%",
              left: "-50%",
              width: "200%",
              height: "200%",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
                {/* 🔲 Subtle Grid Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: isDark? 
                    `
                      linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)
                    ` 
                    : 
                    `
                      linear-gradient(to right, rgba(255, 255, 255, 0.27) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(241, 236, 239, 0.26) 1px, transparent 1px)
                    ` 
                    ,
                    backgroundSize: "20px 20px", // ✅ size of squares (adjust as needed)
                    pointerEvents: "none",
                    zIndex: 0,
                  }}
                />

                <Box sx={{ position: "relative", zIndex: 1 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 500,
                      mb: 2,
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    {project.name}
                  </Typography>

                  <Box sx={{ color: "var(--normal-text)", mb: 2 }}>
                    {project.description}
                  </Box>

                  <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
                    {project.techStack.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          border: "1px solid var(--imp-text)",
                          color: "var(--imp-text)",
                          opacity:0.8,
                          borderRadius: "9px",
                          padding:'1rem 0.5rem'
                        }}
                      />
                    ))}
                  </Stack>

                  <Stack direction="row" spacing={2}>
                    {project.github && (
                      <Button
                        variant="outlined"
                        sx={{
                          color:"var(--imp-text)",
                          borderColor: "var(--imp-text)", // Add this line
                          '&:hover': {
                            borderColor: "var(--imp-text)", // Optional: ensures hover state stays consistent
                            backgroundColor: 'rgba(0, 255, 255, 0.04)', // Optional: subtle hover effect
                          },
                        }}
                        startIcon={<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"></path></svg>}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                      >
                        GitHub
                      </Button>
                    )}
                    {project.live && (
                      <Button
                        variant="outlined"
                        // color="secondary"
                        sx={{
                          color:"var(--imp-text)",
                          borderColor: "var(--imp-text)", // Add this line
                          '&:hover': {
                            borderColor: "var(--imp-text)", // Optional: ensures hover state stays consistent
                            backgroundColor: 'rgba(0, 255, 255, 0.04)', // Optional: subtle hover effect
                          },
                        }}
                        startIcon={<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M6.952 12.67q.63-1.42 1.447-2.705q.817-1.284 1.793-2.461l-1.415-.295q-.404-.08-.783.031q-.378.112-.671.404L4.538 10.43q-.298.298-.22.727t.482.59zm12.527-8.847q-2.304.048-4.345 1.025T11.467 7.45q-1.046 1.046-1.853 2.273t-1.443 2.566q-.125.267-.125.547t.212.491l2.567 2.548q.212.212.482.221t.537-.115q1.339-.617 2.566-1.443t2.273-1.872q1.625-1.625 2.602-3.667t1.025-4.345q0-.162-.062-.304q-.061-.142-.192-.273t-.273-.192q-.143-.062-.304-.062m-5.485 6.316q-.44-.441-.44-1.067t.44-1.066t1.067-.44t1.066.44t.44 1.066t-.44 1.067t-1.066.44t-1.067-.44m-2.55 7.042l.923 2.152q.162.404.59.484q.43.081.728-.217l2.784-2.784q.293-.293.404-.684t.03-.796l-.287-1.395q-1.183.976-2.465 1.793q-1.282.816-2.707 1.447m-6.298-1.035q.587-.587 1.423-.58t1.423.593t.587 1.424t-.587 1.423q-.834.834-1.962 1.05q-1.128.215-2.278.325q.11-1.17.337-2.288t1.057-1.947"></path></svg>}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                      >
                        Live Demo
                      </Button>
                    )}
                  </Stack>
                </Box>
              </Box>
            );
          })}
        </Box>
      </CardSpotlight>
    </Box>
  );
};

export default ProjectsSection;
