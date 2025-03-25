import { useState } from "react";
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from "react-router";
import { addBook, getBookById, updateBook } from "../businesslogic/crud";

export default function AddBookForm() {
  let navigate = useNavigate();
  let location = useLocation();
  let { id } = useParams();
  let searchBook = useLoaderData();
  const isUpdate = location.pathname.includes("edit-book");
  console.log("searchBook: ", searchBook);

  function initialState() {
    if (location.pathname.includes("edit-book")) return searchBook;
    else
      return {
        id: id,
        title: "",
        author: "",
        description: "",
        imageUrl: "",
      };
  }

  let [bookData, setBookData] = useState(() => initialState());

  function getFormValue(e) {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  }

  async function updateBookInformation(event) {
    event.preventDefault();
    let data = await updateBook(bookData, id);
    console.log("data: ", data);
    if (data != null) {
      navigate("/books");
    }
  }

  async function addNewBook(event) {
    event.preventDefault();
    let data = await addBook(bookData);
    console.log("data: ", data);
    if (data != null) {
      navigate("/books");
    }
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">{isUpdate ? "Update Book" : "Add New Book"}</h2>
      <form onSubmit={isUpdate ? updateBookInformation : addNewBook}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Book Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Enter book title"
            value={bookData.title}
            onChange={getFormValue}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            id="author"
            name="author"
            placeholder="Enter author's name"
            value={bookData.author}
            onChange={getFormValue}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="3"
            placeholder="Enter book description"
            value={bookData.description}
            onChange={getFormValue}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="imageUrl" className="form-label">
            Image URL
          </label>
          <input
            type="text"
            className="form-control"
            id="imageUrl"
            name="imageUrl"
            value={bookData.imageUrl}
            onChange={getFormValue}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {location.pathname.includes("edit-book") ? "Update " : "Add "}
          Book
        </button>
      </form>
    </div>
  );
}
