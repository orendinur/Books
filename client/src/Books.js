import React, { Component } from "react";
import Search from "./Search";
import BooksList from "./BookList";
import data from "./data.json";

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: "",
      searchType: "intitle",
    };
  }

  searchBook = (e) => {
    e.preventDefault();
    const endPoint = "https://www.googleapis.com/books/v1/volumes?q=";
    const titleSearchTerm = `${this.state.searchType}:${this.state.searchField}`;
    let searchQuery = `${endPoint}${titleSearchTerm}`;

    fetch(searchQuery)
      .then((response) => response.json())
      .then((data) => {
        const books = data.items ? data.items : [];
        this.setState({
          books: books,
        });
      });
  };

  handleSelect = (val) => {
    this.setState({
      searchType: val.target.value,
    });
    console.log(val.target.value);
  };

  handleSearch = (val) => {
    this.setState({
      searchField: val.target.value,
    });
  };

  render() {
    return (
      <>
        <div
          style={{
            display: "flex",
            backgroundColor: "#89CFF0",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
            paddingBottom: "10px",
          }}
        >
          <Search
            handleSelect={this.handleSelect}
            searchBook={this.searchBook}
            handleSearch={this.handleSearch}
          />
        </div>
        <div
          style={{
            width: "1000px",
            justifyContent: "center",
            display: "inline-block",
          }}
        >
          {this.state.books.length > 0 ? (
            <BooksList books={this.state.books} />
          ) : (
            <BooksList books={data.items} />
          )}
        </div>
      </>
    );
  }
}
export default Books;
