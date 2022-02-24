window.onload = () => {
  let userRock = document.querySelector("#userRock");
    let userPaper = document.querySelector("#userPaper");
    let userScissors = document.querySelector("#userScissors");

    let winOrLose = document.querySelector("#winOrLose");
    let comHand = document.querySelector("#comHand");

    function comVsUser() { // 컴퓨터 랜덤 함수를 가위바위보중 하나로 바꾸는 작업
      let comGame = Math.floor(Math.random() * 3);
      if (comGame == 0) {
        comGame = "rock"
      } else if (comGame == 1) {
        comGame = 'paper';
      } else {
        comGame = 'scissor';
      }
      return comGame;
    }

    function gameResult(gameR) { //게임 결과를 출력
      if (gameR == 0) {
        winOrLose.setAttribute('src','./IMG/win.png');
        winOrLose.setAttribute('alt','사용자가 이겼다');
      } else if (gameR == 1) {
        winOrLose.setAttribute('src','./IMG/lose.png');
        winOrLose.setAttribute('alt','사용자가 졌다');
      } else {
        winOrLose.setAttribute('src','./IMG/tie.png');
        winOrLose.setAttribute('alt','비겼다');
      }
    }

    let comResultImg = (comGameResult) => {
      if (comGameResult == 'rock') {
        comHand.setAttribute('src','./IMG/rock.png');
      } else if (comGameResult == 'paper') {
        comHand.setAttribute('src','./IMG/paper.png');
      } else {
        comHand.setAttribute('src','./IMG/scissors.png');
      }

    }
    // button을 눌렀을때
    userRock.onclick = function () { 
      let comGameResult = comVsUser();
      if (comGameResult == 'rock') {
        gameResult(3);
      } else if (comGameResult == 'paper') {
        gameResult(1);
      } else {
        gameResult(0);
      }
      comResultImg(comGameResult);
      
    }

    userPaper.onclick = function () {
      let comGameResult = comVsUser();
      if (comGameResult == 'rock') {
        gameResult(0);
      } else if (comGameResult == 'paper') {
        gameResult(3);
      } else {
        gameResult(1);
      }
      comResultImg(comGameResult);
    }

    userScissors.onclick = function () {
      let comGameResult = comVsUser();
      if (comGameResult == 'rock') {
        gameResult(1);
      } else if (comGameResult == 'paper') {
        gameResult(0);
      } else {
        gameResult(3);
      }
      comResultImg(comGameResult);
    }
}