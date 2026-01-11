import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { getAllBlogPosts } from "@/static/blogPosts";

const BlogList = () => {
  const blogPosts = getAllBlogPosts();

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

      {/* Blog Posts List */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {blogPosts.map((post) => (
          <Link 
            key={post.id} 
            href={`/blog/${post.slug}`}
            style={{ textDecoration: "none" }}
          >
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "12px",
                padding: "2rem",
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
                  borderColor: "var(--imp-text)",
                },
              }}
            >
              {/* Title */}
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: "var(--imp-text)",
                  mb: 1.5,
                  fontFamily: "Montserrat",
                }}
              >
                {post.title}
              </Typography>

              {/* Short Description */}
              <Typography
                sx={{
                  fontSize: "1rem",
                  color: "var(--normal-text)",
                  lineHeight: 1.7,
                  mb: 2,
                  fontFamily: "Montserrat",
                }}
              >
                {post.shortDescription}
              </Typography>

              {/* Date and Time */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  mt: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.875rem",
                    color: "var(--normal-text)",
                    fontWeight: 600,
                    fontFamily: "Montserrat",
                    opacity: 0.8,
                  }}
                >
                  {post.date}
                </Typography>
                <Box
                  sx={{
                    width: 4,
                    height: 4,
                    bgcolor: "var(--normal-text)",
                    borderRadius: "50%",
                    opacity: 0.5,
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "0.875rem",
                    color: "var(--normal-text)",
                    fontWeight: 600,
                    fontFamily: "Montserrat",
                    opacity: 0.8,
                  }}
                >
                  {post.time}
                </Typography>
              </Box>
            </Box>
          </Link>
        ))}
      </Box>
    </>
  );
};

export default BlogList;
