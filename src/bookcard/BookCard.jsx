import React from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Tooltip } from "@mui/material";

function truncateText(text, maxLength) {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
}

export default function BookCard({ book, bookDelete }) {
  const [cookie, setCookie, removeCookie] = useCookies();

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={book.imageUrl}
        className="card-img-top"
        alt="Book Cover"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-id">{book.id}</h5>
        <h5 className="card-title">{book.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
        <p className="card-text flex-grow-1" title={book.description}>
          {truncateText(book.description, 50)}
        </p>
        <div className="d-flex justify-content-between">
          <Link to={`/book/${book.id}`} className="btn btn-outline-primary">
            Detail
          </Link>
          {cookie.admin != undefined && (
            <Button
              LinkComponent={Link}
              to={`/edit-book/${book.id}`}
              className="btn btn-outline-primary"
            >
              <Tooltip placement="bottom" title="This button is used fro Edit">
                <EditIcon color="primary"></EditIcon>
              </Tooltip>
            </Button>
          )}
          {cookie.admin != undefined && (
            <Button
              className="btn btn-outline-danger"
              onClick={() => bookDelete(book.id)}
            >
              <DeleteIcon color="error"></DeleteIcon>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
