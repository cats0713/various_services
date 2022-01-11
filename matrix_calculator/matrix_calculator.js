let inputArrABtn = document.getElementById("inputArrABtn");
let arrAXY = document.getElementById("arrAXY");
let inputArrAX = document.getElementById("inputArrAX");
let inputArrAY = document.getElementById("inputArrAY"); 


inputArrABtn.onclick = function(){
  let arrX = inputArrAX.value;
  let arrY = inputArrAY.value;
  //console.log(arrX , arrY);
  //console.log("in ABtn");

  arrAXY.style.display = 'block';

}