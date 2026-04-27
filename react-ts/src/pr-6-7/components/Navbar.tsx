import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
//import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import MenuList from "@mui/material/MenuList";
//import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useLoading } from "../hooks/useLoading";
import { NavbarItem } from "./NavbarItem";
import { SkeletonWrapper } from "./SkeletonWrapper";
import { Skeleton } from "@mui/material";

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
  const { loading } = useLoading();

  const pagesConfig = [
    { path: "/", label: "Главная" }, 
    { path: "/recipes", label: "Список блюд" },
    { path: "/diagram", label: "Диаграмма" },
    { path: "/quiz", label: "Проверь себя" }
  ];

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
          <SkeletonWrapper
            loading={loading}
            skeleton={
              <Skeleton variant="text" animation="wave" width={140} height={60} />
            }
          >
            <Typography variant="h6" sx={{ color: "#5d8aa8"}}>
              Кккккккукинг
            </Typography>
          </SkeletonWrapper>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pagesConfig.map((page) => (
              <SkeletonWrapper
                key={page.path}
                loading={loading}
                skeleton={
                  <Skeleton variant="rounded" animation="wave" width={100} height={40} sx={{ mr: "5px"}} />
                }
              >
                <NavbarItem path={page.path} label={page.label} isMobile={false} />
              </SkeletonWrapper>
            ))}
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
                  {pagesConfig.map((page) => (
                    <SkeletonWrapper
                      key={page.path}
                      loading={loading}
                      skeleton={
                        <Skeleton variant="rounded" animation="wave" width={100} height={40} 
                          sx={{ m: "0 0 5px 5px"}} 
                        />
                      }
                    >
                    <NavbarItem path={page.path} label={page.label} isMobile={true} />
                  </SkeletonWrapper>
                  ))}
                </MenuList>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};
