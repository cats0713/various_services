/* matrtix_calculator  by ahyeon*/

let matirxArr = document.querySelector(".matirxArr");

function ArrInputBox(arrXY,arrID){
  this.arrXY = arrXY;
  this.arrID = arrID;
  this.arrInput = `<input class="${this.arrID}" type="number"></input>`;
  this.arrDisplayFunc = function(){
    matirxArr.style.display = "block";
    let i = 0;
    while(i < arrXY*arrXY){
      if(i / arrXY == 1){

      }
      matirxArr.innerHTML += this.arrInput;
      i++;
    }
    

  };

}

let arrA = new ArrInputBox(2,'arrA');
arrA.arrDisplayFunc();