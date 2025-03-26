import React, { useEffect, useState } from "react";
import BookCard from "../bookcard/BookCard";
import { deleteBook, getAllBooks } from "../businesslogic/crud";
import { useSelector } from "react-redux";

export default function Book() {
  const bookObject = useSelector((state) => state.bookObj.value);

  const [books, setBooks] = useState([]);

  async function getBookData() {
    let data = await getAllBooks();
    setBooks(data);
  }

  async function bookDelete(bookId) {
    console.log("bookId = ", bookId);
    let response_data = await deleteBook(bookId);
    if (response_data != null) {
      getBookData();
    }
  }

  useEffect(() => {
    getBookData();
  }, []);

  const bookCardArr = books.length ? (
    books.map((book, index) => (
      <div className="col-md-3 mb-4" key={index}>
        <BookCard key={"card" + index} book={book} bookDelete={bookDelete} />
      </div>
    ))
  ) : (
    <p>No Books Available</p>
  );

  return (
    <div className="container mt-5">
      <h2 className="mt-4">Total Books : {bookObject.totalBooks}</h2>
      <div className="row g-4">{bookCardArr}</div>
    </div>
  );
}
