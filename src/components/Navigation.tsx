import { Box, List, ListItem, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";

const navItems = [
  { label: "Home", 
    icon: <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 14 14"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}><path d="M3.837 12.797h6.326c.67 0 1.24-.489 1.341-1.15c.162-1.052.2-2.118.112-3.177h1.224a.5.5 0 0 0 .422-.768l-.212-.333a20 20 0 0 0-4.785-5.205l-.66-.5a1 1 0 0 0-1.21 0l-.66.5A20 20 0 0 0 .95 7.37l-.212.333a.5.5 0 0 0 .422.768h1.224a13.6 13.6 0 0 0 .112 3.176c.102.662.671 1.15 1.34 1.15"></path><path d="M7 8.089c.921 0 1.668.746 1.668 1.667v3.04H5.333v-3.04c0-.92.746-1.667 1.667-1.667"></path></g></svg> 
    ,path: "\home"
  },
  { label: "Projects", 
    icon: <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 21 21"><g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}><path d="M17.5 14.5V4.485h-14V14.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1m-9 1l-2 3.5m6-3.5l2 3m-13-14h18"></path><path d="M10.499 2.498a2.005 2.005 0 0 1 1.995 1.853l.006.149l-4-.002c-.001-1.105.894-2 1.999-2"></path></g></svg>
    ,path: "\project"
  },
  { label: "Today’sSpark", 
    icon: <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24"><path fill="currentColor" d="M11.57 13.16c-1.36.28-2.17 1.16-2.17 2.41c0 1.34 1.11 2.42 2.49 2.42c2.05 0 3.71-1.66 3.71-3.71c0-1.07-.15-2.12-.46-3.12c-.79 1.07-2.2 1.72-3.57 2M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73c-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67M12 20c-3.31 0-6-2.69-6-6c0-1.53.3-3.04.86-4.43a5.58 5.58 0 0 0 3.97 1.63c2.66 0 4.75-1.83 5.28-4.43A14.77 14.77 0 0 1 18 14c0 3.31-2.69 6-6 6"></path></svg>
    ,path: "\blog"
  },
];

const Navigation = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        position: "fixed",
        top: "1rem",
        maxWidth: "500px",
        backgroundColor: isDark
          ? "rgba(255, 255, 255, 0.1)"
          : "rgba(183, 183, 192, 0.2)",
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
          <Link href={path}>
            <ListItem
            key={label}
            sx={{
              color: "#ffffff",
              cursor: "pointer",
              fontWeight: 500,
              transition: "color 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: 1,
              "&:hover": {
                color: "#00FFFF",
              },
            }}
          >
            {icon}
            <Typography variant="body1" sx={{fontSize: "1rem"}}>{label}</Typography>
          </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
};

export default Navigation;
