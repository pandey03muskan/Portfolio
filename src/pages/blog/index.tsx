import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import { useTheme } from "@/context/themecontext";

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
    date: "July 22, 2025"
  },
  {
    id: "2",
    title: "JavaScript Learning DAY :02",
    description: `
## Event Loop & Async JavaScript

### Understanding the Call Stack

JavaScript is single-threaded, meaning it has one call stack and can only execute one thing at a time. The call stack tracks function calls.

### Event Loop Mechanism

The event loop continuously checks:
1. **Call Stack** - Is it empty?
2. **Callback Queue** - Are there any callbacks waiting?

When the call stack is empty, it moves callbacks from the queue to the stack.

### Promises vs Callbacks

\`\`\`javascript
// Callback (older approach)
setTimeout(() => {
  console.log("First");
  setTimeout(() => {
    console.log("Second");
  }, 1000);
}, 1000);

// Promise (better approach)
new Promise(resolve => setTimeout(resolve, 1000))
  .then(() => {
    console.log("First");
    return new Promise(resolve => setTimeout(resolve, 1000));
  })
  .then(() => console.log("Second"));
\`\`\`

### Microtasks vs Macrotasks

- **Microtasks** (Promise.then, queueMicrotask) - Executed after current task, before next macrotask
- **Macrotasks** (setTimeout, setInterval) - Executed after all microtasks
`,
    image: "",
    time: "9:30 PM",
    date: "July 25, 2025"
  },
  {
    id: "3",
    title: "JavaScript Learning DAY :03",
    description: `
## React Hooks Deep Dive

### useState Hook

\`useState\` is a Hook that lets you add React state to function components.

\`\`\`javascript
const [count, setCount] = useState(0);

// Previous state update
setCount(prevCount => prevCount + 1);
\`\`\`

### useEffect Hook

\`useEffect\` lets you perform side effects in function components. It's like \`componentDidMount\`, \`componentDidUpdate\`, and \`componentWillUnmount\` combined.

\`\`\`javascript
useEffect(() => {
  // Side effect
  document.title = \`Count: \${count}\`;

  // Cleanup (optional)
  return () => {
    document.title = "React App";
  };
}, [count]); // Dependencies array
\`\`\`

### Common Patterns

- **Empty dependency array**: Run once on mount
- **No dependency array**: Run on every render
- **With dependencies**: Run when dependencies change

### Custom Hooks

Extract component logic into reusable functions:

\`\`\`javascript
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  return { count, increment, decrement };
}
\`\`\`
`,
    image: "",
    time: "8:45 PM",
    date: "July 28, 2025"
  },
  {
    id: "4",
    title: "Frontend Learning DAY :04",
    description: `
## CSS Flexbox & Grid

### Flexbox Basics

Flexbox is a one-dimensional layout method for laying out items in rows or columns.

\`\`\`css
.container {
  display: flex;
  justify-content: center; /* Main axis */
  align-items: center;     /* Cross axis */
  flex-direction: row;     /* row | column */
  gap: 1rem;
}
\`\`\`

### Key Properties

- **justify-content**: Aligns items along the main axis
- **align-items**: Aligns items along the cross axis
- **flex-wrap**: Allows items to wrap to next line
- **flex-grow/shrink/basis**: Controls item sizing

### CSS Grid

Grid is a two-dimensional layout system, perfect for complex layouts.

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 1rem;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}
\`\`\`

### When to Use What?

- **Flexbox**: One-dimensional layouts (navigation, cards in a row)
- **Grid**: Two-dimensional layouts (page layouts, complex designs)
`,
    image: "",
    time: "11:20 PM",
    date: "July 31, 2025"
  },
  {
    id: "5",
    title: "JavaScript Learning DAY :05",
    description: `
## Closures & Scope

### What is a Closure?

A closure is a function that has access to variables in its outer (enclosing) lexical scope, even after the outer function has returned.

\`\`\`javascript
function outerFunction(x) {
  // Outer function's scope
  return function innerFunction(y) {
    // Inner function has access to x
    return x + y;
  };
}

const addFive = outerFunction(5);
console.log(addFive(10)); // 15
\`\`\`

### Scope Chain

JavaScript uses lexical scoping (static scoping), meaning the scope is determined by where variables are declared in the code.

### Practical Use Cases

**1. Data Privacy / Module Pattern**

\`\`\`javascript
const counter = (function() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
})();
\`\`\`

**2. Function Factories**

\`\`\`javascript
function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
\`\`\`

### Common Pitfall: Loop with Closures

\`\`\`javascript
// ❌ Wrong - all log same value
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

// ✅ Correct - use let or IIFE
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
\`\`\`
`,
    image: "",
    time: "7:50 PM",
    date: "August 3, 2025"
  },
  {
    id: "6",
    title: "Frontend Learning DAY :06",
    description: `
## Next.js App Router

### File-based Routing

In Next.js 13+, the App Router uses file-system based routing with special files:

- \`page.tsx\` - Creates a route segment
- \`layout.tsx\` - Shared layout for a segment
- \`loading.tsx\` - Loading UI
- \`error.tsx\` - Error UI
- \`route.ts\` - API routes

### Server Components vs Client Components

**Server Components** (default):
- Rendered on the server
- Can directly access backend resources
- Smaller bundle size
- Cannot use hooks or browser APIs

**Client Components** (\`"use client"\`):
- Rendered in the browser
- Can use React hooks
- Can handle interactivity
- Access browser APIs

### Data Fetching

\`\`\`typescript
// Server Component - Direct fetch
async function BlogPosts() {
  const posts = await fetch('https://api.example.com/posts');
  const data = await posts.json();
  return <div>{/* render posts */}</div>;
}

// Client Component - useEffect
"use client";
function ClientPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('/api/posts').then(res => res.json()).then(setPosts);
  }, []);
  return <div>{/* render posts */}</div>;
}
\`\`\`

### Server Actions

\`\`\`typescript
// server action
async function createPost(formData: FormData) {
  "use server";
  const title = formData.get("title");
  // Save to database
}

// Use in form
<form action={createPost}>
  <input name="title" />
  <button>Submit</button>
</form>
\`\`\`
`,
    image: "",
    time: "10:00 PM",
    date: "August 7, 2025"
  }
];


const BlogCards = () => {
  const [active, setActive] = useState(""); // Optional, for highlighting
  const theme = useTheme();
  const isDark = theme.theme === "dark";

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
                  border: isDark ? "1px solid rgba(255, 255, 255, 0.2)" : "1px solid rgba(0, 0, 0, 0.15)",
                  borderRadius: "0.75rem",
                  padding: "1.5rem 1rem",
                  minHeight: "250px",
                  mb: 2,
                  backgroundColor: isDark ? "rgba(0, 0, 0, 0.3)" : "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
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
                  <Typography sx={{padding:"1rem",fontSize:"1.5rem",color: "var(--normal-text)",fontWeight:"600"}}>
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
