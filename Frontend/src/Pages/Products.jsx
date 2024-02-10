import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Components/Card";
const Products = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get("http://localhost:8000/api/v1/products");
    setData(data.data);
  };

  const handleClick = async () => {
    const { data } = await axios.get(
      "http://localhost:8000/api/v1/products?sort=price"
    );
    setData(data.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="pro-header">
        <div className="pro-header-up"></div>
        <div className="pro-header-down">
          <button className="btn" onClick={handleClick}>
            Sort By Price
          </button>
        </div>
      </div>
      <div className="product-container">
        {data.map((item) => {
          return <Card item={item} key={item._id} />;
        })}
      </div>
    </>
  );
};

export default Products;
