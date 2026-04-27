import { Container } from "@mui/material";
import { cards } from "../../../mock/cards";
import { MiniCard } from "./MiniCard";

export const MiniCards = () => {
  const cardsData = [cards[0], cards[6], cards[2], cards[3], cards[4], cards[7]];

  return (
    <Container 
      maxWidth="xl" 
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: {
          xs: "center",
          sm: "space-between"
        },
        alignItems: "center",
        gap: 1,
        p: "0 !important"
      }}>
      {cardsData.map((card) => (
        <MiniCard key={card.id} card={card} />
      ))}
    </Container>
  );
}