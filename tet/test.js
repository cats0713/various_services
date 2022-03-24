// let movieTime = {
//   no1_movie : [1,2,3,4],
//   no2_movie : [1,2,3,4] 
// };



// for (let i in movieTime){
//   console.log(i);
//   console.log(movieTime.no1_movie);
//   movieTime[i].forEach(e => {
//     console.log(e);
//   });
// }

let a = `?page=30&title=no1_movie&time=11:20~13:20&gan=B&adult=0&jonior=3&Disabled=0&old=0`;
let b = [];
let ggg = /\=+\&/g;
b = a.match(ggg);
console.log(b);