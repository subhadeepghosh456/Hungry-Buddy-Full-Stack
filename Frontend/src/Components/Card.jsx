import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  // console.log(item);
  return (
    <div className="card">
      <div className="image-Container">
        <img src={item.imageCover} alt={item.name} />
      </div>
      <p>
        Title:
        {item.name.length < 20 ? item.name : item.name.substring(0, 20) + "..."}
      </p>
      <p>
        Rating:{item.ratingsAverage} <span className="star">&#9733;</span>{" "}
      </p>
      <p>Price:{item.price}₹</p>
      <Link to={`/detail/${item._id}`}>
        <button className="btn">Details</button>
      </Link>
    </div>
  );
};

export default Card;
