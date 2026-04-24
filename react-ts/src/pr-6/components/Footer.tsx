import { AppBar, Container, Toolbar, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: "transparent",
        boxShadow: 0,
        mt: "20px",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ color: "primary.main", borderTop: "1px solid" }}
      >
        <Toolbar sx={{ justifyContent: "center" }}>
          <Typography>2026 Кккккккукинг веб-приложение йоу</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};