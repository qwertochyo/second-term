import { AppBar, Container, Skeleton, Toolbar, Typography } from "@mui/material";
import { SkeletonWrapper } from "./SkeletonWrapper";
import { useLoading } from "../hooks/useLoading";

export const Footer = () => {
  const { loading } = useLoading();

  return (
    <AppBar
      position="static"
      sx={{
        background: "transparent",
        boxShadow: 0,
        mt: "20px",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ color: "primary.main", borderTop: "1px solid" }}
      >
        <Toolbar sx={{ justifyContent: "center" }}>
          <SkeletonWrapper
              loading={loading}
              skeleton={
                <Skeleton 
                  variant="text" 
                  animation="wave" 
                  width={300}
                  height={30}
                />
              }
            >
              <Typography>2026 Кккккккукинг веб-приложение йоу</Typography>
            </SkeletonWrapper>
        </Toolbar>
      </Container>
    </AppBar>
  );
};