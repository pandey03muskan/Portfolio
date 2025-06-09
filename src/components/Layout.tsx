import { Box } from "@mui/material";
import Head from "next/head";
import Navigation from "./Navigation";
import { useTheme } from "../context/themecontext";
import ThemeToggle from "./ThemeToggle";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  const backgroundVideo = theme === "dark" ? "/darkback1.mp4" : "/lightback1.mp4";

  return (
    <>
      <Head>
        <title>Software Engineer - Muskan Pandey</title>
        <meta name="description" content="Welcome to my developer portfolio" />
        <link rel="icon" href="/pro4.png" />
      </Head>
      <main>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            minHeight: "100vh",
            overflowX: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            key={backgroundVideo}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              objectFit: "cover",
              zIndex: -1,
              pointerEvents: "none",
            }}
          >
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Sticky Nav */}
          <Box sx={{display:"flex",justifyContent:"center"}}>
            <Navigation />
          </Box>

          <ThemeToggle />

          {/* Main Content */}
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              width: "100%",
              paddingX: "6rem",
              paddingTop: "7rem",
              paddingBottom: "4rem",
              flexGrow: 1,
            }}
          >
            {children}
          </Box>

          {/* Footer will show after scrolling */}
          <Footer />
        </Box>
      </main>
    </>
  );
};

export default Layout;
