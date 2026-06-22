import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import Technology from "../pages/Technology";
import Racing from "../pages/Racing";
import FindDealer from "../pages/FindDealer";
import About from "../pages/About";
import TireAdvisor from "../pages/TireAdvisor";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "products", Component: Products },
      { path: "products/:slug", Component: ProductDetail },
      { path: "technology", Component: Technology },
      { path: "racing", Component: Racing },
      { path: "find-dealer", Component: FindDealer },
      { path: "about", Component: About },
      { path: "tire-advisor", Component: TireAdvisor },
      { path: "*", Component: NotFound },
    ],
  },
]);
