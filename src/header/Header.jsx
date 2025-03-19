import { Navbar } from "../navbar/Navbar";
import "./Header.css";

export function Header() {
  return (
      <header className="top-header text-white text-center pt-4">
        <h1 className="fw-bold text-uppercase">Book Management</h1>
        <hr className="border-white w-50 mx-auto" />
        <h2 className="fs-4">Book CRUD Operations</h2>
      <Navbar />
      </header>
  );
}
