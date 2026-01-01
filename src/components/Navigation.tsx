import { Box, List, ListItem, Typography } from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useTheme } from "@/context/themecontext";

const navItems = [
  { label: "Home", 
    icon: (<Box sx={{ fontSize: { xs: "0.8rem", sm: "1rem", md: "1.3rem" } }}>
  <Icon icon="streamline-flex:home-2" style={{ fontSize: "inherit" }} />
</Box>),
    path: "/home"
  },
  { label: "Projects", 
    icon: (<Box sx={{ fontSize: { xs: "0.8rem", sm: "1rem", md: "1.3rem" } }}>
  <Icon icon="fluent:projection-screen-24-regular" style={{ fontSize: "inherit" }} />
</Box>),
    path: "/project"
  },
  { label: "Today's Spark", 
    icon: (<Box sx={{ fontSize: { xs: "0.8rem", sm: "1rem", md: "1.3rem" } }}>
  <Icon icon="fluent:sparkle-28-regular" style={{ fontSize: "inherit" }} />
</Box>),
    path: "/blog"
  },
];

const Navigation = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  return (
    <Box
      sx={{
        position: "fixed",
        top: "1rem",
        maxWidth: {xs:"350px",sm:"450px",md:"600px"},
        backgroundColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(10px)",
        borderRadius: "2rem",
        display: "flex",
        justifyContent: "center",
        paddingY: "0.7rem",
        boxShadow: isDark ? "0 4px 12px rgba(0,0,0,0.3)" : "0 4px 12px rgba(0,0,0,0.1)",
        zIndex: 10,
        border: isDark ? "1px solid rgba(255, 255, 255, 0.2)" : "1px solid rgba(0, 0, 0, 0.1)",
      }}
    >
      <List
        sx={{
          display: "flex",
          gap: 4,
          margin: 0,
          padding: 0,
          listStyle: "none",
        }}
      >
        {navItems.map(({ label, icon,path }) => (
          <Link href={path} key={label}>
            <ListItem
            key={label}
            sx={{
              // color: "#ffffff",
              color: "var(--normal-text)",
              cursor: "pointer",
              fontWeight: 500,
              transition: "color 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: {md:1},
              "&:hover": {
                color: "var(--imp-text)",
              },
            }}
          >
            {icon}
            <Typography variant="body1" sx={{fontSize:{xs:"0.8rem",sm:"0.9rem",md:"1rem"}}}>
              {label}
            </Typography>
          </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
};

export default Navigation;
