import mongoose from "mongoose";
mongoose.set("strictQuery", true);

// conexion
const db = () =>
  mongoose
    .connect("mongodb://localhost:27017/prs5")
    .then(() => {
      console.log("Connection stablished");
    })
    .catch((error) => {
      console.log("Error connecting to MongoDB", error);
    });

export default db;
