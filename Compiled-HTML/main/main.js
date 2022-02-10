window.onload = () => {
  // let navBtn = document.querySelector("#navBtn");
  // let navXBtn = document.querySelector("#navXBtn");
  // let navListBtn = document.querySelector("#navListBtn");
  // let blackBackgruond = document.querySelector("#blackBackgruond");
  let festivalasImg = document.querySelector("#festivalasImg");
  const festivalasImgArr = ['main_1.jpeg', 'main_2.jpeg', 'main_3.jpeg'];
  
  //console.log(festivalasImg.getAttribute( 'src' ));
  let changeImg = () => {
    let i = 0;
    let changeIMG = () => {
      while(){
        festivalasImg.setAttribute('src', 'festivalasImgArr[i]');
        
      }
    }
  }
  



  // 글자 찍기
  const textArray = `새로운 에너지를 담는 마을
  알프스마을로 여러분을 초대합니다.`;
  const TitleText = textArray.split("");
  const mainText = document.querySelector("#mainTitle");

  let displaylater = () => { //closeur
    let i = 0;
    let display = () => {
      if(i >= 0 && i < TitleText.length){
        if(TitleText[i] == '\n'){
          mainText.innerHTML += '<br>';
        }else{
        mainText.innerHTML += TitleText[i];
        }
      }
        i++;
    }
    return display;
  }

  let userdisText = displaylater();
  setInterval(userdisText, 100);







  //이벤트 리스너

  // navBtn.addEventListener("click",function(){
  //   navListBtn.style.display = "block";
  //   blackBackgruond.style.display = "block";
  // });
  // navXBtn.addEventListener("click",function(){
  //   navListBtn.style.display = "none";
  //   blackBackgruond.style.display = "none";
  // }); 

  $("#navBtn").on("click",function(){
    $("#navListBtn").hide().slideDown("slow");
    $("#blackBackgruond").fadeIn("slow");
  });

  $("#navXBtn").on("click",function(){
    $("#navListBtn").slideUp("slow");
    $("#blackBackgruond").fadeOut("slow");
  }); 
  
}