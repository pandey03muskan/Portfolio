/**
 * Blog post data interface
 */
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  shortDescription: string; // 2-3 line description
  description: string; // Full markdown content
  date: string;
  time: string;
  image?: string;
}

/**
 * Blog posts data
 * To add a new blog post, add a new object to this array
 */
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "javascript-learning-day-01",
    title: "JavaScript Learning DAY :01",
    shortDescription: "Exploring JavaScript arrays: two ways to declare arrays and understanding the difference between Objects and Maps. Learn about Array constructors vs Array literals and when to use each approach.",
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
    date: "July 22, 2025",
    time: "10:15 PM",
  },
  {
    id: "2",
    slug: "javascript-learning-day-02",
    title: "JavaScript Learning DAY :02",
    shortDescription: "Deep dive into JavaScript's Event Loop and asynchronous programming. Understanding call stacks, promises vs callbacks, and the difference between microtasks and macrotasks in JavaScript execution.",
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
    date: "July 25, 2025",
    time: "9:30 PM",
  },
  {
    id: "3",
    slug: "javascript-learning-day-03",
    title: "JavaScript Learning DAY :03",
    shortDescription: "Mastering React Hooks: useState and useEffect fundamentals. Learn how to manage state in functional components and handle side effects with proper dependency arrays and cleanup functions.",
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
    date: "July 28, 2025",
    time: "8:45 PM",
  },
  {
    id: "4",
    slug: "frontend-learning-day-04",
    title: "Frontend Learning DAY :04",
    shortDescription: "CSS Layout Mastery: Understanding Flexbox and Grid. Learn when to use Flexbox for one-dimensional layouts and CSS Grid for complex two-dimensional page layouts with practical examples.",
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
    date: "July 31, 2025",
    time: "11:20 PM",
  },
  {
    id: "5",
    slug: "javascript-learning-day-05",
    title: "JavaScript Learning DAY :05",
    shortDescription: "Understanding JavaScript Closures and Scope. Learn how closures work, their practical applications in data privacy and function factories, and common pitfalls when using closures in loops.",
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
    date: "August 3, 2025",
    time: "7:50 PM",
  },
  {
    id: "6",
    slug: "frontend-learning-day-06",
    title: "Frontend Learning DAY :06",
    shortDescription: "Next.js App Router Essentials: File-based routing, Server vs Client Components, and Server Actions. Understanding the modern Next.js architecture for building performant React applications.",
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
    date: "August 7, 2025",
    time: "10:00 PM",
  },
];

/**
 * Get a blog post by slug
 */
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

/**
 * Get all blog posts
 */
export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}
