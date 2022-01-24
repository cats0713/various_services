/* matrtix_calculator  by ahyeon*/
let AAA = document.querySelector(".matirxArr>fieldset");
let BBB = document.querySelector(".matirxArr");
function ArrInputBox(arrX,arrY,arrIdName){
  this.arrX = arrX;
  this.arrY = arrY;
  this.arrIdName = arrIdName;
  this.arrInput = `<input id="${arrIdName}" class="${arrIdName}" type="number"></input>`;
  this.arrDisplayFunc = function(){
    BBB.stlye.display = "block";
    AAA.innerHTML = this.arrInput;

  };

}

let arrA = new ArrInputBox(2,2,'arrA');
arrA.arrDisplayFunc();