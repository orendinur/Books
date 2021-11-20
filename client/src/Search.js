import React from "react";
import Select from "react-select";

function Search(props) {
  return (
    <div
      className="search"
      style={{
        display: "flex",
        width: "90%",
        justifyContent: "center",
        flexDirection: "row",
        height: "50px",
      }}
    >
      <form
        onSubmit={props.searchBook}
        action=""
        style={{
          width: "1000px",
          display: "flex",
          justifyContent: "center",
          border: " 1px solid grey",
        }}
      >
        <input
          placeholder="type here to search books"
          onChange={props.handleSearch}
          type="text"
          style={{ width: "60%", backgroundColor: "azure", height: "75%" }}
        />
        <select
          onChange={props.handleSelect}
          name="searchType"
          id="searchType"
          style={{ width: "20%", backgroundColor: "azure", height: "100%" }}
        >
          <option value="title">title</option>
          <option value="author">author</option>
          <option value="publisher">publisher</option>
          <option value="subject">subject</option>
        </select>
        <button
          type="submit"
          style={{ width: "20%", backgroundColor: "azure", height: "100%" }}
        >
          Search
        </button>
      </form>
    </div>
  );
}
export default Search;
