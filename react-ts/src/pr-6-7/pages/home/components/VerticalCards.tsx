import { Container } from "@mui/material";
import { cards } from "../../../mock/cards";
import { VerticalCard } from "./VerticalCard";

export const VerticalCards = () => {
  const cardsData = [cards[8], cards[9]];

  return (
    <Container 
      maxWidth="lg" 
      sx={{
        display: "flex", 
        flexDirection: {
          xs: "column",
          sm: "column",
          md: "row"
        }, 
        gap: "20px", 
        alignItems: "center"
      }}>
      {cardsData.map((card, index) => (
        <VerticalCard key={index} card={card} cardNumber={index} />
      ))}
    </Container>
  );
}