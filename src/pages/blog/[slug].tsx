import React from "react";
import { Box, Typography, Breadcrumbs, Link } from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import { useRouter } from "next/router";
import { getBlogPostBySlug, getAllBlogPosts } from "@/static/blogPosts";
import { Icon } from "@iconify/react";

// This function generates static paths for all blog posts
export async function getStaticPaths() {
  const posts = getAllBlogPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false, // 404 if slug doesn't exist
  };
}

// This function fetches data for the blog post
export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}

interface BlogPostPageProps {
  post: {
    id: string;
    slug: string;
    title: string;
    shortDescription: string;
    description: string;
    date: string;
    time: string;
    image?: string;
  };
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ post }) => {
  const router = useRouter();

  return (
    <>
      {/* Breadcrumb */}
      <Box sx={{ mb: 4 }}>
        <Breadcrumbs
          separator={
            <Icon 
              icon="lucide:chevron-right" 
              style={{ fontSize: "16px", color: "var(--normal-text)", opacity: 0.6 }} 
            />
          }
          sx={{
            "& .MuiBreadcrumbs-ol": {
              flexWrap: "nowrap",
            },
          }}
        >
          <Link
            href="/blog"
            onClick={(e) => {
              e.preventDefault();
              router.push("/blog");
            }}
            sx={{
              color: "var(--imp-text)",
              textDecoration: "none",
              fontFamily: "Montserrat",
              fontWeight: 500,
              fontSize: "0.95rem",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Blog
          </Link>
          <Typography
            sx={{
              color: "var(--normal-text)",
              fontFamily: "Montserrat",
              fontWeight: 500,
              fontSize: "0.95rem",
              opacity: 0.8,
            }}
          >
            {post.title}
          </Typography>
        </Breadcrumbs>
      </Box>

      {/* Blog Post Content */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "12px",
          padding: "3rem",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Title */}
        <Typography
          sx={{
            fontSize: "2rem",
            fontWeight: 700,
            color: "var(--imp-text)",
            mb: 2,
            fontFamily: "Montserrat",
          }}
        >
          {post.title}
        </Typography>

        {/* Date and Time */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            mb: 3,
          }}
        >
          <Typography
            sx={{
              fontSize: "0.95rem",
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
              fontSize: "0.95rem",
              color: "var(--normal-text)",
              fontWeight: 600,
              fontFamily: "Montserrat",
              opacity: 0.8,
            }}
          >
            {post.time}
          </Typography>
        </Box>

        {/* Divider */}
        <Box
          sx={{
            width: "100%",
            height: "1px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            mb: 3,
          }}
        />

        {/* Blog Content */}
        <Box
          sx={{
            "& > *": {
              fontFamily: "Montserrat",
            },
          }}
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }) => (
                <Box
                  component="h1"
                  sx={{
                    fontSize: "1.8rem",
                    fontWeight: "bold",
                    color: "var(--imp-text)",
                    mt: 3,
                    mb: 1.5,
                    fontFamily: "Montserrat",
                  }}
                >
                  {children}
                </Box>
              ),
              h2: ({ children }) => (
                <Box
                  component="h2"
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "var(--imp-text)",
                    mt: 2.5,
                    mb: 1.5,
                    fontFamily: "Montserrat",
                  }}
                >
                  {children}
                </Box>
              ),
              h3: ({ children }) => (
                <Box
                  component="h3"
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    color: "var(--imp-text)",
                    mt: 2,
                    mb: 1,
                    fontFamily: "Montserrat",
                  }}
                >
                  {children}
                </Box>
              ),
              p: ({ children }) => (
                <Box
                  component="p"
                  sx={{
                    color: "var(--normal-text)",
                    mb: 1.5,
                    lineHeight: 1.8,
                    fontFamily: "Montserrat",
                  }}
                >
                  {children}
                </Box>
              ),
              code: ({ children }) => (
                <Box
                  component="code"
                  sx={{
                    fontFamily: "monospace",
                    backgroundColor: "var(--imp-background)",
                    color: "var(--imp-text)",
                    padding: "2px 6px",
                    borderRadius: "4px",
                    fontSize: "0.875rem",
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
                    padding: "1.5rem",
                    borderRadius: "8px",
                    overflowX: "auto",
                    my: 2,
                    fontFamily: "monospace",
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                  }}
                >
                  {children}
                </Box>
              ),
              table: ({ children }) => (
                <Box
                  component="table"
                  sx={{
                    width: "100%",
                    borderCollapse: "collapse",
                    mt: 2,
                    mb: 2,
                  }}
                >
                  {children}
                </Box>
              ),
              thead: ({ children }) => (
                <Box
                  component="thead"
                  sx={{
                    bgcolor: "var(--imp-text)",
                    color: "var(--normal-text)",
                    opacity: 0.8,
                  }}
                >
                  {children}
                </Box>
              ),
              tbody: ({ children }) => (
                <Box component="tbody">{children}</Box>
              ),
              tr: ({ children }) => (
                <Box
                  component="tr"
                  sx={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}
                >
                  {children}
                </Box>
              ),
              th: ({ children }) => (
                <Box
                  component="th"
                  sx={{
                    padding: "12px",
                    textAlign: "left",
                    color: "var(--normal-text)",
                    fontWeight: 600,
                    fontFamily: "Montserrat",
                  }}
                >
                  {children}
                </Box>
              ),
              td: ({ children }) => (
                <Box
                  component="td"
                  sx={{
                    padding: "12px",
                    color: "var(--normal-text)",
                    fontFamily: "Montserrat",
                  }}
                >
                  {children}
                </Box>
              ),
              li: ({ children }) => (
                <Box
                  component="li"
                  sx={{
                    color: "var(--normal-text)",
                    pl: 1.5,
                    mb: 0.5,
                    fontFamily: "Montserrat",
                  }}
                >
                  {children}
                </Box>
              ),
              strong: ({ children }) => (
                <Box
                  component="strong"
                  sx={{
                    color: "var(--imp-text)",
                    fontWeight: 600,
                  }}
                >
                  {children}
                </Box>
              ),
            }}
          >
            {post.description}
          </ReactMarkdown>
        </Box>
      </Box>
    </>
  );
};

export default BlogPostPage;
