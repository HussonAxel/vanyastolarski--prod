import {
  createRootRoute,
  Outlet,
  ScrollRestoration,
} from "@tanstack/react-router";
import "../index.css";

import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
export const Route = createRootRoute({
  component: () => (
    <>
      <ScrollRestoration />
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
