window.onload=()=>{
  let imgarray = ['../IMG/intropost.jpeg'];

  let chageImg = (img) => {
    $("#imgBox").fadeToggle();
    setTimeout(function(){
      chageImg();
    }, 5000);
  }
  chageImg();
  
  $("#nextBtn").on("click",function(){
    location.href = `${window.location.pathname}?page=10`;
  });
}