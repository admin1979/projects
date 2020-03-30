const express = require("express");
const router = express.Router();

let books = [
  {
    id: 1,
    autor: "Jo Do",
    title: "JavaScriptBook"
  }
];

router.get("/", (req, res) => {
  res.json(books);
});

module.exports = router;
