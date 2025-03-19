import React from "react";
import { Link } from "react-router";

function truncateText(text, maxLength) {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
}

export default function BookCard({ book }) {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={book.imageUrl}
        className="card-img-top"
        alt="Book Cover"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{book.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
        <p className="card-text flex-grow-1" title={book.description}>
          {truncateText(book.description, 50)}
        </p>
        <div className="d-flex justify-content-between">
          <Link to="#" className="btn btn-outline-primary">
            Edit
          </Link>
          <Link to="#" className="btn btn-outline-danger">
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
}
