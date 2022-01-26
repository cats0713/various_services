/* matrtix_calculator  by ahyeon*/
window.onload = function(){
  let matirxArrA = document.querySelector("#matirxArrA");
  let matirxArrB = document.querySelector("#matirxArrB");

  let plusABtn = document.querySelector("#plusABtn");
  let minusABtn = document.querySelector("#minusABtn");
  let plusBBtn = document.querySelector("#plusBBtn");
  let minusBBtn = document.querySelector("#minusBBtn"); 

  let = document.querySelectorAll("#arrA");
  let arrBValue = document.querySelectorAll("#arrB");

  let addBtn = document.querySelector("#addBtn");
  let miusBtn = document.querySelector("#miusBtn");
  let mulBtn = document.querySelector("#mulBtn");
  
  let arrAcont = 3; //closure 로 바꾸기
  let arrBcont = 3; //closure 로 바꾸기

  //행렬 더하기
  let addMatirxFunc = (arrInput) => {
    let i = 0;
    while(i < arrInput.length){
      
      console.log(arrInput);
      i++;
    }
  }

  //행렬을 생성하는 class
  function ArrInputBox(arrID,matirxArr,arrNumber){ 
    matirxArr = matirxArr;
    this.arrID = arrID;
    this.arrDisplayFunc = function(arrXY){
      let i = 0;
      matirxArr.innerHTML = ''; 


      while(i < arrXY * arrXY){
        if((i + 1) % arrXY == 0){
          matirxArr.innerHTML += `<input id="${arrID}" class="${arrID}" tabindex="${(i + arrNumber) * 10}" type="number" placeholder="0" required></input>`;
          matirxArr.innerHTML += `<br>`;
        }else{
          matirxArr.innerHTML += `<input id="${arrID}" class="${arrID}" tabindex="${(i+arrNumber) * 10}" type="number" placeholder="0" required></input>`;
        }
        i++;
      }
    };
  }
  
  let arrA = new ArrInputBox('arrA',matirxArrA,10); //새로운 객체 생성
  arrA.arrDisplayFunc(arrAcont); //화면에 띄우기

  let arrB = new ArrInputBox('arrB',matirxArrB,1000); //새로운 객체 생성
  arrB.arrDisplayFunc(arrBcont); //화면에 띄우기

  //행렬 줄이기 늘리기
  plusABtn.addEventListener("click",function(){
    if(arrAcont == 5){
    }else{
      arrA.arrDisplayFunc(++arrAcont); //행렬 늘리기
    }
  });

  minusABtn.addEventListener("click",function(){
    if(arrAcont == 1){
    }else{
    arrA.arrDisplayFunc(--arrAcont); //행렬 줄이기
    }
  });
  
  plusBBtn.addEventListener("click",function(){
    if(arrBcont == 5){
    }else{
      arrB.arrDisplayFunc(++arrBcont); //행렬 늘리기
    }
  });

  minusBBtn.addEventListener("click",function(){
    if(arrBcont == 1){
    }else{
    arrB.arrDisplayFunc(--arrBcont); //행렬 줄이기
    }
  });

  addBtn.addEventListener("click",function(){
    //addMatirxFunc(arrAValue);
    console.log(arrAValue[0].value);
  });





}

