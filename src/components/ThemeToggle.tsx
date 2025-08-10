import { Icon } from "@iconify/react/dist/iconify.js";
import { useTheme } from "../context/themecontext";
import { Box } from "@mui/material";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Box
      onClick={toggleTheme}
      // variant="outlined"
      sx={{ position: "fixed", top: "2.2rem", right: 16, zIndex: 20,cursor:"pointer"}}
    >
      <Icon 
      icon={theme === "light" ? "tabler:bulb-filled" : "tabler:bulb"}  
      width="36" height="36" 
      style={{ transform: "rotate(180deg)",color:"var(--imp-text)"}}/>

    </Box>
  );
};

export default ThemeToggle;
