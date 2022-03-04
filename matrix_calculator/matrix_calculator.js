/* matrtix_calculator  by ahyeon*/
window.onload = function () {
  let matirxArrA = document.querySelector("#matirxArrA");
  let matirxArrB = document.querySelector("#matirxArrB");
  let matirxArrR = document.querySelector("#matirxArrR");

  let okABtn = document.querySelector("#okABtn");
  let ramdomABtn = document.querySelector("#ramdomABtn");

  let okBBtn = document.querySelector("#okBBtn");
  let ramdomBBtn = document.querySelector("#ramdomBBtn");

  let addBtn = document.querySelector("#addBtn");
  let miusBtn = document.querySelector("#miusBtn");
  let mulBtn = document.querySelector("#mulBtn");

  let blackBox = document.querySelector(".blackBox");
  let arrcont = 3; //closure 로 바꾸기



  //행렬을 생성하는 class
  function ArrInputBox(arrID, matirxArr, arrTapNumber) {
    this.arrID = arrID;
    this.arrDisplayFunc = function (arrX,arrY) {
      let i = 0;
      matirxArr.innerHTML = '';

      while (i < arrX * arrY) {
        if ((i + 1) % arrX == 0) {
          matirxArr.innerHTML += `<input id="${arrID}" class="${arrID}" tabindex="${(i + arrTapNumber) * 10}" type="number" value="0" placeholder="0" required></input>`;
          matirxArr.innerHTML += `<br>`;
        } else {
          matirxArr.innerHTML += `<input id="${arrID}" class="${arrID}" tabindex="${(i + arrTapNumber) * 10}" type="number" value="0" placeholder="0" required></input>`;
        }
        i++;
      }
    };
  }
  //결과창 행렬 class
  function ArrResultBox(arrID, matirxArr) {
    this.arrID = arrID;
    this.arrDisplayFunc = function (arrX,arrY) {
      let i = 0;
      matirxArr.innerHTML = '';

      while (i < arrX * arrY) {
        if ((i + 1) % arrX == 0) {
          matirxArr.innerHTML += `<input id="${arrID}" class="${arrID}"  type="number" value="0" readonly></input>`;
          matirxArr.innerHTML += `<br>`;
        } else {
          matirxArr.innerHTML += `<input id="${arrID}" class="${arrID}"  type="number" value="0" readonly></input>`;
        }
        i++;
      }
    };
  }


  let arrA = new ArrInputBox('arrA', matirxArrA, 10); //새로운 객체 생성
  arrA.arrDisplayFunc(arrcont,arrcont); //화면에 띄우기

  let arrB = new ArrInputBox('arrB', matirxArrB, 100); //새로운 객체 생성
  arrB.arrDisplayFunc(arrcont,arrcont); //화면에 띄우기

  let arrayRS = new ArrResultBox('arrRS', matirxArrR); //새로운 결과 객체 생성
  arrayRS.arrDisplayFunc(arrcont,arrcont);

  //행렬 체크 버튼을 눌렀을때
  okABtn.addEventListener("click",()=>{
    let inputARow = document.querySelector("#inputARow").value;
    let inputAColumns = document.querySelector("#inputAColumns").value;
    matirxArrR.style.display = 'none';
    arrayRS.arrDisplayFunc(inputARow,inputAColumns);
    // console.log(inputARow);
    arrA.arrDisplayFunc(inputARow,inputAColumns);
  });
  okBBtn.addEventListener("click",()=>{
    let inputBRow = document.querySelector("#inputBRow").value;
    let inputBColumns = document.querySelector("#inputBColumns").value;
    matirxArrR.style.display = 'none';
    // console.log(inputBRow);
    arrB.arrDisplayFunc(inputBRow,inputBColumns);
  });
  //행렬 랜덤 버튼
  ramdomABtn.addEventListener("click",()=>{
    let arrAV = document.querySelectorAll(".arrA"); 
    arrAV.forEach((element,i) => {
      arrAV[i].value = Math.floor(Math.random()*999);
    }); 
  });
  ramdomBBtn.addEventListener("click",()=>{
    let arrBV = document.querySelectorAll(".arrB"); 
    arrBV.forEach((element,i) => {
      arrBV[i].value = Math.floor(Math.random()*999);
    }); 
  });

  //행렬 더하기 함수
  let addMatirxFunc = () => {
    let arrAV = document.querySelectorAll(".arrA");
    let arrBV = document.querySelectorAll(".arrB");
    let arrResult = [];

    arrAV.forEach((element,i) => {
      arrResult[i] = Number(arrAV[i].value) + Number(arrBV[i].value); 
    });
    return arrResult;
  }
  //행렬 빼기 함수
  let miusMatirxFunc = () => {
    let arrAV = document.querySelectorAll(".arrA");
    let arrBV = document.querySelectorAll(".arrB");
    let arrResult = [];

    arrAV.forEach((element , i) => {
      arrResult[i] = Number(arrAV[i].value) - Number(arrBV[i].value); 
    });

    return arrResult;
  }
  //행렬 곱하기 함수
  let mulMatirxFunc = (inputARow,inputAColumns,inputBRow,inputBColumns) => {
    let arrAV = document.querySelectorAll(".arrA");
    let arrBV = document.querySelectorAll(".arrB");

    let conutNum = 0;

    let arrResult = [];
    let arrAR = Array.from(Array(inputARow), ()=> Array(inputAColumns).fill(0));
    let arrBR = Array.from(Array(inputBRow), ()=> Array(inputBColumns).fill(0));


    // arrAR.forEach((e,i,a)=>{ //[] 배열을 복사하여 사용하는것이라 값이 변화가 일어나지  x
    //   a.forEach((e2,i2,a2)=>{ //[[]]
    //     e2 = arrAV[conutNum].value;
    //     conutNum++;
    //   });
    // });

    conutNum = 0;
    for(let i = 0; i<arrAR.length; i++){
      for(let j=0; j<arrAR[i].length;j++ ){
        arrAR[i][j] = Number(arrAV[conutNum].value);
        conutNum++; 
      }
    }
    conutNum = 0;
    for(let i = 0; i<arrBR.length; i++){
      for(let j=0; j<arrBR[i].length;j++ ){
        arrBR[i][j] = Number(arrBV[conutNum].value);
        conutNum++; 
      }
    }

    console.log(arrAR);
    // console.log(arrBR);
    
    conutNum = 0;
    for(let i = 0; i < inputARow; i++){
      for(let j = 0; j < inputBColumns; j++){
        for(let k = 0; k < inputAColumns; k++){
          arrResult[conutNum] += arrAR[i][k] * arrBR[k][j];
          console.log(arrResult[conutNum]);
        }
        conutNum++;
      }
    }

    console.log(arrResult);

    return arrResult;
  }


  // 사이드 더하기 버튼을 누르면
  addBtn.addEventListener("click", function () {
    let inputARow = document.querySelector("#inputARow").value;
    let inputAColumns = document.querySelector("#inputAColumns").value;
    let inputBRow = document.querySelector("#inputBRow").value;
    let inputBColumns = document.querySelector("#inputBColumns").value;
    
    if(inputARow == inputBRow && inputAColumns == inputBColumns){
      let arrRS = document.querySelectorAll("#arrRS");
      let resultValue = addMatirxFunc();
  
      matirxArrR.style.display = 'inline-block';
  
      resultValue.forEach((element, index) => { 
        arrRS[index].value = element; 
      });
    }else{
      blackBox.innerHTML = "<p>더하기는 행과 열이 같아야 계산이 가능합니다.</p>";
      blackBox.style.display = "block";
      setTimeout(function(){
        blackBox.style.display = "none"; 
      },2000);
    }
    
  });

  //사이드 뺴기 버튼을 누르면
  miusBtn.addEventListener("click", function () {
    let inputARow = document.querySelector("#inputARow").value;
    let inputAColumns = document.querySelector("#inputAColumns").value;
    let inputBRow = document.querySelector("#inputBRow").value;
    let inputBColumns = document.querySelector("#inputBColumns").value;
    
    if(inputARow == inputBRow && inputAColumns == inputBColumns){
      let arrRS = document.querySelectorAll("#arrRS");
      let resultValue = miusMatirxFunc();
      let i = 0;
  
      matirxArrR.style.display = 'inline-block';
  
      resultValue.forEach((element, index) => { 
        arrRS[index].value = element; 
      });
    }else{
      blackBox.innerHTML = "<p>빼기는 행과 열이 같아야 계산이 가능합니다.</p>";
      blackBox.style.display = "block";
      setTimeout(function(){
        blackBox.style.display = "none"; 
      },2000);
    }
  });

  //사이드 곱하기 버튼을 누르면
  mulBtn.addEventListener("click",function(){
    let inputARow = Number(document.querySelector("#inputARow").value);
    let inputAColumns = Number(document.querySelector("#inputAColumns").value);
    let inputBRow = Number(document.querySelector("#inputBRow").value);
    let inputBColumns = Number(document.querySelector("#inputBColumns").value);
    
    arrayRS.arrDisplayFunc(inputBRow,inputAColumns);
    if(inputARow == inputBColumns){

      let arrRS = document.querySelectorAll("#arrRS");
      let resultValue = mulMatirxFunc(inputARow,inputAColumns,inputBRow,inputBColumns);

      matirxArrR.style.display = 'inline-block';

      resultValue.forEach((element, index) => { 
        arrRS[index].value = element; 
      });
    }else{
      blackBox.innerHTML = "<p>곱하기는 앞행 = 뒷열이 같아야 계산이 가능합니다.</p>";
      blackBox.style.display = "block";
      setTimeout(function(){
        blackBox.style.display = "none"; 
      },2000);
    }
  });

}

