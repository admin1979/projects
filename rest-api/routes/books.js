const express = require("express");
const router = express.Router();

let books = [{
  id: 1,
  autor: "Jo Do",
  title: "JavaScriptBook"
}];

router.get("/", (req, res) => {
  res.json(books);
});

router.get('/:id', (req, res) => {
  const bookId = parseInt(req.params.id, 10);

  const book = books.find(book => book.id === bookId);


  if (book) {
    return res.json(book);
  }
  return res.status(404).json({
    status: `Book with ${bookID} Not found`
  });
});


module.exports = router;