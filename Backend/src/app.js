const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const productRouter = require("../Routes/productRouter");

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/api/v1/products", productRouter);

module.exports = app;
