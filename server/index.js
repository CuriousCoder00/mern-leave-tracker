const express = require('express');
const cors = require('cors');
require("dotenv").config();
const routes = require('./Routes/routes')
const app = express();
app.use(cors());
app.use(express.json());

require("./config/dbConfig");
app.use("/api", routes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// PORT
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3001;
}

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});