const express = require('express');
const app = express();

const mysql = require('mysql');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

app.locals.pretty = true;
app.use(express.static('FILE'));
app.use(cookieParser());

app.get('/', (req, res) => {
	res.redirect('/force');
});

app.get('/force', (req, res) => {
	let page = req.query.page;
	if (page == undefined) {
		//홈페이지의 처음 화면
		res.sendFile(__dirname + '/FILE/html/intro_intro.html');
	} else if (page == 10) {
		// 예매하기, 티켓출력하기 화면
		res.cookie('userCookie', 120, {
			path: '/',
		});

		let pageTag = `<!DOCTYPE html>
    <html lang="ko">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
        crossorigin="anonymous" referrerpolicy="no-referrer">
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
        <link rel="shortcut icon" href="../IMG/favicon/favicon.ico" type="image/x-icon">
        <link rel="icon" href="../IMG/favicon/favicon.ico" type="image/x-icon">
      <link rel="stylesheet" href="../css/intro.css">
      <script src="../js/intro.js"></script>
      <title>FORCE</title>
    </head>
    <body>
      <section class="moviewapper">
      <section class="cwrningwapper opacityscroll">
          <section class="coutnWrningModal">
          </section>
        </section> 
        <section class="windowloadimg">
          <div class="logoimg"></div>
        </section>
        <header id="playerarea">
          <div class="head__infor">
            <span id="logoimg">FORCE</span>
          </div>
        </header>
    
        <section class="mainBox">
          <section class="main__body">
            <div class="timeBox">
              <div class="timebox">
              <h1 id="dayTime" class="dayTime"></h1>
              <h2 id="time" class="time">00:00</h2></div>
            </div>
            <section class="btnsection">
              <div class="btnBigBox" id="printTicketBtn">
                <div class="btnBox printBTN">
                  <article class="printTicketimg" id="lefttab">
                    <div class="line"></div>    
                  </article>
                    <article class="ticketintroduce printticket">
                        <h1 class="h1tagL">포토티켓출력</h1>
                        <h2 class="h2tagL">Print Ticket</h2>
                    </article>
                    </div>
                  </div>
                </div>
              </div>
              <div class="btnBigBox" id="reservationBtn">
                <div class="btnBox reserBT">
                  <article class="printTicketimg" id="righttab">
                    <div class="line"></div>  
                  </article>
                  <article class="ticketintroduce Reservation">
                    <h1 class="h1tagR">예매하기</h1>
                    <h2 class="h2tagR">Reservation</h2>
                    </div>
                  </div>
                  </div>
                  </div>
                  <div class="poteText">본 홈페이지는 포트폴리오용 페이지입니다.
                    <span>This homepage is for portfolio purposes.</span>
                  </div>

            </section>
            <video autoplay loop muted poster="../IMG/intropost.jpeg" preload="auto">
            <source src="../IMG/movieadd.mp4" type="video/mp4">
              언티처블
            </video>
          </section>
        </section>
    
    
    </body>
    
    </html>`;

		res.send(pageTag);
	} else if (page == 20) {
		//영화 선택 화면

		//db연결정보
		let db_handle = mysql.createConnection({
			host: '127.0.0.1',
			user: 'c15st19',
			password: 'H07dQfkwWfP5TmM5',
			database: 'c15st19',
		});
		//연결
		db_handle.connect(function (err) {
			if (err) {
				throw err;
			} else {
				console.log('page=20 db연결 성공');
			}
		});
		//명령어 날리기
		db_handle.query('select * from movie', function (err, rows) {
			if (err) {
				throw err;
			} else {
				//에러가 안났으면
				let movieTime = [
					[
						'06:40~08:40<br>A관 46/50',
						'11:20~13:20<br>B관 46/50',
						'16:00~18:00<br>A관 46/50',
						'20:40~22:40<br>B관 46/50',
					],
					[
						'09:00~11:00<br>A관 46/50',
						'13:40~15:40<br>B관 46/50',
						'18:20~20:20<br>A관 46/50',
						'23:00~01:00<br>B관 46/50',
					],
					[
						'06:40~08:40<br>B관 46/50',
						'11:20~13:20<br>A관 46/50',
						'16:00~18:00<br>B관 46/50',
						'20:40~22:40<br>A관 46/50',
					],
					[
						'09:00~11:10<br>B관 46/50',
						'13:40~15:50<br>A관 46/50',
						'18:20~20:30<br>B관 46/50',
						'23:00~01:10<br>A관 46/50',
					],
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
          <title>FORCE</title>
          <script src="https://code.jquery.com/jquery-3.6.0.min.js"
            integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
            <link rel="shortcut icon" href="../IMG/favicon/favicon.ico" type="image/x-icon">
            <link rel="icon" href="../IMG/favicon/favicon.ico" type="image/x-icon">
          <link rel="stylesheet" href="../css/selectmovie.css" />
          <script src="../js/selectmovie.js"></script>
        </head>
        
        <body>
        <section class="moviewapper">
          <section class="cwrningwapper opacityscroll">
            <section class="coutnWrningModal">
            </section>
          </section>
          <section class="countermodalwapper opacityscroll">
            <section class="countPersonsection">
              <header class="countmodalheader">
                <h1 class="count_title">인원선택</h1>
              </header>
              <div class="Adult">
                <h2>성인</h2>
                <button class="adultpeoplecounter cutbtn backColor" id="cutBtn">1</button>
                <button class="adultpeoplecounter cutbtn backColor" id="cutBtn">2</button>
                <button class="adultpeoplecounter cutbtn backColor" id="cutBtn">3</button>
                <button class="adultpeoplecounter cutbtn backColor" id="cutBtn">4</button>
                <button class="adultpeoplecounter cutbtn backColor" id="cutBtn">5</button>
                <button class="adultpeoplecounter cutbtn backColor" id="cutBtn">6</button>
              </div>
              <div class="junior">
                <h2>청소년</h2>
                <button class="joniorpeplecounter cutbtn backColor" id="cutBtn">1</button>
                <button class="joniorpeplecounter cutbtn backColor" id="cutBtn">2</button>
                <button class="joniorpeplecounter cutbtn backColor" id="cutBtn">3</button>
                <button class="joniorpeplecounter cutbtn backColor" id="cutBtn">4</button>
                <button class="joniorpeplecounter cutbtn backColor" id="cutBtn">5</button>
                <button class="joniorpeplecounter cutbtn backColor" id="cutBtn">6</button>
              </div>
              <div class="disabled">
                <h2>장애인</h2>
                <button class="Disabledpeplecounter cutbtn backColor" id="cutBtn">1</button>
                <button class="Disabledpeplecounter cutbtn backColor" id="cutBtn">2</button>
                <button class="Disabledpeplecounter cutbtn backColor" id="cutBtn">3</button>
                <button class="Disabledpeplecounter cutbtn backColor" id="cutBtn">4</button>
                <button class="Disabledpeplecounter cutbtn backColor" id="cutBtn">5</button>
                <button class="Disabledpeplecounter cutbtn backColor" id="cutBtn">6</button>
              </div>
              <div class="old">
                <h2>노약자</h2>
                <button class="oldplecounter cutbtn backColor" id="cutBtn">1</button>
                <button class="oldplecounter cutbtn backColor" id="cutBtn">2</button>
                <button class="oldplecounter cutbtn backColor" id="cutBtn">3</button>
                <button class="oldplecounter cutbtn backColor" id="cutBtn">4</button>
                <button class="oldplecounter cutbtn backColor" id="cutBtn">5</button>
                <button class="oldplecounter cutbtn backColor" id="cutBtn">6</button>
              </div>
              <div class="counterresult"><button id="prevperson">이전으로<button id="submitperson">확인</button></div>
              </div>
              <!--일반문구 모달-->
            </section>
          </section>
          <section class="modalwapper opacityscroll">
            <section class="modal_body">
              <header class="modal__header">
                <h1>확인해주세요!</h1>
                <i class="fa-solid fa-x modalclosebtn" id="modalclosebtn"></i>
              </header>
              <div class="modalinfo">
                <div>
                  <p>만 15이상 관람 영화를 관람하실</p>
                  <p>만 15세 미만의 고객님(영,유아 포함)이 이용하실경우</p>
                  <p>반드시 성인 보호자와 동반하에 관람이 가능합니다.</p>
                  <p>확인 불가시에는 입장이 제한됩니다.</p>
                </div>
                <div>
                  <h2>최대6명까지 관람 가능합니다.</h2>
                  <p>상영관 내 물, 음료 취식이 가능합니다.</p>
                  <p>극장 이용시에 항상 마스크 착용을 부탁드립니다.</p>
                </div>
              </div>
              <button class="goselectPerson">예매하기</button>
              <!--여기가  본체// -->
            </section>
          </section>
          
            <header id="playerarea">
              <!--  동영상이 들어갑니다. -->
              <!--  시간과 로고가 표시되는 header -->
              <div class="head__infor">
              <div class="timewapper"><span id="logoimg">FORCE</span></div>
              <div class="timewapper"><span id="logoimg">상영영화</span></div>
              <div class="timewapper"><span id="time">00:00</span></div>
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
              <button class="movieUlLicontainer" value="${rows[i]['img']}">${movieTime[i][j]}</button>`;
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
		//좌석선택 화면
		//db연결정보
		let db_handle = mysql.createConnection({
			host: '127.0.0.1',
			user: 'c15st19',
			password: 'H07dQfkwWfP5TmM5',
			database: 'c15st19',
		});
		//연결
		db_handle.connect(function (err) {
			if (err) {
				throw err;
			} else {
				console.log('page=30 db연결 성공');
			}
		});
		//명령어 날리기
		db_handle.query(`select * from movie where img='${req.query.title}'`, function (err, rows) {
			if (err) {
				throw err;
			} else {
				//에러가 안났으면
				let pageTag = `<!DOCTYPE html>
        <html lang="ko">
        
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="chorme">
          <meta name="viewport" content="width=device-width,initial-scale=1">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
            integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
            crossorigin="anonymous" referrerpolicy="no-referrer">
          <title>FORCE</title>
          <script src="https://code.jquery.com/jquery-3.6.0.min.js"
            integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
            <link rel="shortcut icon" href="../IMG/favicon/favicon.ico" type="image/x-icon">
            <link rel="icon" href="../IMG/favicon/favicon.ico" type="image/x-icon">
          <link rel="stylesheet" href="../css/seat.css">
          <script src="../js/seat.js"></script>
        </head>
        
        <body>

          <section class="moviewapper">
          <section class="cwrningwapper opacityscroll">
          <section class="coutnWrningModal">
          </section>
        </section>


        <header id="playerarea">
        <div class="head__infor">
        <div class="timewapper"><span id="logoimg">FORCE</span></div>
        <div class="timewapper"><span id="logoimg">좌석선택</span></div>
        <div class="timewapper"><span id="time">00:00</span></div>
        </div>
      </header>
      <section class="mainBox">
        <section class="main__body">
          <article class="choseseat">
            <div class="seatcontainer">
              <div class="seatcon">
                <div class="Screen"></div>
                <i class="fa-solid fa-person-walking-arrow-right"></i>
                <div class="seatbox">
                  <div class="row Aline">
                    <p class="rowTitle">A</p>
                    <div class="seat visibiliySeat aline"></div>
                    <div class="seat visibiliySeat"></div>
                    <div class="seat" id="A1"></div>
                    <div class="seat" id="A2"></div>
                    <div class="seat" id="A3"></div>
                    <div class="seat" id="A4"></div>
                    <div class="seat" id="A5"></div>
                    <div class="seat" id="A6"></div>
                    <div class="seat visibiliySeat"></div>
                    <div class="seat visibiliySeat"></div>
                  </div>
                  <div class="row">
                    <p class="rowTitle">B</p>
                    <div class="seat visibiliySeat"></div>
                    <div class="seat" id="B1"></div>
                    <div class="seat" id="B2"></div>
                    <div class="seat" id="B3"></div>
                    <div class="seat" id="B4"></div>
                    <div class="seat" id="B5"></div>
                    <div class="seat" id="B6"></div>
                    <div class="seat" id="B7"></div>
                    <div class="seat" id="B8"></div>
                    <div class="seat visibiliySeat"></div>
                  </div>
                  <div class="row">
                    <p class="rowTitle">C</p>
                    <div class="seat" id="C1"></div>
                    <div class="seat" id="C2"></div>
                    <div class="seat" id="C3"></div>
                    <div class="seat" id="C4"></div>
                    <div class="seat" id="C5"></div>
                    <div class="seat" id="C6"></div>
                    <div class="seat" id="C7"></div>
                    <div class="seat" id="C8"></div>
                    <div class="seat" id="C9"></div>
                    <div class="seat" id="C10"></div>
                  </div>
                  <div class="row">
                    <p class="rowTitle">D</p>
                    <div class="seat" id="D1"></div>
                    <div class="seat" id="D2"></div>
                    <div class="seat" id="D3"></div>
                    <div class="seat" id="D4"></div>
                    <div class="seat" id="D5"></div>
                    <div class="seat" id="D6"></div>
                    <div class="seat" id="D7"></div>
                    <div class="seat" id="D8"></div>
                    <div class="seat" id="D9"></div>
                    <div class="seat" id="D10"></div>
                  </div>
                  <div class="row">
                    <p class="rowTitle">E</p>
                    <div class="seat" id="E1"></div>
                    <div class="seat" id="E2"></div>
                    <div class="seat" id="E3"></div>
                    <div class="seat" id="E4"></div>
                    <div class="seat" id="E5"></div>
                    <div class="seat" id="E6"></div>
                    <div class="seat" id="E7"></div>
                    <div class="seat" id="E8"></div>
                    <div class="seat" id="E9"></div>
                    <div class="seat" id="E10"></div>
                  </div>
                  <div class="row backward">
                    <p class="rowTitle">W</p>
                    <div class="seat" id="W1"></div>
                    <div class="seat" id="W2"></div>
                    <div class="seat" id="W3"></div>
                    <div class="seat" id="W4"></div>
                    <div class="seat" id="W5"></div>
                    <div class="seat" id="W6"></div>
                    <div class="seat" id="W7"></div>
                    <div class="seat" id="W8"></div>
                        </div>
                      </div>
                      <footer class="aboutseat">
                        <ul class="showcase">
                          <li>
                            <div class="NA"></div>
                            <p>예매 완료</p>
                          </li>
                          <li>
                            <div class="selected"></div>
                            <p>선택 가능</p>
                          </li>
                          <li>
                            <div class="occupied"></div>
                            <p>선택 좌석</p>
                          </li>
                          <li>
                            <div class="wheel">W</div>
                            <p>휠체어 전용석</p>
                          </li>
                        </ul><i class="fa-solid fa-arrow-rotate-left" id="Seatreset"></i>
                      </footer>
                    </div>
                  </div>
                  <section class="resultprice">
        <div id="movieinfo">
        <img class="posterImg" src="../IMG/selectmovie/${rows[0]['img']}.jpg" alt="${rows[0]['name']} 포스터">
          <div id="MovieInfo">
            <h id="Movieinfo_title">${rows[0]['name']}</h>
          </div>
        </div>
        <div class="personlist">
          <section class="totalpersonList">
            <ul id="selectCart" class="selectCart">
              <li class="cartList">
              <div class="movie"><span class="seatInfo">예매 인원 : </span></div>
              </li>
              <li class="cartText">
              <div class="movie"><span class="seatNum"></span></div>
              </li>
              </ul>
        </section>
        <div class="totalprice">
          <div class="totalPricePreview">
            <p id="Pricetitle" class="Pricetitle"></p>
          </div>
          <button id="geticket" class="geticket">결제하기</button>
        </div>
      </div>
    </section>
  </article>
</section>
</section>
<footer class="moviefooter">
<i id="previousBtn" class="fa-solid fa-angles-left"></i>
<i id="homeBtn" class="fa-brands fa-fort-awesome"></i>
</footer>
</section>
</body>

</html>`;

				res.send(pageTag);
			}
		});

		db_handle.end();
	} else if (page == 40) {
		//영수증 화면
		let db_handle = mysql.createConnection({
			host: '127.0.0.1',
			user: 'c15st19',
			password: 'H07dQfkwWfP5TmM5',
			database: 'c15st19',
		});
		//연결
		db_handle.connect(function (err) {
			if (err) {
				throw err;
			} else {
				console.log('page=40 db연결 성공');
			}
		});
		//명령어 날리기
		db_handle.query(`select * from movie where img='${req.query.title}'`, function (err, rows) {
			if (err) {
				throw err;
			} else {
				//에러가 안났으면

				let pageTag = `<!DOCTYPE html>
        <html lang="ko">
          <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="chorme" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
              integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
              crossorigin="anonymous"
              referrerpolicy="no-referrer"
            />
            <title>FORCE</title>
            <script
              src="https://code.jquery.com/jquery-3.6.0.min.js"
              integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
              crossorigin="anonymous"
            ></script>
            <link rel="shortcut icon" href="../IMG/favicon/favicon.ico" type="image/x-icon">
            <link rel="icon" href="../IMG/favicon/favicon.ico" type="image/x-icon">
            <link rel="stylesheet" href="../css/receipt.css"/>
            <script src="../js/receipt.js"></script>
          </head>
          <body>
            <section class="moviewapper">
              <section class="receiptModal opacityscroll">
                <article class="reciptmodalbody">
                  <h1>적립을 위해 바코드를<br>하단 왼쪽에 스캔해주세요.</h1>
                  <article class="reciptmodalhead"></article>
                  <article class="scanPhone">
                    <div class="readbacod">
                      <div class="readbacodscreen">
                      </div>
                      <div class="readbacodbottm"></div>
                    </div>
                  </article>
        
                  <article class="phone">
        
                  <article class="pointphone">
                    <div class="barcode_line"></div>
                    <img src="../IMG/306926.svg" alt="bacorde">
        
                  </article>
              </article>
              <h2 class="skipbtn">SKIP</h2>
              <h2 class="numpadbtn">입력확인</h2>
              </section>
              <section class="cwrningwapper opacityscroll">
            <section class="coutnWrningModal">
            </section>
          </section>
              <header id="playerarea">
                <div class="head__infor">
                <div class="timewapper"><span id="logoimg">FORCE</span></div>
                <div class="timewapper"><span id="logoimg">예매내역확인</span></div>
                <div class="timewapper"><span id="time">00:00</span></div>
                </div>
              </header>
              <section class="mainBox">
                <section class="main__body">
                  <section class="reCeiptBody">
                    <header class="reCeipheader">
                      <figure class="receipinfoheader">
                        <figcaption class="forceLogo">FORCE CINEMA</figcaption>
                        <figcaption class="receipinfointro">예매 내역을 확인해주세요.</figcaption>
                        <figcaption class="receipinfoheadertitle">${rows[0]['name']}</figcaption>
                      </figure>
                      <div class="holesleft"></div>
                      <div class="holesright"></div>
                    </header>
                    <figure class="reCeipinfo">
                      <figcaption class="receipinfoperson rcifo">
                        <h3 class="rcifotitle">인원</h3>
                        <p id="moviePersonnelText" class="rcifomation"></p>
                      </figcaption>
                      <figcaption class="selectSeatNum rcifo">
                        <h3 class="rcifotitle">좌석</h3>
                        <p id="movieSeatText" class="rcifomation">A3 A4 A6</p>
                      </figcaption>
                      <figcaption class="selecttheater rcifo">
                        <h3 class="rcifotitle">상영관</h3>
                        <p id="movieTheaterText" class="rcifomation">A2</p>
                      </figcaption>
                      <figcaption class="movieruningtime rcifo">
                        <h3 class="rcifotitle">상영시간</h3>
                        <p id="showtimeText" class="rcifomation">10:20 - 12:40</p>
                      </figcaption>
                      <figcaption class="receipNum rcifo">
                        <h3 class="rcifotitle">예매번호</h3>
                        <p id="movieReservationNumber" class="rcifomation">0000000000</p>
                      </figcaption>
                      <figcaption class="totalAmount rcifo">
                        <h3 id="totalPriceText" class="rcifotitle">30,000</h3>
                      </figcaption>
                    </figure>
                    <footer class="reCeipfooter">
                      <button class="receiptBtn">결제하기</button>
                    </footer>
                  </section>
                </section>
              </section>
              <footer class="moviefooter">
              <i id="previousBtn" class="fa-solid fa-angles-left"></i>
<i id="homeBtn" class="fa-brands fa-fort-awesome"></i>
              </footer>
            </section>
          </body>
        </html>`;
				res.send(pageTag);
			}
		});

		db_handle.end();
	} else if (page == 50) {
		//결제화면
		let pageTag = `<!DOCTYPE html>
    <html lang="ko">
    
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="chorme" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
      <title>FORCE</title>
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
      <link rel="shortcut icon" href="../IMG/favicon/favicon.ico" type="image/x-icon">
      <link rel="icon" href="../IMG/favicon/favicon.ico" type="image/x-icon">
      <link rel="stylesheet" href="../css/payment.css" />
      <script src="../js/payment.js"></script>
    </head>
    
    <body>
      <section class="moviewapper">
        <section class="cwrningwapper opacityscroll">
          <section class="coutnWrningModal">
          </section>
        </section>
        <section class="paymodal opacityscroll">
          <article class="paymentcard">
            <h1 class="paymentcardmtitle">
              카드를 투입구에 넣어주세요
            </h1>
            <div class="realcard">
              <div class="cardline"></div>
              <img src="../IMG/WireFramer.svg" alt="lune" />
            </div>
    
          </article>
    
        </section>
    
        <section class="receiptModal opacityscroll">
    
          <article class="reciptmodalbody">
            <h1>결제를 위해 바코드를<br>하단 왼쪽에 스캔해주세요.</h1>
            <article class="reciptmodalhead"></article>
            <article class="scanPhone">
              <div class="readbacod">
                <div class="readbacodscreen">
                </div>
                <div class="readbacodbottm"></div>
              </div>
            </article>
    
            <article class="phone">
    
              <article class="pointphone">
                <div class="barcode_line"></div>
                <img src="../IMG/306926.svg" alt="bacorde">
    
              </article>
            </article>
    
        </section>
        <header id="playerarea">
          <!--  동영상이 들어갑니다. -->
          <!--  시간과 로고가 표시되는 header -->
          <div class="head__infor">
            <div class="timewapper"><span id="logoimg">FORCE</span></div>
            <div class="timewapper"><span id="title">결제</span></div>
            <div class="timewapper"><span id="time">00:00</span></div>
          </div>
        </header>
        <!--  영화셀렉트하는 영역 시작 -->
        <section class="mainBox">
          <section class="main__body">
            <section class="Paymentbody">
              <header class="paymentheader">
                <h1 class="totalpaymenttitle">결제금액</h1>
                <p class="totalpayment">30,000원</p>
              </header>
              <figure class="paymentinfo">
                <figcaption class="card paymentsystem">
                  <div class="cardment">
                    <div class="dashline"></div>
                  </div>
                  <div class="realcard" id="realcard">
                    <div class="cardline"></div>
                    <img src="../IMG/WireFramer.svg" alt="lune" />
                  </div>
                  <p class="cardtitle">카드결제</p>
                </figcaption>
                <figcaption class="money paymentsystem">
                  <div class="pointment">
                    <div class="dashline"></div>
                  </div>
                  <div class="realpoint" id="realpoint">
                    <p class="pointInnertext">
                      FORCE
                    </p>
                    <p class="pointInnertext">
                      POINT
                    </p>
                  </div>
                  <p class="cardtitle">포인트결제</p>
                </figcaption>
              </figure>
              <footer class="paymentfooter">
                <p class="payfootertitle">결제수단을 선택해주세요.</p>
              </footer>
            </section>
          </section>
        </section>
        <footer class="moviefooter">
          <i id="previousBtn" class="fa-solid fa-angles-left"></i>
          <i id="homeBtn" class="fa-brands fa-fort-awesome"></i>
        </footer>
      </section>
    
    </body>
    
    </html>`;
		res.send(pageTag);
	} else if (page == 60) {
		res.sendFile(__dirname + '/FILE/html/telinput.html');
	} else if (page == 70) {
		//결제완료화면

		let movieTitle = ['영화제목배열', '타오르는 여인의 초상', '언차티드', '엔칸토', '라라랜드'];

		let db_handle = mysql.createConnection({
			host: '127.0.0.1',
			user: 'c15st19',
			password: 'H07dQfkwWfP5TmM5',
			database: 'c15st19',
		});
		//연결
		db_handle.connect(function (err) {
			if (err) {
				throw err;
			} else {
				console.log('page=70 db연결 성공');
			}
		});

		let userPerson = ``;
		if (req.query.adult != 0) {
			userPerson += `성인${req.query.adult}명 `;
		}
		if (req.query.jonior != 0) {
			userPerson += `청소년${req.query.jonior}명 `;
		}
		if (req.query.Disabled != 0) {
			userPerson += `장애인${req.query.Disabled}명 `;
		}
		if (req.query.old != 0) {
			userPerson += `노약자${req.query.old}명 `;
		}

		let userMovieNo = req.query.title.match(/\d/);

		let dataQuery =
			`insert into movieticket (` +
			'`name`,' +
			'`person`,' +
			'`seat`,' +
			'`gan`,' +
			'`time`,' +
			'`number`,' +
			'`tel`,' +
			'`price`,' +
			'`img`' +
			`) values ('${movieTitle[userMovieNo[0]]}','${userPerson}','${req.query.seat.replaceAll('_', ' ')}','${
				req.query.gan
			}','${req.query.time}','${req.query.number}','010-${req.query.tel}','${req.query.price}','${req.query.title}');`;
		console.log(dataQuery);
		db_handle.query(dataQuery, (err, rows) => {
			if (err) {
				throw err;
			} else {
				res.sendFile(__dirname + '/FILE/html/getpay.html');
			}
		});

		db_handle.end();
	} else if (page == 100) {
		//예매 번호 혹은 전화번호(포토티켓)
		res.sendFile(__dirname + '/FILE/html/gettiket.html');
	} else if (page == 110) {
		//예매정보 확인
		let db_handle = mysql.createConnection({
			host: '127.0.0.1',
			user: 'c15st19',
			password: 'H07dQfkwWfP5TmM5',
			database: 'c15st19',
		});
		//연결
		db_handle.connect(function (err) {
			if (err) {
				throw err;
			} else {
				console.log('page=110 db연결 성공');
			}
		});
		console.log(`select * from movieticket where tel='010-${req.query.number}' or number='${req.query.number}'`);
		db_handle.query(
			`select * from movieticket where tel='010-${req.query.number}' or number='${req.query.number}'`,
			function (err, rows) {
				if (err) {
					throw err;
				} else if (rows[0]) {
					//에러가 안났으면
					let pageTag = `<!DOCTYPE html>
          <html lang="ko">
            <head>
              <meta charset="UTF-8" />
              <meta http-equiv="X-UA-Compatible" content="chorme" />
              <meta name="viewport" content="width=device-width,initial-scale=1" />
              <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
                integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
                crossorigin="anonymous"
                referrerpolicy="no-referrer"
              />
              <title>FORCE</title>
              <script
                src="https://code.jquery.com/jquery-3.6.0.min.js"
                integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
                crossorigin="anonymous"
              ></script>
              <link rel="shortcut icon" href="../IMG/favicon/favicon.ico" type="image/x-icon">
              <link rel="icon" href="../IMG/favicon/favicon.ico" type="image/x-icon">
              <link rel="stylesheet" href="../css/phototicket.css"/>
              <script src="../js/phototicket.js"></script>
            </head>
            <body>
              <section class="moviewapper">
                <section class="receipt2modal opacityscroll">
                  <article class="priningreceipt">
                    <h1 class="printingtitle">티켓 출력중입니다</h1>
                    <figure class="printinghead">
                      <header>FORCE</header>
                        <figure class="printingbody"">
                          <figcaption class="inbody"></figcaption>
                        </figure>
                      <footer></footer>
                    </figure>
                  </article>
                </section>
                <header id="playerarea">
                  <!--  동영상이 들어갑니다. --><!--  시간과 로고가 표시되는 header -->
                  <div class="head__infor">
                    <div class="timewapper"><span id="logoimg">FORCE</span></div>
                    <div class="timewapper"><span id="logoimg">포토티켓출력</span></div>
                    <div class="timewapper"><span id="time">00:00</span></div>
                  </div>
                </header>
                <!--  영화셀렉트하는 영역 시작 -->
                <section class="mainBox">
                  <!-- pototicket body -->
                  <section class="main__body">
                    <!-- pototicket start -->
                    <header class="PhotoTicket_header">
                      <h1 class="PhotoTicketTitle">출력을 원하는 예매내역을 선택해주세요</h1>
                        </header> 
                      <h3 class="aboutticket">총 ${rows.length}건의 예매내역이 있습니다.</h3>
                      <ul class="PhotoTicket">`;
					for (let i in rows) {
						pageTag += `<li class="PhotoTicket__li">
                        <h2 class="ticketlogo">FORCE</h2>
                        <article class="Pt_li_img">
                          <img src="../IMG/PhotoTicket/${rows[i]['img']}.jpg" alt="${rows[i]['img']}">
                        </article>
                        <div class="Pt_li_information">
                          <h2 class="Pt_li_info_movietitle">${rows[i]['name']}</h2>
                        </div>
                      </li>`;
					}
					pageTag += `</ul>
                  </section>
                </section>
                <footer class="moviefooter">
                  <i class="fa-solid fa-angles-left fadeinright "></i>
                  <i class="fa-brands fa-fort-awesome"></i>
                </footer>
              </section>  
            </body>
          </html>`;

					res.send(pageTag);
				} else {
					res.redirect('/force?page=100&err=101');
				}
			}
		);
		//명령어 날리기

		db_handle.end();
	}
});

app.listen(2000, () => {
	console.log('2000 open');
});
