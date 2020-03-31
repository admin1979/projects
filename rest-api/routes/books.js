const express = require("express");
const uuid = require("uuid/v1");
const router = express.Router();

let books = [
  {
    id: 1,
    author: "John Doe",
    title: "Javascript Book"
  }
];

router.get("/", (req, res) => {
  res.json(books);
});

router.get("/:id", (req, res) => {
  const bookId = parseInt(req.params.id, 10);

  const book = books.find(book => book.id === bookId);

  if (book) {
    return res.json(book);
  }
  return res.status(404).json({
    status: `Book with ${bookId} not found`
  });
});

router.post("/", (req, res) => {
  console.log(req.body);
  const book = {
    title: req.body.title || "Default title",
    author: req.body.author || "Default author",
    id: uuid()
  };

  books.push(book);
  return res.json(book);
});

router.put("/:id", (req, res) => {
  const bookId = parseInt(req.params.id, 10);

  books.forEach(book => {
    if (book.id === bookId) {
      book.title = req.body.title;
      book.author = req.body.author;
    }
  });
  const newBook = books.find(book => book.id === bookId);
  return res.json(newBook);
});

router.delete("/:id", (req, res) => {
  const bookId = parseInt(req.params.id, 10);

  books = books.filter(books => book.id != bookID);

  const existBook = books.find(book => book.id === bookId);

  if (!existBook) {
    return res.send(`Book with ${bookId} was deleted`).status(200);
  } else {
    return res.send("Something wrong").status(400);
  }
});

module.exports = router;
