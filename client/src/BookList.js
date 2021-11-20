import React from "react";
import BookCard from "./BookCard";

function BooksList(props) {
  // if (props.books.length === 0) return;

  return (
    <div
      style={{
        display: "flex",
        flexFlow: "wrap",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      {props.books.slice(0, 10).map((book, i) => {
        if (book.volumeInfo.imageLinks) {
          return (
            <BookCard
              key={i}
              image={book.volumeInfo.imageLinks.thumbnail}
              title={book.volumeInfo.title}
              author={book.volumeInfo.authors}
              published={book.volumeInfo.publishedDate}
              description={book.volumeInfo.description}
              numPages={book.volumeInfo.pageCount}
              availIsrael={
                book.accessInfo.country === "IL"
                  ? "Available in IL"
                  : "Not Available in IL"
              }
              categories={book.volumeInfo.categories}
            />
          );
        }
      })}
    </div>
  );
}
export default BooksList;
