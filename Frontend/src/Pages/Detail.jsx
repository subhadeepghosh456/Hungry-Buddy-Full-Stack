import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const getData = async () => {
    const { data } = await axios.get(
      `http://localhost:8000/api/v1/products/${id}`
    );
    setData(data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  //   console.log(params);
  console.log(data);
  return (
    <>
      <div className="prod-details">
        <div className="prod-detail-container">
          <div className="prod-details-left">
            <img src={data.imageCover} alt={data.name} />
          </div>
          <div className="prod-details-right">
            <h3>{data.name}</h3>
            <p>Created At: {Date(data.createdAt)}</p>
            <p>Summary:{data.summary}</p>
            <p>Description:{data.description}</p>
            <p>Price:{data.price}</p>
            <p>Rating:{data.ratingsAverage}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
