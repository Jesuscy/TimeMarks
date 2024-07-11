const express = require("express");
const activityRouter = require('./src/routes/activity.routes')
const groupRouter = require('./src/routes/group.routes')
const userRouter = require('./src/routes/user.routes')

const { connect } = require("./src/utils/db");

require("dotenv").config();

const app = express();

// Middlewares
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
//Routers
app.use("/activitys",activityRouter);
app.use("/groups",groupRouter);
app.use("/users",userRouter);


app.get("/", (request, response) => {
  response.status(200).json({
    message: "Welcome to my server",
    app: "My App",
  });
});
connect();

// Start server
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
