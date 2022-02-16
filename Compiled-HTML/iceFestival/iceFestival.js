window.onload = () => {
  let introBoxImg = document.querySelector("#introBox img");
  const mainArray = ['./IMG/mainimg/main_1.png','./IMG/mainimg/main_2.jpeg','./IMG/mainimg/main_3.png']; 
  const snowBox = document.querySelector("#snowBox");
  let i = 0;

  //메인 화면 체인지 하는 거
  let changeImg = () => {
    setTimeout(function(){
      mainArray.push(mainArray.shift());
      introBoxImg.setAttribute("src",mainArray[0]);
      changeImg();
    }, 3000);
    
  } 
  changeImg();

  //배경화면 눈 내리게 하는거
  let createSnow = () => {
    while(i < 100){
      let randomW = Math.floor(Math.random() * window.innerWidth);
      let randomH = Math.floor(Math.random() * window.innerHeight);
      
      snowBox.innerHTML += `<div class="snow" style="margin-top: ${randomH}px; margin-left: ${randomW}px"></div>`;
      i++;
    }
    
  }
  createSnow();


  //지도 열기
  $('#moreBtn').on("click", function () {
    $('#introBox').fadeOut("slow");
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
    $('#imgBox').attr("src", "./IMG/displaybox/snowmen.jpeg");
    $('#imgBox').attr("alt", "눈 조각사진");
    $('.textBox').html(`<h1>눈조각</h1>
      <p>커다란 얼음분수가 만들어식은 알프스 겨울왕국!</p>`);
  });


  //닫힘 버튼
  $('#closeBtn').on("click", function () {
    $('#displayBox').fadeOut('slow');
    $('#penguinBox').slideToggle('slow');
  });

}

