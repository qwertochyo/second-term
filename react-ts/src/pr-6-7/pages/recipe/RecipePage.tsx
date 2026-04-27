import { Box, Container, Typography } from "@mui/material";
import { cards } from "../../mock/cards";
import { useParams } from "react-router-dom";

export const RecipePage = () => {
  const { id } = useParams();
  const recipe = cards[id];

  return (
    <>
      <Typography sx={{fontSize: "30px", textAlign: "center", color: "#424242"}}>
        {recipe.title}
      </Typography>
      <Container maxWidth="sm" sx={{margin: "20px auto"}}>
        <img
          srcSet={recipe.image}
          src={recipe.image}
          alt={recipe.title}
          loading="lazy"
          style={{width: "100%", height: 400, objectFit: "cover", borderRadius: 10}}
        />
      </Container>
      <Box
        sx={{ 
          display: "flex", 
          flexDirection: { xs: "column", md: "row" },
          margin: "0 20px"
      }}>
        <Typography sx={{width: {xs: "100%", md: "50%"}, textAlign: {xs: "center", md: "start"}}}>
          {recipe.description[1]}
        </Typography>
        <Typography sx={{width: {xs: "100%", md: "50%"}, textAlign: {xs: "center", md: "start"}}}>
          {recipe.description[2]}
        </Typography>
      </Box>
    </>
  );
}