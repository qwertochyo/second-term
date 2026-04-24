import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
//import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
//import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  border: "1px solid",
  borderColor: theme.palette.divider,
  padding: "8px 12px",
}));

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        mt: "28px",
      }}
    >
      <Container maxWidth="xl">
        <StyledToolbar>
          <Typography variant="h6" sx={{ color: "#5d8aa8" }}>
            Самые высокие здания и сооружения
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <NavLink to={"/"}>
              {({ isActive }) => (
                <Button
                  variant={isActive ? "contained" : "text"}
                  color="info"
                >
                  Главная
                </Button>
              )}
            </NavLink>
            <NavLink to={"/list"}>
              {({ isActive }) => (
                <Button
                  variant={isActive ? "contained" : "text"}
                  color="info"
                >
                  Список зданий
                </Button>
              )}
            </NavLink>
            <NavLink to={"/diagrams"}>
              {({ isActive }) => (
                <Button
                  variant={isActive ? "contained" : "text"}
                  color="info"
                >
                  Диаграммы
                </Button>
              )}
            </NavLink>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              aria-label="Menu button"
              onClick={() => setIsOpen(true)}
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Drawer anchor="top" open={isOpen} onClose={() => setIsOpen(false)}>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <IconButton onClick={() => setIsOpen(false)}>
                    {/* <CloseRoundedIcon /> */}
                  </IconButton>
                </Box>
                <MenuList>
                  <NavLink to={"/"} style={{ textDecoration: "none" }}>
                    {({ isActive }) => (
                      <MenuItem 
                        sx={{
                          backgroundColor: isActive ? "primary.main" : "",
                          "&:hover": {
                            backgroundColor: "lightblue",
                            color: "black"
                          },
                          color: isActive ? "white" : "black",
                      }}>
                        Главная
                      </MenuItem>
                    )}
                  </NavLink>
                  <NavLink to={"/list"} style={{ textDecoration: "none" }}>
                    {({ isActive }) => (
                      <MenuItem 
                        sx={{
                          backgroundColor: isActive ? "primary.main" : "",
                          "&:hover": {
                            backgroundColor: "lightblue",
                            color: "black"
                          },
                          color: isActive ? "white" : "black",
                      }}>
                        Список зданий
                      </MenuItem>
                    )}
                  </NavLink>
                  <NavLink to={"/diagrams"} style={{ textDecoration: "none" }}>
                    {({ isActive }) => (
                      <MenuItem 
                        sx={{
                          backgroundColor: isActive ? "primary.main" : "",
                          "&:hover": {
                            backgroundColor: "lightblue",
                            color: "black"
                          },
                          color: isActive ? "white" : "black",
                      }}>
                        Диаграммы
                      </MenuItem>
                    )}
                  </NavLink>
                </MenuList>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};
