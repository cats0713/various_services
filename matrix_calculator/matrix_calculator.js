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
  let arrcont = 3; 

  let inputAColumns = document.querySelector("#inputAColumns");
  let inputARow = document.querySelector("#inputARow");
  let inputBColumns = document.querySelector("#inputBColumns");
  let inputBRow = document.querySelector("#inputBRow");

  //input칸에 문자가 입력됐을때 방지 코드
  inputAColumns.addEventListener("keyup",function(e){
    let stringTest = /^[ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z]$/;

    if(stringTest.test(e.key)){
      inputAColumns.value = 3;
      blackBox.innerHTML = "<p>문자는 넣을 수 없습니다.</p>";
      blackBox.style.display = "block";
      setTimeout(function(){
        blackBox.style.display = "none"; 
      },2000); 
    }
  });
  inputARow.addEventListener("keyup",function(e){
    let stringTest = /^[ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z]$/;

    if(stringTest.test(e.key)){
      inputARow.value = 3;
      blackBox.innerHTML = "<p>문자는 넣을 수 없습니다.</p>";
      blackBox.style.display = "block";
      setTimeout(function(){
        blackBox.style.display = "none"; 
      },2000); 
    }
  });
  inputBColumns.addEventListener("keyup",function(e){
    let stringTest = /^[ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z]$/;

    if(stringTest.test(e.key)){
      inputBColumns.value = 3;
      blackBox.innerHTML = "<p>문자는 넣을 수 없습니다.</p>";
      blackBox.style.display = "block";
      setTimeout(function(){
        blackBox.style.display = "none"; 
      },2000); 
    }
  });
  inputBRow.addEventListener("keyup",function(e){
    let stringTest = /^[ㄱ-ㅎㅏ-ㅣa-zA-Z]$/;

    if(stringTest.test(e.key)){
      inputBRow.value = 3;
      blackBox.innerHTML = "<p>문자는 넣을 수 없습니다.</p>";
      blackBox.style.display = "block";
      setTimeout(function(){
        blackBox.style.display = "none"; 
      },2000); 
    }
  });
  

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
          matirxArr.innerHTML += `<div class="${arrID}"><input id="${arrID}" class="arrRinput"  type="text" value="0" readonly></input></div>`;
          matirxArr.innerHTML += `<br>`;
        } else {
          matirxArr.innerHTML += `<div class="${arrID}"><input id="${arrID}" class="arrRinput"  type="text" value="0" readonly></input></div>`;
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
    if(inputARow > 0 && inputARow < 6 && inputAColumns > 0 && inputAColumns < 6){
      matirxArrR.style.display = 'none';
      // console.log(inputARow);
      arrayRS.arrDisplayFunc(inputARow,inputAColumns);
      arrA.arrDisplayFunc(inputARow,inputAColumns);

    }else{
      blackBox.innerHTML = "<p>행렬의 크기는 1이상 5이하 가능합니다.</p>";
      blackBox.style.display = "block";
      setTimeout(function(){
        blackBox.style.display = "none"; 
      },2000);
    }
    
  });
  okBBtn.addEventListener("click",()=>{
    let inputBRow = document.querySelector("#inputBRow").value;
    let inputBColumns = document.querySelector("#inputBColumns").value;
    if(inputBRow > 0 && inputBRow < 6 && inputBColumns > 0 && inputBColumns < 6){ 
    matirxArrR.style.display = 'none';
    // console.log(inputBRow);
    arrB.arrDisplayFunc(inputBRow,inputBColumns);
    }else{
      blackBox.innerHTML = "<p>행렬의 크기는 1이상 5이하 가능합니다.</p>";
      blackBox.style.display = "block";
      setTimeout(function(){
        blackBox.style.display = "none"; 
      },2000);
    } 
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
    let sumNumber = 0;
    let myRegExp = /e/;

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
    let arrResultSumNum = 0;
    let arrAR = Array.from(Array(inputAColumns), ()=> Array(inputARow).fill(0));
    let arrBR = Array.from(Array(inputBColumns), ()=> Array(inputBRow).fill(0));
    const myRegExp = /e/;


    //1차원 배열 2차원으로 쪼개기
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
    console.log(arrBR);
    
    conutNum = 0;
    for(let i = 0; i < inputAColumns; i++){ 
      for(let j = 0; j < inputBRow; j++){ 
        for(let k = 0; k < inputARow; k++){ 

          arrResultSumNum += Number(arrAR[i][k]) * Number(arrBR[k][j]);
          // console.log(i,k,k,j);
          // console.log(conutNum);
        }
        arrResult[conutNum] = arrResultSumNum;
        // console.log(`arrResult[${conutNum}] = ${arrResultSumNum}`);
        arrResultSumNum = 0;
        conutNum++;
      }
    }

    // console.log(arrResult);

    return arrResult;
  }


  // 사이드 더하기 버튼을 누르면
  addBtn.addEventListener("click", function () {
    let inputARow = document.querySelector("#inputARow").value;
    let inputAColumns = document.querySelector("#inputAColumns").value;
    let inputBRow = document.querySelector("#inputBRow").value;
    let inputBColumns = document.querySelector("#inputBColumns").value;

    let arrAxy = document.querySelectorAll("#arrA").length;
    let arrBxy = document.querySelectorAll("#arrB").length;  
    //배열이 제대로 생성 되었는지 확인
    if(arrAxy == inputARow * inputAColumns && arrBxy == inputBRow * inputBColumns){
      if(inputARow == inputBRow && inputAColumns == inputBColumns){
        let arrRS = document.querySelectorAll("#arrRS");
        let resultValue = addMatirxFunc();
  
        matirxArrR.style.display = 'inline-block';
        
        //1억이 넘으면 지수 e로 표현하기
        resultValue.forEach((element, index) => { 
          if(element>100000000 || element < -100000000){
            arrRS[index].value = element.toExponential(); 
          }else{
            // console.log(typeof(element));
            arrRS[index].value = element.toLocaleString();
          }
        });
      }else{
        blackBox.innerHTML = "<p>더하기는 행과 열이 같아야 계산이 가능합니다.</p>";
        blackBox.style.display = "block";
        setTimeout(function(){
          blackBox.style.display = "none"; 
        },2000);
      }
    }else{
      blackBox.innerHTML = "<p>행렬의 확인버튼을 눌러주세요.</p>";
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
    
    let arrAxy = document.querySelectorAll("#arrA").length;
    let arrBxy = document.querySelectorAll("#arrB").length; 

    //배열이 제대로 생성 되었는지 확인
    if(arrAxy == inputARow * inputAColumns && arrBxy == inputBRow * inputBColumns){
      if(inputARow == inputBRow && inputAColumns == inputBColumns){
        let arrRS = document.querySelectorAll("#arrRS");
        let resultValue = miusMatirxFunc();
        let i = 0;
    
        matirxArrR.style.display = 'inline-block';
    
        //1억이 넘으면 지수 e로 표현하기
        resultValue.forEach((element, index) => {  
          if(element > 100000000 || element < -100000000){
            arrRS[index].value = element.toExponential(); 
          }else{
            arrRS[index].value = element.toLocaleString();
          }
        });
      }else{
        blackBox.innerHTML = "<p>빼기는 행과 열이 같아야 계산이 가능합니다.</p>";
        blackBox.style.display = "block";
        setTimeout(function(){
          blackBox.style.display = "none"; 
        },2000);
      }
    }else{
      blackBox.innerHTML = "<p>행렬의 확인버튼을 눌러주세요.</p>";
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
    let arrAxy = document.querySelectorAll("#arrA").length;
    let arrBxy = document.querySelectorAll("#arrB").length; 

    //배열이 제대로 생성 되었는지 확인
    if(arrAxy == inputARow * inputAColumns && arrBxy == inputBRow * inputBColumns){
      if(inputARow == inputBColumns){
        arrayRS.arrDisplayFunc(inputBRow,inputAColumns);
        let arrRS = document.querySelectorAll("#arrRS");
        let resultValue = mulMatirxFunc(inputARow,inputAColumns,inputBRow,inputBColumns);
        
        matirxArrR.style.display = 'inline-block';
        //1억이 넘으면 지수 e로 표현하기
        resultValue.forEach((element, index) => {
          if(element>100000000 || element < -100000000){
            arrRS[index].value = element.toExponential(); 
          }else{
            arrRS[index].value = element.toLocaleString();
          }
          
        });
      }else{
        blackBox.innerHTML = "<p>곱하기는 앞행 = 뒷열이 같아야 계산이 가능합니다.</p>";
        blackBox.style.display = "block";
        setTimeout(function(){
          blackBox.style.display = "none"; 
        },2000);
      }
    }else{
      blackBox.innerHTML = "<p>행렬의 확인버튼을 눌러주세요.</p>";
      blackBox.style.display = "block";
      setTimeout(function(){
        blackBox.style.display = "none"; 
      },2000);
    }

    
  });

}

