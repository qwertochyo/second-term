import { Link as RouterLink } from "react-router-dom";
import { Breadcrumbs, Link } from "@mui/material";
import { useLocation } from "react-router-dom";
import structures from "../mock/data";

export const BreadCrumbles = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const isHomePage = pathnames.length === 0;

  const pathnamesMap = {
    list: "Список зданий",
    diagrams: "Диаграммы",
    buildings: "Здания",
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

          if (segment === "building") return null;

          let displayName = pathnamesMap[segment] || segment;

          if (pathnames[index - 1] === "building") {
            const building = structures[Number(segment)];
            displayName = building ? building.title : "Здание";
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