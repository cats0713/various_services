window.onload = () => {
  let navBtn = document.querySelector("#navBtn");
  let navXBtn = document.querySelector("#navXBtn");
  let navListBtn = document.querySelector("#navListBtn");
  let blackBackgruond = document.querySelector("#blackBackgruond");
  
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
  navBtn.addEventListener("click",function(){
    navListBtn.style.display = "block";
    blackBackgruond.style.display = "block";
  });

  navXBtn.addEventListener("click",function(){
    navListBtn.style.display = "none";
    blackBackgruond.style.display = "none";
  }); 

}