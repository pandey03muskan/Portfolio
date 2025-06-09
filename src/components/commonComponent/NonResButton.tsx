import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

interface CustomButtonProps {
  title: string;
  icon: ReactNode;
}

const CustomButton = ({ title, icon }: CustomButtonProps) => {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        backgroundColor: "#e0e0e0", // light grey
        opacity: 0.5,
        padding: "8px 12px",
        borderRadius: "8px",
        cursor: "default", // makes it non-clickable (but hover still works)
        transition: "background-color 0.3s",
        "&:hover": {
          backgroundColor: "#bdbdbd", // darker grey on hover
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          color: "#083a55",
          marginRight: "8px",
        }}
      >
        {icon}
      </Box>
      <Typography variant="body1" sx={{ color: "#083a55", fontWeight: 500 }}>
        {title}
      </Typography>
    </Box>
  );
};

export default CustomButton;
