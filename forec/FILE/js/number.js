window.onload = () => {
  // 시간띄우는 함수
  const clockContainer = document.querySelector(".head__infor");
  // 시간 들어갈 wapper
  let clocktitle = document.querySelector("#time");
  //찐으로 들어갈 곳

  getTime = () => {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clocktitle.innerHTML = `${hours < 10 ? `0${hours}` : hours} :${
      minutes < 10 ? `0${minutes}` : minutes
    }: ${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  init = () => {
    getTime();
    setInterval(getTime, 1000);
  };
  init();

  //하단 버튼 조작
  $("#homeBtn").on("click", function () {
    location.href = `/forec?page=10`;
  });
  $("#previousBtn").on("click", function () {
    location.href = `/forec?page=10`;
  });
};

$(function () {
  // 번호에 - 붙이기
  let get_hyphen = (target_number) => {
    let target = String(target_number);
    let dot = /\B(?=(\d{4})+(?!\d))/g;
    return target.replace(dot, "-");
  };
  let number = "";
  let user_num = document.querySelector(".point_input_box");

  $(".point_number_btn").on("click", function (e) {
    // 번호를 입력하는 이벤트
    if ( $(".point_input_box").html().length < 9 && e.target.innerHTML != "초기화" && e.target.innerHTML != "입력하기") {
      number += e.target.innerHTML;
      $(".point_input_box").html(get_hyphen(number));

    } else if ( $(".point_input_box").html().length < 9 && e.target.innerHTML == "초기화" && e.target.innerHTML != "입력하기") {
      user_num.innerHTML = "";
    }
  });

  //초기화 버튼 기능
  $("#reset_btn").on("click", function (e) {
    number = "";
    user_num.innerHTML = "";
  });
});
