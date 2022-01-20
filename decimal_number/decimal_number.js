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

    while(true){ //계산
      binaryNumArr.unshift(Math.floor(numberCal % 2));
      numberCal = Math.floor(numberCal / 2);

      if( numberCal == 1 ){
        binaryNumArr.unshift(numberCal);
        break;
      }else if( numberCal == 0){
        break;
      }
    }

    while(i < binaryNumArr.length){ //배열을 문자열로 바꾸는 과정
      binaryNum +=  binaryNumArr[i]
      i++;
    }

    return binaryNum;
  }

  function octalFunc(decimalNum){
    let octalNumArr = [];
    let octalNum = '';
    let numberCal = decimalNum;
    let i = 0;

    while(true){ //계산
      octalNumArr.unshift(Math.floor(numberCal % 8));
      numberCal = Math.floor(numberCal / 8);

      console.log(octalNumArr);
      console.log(numberCal);

      if( numberCal < 8 ){
        octalNumArr.unshift(numberCal);
        break;
      }else if( numberCal == 0){
        break;
      }
    }

    while(i < octalNumArr.length){ //배열을 문자열로 바꾸는 과정
      octalNum +=  octalNumArr[i]
      i++;
    }

    return octalNum;
  } 
  
  function hexadecimalFunc(decimalNum){
    let hexadecimalNumArr = [];
    let hexadecimalNum = '';
    let numberCal = decimalNum;
    let i = 0;

    while(true){
      hexadecimalNumArr.unshift(Math.floor(numberCal % 16));
      numberCal = Math.floor(numberCal / 16);
    
      if( numberCal < 16 ){
        hexadecimalNumArr.unshift(numberCal);
        break;
      }else if( numberCal == 0){
        break;
      }
    }

    while(i < hexadecimalNumArr.length){
      switch (hexadecimalNumArr[i]){
        case 10 : hexadecimalNumArr[i] = 'A'; break;
        case 11 : hexadecimalNumArr[i] = 'B'; break; 
        case 12 : hexadecimalNumArr[i] = 'C'; break; 
        case 13 : hexadecimalNumArr[i] = 'D'; break;
        case 14 : hexadecimalNumArr[i] = 'E'; break;
        case 15 : hexadecimalNumArr[i] = 'F'; break;
      }
      i++;
    }
    i = 0;
    while(i < hexadecimalNumArr.length){
      
      hexadecimalNum +=  hexadecimalNumArr[i];
    i++;
    }
    return hexadecimalNum;
  } 

  binaryNum = binaryFunc(decimalNum); // 바이너리로 바꿈
  octalNum = octalFunc(decimalNum); // 8진수
  hexadecimalNum = hexadecimalFunc(decimalNum); // 16진수
  
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

  userInput.value = '';
  while(i<4){
    userResult[i].value = 0;
    i++;
  }
});