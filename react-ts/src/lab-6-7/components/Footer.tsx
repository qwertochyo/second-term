import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

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
          <Typography>2026 Самые высокие здания и сооружения</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
