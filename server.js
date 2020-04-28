const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const postsRoutes = require("./routes/posts");
const userRoutes = require("./routes/user");

const app = express();

// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
  mongoose
  .connect(db, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex:true
  })
  .then(() => console.log('MongoDB successfully connected'))
  .catch(err => {
  console.log(`DB Connection Error: ${err.message}`);
  });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// upload file middlware -folder
app.use('/uploads',express.static(path.join(__dirname,'uploads')));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization" );
  res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, PUT, DELETE, OPTIONS");
  next();
});

//routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postsRoutes);

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Server running on port : ${port}`));
