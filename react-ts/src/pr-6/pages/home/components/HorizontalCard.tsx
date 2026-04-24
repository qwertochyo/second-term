import { Link as RouterLink } from "react-router-dom"; 
import { Card, Typography, Box, Link, CardMedia } from "@mui/material";
import type { ICard } from "../../../types/types";

interface Props {
  card: ICard
  cardNumber: number
}

export const HorizontalCard = ({ card , cardNumber}: Props) => {
  const isSecond = cardNumber % 2 === 0;

  return (
    <Card
      sx={{
        maxWidth: "md",
        display: "flex",
        flexDirection: {
          xs: isSecond ? "column-reverse" : "column",
          sm: isSecond ? "row-reverse" : "row",
        },
        gap: 3,
        padding: 2,
        border: 1,
        borderRadius: 6,
        boxShadow: "none"
      }}
    >
      <Box 
        sx={{ 
          display: "flex", 
          gap: 3,
          flexDirection: {
            xs: "column",
            sm: "row",
          },
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

          <Box sx={{textAlign: isSecond ? "right" : "left"}}>
            <Link component={RouterLink} to={""}>
              Подробнее
            </Link>
          </Box>
        </Box>
      </Box>
      <CardMedia
        component="img"
        src={card.image}
        alt={card.title}
        sx={{
          width: {
            xs: "100%",
            sm: 120
          },
          height: {
            xs: 200,
            sm: 150
          },
          borderRadius: 4,
        }}
      />
    </Card>
  );
};