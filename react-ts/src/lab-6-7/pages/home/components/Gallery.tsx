import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import structures from "../../../mock/data";
import { Link } from "react-router-dom";

const imgData = structures.slice(0,-1);

export const Gallery = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ height: 500, overflowY: "scroll", m: "20px auto" }}>
        <ImageList
          variant="masonry"
          sx={{
            columnCount: {
              xs: "1 !important",
              sm: "2 !important",
              md: "3 !important",
              lg: "4 !important",
            },
          }}
          gap={8}
        >
          {imgData.map((item, index) => (
              <ImageListItem key={index}>
                <Link to={"/building/" + index}>
                  <img
                    srcSet={item.img}
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    width={"100%"}
                  />
                  <ImageListItemBar position="bottom" title={item.title} />
                </Link>
              </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Container>
  );
};
