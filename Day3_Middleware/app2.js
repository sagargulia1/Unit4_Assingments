const express = require('express');
const app = express();

app.use(singleBook);

app.get('/book/HarryPotter', (req, res) =>{
  return res.send({ route: '/book/HarryPotter' , bookName: req.name });
})

app.get('/book/GameOfThrones', (req, res) =>{
  return res.send({ route: '/book/GameOfThrones' , bookName: req.name });
})

app.get('/game', (req, res) =>{
  return res.send({ route: '/game' , bookName: req.name });
})

function singleBook(req, res, next) {
  if ( req.path === '/book/HarryPotter' ){
    req.name = 'Harry Potter';
  }
  else if ( req.path === '/book/GameOfThrones'){
    req.name = 'Game Of Thrones';
  }
  else{
    req.name = 'No Book Exist'
  }
  next();
}

app.listen(4000, () => {
    console.log("listening on port 4000");
  });