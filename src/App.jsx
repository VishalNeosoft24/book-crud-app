import { useState } from "react";
import "./App.css";
import { Header } from "./header/Header";
import { Outlet } from "react-router";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
