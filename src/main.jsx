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
import axios from "axios";
import BookDetails from "./pages/BookDetails/BookDetails";
import ReadBook from "./pages/ReadBook/ReadBook";
import PrivateRoute from "./routes/PrivateRoute";
import BorrowedBooks from "./pages/BorrowedBooks/BorrowedBooks";
import AllBooks from "./pages/AllBooks/AllBooks";
import UpdateBook from "./pages/UpdateBook/UpdateBook";
import Error from "./pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
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
        element: (
          <PrivateRoute>
            <AddBook></AddBook>
          </PrivateRoute>
        ),
      },
      {
        path: "/books/:category",
        element: <Books></Books>,
        loader: ({ params }) =>
          axios.get(`${import.meta.env.VITE_apiURL}/books/${params.category}`),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <BookDetails></BookDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          axios.get(`${import.meta.env.VITE_apiURL}/book/${params.id}`),
      },
      {
        path: "/read/:id",
        element: <ReadBook></ReadBook>,
        loader: ({ params }) =>
          axios.get(`${import.meta.env.VITE_apiURL}/book/${params.id}`),
      },
      {
        path: "/borrowed",
        element: (
          <PrivateRoute>
            <BorrowedBooks></BorrowedBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "/allbooks",
        element: (
          <PrivateRoute>
            <AllBooks></AllBooks>
          </PrivateRoute>
        ),
        loader: () => axios.get(`${import.meta.env.VITE_apiURL}/books`),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateBook></UpdateBook>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          axios.get(`${import.meta.env.VITE_apiURL}/book/${params.id}`),
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
