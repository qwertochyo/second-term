import { Link as RouterLink } from "react-router-dom"; 
import { Box, Card, CardMedia, Link, Skeleton, Typography } from "@mui/material";
import type { ICard } from "../../../types/types";
import { SkeletonWrapper } from "../../../components/SkeletonWrapper";
import { useLoading } from "../../../hooks/useLoading";

interface Props {
  card: ICard;
  cardNumber: number;
}

export const VerticalCard = ({ card, cardNumber }: Props) => {
  const isSecond = cardNumber % 2 === 0;
  const { loading } = useLoading();

  return (
    <Card
      sx={{
        maxWidth: "sm",
        width: {
          sm: "100%",
          md: "50%"
        },
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
            <SkeletonWrapper
              loading={loading}
              skeleton={
                <Skeleton 
                  variant="text" 
                  animation="wave" 
                  width={160}
                  height={40}
                />
              }
            >
              <Typography variant="h6">
                {card.title}
              </Typography>
            </SkeletonWrapper>
          </Box>
          <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
            <Box sx={{ mb: 1 }}>
              {card.description.map((item, index) => (
                <SkeletonWrapper
                  key={index}
                  loading={loading}
                  skeleton={
                    <Skeleton 
                      variant="text" 
                      animation="wave" 
                      width={"100%"}
                      height={30}
                    />
                  }
                >
                  <Typography sx={{ display: "inline"}}>
                    {item}
                  </Typography>
                </SkeletonWrapper>
              ))}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: 200
          }}
        >
          <SkeletonWrapper
            loading={loading}
            skeleton={
              <Skeleton 
                variant="rounded"
                animation="wave"
                width={"100%"}
                height={"100%"}
              />
            }
          >
            <CardMedia
              component="img"
              src={card.image}
              alt={card.title}
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: 4,
              }}
            />
          </SkeletonWrapper>
        </Box>
      </Box>
      <Box
        sx={{ 
          display: "flex",
          justifyContent: isSecond ? "flex-end" : "flex-start"
        }}
      >
        <SkeletonWrapper
          loading={loading}
          skeleton={
            <Skeleton 
              variant="text" 
                animation="wave" 
                width={100}
                height={"100%"}
                sx={{alignSelf: isSecond ? "flex-end" : "flex-start"}}
              />
            }
          >
          <Link component={RouterLink} to={""}>
              Подробнее
          </Link>
        </SkeletonWrapper>
      </Box>
    </Card>
  );
}