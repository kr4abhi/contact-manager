const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port =process.env.POrT || 5000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactroutes"));
app.use("/api/users", require("./routes/userroutes"));

app.use(errorHandler);

app.listen(port, () => {
    console.log(`running on port ${port}`);
    
});