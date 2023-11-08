import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./root/Root";
import AuthProvider from "./providers/AuthProvider";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Books from "./pages/Books/Books";
import AddBook from "./pages/AddBook/AddBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement: <Error></Error>
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addbook",
        element: <AddBook></AddBook>,
      },
      {
        path: "/books/:category",
        element: <Books></Books>,
        // loader: ({ params }) =>
        //   fetch(
        //     `https://brand-shop-server-rho.vercel.app/products/${params.brand}`
        //   ),
      },

      // {
      //   path: "/detail/:id",
      //   element: (
      //     <PrivateRoute>
      //       <ServiceDetail></ServiceDetail>
      //     </PrivateRoute>
      //   ),
      //   loader: ({ params }) =>
      //     fetch(`${import.meta.env.VITE_apiURL}/services/${params.id}`),
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
