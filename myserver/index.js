const express = require("express");
const booksRouter = express.Router();

const app = express(); //its working
const products = ["Apple", "Pen", "Computer"];

//тут мы работали с pug, выключено
// app.set('view engine', 'pug');
//app.set('view engine', 'ejs');

app.set("view engine", "hbs");
app.set("views", "./views");

app.use((req, res, next) => {
  console.log(
    "Date",
    new Date(),
    "Method",
    req.method,
    "URL",
    req.originalUrl,
    "IP",
    req.ip
  );
  next();
});

app.use(express.static("public"));

app.get("/", (req, res, next) => {
  res.send("Its working");
});

app.get("/products", (req, res, next) => {
  console.log("Page", req.query.page);
  res.send(products);
});

app.get("/products/:id", (req, res, next) => {
  if (products[req.params.id]) {
    res.send(products[req.params.id]);
  } else {
    res.status(403).send("Product not found");
  }
});

//pug
app.get("/main", (req, res, next) => {
  res.render("main", {
    title: "Products",
    message: "Products List",
    products: products
  });
});

//ejs
app.get("/ejs", (req, res, next) => {
  res.render("main", {
    title: "Products1",
    message: "Products List1",
    products: products
  });
});

//hbs
app.get("/hbs", (req, res, next) => {
  res.render("main.hbs", {
    title: "Products1",
    message: "Products List12",
    products: products
  });
});

app.get("/downloadBooks111", (req, res, next) => {
  res.download("./public/books.html", "anothername", err => {
    console.log("File sent");
  });
});

booksRouter.get("/", (req, res) => {
  res.send("Books11");
});

booksRouter.get("/about", (req, res) => {
  res.send("About books");
});

app.get("/blog", (req, res, next) => {
  res.redirect("http://big-moto.ru");
});

app.get("/blog2", (req, res, next) => {
  res.redirect("/");
});

app.use("/books", booksRouter);

app.listen(5000, () => {
  console.log("Its started", new Date());
});
