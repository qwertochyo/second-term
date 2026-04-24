import { Card, CardContent, Typography, Button, CardMedia } from "@mui/material";
import type { ICard } from "../../../types/types";

interface Props {
  card: ICard;
}

export const MiniCard = ({ card }: Props) => {
  return (
    <Card
      sx={{
        width: 180,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "none"
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
        }}
      >
        <CardMedia
          component="img"
          src={card.image}
          alt={card.title}
          sx={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />

        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          {card.title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {card.description[0]}
        </Typography>
      </CardContent>

      <Button variant="contained" size="small">
        Подробнее
      </Button>
    </Card>
  );
};