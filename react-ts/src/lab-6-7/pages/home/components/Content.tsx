import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { BuildCard } from "./BuildCard";
import structures from "../../../mock/data";

const cardData = [structures[3], structures[6], structures[9], structures[7]];

export const Content = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={{ xs: 3, md: 6 }}>
        {cardData.map((item, index) => (
          <Grid key={index} size={{ xs: 12, md: 6 }}>
            <BuildCard building={item} cardNumber={index} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
