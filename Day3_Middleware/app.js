const express = require('express');
const app = express();

app.use(allBooks);

app.get('/books', (req, res) =>{
  return res.send({ route: '/books' });
})

function allBooks(req, res,next) {
  console.log ( "Fetching all books");
  next();
}

app.listen(5000, () => {
    console.log("listening on port 5000");
  });