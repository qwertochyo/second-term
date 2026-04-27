import { Box, Container, Skeleton } from "@mui/material";
import { cards } from "../../../mock/cards";
import { Link } from "react-router-dom";
import { SkeletonWrapper } from "../../../components/SkeletonWrapper";
import { useLoading } from "../../../hooks/useLoading";

export const Gallery = () => {
  const imageData = cards.slice(0, 6);
  const { loading } = useLoading();

  return (
    <Container 
      maxWidth="lg"
      sx={{
        height: {
          xs: "auto",
          sm: "400px"
        },
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "row"
        }
      }}>
        <Box 
          sx={{
            width: {
              xs: "100%",
              sm: "40%"
            },
            height: {
              xs: 300,
              sm: "100%"
            }
          }}
        >
          <SkeletonWrapper
            loading={loading}
            skeleton={
              <Skeleton 
                variant="rectangular"
                animation="wave"
                width={"100%"}
                height={"100%"}
              />
            }
          >
            <Link to={"/recipe/" + imageData[0].id}>
              <img 
                srcSet={imageData[0].image}
                src={imageData[0].image}
                alt={imageData[0].title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </Link>
          </SkeletonWrapper>
        </Box>
      <Box sx={{
          width: {
            xs: "100%",
            sm: "60%"
          },
          height: {
            xs: "auto",
            sm: "400px"
          }
        }}>
          <Box sx={{
            width: "100%",
            height: { 
              xs: 300, 
              sm: "50%" 
            }
          }}>
            <SkeletonWrapper
              loading={loading}
              skeleton={
                <Skeleton 
                  variant="rectangular"
                  animation="wave"
                  width={"100%"}
                  height={"100%"}
                />
              }
            >
              <Link to={"/recipe/" + imageData[1].id}>
                <img 
                  srcSet={imageData[1].image}
                  src={imageData[1].image}
                  alt={imageData[1].title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
              </Link>
            </SkeletonWrapper>
          </Box>
        <Box
          sx={{
            width: "100%",
            height: {
              xs: "auto",
              sm: "50%"
            },
            display: "flex",
            flexWrap: "wrap"
          }}
        >
          {imageData.slice(2).map((item) => (
            <Box
              key={item.title}
              sx={{
                width: { 
                  xs: "100%", 
                  sm: "50%" 
                },
                height: { 
                  xs: 300, 
                  sm: "50%" 
                },
              }}
            >
              <SkeletonWrapper
                loading={loading}
                skeleton={
                  <Skeleton 
                    variant="rectangular"
                    animation="wave"
                    width={"100%"}
                    height={"100%"}
                  />
                }
              >
                <Link to={"/recipe/" + item.id}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                </Link>
              </SkeletonWrapper>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}