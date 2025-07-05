import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";


const documents = [
  {
    id: "1",
    title: "Palindrome Number - Signed Integer Handling",
    description: `
## 🧠 Palindrome Number - Signed Integer Handling

While solving the **palindrome number** problem, I ran into an edge case when the number was **negative**, like \`-121\`.

### ❌ Problem
Reversing digits using modulo and division works for positive numbers, but for signed (negative) numbers, the reversed form becomes invalid.

\`\`\`js
let num = -121;
let reverse = 0;

while (num > 0) { // This condition fails immediately for negatives
  let digit = num % 10;
  reverse = reverse * 10 + digit;
  num = Math.floor(num / 10);
}
\`\`\`

### ✅ Lesson Learned
In JavaScript, all numbers are **signed by default**. There's no "unsigned int" like in C++ or Java.

I fixed this by checking for negatives up front:

\`\`\`js
if (num < 0) return false;
\`\`\`

### 📌 Takeaway
Always handle signed numbers explicitly in DSA problems. Negative integers should not be treated as palindromes unless the problem allows it.
`,
    image: "",
    time: "10:00",
    date: "2025-07-01"
  },
  {
    id: "2",
    title: "Plus One - Handling Large Integers and BigInt",
    description: `
## 💡 Plus One - Handling Large Integers and BigInt

While solving the **Plus One** problem on LeetCode, I encountered issues converting a large array of digits into an integer.

### ❌ Problem
Using \`parseInt()\` or \`Number()\` caused precision loss for large numbers.

\`\`\`js
const digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
const num = parseInt(digits.join(""), 10);
console.log(num); 
// Output: 6145390195186705000 (Wrong! Precision loss)
\`\`\`

### ✅ Lesson Learned
JavaScript has a max safe integer:

\`\`\`js
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
\`\`\`

To avoid loss of precision, use \`BigInt\`:

\`\`\`js
const digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
const bigNum = BigInt(digits.join("")) + BigInt(1);
const result = bigNum.toString().split("").map(Number);
console.log(result); 
// Output: [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
\`\`\`

Also, avoid this mistake:

\`\`\`js
BigInt(str) + 1; // ❌ TypeError: Cannot mix BigInt and Number
\`\`\`

Instead, do:

\`\`\`js
BigInt(str) + BigInt(1); // ✅ Works correctly
\`\`\`

### 📌 Takeaway
Use \`BigInt\` for large integers and be careful to **not mix types** in arithmetic. This is crucial when working with digit arrays in DSA.
`,
    image: "",
    time: "10:15",
    date: "2025-07-01"
  }
];

const BlogCards = () => {
  // const [sections, setSections] = useState<sectionType[]>([]);
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
              color: "white",
            }}
          >
            Today&apos;s Spark
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              color:"white",
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
                  // backgroundColor: "#121212", // optional dark background
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

                  <Typography
                    variant="body1"
                    sx={{
                      color: "rgb(209 213 219)",
                      zIndex: 1,
                      fontSize: "1.1rem",
                      opacity: 0.7,
                    }}
                  >
                    <ReactMarkdown>{section?.description}</ReactMarkdown>
                  </Typography>

                  {/* Optional: display date and time */}
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#ccc",
                      mt: 1,
                      display: "block",
                    }}
                  >
                    {section.time}
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
