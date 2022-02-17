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

  //지도 열기
  $('#moreBtn').on("click", function () {
    $('#introBox').slideUp("slow");
    $('#penguinBox').slideToggle('slow');
  });

  //썰매 버튼
  $('#sleighBtn').on("click", function () {
    $('#penguinBox').slideToggle('slow');
    $('#displayBox').fadeIn('slow');
    $('#imgBox').attr("src", "./IMG/displaybox/sleigh.jpeg");
    $('#imgBox').attr("alt", "알프스 눈 썰매");
    $('.textBox').html(`<h1>놀거리</h1>
    <p>눈 썰매장, 빙판썰매, 봅슬레이등 많은 놀거리가 있습니다. <br> 그 외에도 빙어 낚시 짚 트랙 등 다양한 체험이 있습니다.</p>`);
  });

  //얼음분수 버튼
  $('#iceFountainBtn').on("click", function () {
    $('#penguinBox').slideToggle('slow');
    $('#displayBox').fadeIn('slow');
    $('#imgBox').attr("src", "./IMG/displaybox/iceFountain.png");
    $('#imgBox').attr("alt", "알프스 얼음 분수");
    $('.textBox').html(`<h1>얼음분수</h1>
    <p>커다란 얼음분수가 만들어놓은 알프스 겨울왕국!</p>`);
  });

  //이글루 버튼
  $('#iglooBtn').on("click", function () {
    $('#displayBox').fadeIn('slow');
    $('#penguinBox').slideToggle('slow');
    $('#imgBox').attr("src", "./IMG/displaybox/Igloo.jpeg");
    $('#imgBox').attr("alt", "야간 이글루 사진");
    $('.textBox').html(`<h1>이글루</h1>
    <p>커다란 얼음분수가 만들어놓은 알프스 겨울왕국!</p>`);
  });

  //동굴 버튼
  $('#caveBtn').on("click", function () {
    $('#penguinBox').slideToggle('slow');
    $('#displayBox').fadeIn('slow');
    $('#imgBox').attr("src", "./IMG/displaybox/icecave.png");
    $('#imgBox').attr("alt", "야간 동굴 봅슬레이");
    $('.textBox').html(`<h1>동굴</h1>
    <p>커다란 얼음분수가 만들어놓은 알프스 겨울왕국!</p>`);
  });

  //음식 버튼
  $('#foodBtn').on("click", function () {
    $('#penguinBox').slideToggle('slow');
    $('#displayBox').fadeIn('slow');
    $('#imgBox').attr("src", "./IMG/displaybox/food.jpeg");
    $('#imgBox').attr("alt", "군밤등등 음식 사진");
    $('.textBox').html(`<h1>음식</h1>
      <p>커다란 얼음분수가 만들어식은 알프스 겨울왕국!</p>`);
  });

  //얼음성 버튼
  $('#palaceBtn').on("click", function () {
    $('#penguinBox').slideToggle('slow');
    $('#displayBox').fadeIn('slow');
    $('#imgBox').attr("src", "./IMG/displaybox/palace.png");
    $('#imgBox').attr("alt", "얼음 조각사진");
    $('.textBox').html(`<h1>얼음조각</h1>
      <p>커다란 얼음분수가 만들어식은 알프스 겨울왕국!</p>`);
  });

  //눈사람 버튼
  $('#snowmenBtn').on("click", function () {
    $('#penguinBox').slideToggle('slow');
    $('#displayBox').fadeIn('slow');
    $('#imgBox').attr("src", "./IMG/displaybox/snowmen2.png");
    $('#imgBox').attr("alt", "눈 조각");
    $('.textBox').html(`<h1>눈조각</h1>
      <p>커다란 얼음분수가 만들어식은 알프스 겨울왕국!</p>`);
  });
  //짚트랙
  $('#ziptrack').on("click", function () {
    $('#penguinBox').slideToggle('slow');
    $('#displayBox').fadeIn('slow');
    $('#imgBox').attr("src", "./IMG/displaybox/ziptrack.jpeg");
    $('#imgBox').attr("alt", "짚트랙");
    $('.textBox').html(`<h1>짚트랙</h1>
    <p>커다랙 얼음분수가 만들어놓은 알프스 겨울왕국!</p>`);
  });

  //닫힘 버튼
  $('#closeBtn').on("click", function () {
    $('#displayBox').fadeOut('slow');
    $('#penguinBox').slideToggle('slow');
  });

  let imgBtn = () => {
    const ziptrackImgArray = ['./IMG/displaybox/ziptrack.jpeg','./IMG/displaybox/ziptrack2.jpeg','./IMG/displaybox/ziptrack3.png'];
    const foodImgArray = ['./IMG/displaybox/food.jpeg','./IMG/displaybox/food2.jpeg'];
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
  }
  imgBtn();


}

