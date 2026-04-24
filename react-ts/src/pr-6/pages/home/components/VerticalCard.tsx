import { Link as RouterLink } from "react-router-dom"; 
import { Box, Card, CardMedia, Link, Typography } from "@mui/material";
import type { ICard } from "../../../types/types";

interface Props {
  card: ICard;
  cardNumber: number;
}

export const VerticalCard = ({ card, cardNumber }: Props) => {
  const isSecond = cardNumber % 2 === 0;

  return (
    <Card
      sx={{
        maxWidth: "sm",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        padding: 2,
        border: 1,
        borderRadius: 6,
        boxShadow: "none"
      }}
    >
      <Box sx={{
        display: "flex",
        flexDirection: !isSecond ? "column-reverse" : "column",
      }}>
        <Box
          sx={{ 
            display: "flex", 
            gap: 3,
            flexDirection: "column"
          }}>
          <Box>
            <Typography variant="h6">
              {card.title}
            </Typography>
          </Box>
          <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
            <Box sx={{ mb: 1 }}>
              {card.description.map((item, index) => (
                <Typography key={index} sx={{ display: "inline"}}>
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
        <CardMedia
          component="img"
          src={card.image}
          alt={card.title}
          sx={{
            width: "100%",
            height: 200,
            borderRadius: 4,
          }}
        />
        </Box>
      <Box sx={{textAlign: isSecond ? "right" : "left"}}>
        <Link component={RouterLink} to={""}>
            Подробнее
        </Link>
      </Box>
    </Card>
  );
}