const express = require("express");
const app = express();

app.locals.pretty = true;
app.set('view engine', 'pug');
app.set('views','./pugfile');
app.use(express.static('IMG'));

app.get('/',(req,res)=>{
  res.render('intro/selectMoive.pug');
});
app.get('/cat1',(req,res)=>{
  res.render('2.pug');
});
// app.get('/cat2',(req,res)=>{
//   res.render('img',{'tilte': 'cat2' , 'time':'2022-05-13', 'imgSrc' : 'cat4.jpg', 'text':'yu'});
// });
app.listen(2000,()=>{
  console.log("2000 open");
});
