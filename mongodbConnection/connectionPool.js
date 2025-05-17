const mongoose = require("mongoose");
// Create a connection pool with a maximum of 10 connections
const uri = "mongodb://127.0.0.1:27017/test";
mongoose.createConnection(uri, { maxPoolSize: 10 });

// With connection string options
// const uri = 'mongodb://127.0.0.1:27017/test?maxPoolSize=10';
// mongoose.createConnection(uri);
