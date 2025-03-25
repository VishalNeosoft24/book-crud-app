import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./home/Home.jsx";
import { createBrowserRouter, redirect, RouterProvider } from "react-router";
import BookCard from "./bookcard/BookCard.jsx";
import Book from "./book/Book.jsx";
import AddBookForm from "./addbook/AddBookForm.jsx";
import LoginFom from "./login/LoginFom.jsx";
import BookDetail from "./bookdetail/BookDetail.jsx";
import { getBookById } from "./businesslogic/crud.js";

let routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        loader: () => redirect("home"),
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "card",
        element: <BookCard />,
      },
      {
        path: "books",
        element: <Book />,
      },
      {
        path: "add-book",
        element: <AddBookForm />,
      },
      {
        path: "edit-book/:id",
        element: <AddBookForm />,
        loader: async ({ params }) => {
          return await getBookById(params.id);
        },
      },
      {
        path: "login",
        element: <LoginFom />,
      },
      {
        path: "book/:id",
        element: <BookDetail />,
      },
    ],
  },
];

let browserRouter = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={browserRouter}></RouterProvider>
  </StrictMode>
);
