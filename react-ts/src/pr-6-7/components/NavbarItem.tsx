import { Button, MenuItem } from "@mui/material";
import { NavLink } from "react-router-dom";

interface Props {
  path: string;
  label: string;
  isMobile: boolean;
}

export const NavbarItem = ({ path, label, isMobile }: Props) => {
  return (
    <>
    {isMobile ? ( 
      <NavLink to={path} style={{ textDecoration: "none" }}>
      {({ isActive }) => (
        <MenuItem
          sx={{
            backgroundColor: isActive ? "primary.main" : "",
            "&:hover": {
              backgroundColor: "lightblue",
              color: "black"
            },
            color: isActive ? "white" : "black",
          }}
        >
          {label}
        </MenuItem>
      )}
    </NavLink>
    ) : (
      <NavLink to={path}>
        {({ isActive }) => (
          <Button
            variant={isActive ? "contained" : "text"}
            color="info"
          >
            {label}
          </Button>
        )}
      </NavLink>
    )}
    </>
  );
}