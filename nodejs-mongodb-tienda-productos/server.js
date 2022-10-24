const express = require("express");
const mongoose = require("mongoose");
const productoRouter = require("./routes/productoRoutes.js");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost/tienda");

app.use('/productos', productoRouter);

app.listen(3000, () => {
  console.log("Server is running...");
});