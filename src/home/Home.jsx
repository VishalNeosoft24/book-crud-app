import React from "react";
import { NavLink } from "react-router"; // Ensure the correct import
import "./Home.css";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";

export default function Home() {
  const bookObject = useSelector((state) => state.bookObj.value);
  const [cookie, setCookie, removeCookie] = useCookies();

  return (
    <div className="container mt-5">
      {/* Hero Section */}
      <div
        className="jumbotron text-center p-5 rounded shadow-lg"
        style={{
          background:
            "linear-gradient(135deg, rgba(17, 153, 142, 0.85), rgba(56, 239, 125, 0.85))",
          color: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(10px)",
        }}
      >
        <h1 className="display-4 fw-bold">
          Welcome to{" "}
          <span
            style={{
              background: "linear-gradient(45deg, #ffdd57, #ff8800)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            BookCrud
          </span>
        </h1>
        <p className="lead">
          Manage your books efficiently with our CRUD application.
        </p>
        <hr className="my-4 border-light" />
        <p>Explore, add, update, and delete books seamlessly.</p>
        <NavLink className="btn btn-custom shadow-sm" to="/books">
          View Books
        </NavLink>
        <h2 className="mt-4">Total Books : {bookObject.totalBooks}</h2>
      </div>

      {/* Features Section */}
      {cookie.admin != undefined && (
        <div className="row mt-5 g-4">
          {/* Add Book Card */}
          <div className="col-lg-4 col-md-6">
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">📚 Add Books</h5>
                <p className="card-text text-muted">
                  Easily add new books to your collection.
                </p>
                <NavLink
                  to="/add-book"
                  className="btn btn-primary btn-sm shadow-sm"
                >
                  Add Book
                </NavLink>
              </div>
            </div>
          </div>

          {/* Update Book Card */}
          <div className="col-lg-4 col-md-6">
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">✏️ Update Books</h5>
                <p className="card-text text-muted">
                  Edit book details anytime.
                </p>
                <NavLink
                  to="/books"
                  className="btn btn-warning btn-sm shadow-sm"
                >
                  Update
                </NavLink>
              </div>
            </div>
          </div>

          {/* Delete Book Card */}
          <div className="col-lg-4 col-md-6 mx-auto">
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">🗑️ Delete Books</h5>
                <p className="card-text text-muted">
                  Remove books from the collection.
                </p>
                <NavLink
                  to="/books"
                  className="btn btn-danger btn-sm shadow-sm"
                >
                  Delete
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
