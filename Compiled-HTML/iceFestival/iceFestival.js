window.onload = () => {
  let introBoxImg = document.querySelector("#introBox img");
  const mainArray = ['./IMG/mainimg/main_1.png','./IMG/mainimg/main_2.jpeg','./IMG/mainimg/main_3.png'];
  
  //메인 화면 체인지 하는 거
  let changeImg = () => {
    mainArray.push(mainArray.shift());
    introBoxImg.setAttribute("src",mainArray[0]); 
  } 

  setInterval(changeImg, 5000);


  //지도 열기
  $('#moreBtn').on("click", function () {
    $('#introBox').fadeOut("slow");
  });

  //썰매 버튼
  $('#sleighBtn').on("click", function () {
    $('#displayBox').fadeIn('slow');
    $('#imgBox').attr("src", "./IMG/displaybox/sleigh.jpeg");
    $('.textBox').html(`<h1>놀거리</h1>
    <p>눈 썰매장, 빙판썰매, 봅슬레이등 많은 놀거리가 있습니다. <br> 그 외에도 빙어 낚시 짚 트랙 등 다양한 체험이 있습니다.</p>`);
  });

  //얼음분수 버튼
  $('#iceFountainBtn').on("click", function () {
    $('#displayBox').fadeIn('slow');
    $('#imgBox').attr("src", "./IMG/displaybox/iceFountain.png");
    $('.textBox').html(`<h1>얼음분수</h1>
    <p>커다란 얼음분수가 만들어놓은 알프스 겨울왕국!</p>`);
  });

  //이글루 버튼
  $('#iglooBtn').on("click", function () {
    $('#displayBox').fadeIn('slow');
    $('#imgBox').attr("src", "./IMG/displaybox/Igloo.jpeg");
    $('.textBox').html(`<h1>이글루</h1>
    <p>커다란 얼음분수가 만들어놓은 알프스 겨울왕국!</p>`);
  });

  //동굴 버튼
  $('#caveBtn').on("click", function () {
    $('#displayBox').fadeIn('slow');
    $('#imgBox').attr("src", "./IMG/displaybox/icecave.png");
    $('.textBox').html(`<h1>동굴</h1>
    <p>커다란 얼음분수가 만들어놓은 알프스 겨울왕국!</p>`);
  });

  //음식 버튼
  $('#foodBtn').on("click", function () {
    $('#displayBox').fadeIn('slow');
    $('#imgBox').attr("src", "./IMG/displaybox/food.jpeg");
    $('.textBox').html(`<h1>음식</h1>
      <p>커다란 얼음분수가 만들어식은 알프스 겨울왕국!</p>`);
  });

  //얼음성 버튼
  $('#palaceBtn').on("click", function () {
    $('#displayBox').fadeIn('slow');
    $('#imgBox').attr("src", "./IMG/displaybox/palace.png");
    $('.textBox').html(`<h1>얼음조각</h1>
      <p>커다란 얼음분수가 만들어식은 알프스 겨울왕국!</p>`);
  });

  //눈사람 버튼
  $('#snowmenBtn').on("click", function () {
    $('#displayBox').fadeIn('slow');
    $('#imgBox').attr("src", "./IMG/displaybox/snowmen.jpeg");
    $('.textBox').html(`<h1>눈조각</h1>
      <p>커다란 얼음분수가 만들어식은 알프스 겨울왕국!</p>`);
  });


  //닫힘 버튼
  $('#closeBtn').on("click", function () {
    $('#displayBox').fadeOut('slow');
  });

}