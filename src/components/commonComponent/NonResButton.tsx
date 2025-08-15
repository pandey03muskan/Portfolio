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
        backgroundColor: "rgb(224, 224, 224,0.2)", // light grey
        padding: "8px 12px",
        borderRadius: "8px",
        cursor: "default", // makes it non-clickable (but hover still works)
        transition: "background-color 0.3s",
        "&:hover": {
          backgroundColor: "rgb(224, 224, 224,0.5)", // darker grey on hover
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginRight: "8px",
          color:"var(--imp-text)"
        }}
      >
        {icon}
      </Box>
      <Typography 
      variant="body1" 
      sx={{ 
        color: "var(--normal-text)",
        fontWeight: 500 }}>
        {title}
      </Typography>
    </Box>
  );
};

export default CustomButton;
