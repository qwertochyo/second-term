import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { BreadCrumbles } from "../../components/BreadCrumbles";

export const AppLayout = () => {
  return (
    <>
      <Navbar />
      <BreadCrumbles />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}