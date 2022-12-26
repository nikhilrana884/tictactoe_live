require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const gameRoutes = require("./routes/game");

connection()

app.use(express.static(path.join(__dirname, 'client/build')))
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.use(express.json())
app.use(cors())

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/game", gameRoutes);

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})