const express = require('express');      //Library import karwaiin hy jissey App.get wali cheezen istemaal hoo sakti hy
const cors = require('cors');            //Library import karwaii hy backend of node.js server 
const pool = require('./db');            //PostgreSQL se link karne ke liye
require('dotenv').config();              //Authentication ky liye

const app = express();
const PORT = process.env.PORT || 6000;

app.get('/', (req, res) => {
  res.send('NuFAD API is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});