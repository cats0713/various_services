
/* 
  calculator App
  2022/01/13 R0.0.1 CREATED BY YU AHYEON
  */

(function main() {
  function Calculator() { //복제 가능한 계산기 객체(복제 가능한)

    function DisplayLCD() { //계산기 디스플레이 객체
      let printLCD = document.querySelector("#printLCD");

      this.printValue = function (inValue) {
        printLCD.value += inValue;
        // console.log("a");
      }
    }
    let UserLCD = new DisplayLCD(); //LCD창 복제

    function ResultComma() { //결과 값에 콤마찍기

      this.resultDot = function (resultDot){
        let resultDisplayDot = String(resultDot);
        let i = resultDisplayDot.length - 1;
        let constNum = 0;
        let j = 0;
        let userArr = [];
        console.log(resultDisplayDot);

        while(i >= 0){
          if(userArr.length % 3 == 0){ //i가 3의 배수 일때
            userArr.unshift(resultDisplayDot[i]);
            userArr.unshift(',');
          }else{
            userArr.unshift(resultDisplayDot[i]);
          }

          i--;
        }
        console.log(userArr);

        while(j > userArr.length){
          console.log(userArr[i]);
          //resultInput.value += userArr[i];
          i++;
        }
      }
    }
    let UserComma = new ResultComma();

    function KeyPad() { // 키패드 객체
      /*this.mouseClick = function () { // 함수(기능)를 메소드로 변환시킬수있다
      
        const clickInfo = document.querySelectorAll(".keyPad>div");
        for (let i = 0; i < clickInfo.length; i++) {
          clickInfo[i].addEventListener('click', function (e) {
            const keyValue = ['AC',7,8,9,'/','',4,5,6,'*','',1,2,3,'-','','.','0','=','+'];
            switch(keyValue[i]){
              case 'AC': document.querySelector('#printLCD').value = ''; break;
              case '=':
                let resultInput = document.querySelector('#printLCD'); 
              //let  = '=' + eval(resultInput.value);
              break;
              default: UserLCD.printValue(keyValue[i]); break;
            }
          });
        }
      }*/

      this.mouseClick = function () { // 함수(기능)를 메소드로 변환시킬수있다
        const clickInfo = document.querySelectorAll(".keyPad>div");
        let i = 0;
        while (i < clickInfo.length) {
          if (true) {
            let j = i;
            clickInfo[j].addEventListener('click', function (e) {
              let keyValue = ['AC', 7, 8, 9, '/', '', 4, 5, 6, '*', '', 1, 2, 3, '-', '', '.', '0', '=', '+'];
              switch (keyValue[j]) {
                case 'AC': document.querySelector('#printLCD').value = ''; break;
                case '=':
                  let resultInput = document.querySelector('#printLCD');
                  UserComma.resultDot(eval(resultInput.value));
                  //return eval(resultInput.value);
                  resultInput.value += '=' + eval(resultInput.value);
                  break;
                default: UserLCD.printValue(keyValue[j]); break;
              }
            });
          }
          i++;
        }
      }
    }

    let UserKeyPad = new KeyPad();  //keypad 복제
    UserKeyPad.mouseClick(); //메소드 실행


  
  }
  
  let UserCalculator = new Calculator(); //계산기의 생성 - 인스턴스 상태가 되기때문에 살아있다.

})();
