import { createRootRoute, Outlet } from "@tanstack/react-router";
import "../index.css";

import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
export const Route = createRootRoute({
  component: () => (
    <>
      <div className="bg-white md:px-32">
        <Header />
      </div>
      <Outlet />
      <div className="bg-white md:px-32">
        <Footer />
      </div>
    </>
  ),
});
