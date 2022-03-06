const express = require('express');
const product = require('./routes/api/product');
const app = express();
const PORT = process.env.PORT || 5050;

const newLocal = "/api/token";
app.use(newLocal, product);

app.listen(PORT, () => console.log(`I am listening to ${PORT}`));
