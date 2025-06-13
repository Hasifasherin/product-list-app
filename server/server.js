// server/server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/checkout", (req, res) => {
  const { items, totalItems, totalPrice } = req.body;
  console.log("Received checkout data:");
  console.log("Items:", items);
  console.log("Total Items:", totalItems);
  console.log("Total Price:", totalPrice);
  res.json({ message: "Cart received successfully!" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
