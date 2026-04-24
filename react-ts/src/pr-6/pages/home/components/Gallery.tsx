import { Box, Container } from "@mui/material";
import { cards } from "../../../mock/cards";

export const Gallery = () => {
  const imageData = cards.slice(0, 6);

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
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}