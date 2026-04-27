import { Container } from "@mui/material";
import { HorizontalCard } from "./HorizontalCard";
import { cards } from "../../../mock/cards";

export const HorizontalCards = () => {
  const cardsData = [cards[1], cards[5]];

  return (
    <Container 
      maxWidth="lg" 
      sx={{
        display: "flex", 
        flexDirection: "column", 
        gap: "20px", 
        alignItems: "center"
      }}>
      {cardsData.map((card, index) => (
        <HorizontalCard key={index} card={card} cardNumber={index} />
      ))}
    </Container>
  );
}