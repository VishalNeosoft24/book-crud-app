import React, { useEffect, useRef, useState } from "react";
import BookCard from "../bookcard/BookCard";
import { deleteBook, getAllBooks } from "../businesslogic/crud";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

export default function Book() {
  const bookObject = useSelector((state) => state.bookObj.value);
  const [books, setBooks] = useState([]);
  const search = useRef();
  const [key, setKey] = useState("id");
  let allBooks = useRef([]);

  useEffect(() => {
    getBookData();
  }, []);

  async function getBookData() {
    let data = await getAllBooks();
    allBooks.current.value = [...data];
    setBooks(data);
  }

  function searchBook() {
    if (search.current.value != "") {
      const found = allBooks.current.value.filter((employee) =>
        employee[key].includes(search.current.value)
      );
      setBooks(found);
    } else {
      setBooks(allBooks.current.value);
    }
  }

  async function bookDelete(bookId) {
    console.log("bookId = ", bookId);
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    if (result.isConfirmed) {
      let response_data = await deleteBook(bookId);
      if (response_data != null) {
        Swal.fire({
          title: "Deleted!",
          text: "Your Book has been deleted.",
          icon: "success",
        });
        getBookData();
      }
    }
  }

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
      {/* Search Section */}
      <section className="d-flex flex-column flex-md-row align-items-center gap-3 mb-4">
        <label className="fw-bold">Search By:</label>
        <select
          value={key}
          onChange={(e) => setKey(e.target.value)}
          className="form-select w-auto"
        >
          <option value="id">ID</option>
          <option value="title">Title</option>
          <option value="author">Author</option>
        </select>
        <input
          type="text"
          ref={search}
          onKeyUp={searchBook}
          className="form-control w-50"
          placeholder="Search books..."
        />
      </section>

      {/* Total Books Count */}
      <h2 className="mt-4 text-primary">
        Total Books: {bookObject.totalBooks}
      </h2>

      {/* Book Cards Grid */}
      <div className="row row-cols-1 row-cols-md-3 g-4">{bookCardArr}</div>
    </div>
  );
}
