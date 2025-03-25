import React, { useEffect, useState } from "react";
import { getBookById } from "../businesslogic/crud";
import { useParams } from "react-router";

export default function BookDetail() {
  let param = useParams();
  let [bookDetail, setBookDetail] = useState({});

  async function getBookDetails() {
    let book_info = await getBookById(param.id);
    setBookDetail(book_info);
  }

  useEffect(() => {
    getBookDetails();
  }, []);

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <div className="row g-4">
          {/* Image Section */}
          <div className="col-md-4 text-center">
            <img
              src={bookDetail.imageUrl}
              alt={bookDetail.title}
              className="img-fluid rounded shadow-sm"
            />
          </div>

          {/* Details Section */}
          <div className="col-md-8">
            <h3 className="card-title">{bookDetail.title}</h3>
            <h5 className="text-primary">By {bookDetail.author}</h5>
            <p className="text-muted">{bookDetail.description}</p>
            <p className="fw-bold">
              Book ID: <span className="text-secondary">{bookDetail.id}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
