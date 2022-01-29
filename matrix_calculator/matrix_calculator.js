/* matrtix_calculator  by ahyeon*/
window.onload = function () {
  let matirxArrA = document.querySelector("#matirxArrA");
  let matirxArrB = document.querySelector("#matirxArrB");
  let matirxArrR = document.querySelector("#matirxArrR");

  let plusBtn = document.querySelector("#plusBtn");
  let minusBtn = document.querySelector("#minusBtn");

  let xBtn = document.querySelector(".xBtn");
  let resultBox = document.querySelector("#resultBox");

  let addBtn = document.querySelector("#addBtn");
  let miusBtn = document.querySelector("#miusBtn");
  let mulBtn = document.querySelector("#mulBtn");

  let arrcont = 3; //closure 로 바꾸기



  //행렬을 생성하는 class
  function ArrInputBox(arrID, matirxArr, arrTapNumber) {
    this.arrID = arrID;
    this.arrDisplayFunc = function (arrXY) {
      let i = 0;
      matirxArr.innerHTML = '';

      while (i < arrXY * arrXY) {
        if ((i + 1) % arrXY == 0) {
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
    this.arrDisplayFunc = function (arrXY) {
      let i = 0;
      matirxArr.innerHTML = '';

      while (i < arrXY * arrXY) {
        if ((i + 1) % arrXY == 0) {
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
  arrA.arrDisplayFunc(arrcont); //화면에 띄우기

  let arrB = new ArrInputBox('arrB', matirxArrB, 100); //새로운 객체 생성
  arrB.arrDisplayFunc(arrcont); //화면에 띄우기

  let arrayRS = new ArrResultBox('arrRS', matirxArrR); //새로운 결과 객체 생성
  arrayRS.arrDisplayFunc(arrcont);


  plusBtn.addEventListener("click", function () {
    if (arrcont == 6) {
    } else {
      arrA.arrDisplayFunc(++arrcont); //행렬 늘리기
      arrB.arrDisplayFunc(arrcont);
      arrayRS.arrDisplayFunc(arrcont);
    }
  });

  minusBtn.addEventListener("click", function () {
    if (arrcont == 1) {
    } else {
      arrA.arrDisplayFunc(--arrcont); //행렬 줄이기
      arrB.arrDisplayFunc(arrcont);
      arrayRS.arrDisplayFunc(arrcont);
    }
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

    arrAV.forEach((element,i) => {
      arrResult[i] = Number(arrAV[i].value) - Number(arrBV[i].value); 
    });

    return arrResult;
  }
  //행렬 곱하기 함수
  let mulMatirxFunc = () => {
    let arrAV = document.querySelectorAll(".arrA");
    let arrBV = document.querySelectorAll(".arrB");
    let arrResult = [];
    let i = 0, j = 0;

    while(i < arrAV.length){
      while(j < arrBV.length){
        let contMulNumber = 0;

        j++;
      }
      i++;
    }

    // arrAV.forEach((element,i) => {
    //   arrResult[i] = Number(arrAV[i].value) * Number(arrBV[i].value); 
    // });

    return arrResult;
  }

  //결과창 팝업
  xBtn.addEventListener('click', function () {
    resultBox.style.display = "none";
  });

  // 하단 더하기 버튼을 누르면
  addBtn.addEventListener("click", function () {
    let arrRS = document.querySelectorAll("#arrRS");
    let resultValue = addMatirxFunc();


    resultBox.style.display = "block";
    resultValue.forEach((element, index) => { 
      arrRS[index].value = element; 
    });
  });

  //하단 뺴기 버튼을 누르면
  miusBtn.addEventListener("click", function () {
    let arrRS = document.querySelectorAll("#arrRS");
    let resultValue = miusMatirxFunc();
    let i = 0;

    resultBox.style.display = "block";

    resultValue.forEach((element, index) => { 
      arrRS[index].value = element; 
    });
  });
  //하단 곱하기 버튼을 누르면
  mulBtn.addEventListener("click",function(){
    let arrRS = document.querySelectorAll("#arrRS");
    let resultValue = mulMatirxFunc();

    resultBox.style.display = "block";

    resultValue.forEach((element, index) => { 
      arrRS[index].value = element; 
    });
  });

}

