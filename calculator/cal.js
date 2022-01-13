
/* 
  calculator App
  2022/01/13 R0.0.1 CREATED BY YU AHYEON
  */

// 자리수가 넘어가면 화면에 에러 출력하기
// 세자리마다 , 찍기

(function main(){
  function Calculator(){ //복제 가능한 계산기 객체(복제 가능한)

    function DisplayLCD (){ //객체
      let printLCD = document.querySelector("#printLCD");
      
      this.printValue = function(inValue){
        printLCD.innerHTML = inValue;
        console.log("a");
      }
    }

    let UserLCD = new DisplayLCD();

    window.addEventListener("click",function(){
      let clickValue = 3;
      UserLCD.printValue(clickValue);
    })
  }

  let UserCalculator = new Calculator();

})();
