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
import { Provider } from "react-redux";
import { store } from "./reduxstore/store.js";
import { CookiesProvider } from "react-cookie";
import RouteGuard from "./routeguard/RouteGuard.jsx";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

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
        element: (
          <RouteGuard>
            <AddBookForm />
          </RouteGuard>
        ),
      },
      {
        path: "edit-book/:id",
        element: (
          <RouteGuard>
            <AddBookForm />
          </RouteGuard>
        ),
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
    <Provider store={store}>
      <CookiesProvider>
        <RouterProvider router={browserRouter}></RouterProvider>
      </CookiesProvider>
    </Provider>
  </StrictMode>
);
