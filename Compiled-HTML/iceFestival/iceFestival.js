window.onload=()=>{

  //지도 열기
  $('#moreBtn').on("click",function(){
    $('#introBox').fadeOut("slow");
  });

  let changeMainImg = () => {

  }

  //썰매 버튼
  $('#sleighBtn').on("click",function(){
    $('#displayBox').fadeIn('slow');
    $('#imgBox').attr("src","./IMG/ice1.jpeg");
    $('.textBox').html(`<h1>놀거리</h1>
    <p>눈 썰매장, 빙판썰매, 봅슬레이등 많은 놀거리가 있습니다. <br> 그 외에도 빙어 낚시 짚 트랙 등 다양한 체험이 있습니다.</p>`);
  });

  //얼음분수 버튼
  $('#IceFountain').on("click",function(){
    $('#displayBox').fadeIn('slow');
    $('#imgBox').attr("src","./IMG/main_1.png");
    $('.textBox').html(`<h1>얼음분수</h1>
    <p>커다란 얼음분수가 만들어놓은 알프스 겨울왕국!</p>`);
  });

  //이글루 버튼
  $('#IglooBtn').on("click",function(){
    $('#displayBox').fadeIn('slow');
    $('#imgBox').attr("src","./IMG/Igloo.jpeg");
    $('.textBox').html(`<h1>이글루</h1>
    <p>커다란 얼음분수가 만들어놓은 알프스 겨울왕국!</p>`);
  });

  //닫힘 버튼
  $('#closeBtn').on("click",function(){
    $('#displayBox').fadeOut('slow');
  });

}