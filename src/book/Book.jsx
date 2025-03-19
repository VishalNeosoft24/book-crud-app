import React from "react";
import BookCard from "../bookcard/BookCard";

let books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A classic novel set in the Roaring Twenties.",
    imageUrl:
      "https://ritikart.com/cdn/shop/files/1_444dfe1e-846d-49ff-83de-d347a8a13bdf.jpg?v=1699875126",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description:
      "A powerful story about race and justice in the American South.",
    imageUrl:
      "https://m.media-amazon.com/images/I/81JYG8sqRsL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "1984",
    author: "George Orwell",
    description:
      "A dystopian novel about totalitarian surveillance and control.",
    imageUrl:
      "https://m.media-amazon.com/images/I/61AkUdM37NL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    description:
      "A thrilling adventure of obsession and revenge on the high seas.",
    imageUrl:
      "https://m.media-amazon.com/images/I/71K4OH9CqOL._UF1000,1000_QL80_.jpg",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description: "A romantic novel that explores love and social standing.",
    imageUrl:
      "https://m.media-amazon.com/images/I/81Scutrtj4L._UF1000,1000_QL80_.jpg",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    description:
      "A coming-of-age novel that explores teenage angst and rebellion.",
    imageUrl: "https://m.media-amazon.com/images/I/8125BDk3l9L.jpg",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    description:
      "A fantasy adventure following Bilbo Baggins on a thrilling journey.",
    imageUrl:
      "https://rukminim3.flixcart.com/image/720/864/l1mh7rk0/book/y/8/6/the-hobbit-original-imagd5phsmwyvbek.jpeg?q=60&crop=false",
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    description: "A gothic novel exploring science, ambition, and horror.",
    imageUrl:
      "https://m.media-amazon.com/images/I/710p9SUfZtL._AC_UF1000,1000_QL80_.jpg",
  },
];

const bookCardArr = books.length ? (
  books.map((book, index) => (
    <div className="col-md-3 mb-4" key={index}>
      <BookCard key={"card" + index} book={book} />{" "}
    </div>
  ))
) : (
  <p>No Books Available</p>
);

export default function Book() {
  return (
    <div className="container mt-5">
      <div className="row g-4">{bookCardArr}</div>
    </div>
  );
}
