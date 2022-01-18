let checkBtn = document.querySelector("#checkBtn");
let cancelBtn =document.querySelector("#cancelBtn");

checkBtn.addEventListener("click", function(){
  let userInput = document.querySelector("#userInput").value;
  let userResult = document.querySelectorAll(".resultBox>input");
  let i = 0;
  let binaryNum = 0;
  let octalNum = 0;
  let decimalNum = Number(userInput);
  let hexadecimalNum = 0;

  function binaryFunc(decimalNum){
    let binaryNumArr = [];
    let binaryNum = '';
    let numberCal = decimalNum;
    let i = 0;

    while(true){
      binaryNumArr.unshift(Math.floor(numberCal % 2));
      numberCal = Math.floor(numberCal / 2);

      console.log(binaryNumArr);
      console.log(numberCal); 
    
      if( numberCal == 1 ){
        binaryNumArr.unshift(numberCal);
        break;
      }else if( numberCal == 0){
        break;
      }
    }

    while(i < binaryNumArr.length){
      binaryNum +=  binaryNumArr[i]
      i++;
    }

    return binaryNum;
  }

  binaryNum = binaryFunc(decimalNum); // 바이너리로 바꿈


  while(i < 4){ //출력
    switch(i){
      case 0: 
      userResult[i].value = binaryNum;
      break;

      case 1: 
      userResult[i].value = octalNum; 
      break;

      case 2: 
      userResult[i].value = decimalNum;  
      break;

      case 3: 
      userResult[i].value = hexadecimalNum;  
      break;
    }
    i++;
  }
  

});

cancelBtn.addEventListener("click", function(){
  let userInput = document.querySelector("#userInput");
  let userResult = document.querySelectorAll(".resultBox>input");
  let i = 0;

  userInput.value = '0';
  while(i<4){
    userResult[i].value = 0;
    i++;
  }
});