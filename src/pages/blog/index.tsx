import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';

const documents = [
  {
    id: "1",
    title: "JavaScript Learning DAY :01",
    description: `
 ## Array

### Two ways to declare an Array

  **1. Declaration using Array constructor**

    let myArray = new Array();  

  **2. Declaration using Array Literal**

    let myArray = [];

  Both will declare an empty array. Suppose we need to define an array of size 5 and by default assign \`true\` to each — in such cases, we can use the \`Array()\` constructor.

### Difference between Object and Map() in JS (Learn from array problem → Two Sum)

  | Feature            | Object                         | Map                                  |
  |--------------------|--------------------------------|---------------------------------------|
  | **1. Key Type**    | Only strings and symbols       | Any type (number, object, function…) |
  | **2. Declaration** | \`const obj = {};\`            | \`const map = new Map();\`            |
  | **3. Key Order**   | Not guaranteed (in older engines) | Maintains insertion order         |
`,
    image: "",
    time: "10:15 PM",
    date: "July 22,2025"
  }
];


const BlogCards = () => {
  const [active, setActive] = useState(""); // Optional, for highlighting

  return (
    <>
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
            Today&apos;s Spark
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              color:"var(--imp-text)",
              fontWeight: 600,
              fontSize:"1.1rem"
            }}
          >
            Code. Reflect. Repeat. — My Daily Learning Trail
          </Typography>
        </Box>
        <Box>
          {documents.map((section) => {
            const isActive = active === section?.id;
            return (
              <Box
                key={section.id}
                id={section.id}
                onMouseEnter={() => setActive(section.id)}
                onMouseLeave={() => setActive("")}
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  transition: "box-shadow 0.5s, transform 0.5s",
                  transform: isActive ? "scale(1.02)" : "scale(1)",
                  border: "1px solid grey",
                  borderRadius: "0.75rem",
                  padding: "1.5rem 1rem",
                  minHeight: "250px",
                  mb: 2,
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

                <Box sx={{ position: "relative", zIndex: 1 }}>
                  <Typography sx={{padding:"1rem",fontSize:"1.5rem",color: "white",fontWeight:"600"}}>
                    {section?.title}
                  </Typography>

                  <Box sx={{paddingX:"1rem"}}>
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        h1: ({ children }) => (
                          <Box component="h1" sx={{ fontSize: '1.8rem', fontWeight: 'bold', color: "var(--imp-text)", mt: 2, mb: 1 }}>
                            {children}
                          </Box>
                        ),
                        h2: ({ children }) => (
                          <Box component="h2" sx={{ fontSize: '1.5rem', fontWeight: 'bold', color: "var(--imp-text)", mt: 2, mb: 1 }}>
                            {children}
                          </Box>
                        ),
                        h3: ({ children }) => (
                          <Box component="h3" sx={{ fontSize: '1.1rem', fontWeight: 600, color: "var(--imp-text)", mt: 2, mb: 1 }}>
                            {children}
                          </Box>
                        ),
                        p: ({ children }) => (
                          <Box component="p" sx={{ color: "var(--normal-text)", mb: 1 }}>
                            {children}
                          </Box>
                        ),
                        code: ({ children }) => (
                          <Box
                            component="code"
                            sx={{
                              fontFamily: 'monospace',
                              backgroundColor: "var(--imp-background)",
                              color: "var(--imp-text)",
                              padding: '2px 6px',
                              borderRadius: '4px',
                              fontSize: '0.875rem',
                            }}
                          >
                            {children}
                          </Box>
                        ),
                        pre: ({ children }) => (
                          <Box
                            component="pre"
                            sx={{
                              backgroundColor: "var(--imp-background)",
                              color: "var(--imp-text)",
                              padding: '12px',
                              borderRadius: '6px',
                              overflowX: 'auto',
                              my: 2,
                            }}
                          >
                            {children}
                          </Box>
                        ),
                        table: ({ children }) => (
                          <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse', mt: 2 }}>
                            {children}
                          </Box>
                        ),
                        thead: ({ children }) => (
                          <Box component="thead" sx={{ bgcolor: "var(--imp-text)", color: "var(--normal-text)", opacity: 0.8 }}>
                            {children}
                          </Box>
                        ),
                        tbody: ({ children }) => <Box component="tbody">{children}</Box>,
                        tr: ({ children }) => (
                          <Box component="tr" sx={{ borderBottom: '1px solid #444' }}>
                            {children}
                          </Box>
                        ),
                        th: ({ children }) => (
                          <Box component="th" sx={{ padding: '8px', textAlign: 'left', color: "var(--normal-text)" }}>
                            {children}
                          </Box>
                        ),
                        td: ({ children }) => (
                          <Box component="td" sx={{ padding: '8px', color: "var(--normal-text)" }}>
                            {children}
                          </Box>
                        ),
                        li: ({ children }) => (
                          <Box component="li" sx={{ color: "var(--normal-text)", pl: 1.5, mb: 0.5 }}>
                            {children}
                          </Box>
                        ),
                        strong: ({ children }) => (
                          <Box component="strong" sx={{ color: "var(--imp-text)" }}>
                            {children}
                          </Box>
                        ),
                      }}
                    >
                      {section?.description}
                    </ReactMarkdown>
                  </Box>

                  {/* Optional: display date and time */}
                  <Typography
                    variant="caption"
                    sx={{
                      color: "var(--normal-text)",
                      mt: 5,
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      fontSize: "0.75rem",
                      letterSpacing: "0.4px",
                    }}
                  >
                    <span style={{fontSize:"1rem",fontWeight:"bold"}}>{section?.date}</span>
                    <Box sx={{ width: 4, height: 4, bgcolor: "var(--normal-text)", borderRadius: "50%" }} />
                    <span style={{fontSize:"1rem",fontWeight:"bold"}}>{section?.time}</span>
                  </Typography>

                </Box>
              </Box>
            );
          })}
        </Box>
    </>
  );
};

export default BlogCards;
