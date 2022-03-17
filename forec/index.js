const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
const { render } = require("pug");

app.locals.pretty = true;
app.set('view engine', 'pug');
app.set('views', './pugfile');
app.use(express.static('FILE'));
app.use(cookieParser());

app.get('/forec',(req,res) => {
  let page = req.query.page;
  console.log(page);
  if(page == undefined){
    res.sendFile(__dirname + '/FILE/html/intro.html');
  }
  if(page == 1){
    res.sendFile(__dirname + '/FILE/html/select.html');
  }
  
});

app.listen(2000,() => {
  console.log("2000 open");
});