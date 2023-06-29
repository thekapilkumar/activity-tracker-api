const express = require("express");
const port = process.env.PORT || 3003;
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require("./db/connectDB");
const todoRoute = require('./routes/todoRoutes');
const app = express();

// connection with database...
connectDB();

app.use(cors('GET', 'POST'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/todo', todoRoute);
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})
module.exports = app;