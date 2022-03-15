const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');

app.locals.pretty = true;
app.set('view engine', 'pug');
app.set('views', './pugfile');
app.use(express.static('FILE'));
app.use(cookieParser());

app.get('/',(req,res) => {
  let page = req.query.page;
  console.log(page);
  res.render('intro/selectMoive.pug',{"page": page});
});

app.listen(2000,() => {
  console.log("2000 open");
});