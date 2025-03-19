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
        path: "login",
        element: <LoginFom />,
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
