import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

interface Props {
  building: {
    img: string;
    title: string;
    description: string[];
  };
  cardNumber: number;
}

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textAlign: "justify",
  marginBottom: theme.spacing(1),
}));

export const BuildCard = ({ building, cardNumber }: Props) => {
  const isReversed = cardNumber % 2 === 0;

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: isReversed ? "row-reverse" : "row"}
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: {
          xs: "100%",
          sm: 300
        }}}
        image={building.img}
        alt={building.title}
      />

      <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <CardContent>
          <Typography gutterBottom variant="h5">
            {building.title}
          </Typography>

          {building.description.map((item, ind) => (
            <StyledTypography key={ind}>{item}</StyledTypography>
          ))}
        </CardContent>

        <CardActions
          sx={{
            justifyContent: isReversed ? "flex-start" : "flex-end",
          }}
        >
          <Button size="small">Подробнее</Button>
        </CardActions>
      </Box>
    </Card>
  );
};
