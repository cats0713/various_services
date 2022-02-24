window.onload = () => {
  const snowBox = document.querySelector("#snowBox");
  const snowBox2 = document.querySelector("#snowBox2");
  const introBoxImg = document.querySelector("#introBox img");
  const introBoxText = document.querySelector("#introBoxText");

  //메인 화면 체인지 하는 거
  let changeImg = () => {
    const mainImgArray = ['./IMG/mainimg/main_1.png','./IMG/mainimg/main_2.png','./IMG/mainimg/main_3.png']; 
    const mainTextArray = [`알프스 겨울왕국의<br>크고 아름다운 <p>얼음분수</p>`,`짜릿하고 즐거운 썰매로<br><p>즐거운 추억</p>을 남겨보세요`,`겨울에만 볼수있는 장관<br>아름다운 <p>얼음 조각</p>`];
    function setTimeImg(){
      setTimeout(function(){
        mainTextArray.push(mainTextArray.shift());
        introBoxText.innerHTML = mainTextArray[0];
        mainImgArray.push(mainImgArray.shift());
        introBoxImg.setAttribute("src",mainImgArray[0]);
        setTimeImg();
      }, 5000);
    }
    setTimeImg();
  } 
  changeImg();


  //배경화면 눈 내리게 하는거
  let createSnow = (snowBox) => {
    let i = 0;
    while(i < 400){
      let randomW = Math.floor(Math.random() * window.innerWidth);
      let randomH = Math.floor(Math.random() * window.innerHeight);
      snowBox.innerHTML += `<div class="snow" style="margin-top: ${randomH}px; margin-left: ${randomW}px"></div>`;
      i++;
    }
  }
  let createSnowIntro = (snowBox2) => {
    let i = 0;
    while(i < 400){
      let randomW = Math.floor(Math.random() * window.innerWidth);
      let randomH = Math.floor(Math.random() * window.innerHeight);
      snowBox2.innerHTML += `<div class="snow" style="margin-top: ${randomH}px; margin-left: ${randomW}px"></div>`;
      i++;
    }
  }
  createSnow(snowBox);
  createSnowIntro(snowBox2);

  //안내 열기
  $('#anneBtn').on("click", function () {
    $('#contentImg').attr('src','./IMG/anne.png');
    $('.mapTag').fadeOut('fast');
    $('#contentTextBox').html(` <ul>
    <h1>주의사항</h1>
    <li><i class="xi-angle-down-min"></i>개인 썰매 반입금지(썰매 이용권 구매 후 썰매 이용 가능)</li>
    <li><i class="xi-angle-down-min"></i>음식물 반입 금지, 애완동물 반입 금지</li>
    <li><i class="xi-angle-down-min"></i>눈 으로만 구경 가능 (얼음 조각, 눈조각, 얼음 분수등)</li>
    <li><i class="xi-angle-down-min"></i>바닥이 미끄러우니 조심하시고, 놀이시설 이용시 안전에 유의 바랍니다.</li>
    <li><i class="xi-angle-down-min"></i>주간개장을 이용 할 시 오후 5시에 일괄 퇴장 합니다.</li>
    <li><i class="xi-angle-down-min"></i>주말 버스 출입금지</li>
  </ul>`);
  }); 
  //오시는 길 열기
  $('#mapBtn').on("click", function () {
    $('.mapTag').fadeIn('fast');
    $('#contentTextBox').html(`<ul>
    <h1>오시는 길 <P>충남 청양군 정산면 천장호길 223-35 알프스마을</p></h1>
    
    <li><h2><i class="xi-car"></i>자가용 이용시</h2>
    <p>서울 (소요시간 : 약 3시간) | 인천 (소요시간 : 약 3시간)</p></li>
    <li><h2><i class="xi-bus"></i>버스 이용시</h2>
    <p>정산터미널에 하차하여 알프스마을까지 택시이용</p></li>
    <li><h2><i class="xi-train"></i>기차(KTX, SRT) 이용시</h2>
    <p>공주역에서 하차 후 시내버스 이용하여 공주종합버스터미널로 이동 <br>▹ 정산시외버스터미널 ▹ 알프스마을까지 택시이용</p></li>
    
    </ul>`);
  }); 
  //비용안내 열기
  $('#priceBtn').on("click", function () {
    $('#contentImg').attr('src','./IMG/price.png');
    $('#contentTextBox').html(`<ul>
    <h1>알프스마을 겨울왕국 눈썰매장 이용요금</h1>
    <li><h2><i class="xi-calendar"></i>기간</h2>
    <p><i class="xi-angle-down-min"></i> 일         자 : 2022년 01월 01일 ~ 2022년 02월 13일</p>
    <p><i class="xi-angle-down-min"></i> 관람시간 : (주중) 09:00 ~  20:00,  (주말) 09:00 ~  21:00</p> 
    <p><i class="xi-angle-down-min"></i> 매표마감 : (주중) 19:00 / (주말) 20:00</p></li>
    <br>
    <li><h2><i class="xi-coupon"></i>현장할인</h2>
    <p><i class="xi-angle-down-min"></i> 청양군민, 경로(65세이상), 장애인 - 입장료 5,000원 할인 (신분증, 장애인 등록증 확인)</p>
    <p><i class="xi-angle-down-min"></i> 4세(36개월)미만 입장 무료 (증빙서류 확인)</p></li>
    <li></li>
    </ul>`);
    $('.mapTag').fadeOut('fast');
  }); 

  //지도 열기
  $('#moreBtn').on("click", function () {
    $('#introBox').slideUp("slow");
    $('#penguinBox').slideToggle('slow');
  });

  //사이드 메뉴 버튼
  $('#notiBtn').on("click", function () {
    $('#sideBox').slideToggle("slow");
  }); 

  //썰매 버튼
  $('#sleighBtn').on("click", function () {
    $('#penguinBox').slideToggle('slow');
    $('#displayBox').fadeIn('slow');
    $('#imgBox').attr("src", "./IMG/displaybox/sleigh.jpeg");
    $('#imgBox').attr("alt", "알프스 눈 썰매");
    $('.textBox').html(`<h1>눈썰매</h1>
    <p>눈 썰매장, 빙판썰매, 봅슬레이등 많은 놀거리가 있습니다. <br>
    안전하고 즐겁게 놀 수 있는 눈썰매장 지금 즐겨보세요~</p>`);
  });

  //얼음분수 버튼
  $('#iceFountainBtn').on("click", function () {
    $('#penguinBox').slideToggle('slow');
    $('#displayBox').fadeIn('slow');
    $('#imgBox').attr("src", "./IMG/displaybox/iceFountain.png");
    $('#imgBox').attr("alt", "알프스 얼음 분수");
    $('.textBox').html(`<h1>얼음분수</h1>
    <p>커다란 얼음분수가 만들어놓은 알프스의 명물<br>
    얼음분수가 만들어 놓은 환상적인 겨울의 모습을 구경해 보세요~
    </p>`);
  });

  //이글루 버튼
  $('#iglooBtn').on("click", function () {
    $('#displayBox').fadeIn('slow');
    $('#penguinBox').slideToggle('slow');
    $('#imgBox').attr("src", "./IMG/displaybox/Igloo.jpeg");
    $('#imgBox').attr("alt", "야간 이글루 사진");
    $('.textBox').html(`<h1>이글루</h1>
    <p>흔치 않은 겨울의 이글루~<br>
    이글루의 환상적인 분위기와 따듯함을 느껴보세요</p>`);
  });

  //동굴 버튼
  $('#caveBtn').on("click", function () {
    $('#penguinBox').slideToggle('slow');
    $('#displayBox').fadeIn('slow');
    $('#imgBox').attr("src", "./IMG/displaybox/icecave.png");
    $('#imgBox').attr("alt", "야간 동굴 봅슬레이");
    $('.textBox').html(`<h1>동굴</h1>
    <p>낮에도 찾아온 알프스의 밤!<br>
    전구로 장식된 동굴에서 다양한 놀이를 즐겨보세요~</p>`);
  });

  //음식 버튼
  $('#foodBtn').on("click", function () {
    $('#penguinBox').slideToggle('slow');
    $('#displayBox').fadeIn('slow');
    $('#imgBox').attr("src", "./IMG/displaybox/food1.jpg");
    $('#imgBox').attr("alt", "군밤등등 음식 사진");
    $('.textBox').html(`<h1>음식</h1>
      <p>야외에서 추운 몸을 녹여줄 다양하고 맛있는 간식<br>
      든든하게 배를 채워줄 맛있는 음식들까지~</p>`);
  });

  //얼음성 버튼
  $('#palaceBtn').on("click", function () {
    $('#penguinBox').slideToggle('slow');
    $('#displayBox').fadeIn('slow');
    $('#imgBox').attr("src", "./IMG/displaybox/palace.png");
    $('#imgBox').attr("alt", "얼음 조각사진");
    $('.textBox').html(`<h1>얼음조각</h1>
      <p>투명한 얼음 조각으로 마음까지 시원해지는 볼거리<br>
      매년 달라지는 얼음 조각, 환상적인 분위기를 느껴보세요</p>`);
  });

  //눈사람 버튼
  $('#snowmenBtn').on("click", function () {
    $('#penguinBox').slideToggle('slow');
    $('#displayBox').fadeIn('slow');
    $('#imgBox').attr("src", "./IMG/displaybox/snowmen2.png");
    $('#imgBox').attr("alt", "눈 조각");
    $('.textBox').html(`<h1>눈조각</h1>
      <p>새하얀 눈으로 다양한 모양을 조각합니다.<br>
      매년 새로운 눈 조각으로 매번 새로운 즐거움을 느껴 보세요!</p>`);
  });
  //짚트랙
  $('#ziptrack').on("click", function () {
    $('#penguinBox').slideToggle('slow');
    $('#displayBox').fadeIn('slow');
    $('#imgBox').attr("src", "./IMG/displaybox/ziptrack.jpeg");
    $('#imgBox').attr("alt", "짚트랙");
    $('.textBox').html(`<h1>짚트랙</h1>
    <p>알프스의 마을을 가로 지르는 짚트랙<br>
    환상적인 겨울왕국의 공중을 짜릿하게 즐겨보세요~</p>`);
  });

  //닫힘 버튼
  $('#closeBtn').on("click", function () {
    $('#displayBox').fadeOut('slow');
    $('#penguinBox').slideToggle('slow');
  });


  //popup에서 화살표를 선택했을때
  let imgBtn = () => {
    const ziptrackImgArray = ['./IMG/displaybox/ziptrack.jpeg','./IMG/displaybox/ziptrack2.jpeg','./IMG/displaybox/ziptrack3.png'];
    const foodImgArray = ['./IMG/displaybox/food1.jpg','./IMG/displaybox/food2.jpeg','./IMG/displaybox/food3.jpeg'];
    const palaceImgArray = ['./IMG/displaybox/palace.png','./IMG/displaybox/palace2.jpeg'];
    const snowmenImgArray = ['./IMG/displaybox/snowmen2.png','./IMG/displaybox/snowmen.jpeg'];
    const  icecaveImgArray = ['./IMG/displaybox/icecave.png','./IMG/displaybox/icecave2.jpeg'];
    
    //img right 버튼 
    $('#imgRBtn').on('click',function(){
      const nowBox = $('#textBox h1').html();
      switch(nowBox){
        case '짚트랙':
          ziptrackImgArray.push(ziptrackImgArray.shift());
          $('#imgBox').attr("src", ziptrackImgArray[0]);
          $('#imgBox').attr("alt", "짚트랙");
          break;
        case '음식':
          foodImgArray.push(foodImgArray.shift());
          $('#imgBox').attr("src", foodImgArray[0]);
          $('#imgBox').attr("alt", "음식사진");
          break;
        case '얼음조각':
          palaceImgArray.push(palaceImgArray.shift());
          $('#imgBox').attr("src", palaceImgArray[0]);
          $('#imgBox').attr("alt", "얼음조각");
          break;
        case '눈조각':
          snowmenImgArray.push(snowmenImgArray.shift());
          $('#imgBox').attr("src", snowmenImgArray[0]);
          $('#imgBox').attr("alt", "눈조각");
          break;  
        case '동굴':
          icecaveImgArray.push(icecaveImgArray.shift());
          $('#imgBox').attr("src", icecaveImgArray[0]);
          $('#imgBox').attr("alt", "동굴 안");
          break;  
      };
    });

    $('#imgLBtn').on('click',function(){
      const nowBox = $('#textBox h1').html();
      switch(nowBox){
        case '짚트랙':
          ziptrackImgArray.unshift(ziptrackImgArray.pop());
          $('#imgBox').attr("src", ziptrackImgArray[0]);
          $('#imgBox').attr("alt", "짚트랙");
          break;
        case '음식':
          foodImgArray.unshift(foodImgArray.pop());
          $('#imgBox').attr("src", foodImgArray[0]);
          $('#imgBox').attr("alt", "음식사진");
          break;
        case '얼음조각':
          palaceImgArray.unshift(palaceImgArray.pop());
          $('#imgBox').attr("src", palaceImgArray[0]);
          $('#imgBox').attr("alt", "얼음조각");
          break;
        case '눈조각':
          snowmenImgArray.unshift(snowmenImgArray.pop());
          $('#imgBox').attr("src", snowmenImgArray[0]);
          $('#imgBox').attr("alt", "눈조각");
          break;  
        case '동굴':
          icecaveImgArray.unshift(icecaveImgArray.pop());
          $('#imgBox').attr("src", icecaveImgArray[0]);
          $('#imgBox').attr("alt", "동굴 안");
          break;  
      };
    });
  }
  imgBtn();


}

