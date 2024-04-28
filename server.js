const express = require("express");
const app = express();
const PORT = 3000;
const connectDb = require("./utils/db");
const bookRoute = require("./router/book-router");
const errorMiddleware = require("./middlewares/errorMiddleware");

app.use(express.json());

app.use("/api", bookRoute);
app.use(errorMiddleware);

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT} `);
  });
});
