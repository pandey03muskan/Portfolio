import { Icon } from "@iconify/react/dist/iconify.js";
import { useTheme } from "../context/themecontext";
import { Box } from "@mui/material";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Box
      onClick={toggleTheme}
      sx={{ fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
        position: "fixed", top: "2.2rem", right: 16, zIndex: 20,cursor:"pointer"}}
    >
      <Icon 
      icon={theme === "light" ? "tabler:bulb-filled" : "tabler:bulb"}  
      style={{ transform: "rotate(180deg)",color:"var(--imp-text)",fontSize: "inherit"}}/>

    </Box>
  );
};

export default ThemeToggle;
