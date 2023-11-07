import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./root/Root";
import AuthProvider from "./providers/AuthProvider";
import Home from "./pages/Home/Home";

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
