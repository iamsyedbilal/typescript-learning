import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { store } from "./store/store";
import { Provider } from "react-redux";
import {
  About,
  Cart,
  Checkout,
  Error,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from "./pages";
import { loader as landingLoader } from "./loaders/featuresProducts.ts";
import { loader as productLoader } from "./loaders/productsLoader.ts";
import { ErrorElement } from "./components";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
        errorElement: <ErrorElement />,
      },
      {
        path: "/products",
        element: <Products />,
        loader: productLoader,
        errorElement: <ErrorElement />,
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
        errorElement: <ErrorElement />,
      },
      {
        path: "/orders",
        element: <Orders />,
        errorElement: <ErrorElement />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <ErrorElement />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
