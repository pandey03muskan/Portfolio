"use client";

import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React, { MouseEvent as ReactMouseEvent } from "react";
import Box from "@mui/material/Box";

export const CardSpotlight = ({
  children,
  radius = 200,
  spotlightColor = "var(--gradient-card-spotlight)",
  sx,
  ...props
}: {
  radius?: number;
  spotlightColor?: string;
  children: React.ReactNode;
  sx?: object;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <Box
      onMouseMove={handleMouseMove}
      sx={{
        position: "relative",
        borderRadius: "12px",
        overflow: "hidden",
        ...sx,
      }}
      {...props}
    >
      {/* 🔵 Cyan Spotlight following mouse */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          background: spotlightColor,
          pointerEvents: "none",
          zIndex: 0,
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 70%
            )
          `,
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "cover",
        }}
      />

      {/* ✅ Content Layer */}
      <Box 
      sx={{ 
        position: "relative",
        zIndex: 1, 
        margin: "1.2rem 1rem",
        }}>
        {children}
      </Box>

      {/* 🌊 Floating Animation */}
      <style>
        {`
          @keyframes floaty {
            0% { transform: translateY(0px) translateX(0px); opacity: 0.2; }
            50% { transform: translateY(-8px) translateX(4px); opacity: 0.3; }
            100% { transform: translateY(0px) translateX(0px); opacity: 0.2; }
          }
        `}
      </style>
    </Box>
  );
};

