const express = require("express");
const dotenv = require("dotenv");
const connectToDb = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");


dotenv.config();
connectToDb();
const app = express();

app.use(express.json()); //to accept json data

app.get("/", (req, res) => {
  res.send("Api is on ");
});

app.use("/api/user", userRoutes);
app.use("/api/chat",chatRoutes);

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
