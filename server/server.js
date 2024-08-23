require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./utils/db");
const authRoute = require("./router/auth-router");
const errorMiddleware = require("./middlewares/error-middleware");

const app = express();

const corsOption = {
  origin: "http://localhost:5173",
  methods: "GET, PUT, POST, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOption));
app.use(express.json());

// Routes
app.use("/api/auth", authRoute);
app.use(errorMiddleware);

const PORT = 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  });
}).catch((error) => {
  console.error("Failed to connect to MongoDB:", error);
});
