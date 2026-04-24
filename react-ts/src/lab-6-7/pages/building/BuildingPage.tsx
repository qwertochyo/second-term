import { useParams } from "react-router-dom";
import structures from "../../mock/data";
import { Container, Typography } from "@mui/material";

export const Building = () => {
  const { id } = useParams();
  const building = structures[id];

  return (
    <>
      <Typography sx={{fontSize: "30px", textAlign: "center", color: "#424242"}}>
        {building.title}
      </Typography>
      <Container maxWidth="sm" sx={{margin: "20px auto"}}>
        <img
          srcSet={building.img}
          src={building.img}
          alt={building.title}
          loading="lazy"
          style={{width: "100%"}}
        />
      </Container>
      <Container 
        sx={{ 
          display: "flex", 
          flexDirection: { xs: "column", md: "row" },
      }}>
        <Typography sx={{width: {xs: "100%", md: "50%"}, textAlign: {xs: "center", md: "start"}}}>
          {building.description[0]}
        </Typography>
        <Typography sx={{width: {xs: "100%", md: "50%"}, textAlign: {xs: "center", md: "start"}}}>
          {building.description[1]}
        </Typography>
      </Container>
    </>
  );
}