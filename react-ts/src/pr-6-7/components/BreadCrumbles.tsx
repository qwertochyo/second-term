import { Link as RouterLink } from "react-router-dom";
import { Breadcrumbs, Link } from "@mui/material";
import { useLocation } from "react-router-dom";
import { cards } from "../mock/cards";

export const BreadCrumbles = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const isHomePage = pathnames.length === 0;

  const pathnamesMap = {
    recipes: "Список блюд",
    diagram: "Диаграмма"
  }

  return (
    <>
      {!isHomePage && (
        <Breadcrumbs 
        //separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{
          textTransform: "uppercase",
          margin: "0 24px",
          padding: "12px 24px",
          fontSize: "14px"
        }}
      >
        <Link component={RouterLink} to={"/"} underline="none">Главная</Link>
        {pathnames.map((segment, index) => {
          const path = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          if (segment === "recipe") return null;

          let displayName = pathnamesMap[segment] || segment;

          if (pathnames[index - 1] === "recipe") {
            const recipe = cards[Number(segment)];
            displayName = recipe ? recipe.title : "Рецепт";
          }

          return isLast ? (
            <Link key={path} color="text.primary" underline="none">
              {displayName}
            </Link>
          ) : (
            <Link key={path} component={RouterLink} to={path}>
              {displayName}
            </Link>
          );
        })}
      </Breadcrumbs>
      )}
    </>
  );
}