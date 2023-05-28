import { connect } from "mongoose";

export const connectDB = async () => {
  connect(process.env.MONGO_URI || "")
    .then(() => {
      console.log("DB Connected!");
    })
    .catch((err) => {
      console.log(`DB Connection Error: ${err.message}`);
    });
};
