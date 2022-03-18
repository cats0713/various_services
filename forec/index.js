const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
const mysql = require('mysql');
const bodyParser = require('body-parser');


app.locals.pretty = true;
// app.set('view engine', 'pug');
// app.set('views', './pugfile');
app.use(express.static('FILE'));
app.use(cookieParser());



app.get('/forec', (req, res) => {

  let page = req.query.page;
  if (page == undefined) {
    res.sendFile(__dirname + '/FILE/html/intro_intro.html');
  } else if (page == 10) {
    res.sendFile(__dirname + '/FILE/html/intro.html');
  } else if (page == 20) {

    let db_handle = mysql.createConnection({
      host: "127.0.0.1",
      user: "c15st19",
      password: "c15st19",
      database: "c15st19"
    });

    db_handle.connect(function (err) {
      if (err) {
        console.log(err)
      } else {
        console.log("db연결 성공");
      }
    });

    db_handle.query("select * from movie", function (err, rows) {
      if (err) {
        console.error(err);
        db_handle.release();
        return;
      }else{
        let pageTag = `<!DOCTYPE html>
        <html lang="ko">
        
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="chorme" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
            integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
            crossorigin="anonymous" referrerpolicy="no-referrer" />
          <title>FOREC</title>
          <script src="https://code.jquery.com/jquery-3.6.0.min.js"
            integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
          <link rel="stylesheet" href="../css/selectmovie.css" />
          <script src="../js/selectmovie.js"></script>
        </head>
        
        <body>
        
          <section class="countermodalwapper opacityscroll">
            <form class="countPersonsection" action="" name="personcount" method="get" target="">
              <header class="countmodalheader">
                <h1 class="count_title">인원선택</h1>
              </header>
              <div class="Adult">
                <h2>성인</h2>
                <button class="adultpeoplecounter cutbtn" value="1">1</button><button class="adultpeoplecounter cutbtn"
                  value="2">2</button><button class="adultpeoplecounter cutbtn" value="3">3</button><button
                  class="adultpeoplecounter cutbtn" value="4">4</button><button class="adultpeoplecounter cutbtn"
                  value="5">5</button><button class="adultpeoplecounter cutbtn" value="6">6</button>
              </div>
              <div class="junior">
                <h2>청소년</h2>
                <button class="joniorpeplecounter cutbtn" value="1">1</button><button class="joniorpeplecounter cutbtn"
                  value="2">2</button><button class="joniorpeplecounter cutbtn" value="3">3</button><button
                  class="joniorpeplecounter cutbtn" value="4">4</button><button class="joniorpeplecounter cutbtn"
                  value="5">5</button><button class="joniorpeplecounter cutbtn" value="6">6</button>
              </div>
              <div class="disabled">
                <h2>장애인</h2>
                <button class="Disabledpeplecounter cutbtn" value="1">1</button><button class="Disabledpeplecounter cutbtn"
                  value="2">2</button><button class="Disabledpeplecounter cutbtn" value="3">3</button><button
                  class="Disabledpeplecounter cutbtn" value="4">4</button><button class="Disabledpeplecounter cutbtn"
                  value="5">5</button><button class="Disabledpeplecounter cutbtn" value="6">6</button>
              </div>
              <div class="old">
                <h2>노약자</h2>
                <button class="oldplecounter cutbtn" value="1">1</button><button class="oldplecounter cutbtn"
                  value="2">2</button><button class="oldplecounter cutbtn" value="3">3</button><button
                  class="oldplecounter cutbtn" value="4">4</button><button class="oldplecounter cutbtn"
                  value="5">5</button><button class="oldplecounter cutbtn" value="6">6</button>
              </div>
              <div class="counterresult"><button id="submitperson">확인</button></div>
            </form>
            <!--인원선택 모달-->
          </section>
        
          
          <section class="modalwapper opacityscroll">
            <section class="modal_body">
              <header class="modal__header">
                <h1>확인해주세요!</h1>
                <i class="fa-solid fa-x modalclosebtn" id="modalclosebtn"></i>
              </header>
              <div class="modalinfo">
                <div>
                  <p>만 15세미만의 고객님은(영,유아 포함)</p>
                  <p>반드시 성인 보호자와 동반하에 관람이 가능합니다.</p>
                  <p>확인 불가시에는 입장이 제한됩니다.</p>
                </div>
                <div>
                  <h2>접종유무에 관계없이 최대6명까지 관람 가능합니다.</h2>
                  <p>상영관 내 물, 음료 취식이 가능합니다.</p>
                  <p>띄어앉기 운영중입니다.</p>
                  <p>극장 이용시에 항상 마스크 착용을 부탁드립니다.</p>
                </div>
              </div>
              <button class="goselectPerson">예매하기</button>
              <!--여기가  본체// -->
            </section>
          </section>
          <!-- 안내 모달 -->
        
          <section class="moviewapper">
            <header id="playerarea">
              <div class="head__infor">
                <span id="logoimg">logo</span><span id="menutitle">상영영화</span><span id="time">00:00</span>
              </div>
            </header>
            <!--  영화셀렉트하는 영역 시작 -->
            <section class="mainBox">
              <!--  slide될 영역 , 이미지를 누르면 시간과 남은좌석이 떠야함 -->
              <section class="main__body" id="mainBody">`;
        let i = 0;
        for (i in rows){
          pageTag += `<div class="slide__info" id="no${rows[i]['no']}_movie">
					<img class="sliderimgs" id="sl__1" src="../IMG/selectmovie/no${rows[i]['no']}_movie.jpg" alt="${rows[i]['name']} 포스터" />
					<div class="infor__container">
						<h3 class="movietitle">${rows[i]['name']}</h3>
						<div class="movietimebox">

            <button>
            <ul class="movie_li_time">
              10:00~13:00
              <li>000/000</li>
            </ul>
            </button>
            

						</div>
					</div>
					<div class="infor__tail">
						<ul class="runingtime">
							상영시간
							<li class="runingtime_li">{${rows[i]['time']}}분</li>
						</ul>
						<div class="wathingage">
							<p>${rows[i]['age']}</p>
						</div>
					</div>
				</div>`;
        }
        pageTag += `
        </section>
      </section>
  
      <!-- 하단바 -->
      <footer clas="moviefooter">
        <i id="previousBtn" class="fa-solid fa-angles-left"></i><i id="homeBtn" class="fa-brands fa-fort-awesome"></i>
      </footer>
  
    </section>
  </body>
  
  </html>`;

        res.send(pageTag);
      }
    });

    db_handle.end(); // DB 접속 종료

  } else if (page == 30) {
    res.sendFile(__dirname + '/FILE/html/selectmovie.html');
  } else if (page == 40) {
    res.sendFile(__dirname + '/FILE/html/.html');
  }


});

app.listen(2000, () => {
  console.log("2000 open");
});
