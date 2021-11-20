import React from "react";
import "./App.css";
import Header from "./Header";
import Books from "./Books";
import data from "./data.json";
import BooksList from "./BookList";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Books />
      {/* <BooksListExtended books={data.items} /> */}
    </div>
  );
}
