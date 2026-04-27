import { Card, CardContent, Typography, Button, CardMedia, Skeleton } from "@mui/material";
import type { ICard } from "../../../types/types";
import { SkeletonWrapper } from "../../../components/SkeletonWrapper";
import { useLoading } from "../../../hooks/useLoading";

interface Props {
  card: ICard;
}

export const MiniCard = ({ card }: Props) => {
  const { loading } = useLoading();

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
        <SkeletonWrapper
          loading={loading}
          skeleton={
            <Skeleton 
              variant="circular"
              animation="wave"
              width={80}
              height={80}
            />
          }
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
        </SkeletonWrapper>

        <SkeletonWrapper
          loading={loading}
          skeleton={
            <Skeleton 
              variant="text"
              animation="wave"
              width={80}
              height={25}
            />
          }
        >
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            {card.title}
          </Typography>
        </SkeletonWrapper>

        <SkeletonWrapper
          loading={loading}
          skeleton={
            <Skeleton 
              variant="text"
              animation="wave"
              width={80}
              height={25}
            />
          }
        >
          <Typography variant="body2" color="text.secondary">
            {card.description[0]}
          </Typography>
        </SkeletonWrapper>
      </CardContent>

      <SkeletonWrapper
        loading={loading}
        skeleton={
          <Skeleton 
            variant="rounded"
            animation="wave"
            width={100}
            height={30}
          />
        }
      >
        <Button variant="contained" size="small">
          Подробнее
        </Button>
      </SkeletonWrapper>
    </Card>
  );
};