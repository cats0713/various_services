const express = require("express");
const app = express();

const mysql = require('mysql');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const e = require("express");


app.locals.pretty = true;
// app.set('view engine', 'pug');
// app.set('views', './pugfile');
app.use(express.static('FILE'));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.redirect('/forec');
});

app.get('/forec', (req, res) => {

  res.cookie('conutTime', 'conutTime', {
    maxAge: 120000
  });

  let page = req.query.page;
  if (page == undefined) { //홈페이지의 처음 화면            
    // console.log(res.query);
    res.sendFile(__dirname + '/FILE/html/intro_intro.html');

  } else if (page == 10) { // 예매하기, 티켓출력하기 화면
    res.sendFile(__dirname + '/FILE/html/intro.html');

  } else if (page == 20) { //영화 선택 화면

    //db연결정보
    let db_handle = mysql.createConnection({
      host: "127.0.0.1",
      user: "c15st19",
      password: "c15st19",
      database: "c15st19"
    });
    //연결
    db_handle.connect(function (err) {
      if (err) {
        console.log(err)
      } else {
        console.log("db연결 성공");
      }
    });
    //명령어 날리기
    db_handle.query("select * from movie", function (err, rows) {
      console.log(rows);
      if (err) {
        console.error(err);
        db_handle.release();
        return;
      } else {//에러가 안났으면
        let movieTime = [
          ['06:40 ~ 08:40<br>A관 46/50', '11:20 ~ 13:20<br>B관 46/50', '16:00 ~ 18:00<br>A관 46/50', '20:40 ~ 22:40<br>B관 46/50'],
          ['09:00 ~ 11:00<br>A관 46/50', '13:40 ~ 15:40<br>B관 46/50', '18:20 ~ 20:20<br>A관 46/50', '23:00 ~ 01:00<br>B관 46/50'],
          ['6:40 ~ 8:40<br>B관 46/50','11:20 ~ 13:20<br>A관 46/50','16:00 ~ 18:00<br>B관 46/50','20:40 ~ 22:40<br>A관 46/50'],
          ['9:00 ~ 11:00<br>B관 46/50','13:40 ~ 15:40<br>A관 46/50','18:20 ~ 20:20<br>B관 46/50','23:00 ~ 1:00<br>A관 46/50']
        ];

        let pageTag = `<!DOCTYPE html>
        <html lang="ko">
        
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="chorme" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
            integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
            crossorigin="anonymous" referrerpolicy="no-referrer" />
          <title>movieselect</title>
          <script src="https://code.jquery.com/jquery-3.6.0.min.js"
            integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
          <link rel="stylesheet" href="../css/selectmovie.css" />
          <script src="../js/selectmovie.js"></script>
        </head>
        
        <body>
          <section class="countermodalwapper opacityscroll">
            <section class="countPersonsection">
              <header class="countmodalheader">
                <h1 class="count_title">인원선택</h1>
              </header>
              <div class="Adult">
                <h2>성인</h2>
                <button class="adultpeoplecounter cutbtn backColor" id="cutBtn" value="10000">1</button>
                <button class="adultpeoplecounter cutbtn backColor" id="cutBtn" value="20000">2</button>
                <button class="adultpeoplecounter cutbtn backColor" id="cutBtn" value="30000">3</button>
                <button class="adultpeoplecounter cutbtn backColor" id="cutBtn" value="40000">4</button>
                <button class="adultpeoplecounter cutbtn backColor" id="cutBtn" value="50000">5</button>
                <button class="adultpeoplecounter cutbtn backColor" id="cutBtn" value="60000">6</button>
              </div>
              <div class="junior">
                <h2>청소년</h2>
                <button class="joniorpeplecounter cutbtn backColor" id="cutBtn" value="7000">1</button>
                <button class="joniorpeplecounter cutbtn backColor" id="cutBtn" value="14000">2</button>
                <button class="joniorpeplecounter cutbtn backColor" id="cutBtn" value="21000">3</button>
                <button class="joniorpeplecounter cutbtn backColor" id="cutBtn" value="28000">4</button>
                <button class="joniorpeplecounter cutbtn backColor" id="cutBtn" value="35000">5</button>
                <button class="joniorpeplecounter cutbtn backColor" id="cutBtn" value="42000">6</button>
              </div>
              <div class="disabled">
                <h2>장애인</h2>
                <button class="Disabledpeplecounter cutbtn backColor" id="cutBtn" value="7000">1</button>
                <button class="Disabledpeplecounter cutbtn backColor" id="cutBtn" value="14000">2</button>
                <button class="Disabledpeplecounter cutbtn backColor" id="cutBtn" value="21000">3</button>
                <button class="Disabledpeplecounter cutbtn backColor" id="cutBtn" value="28000">4</button>
                <button class="Disabledpeplecounter cutbtn backColor" id="cutBtn" value="35000">5</button>
                <button class="Disabledpeplecounter cutbtn backColor" id="cutBtn" value="42000">6</button>
              </div>
              <div class="old">
                <h2>노약자</h2>
                <button class="oldplecounter cutbtn backColor" id="cutBtn" value="6000">1</button>
                <button class="oldplecounter cutbtn backColor" id="cutBtn" value="12000">2</button>
                <button class="oldplecounter cutbtn backColor" id="cutBtn" value="19000">3</button>
                <button class="oldplecounter cutbtn backColor" id="cutBtn" value="26000">4</button>
                <button class="oldplecounter cutbtn backColor" id="cutBtn" value="32000">5</button>
                <button class="oldplecounter cutbtn backColor" id="cutBtn" value="38000">6</button>
              </div>
              <div class="counterresult"><button id="submitperson">확인</button></div>
              </div>
              <!--일반문구 모달-->
            </section>
          </section>
          <section class="modalwapper opacityscroll">
            <section class="modal_body">
              <header class="modal__header">
                <h1>확인해주세요!</h1>
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
          <section class="moviewapper">
            <header id="playerarea">
              <!--  동영상이 들어갑니다. -->
              <!--  시간과 로고가 표시되는 header -->
              <div class="head__infor">
                <span id="time">00:00</span>
                <span id="logoimg">120 초</span>
              </div>
            </header>
            <!--  영화셀렉트하는 영역 시작 -->
            <section class="mainBox">
              <!--  slide될 영역 , 이미지를 누르면 시간과 남은좌석이 떠야함 -->
              <section class="main__body">`;

        for (let i in rows) {
          pageTag += `<div class="slide__info">
					<img class="sliderimgs" id="sl__1" src="../IMG/selectmovie/no${rows[i]['no']}_movie.jpg" alt="${rows[i]['name']} 포스터"/>
					<div class="infor__container">
						<div class="movietitmeCon">
							<h3 class="movietitle">${rows[i]['name']}</h3>
							<p class="title_info">${rows[i]['genre']}</p>
						</div>
						<div class="movietimebox">`;
          for (let j in movieTime[i]) {
            pageTag += `
              <button class="movieUlLicontainer">${movieTime[i][j]}</button>`;
          }

          pageTag += `
						</div>
					</div>
					<div class="infor__tail">
						<ul class="runingtime">
							상영시간
							<li class="runingtime_li">${rows[i]['time']}분</li>
						</ul>
						<div class="wathingage">
							<p>${rows[i]['age']}</p>
						</div>
					</div>
				</div>`;
        }
        pageTag += `
        </section>
        <!--  footer영역 일단 회사마크같은것만 넣 -->
      </section>
      <footer clas="moviefooter">
        <i id="previousBtn" class="fa-solid fa-angles-left"></i>
        <i id="homeBtn" class="fa-brands fa-fort-awesome"></i>
      </footer>
    </section>
  
  </body>
  
  </html>`;

        res.send(pageTag);
      }
    });

    db_handle.end(); // DB 접속 종료

  } else if (page == 30) {
    res.sendFile(__dirname + '/FILE/html/seat.html');
  } else if (page == 40) {
    res.sendFile(__dirname + '/FILE/html/.html');
  } else if (page == 100) {
    res.sendFile(__dirname + '/FILE/html/gettiket.html');
  }
});

// app.get(/forec/, function(req, res){
//   console.log(req.cookies);
//   if(typeof req.cookies.conutTime !== undefined){
//     res.redirect("/forec");
//   }
// });

app.get('/coo', (req, res) => {
  // res.cookie('conutTime','conutTime',{
  //   maxAge: 120000
  // });
  if (req.cookies.conutTime == undefined) {
    res.send('cookie없음');
  } else {
    res.send(`${req.cookies.conutTime}`);
  }


});

app.listen(2000, () => {
  console.log("2000 open");
});
