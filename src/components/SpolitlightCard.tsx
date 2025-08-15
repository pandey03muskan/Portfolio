
"use client";

import React, { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import { CardSpotlight } from "./CardSpotlight";
import { useTheme } from "@/context/themecontext";

interface SpotlightCardProps {
  section: Section;
  isActive: boolean;
}

type Section = {
  title: string;
  id: string;
  icon: ReactNode;
  description: ReactNode;
};

const SpotlightCard: React.FC<SpotlightCardProps> = ({ section, isActive }) => {
  const theme = useTheme();
  const isDark = theme.theme === "dark";
  console.log(isActive)

  return (
    <CardSpotlight
      radius={400}
      color = "var(--normal-text)"
      className="relative border border-neutral-700 bg-black/90 rounded-xl shadow-lg"
    >
      {/* 📝 Content Layer */}
      <Box
        sx={{
          position: "relative",
          zIndex: 10,
          // backdropFilter: "blur(10px)",
          borderRadius: "12px",
          paddingY: "2rem",
          paddingX: "1rem",
          // margin:"1.2rem 0rem",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          overflow: "hidden",
        }}
      >
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

        {/* 🔤 Title */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            mb: 2,
            color: "var(--normal-text)",
            gap: 1,
            opacity: 0.9,
            position: "relative",
            zIndex: 1,
          }}
        >
          <span style={{ color: "var(--imp-text)" }}>{section.icon}</span>
          <span>{section.title}</span>
        </Typography>

        {/* 📄 Description */}
        <Typography
          variant="body1"
          sx={{
            color: "var(--normal-text)",
            fontSize: "1.1rem",
            opacity: 0.8,
            position: "relative",
            zIndex: 1,
          }}
        >
          {section.description}
        </Typography>
      </Box>
    </CardSpotlight>
  );
};

export default SpotlightCard;

