import React, { useState } from "react";

function BookCard(props) {
  const [showInfo, setShowInfo] = useState(false);
  const handleClick = () => {
    setShowInfo(!showInfo);
  };
  return (
    <div className="card-container" onClick={handleClick}>
      {!showInfo ? (
        <div>
          <img src={props.image} alt="" />
          <div className="desc">
            <h2>{props.title}</h2>
            <h3>{props.author}</h3>
            <p>{props.published}</p>
          </div>
        </div>
      ) : (
        <div>
          <p>{props.description}</p>
          <p>{props.numPages}</p>
          <p>{props.availIsrael}</p>
          <p>{props.categories}</p>
        </div>
      )}
    </div>
  );
}
export default BookCard;
