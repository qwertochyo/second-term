import { Container } from "@mui/material";
import { Gallery } from "./components/Gallery";
import { HorizontalCards } from "./components/HorizontalCards";
import { MiniCards } from "./components/MiniCards";
import { VerticalCards } from "./components/VerticalCards";

export const HomePage = () => {
  return (
    <Container sx={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px"}}>
      <Gallery />
      <MiniCards />
      <HorizontalCards />
      <VerticalCards />
    </Container>
  );
}