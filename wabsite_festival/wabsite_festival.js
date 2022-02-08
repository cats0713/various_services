window.onload = () => {
  const textArray = `다시찾고 싶은 마을,
  새로운 에너지를 담는 마을
  알프스마을로 여러분을 초대합니다.`;
  const disText = textArray.split("");
  const mainText = document.querySelector("#mainText");

  let displaylater = () => { //closer
    let i = 0;
    let display = () => {
      if(i >= 0 && i < disText.length){
        if(disText[i] == '\n'){
          mainText.innerHTML += '<br>';
        }else{
        mainText.innerHTML += disText[i];
        }
      }
        i++;
    }
    return display;
  }

  let userdisText = displaylater();
  setInterval(userdisText, 100);

}