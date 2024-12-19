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
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollRestoration />
      <div className="px-0 lg:px-32">
        <Header />
      </div>
      <main className="flex-1">
        <Outlet />
      </main>
      <div className="px-0 lg:px-32">
        <Footer />
      </div>
    </div>
  ),
});
