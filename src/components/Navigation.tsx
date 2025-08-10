import { Box, List, ListItem, Typography } from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const navItems = [
  { label: "Home", 
    icon: <Icon icon="streamline-flex:home-2" width="30" height="30" />,
    path: "/home"
  },
  { label: "Projects", 
    icon: <Icon icon="fluent:projection-screen-24-regular" width="30" height="30" />,
    path: "/project"
  },
  { label: "Today’sSpark", 
    icon: <Icon icon="fluent:sparkle-28-regular" width="30" height="30" />,
    path: "/blog"
  },
];

const Navigation = () => {
  // console.log("color changed",hsl(var(--gradient-primary)));
  return (
    <Box
      sx={{
        position: "fixed",
        top: "1rem",
        maxWidth: "500px",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        borderRadius: "2rem",
        display: "flex",
        justifyContent: "center",
        paddingY: "0.7rem",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        zIndex: 10,
        border: "1px solid rgba(255, 255, 255, 0.2)",
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
              gap: 1,
              "&:hover": {
                color: "var(--imp-text)",
              },
            }}
          >
            {icon}
            <Typography variant="body1" sx={{fontSize: "1rem"}}>
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
