window.onload = () => {
  let audio = document.querySelector("#audio");
  // window.scrollTo({ top: 31161 });
  let displayAH = () => {
    setTimeout(()=>{
      $(".img2").fadeToggle('slow');
      console.log("a");
      displayAH();
    },3500);
  }
  displayAH();

  $(".audioBtn").on("click",()=>{
    if(audio.paused){
      $(".audioBtn >i").removeClass('xi-play-circle');
      $(".audioBtn >i").addClass('xi-pause-circle');
      audio.play();
    }else{
      $(".audioBtn >i").removeClass('xi-pause-circle');
      $(".audioBtn >i").addClass('xi-play-circle');
      audio.pause(); 
    }
  });

  $(".navBtn").on("click",()=>{
    // console.log("a");
    $("nav").fadeToggle("fast");
  });

  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".introGuidance", { //드래그
    scrollTrigger: {
      trigger: ".introGuidance",
      // markers: true,
      start: "top bottom",
      scrub: true,
    },
    x: 0, duration: 1, opacity: 0,
  });
  gsap.from(".bigInfoBox", { //자기소개
    scrollTrigger: {
      trigger: ".bigInfoBox",
      // markers: true,
      start: "center center",
      scrub: true,
      pin: true,
    },
    x: 0, duration: 1, opacity: 0,
  });
  gsap.from(".birdBox", { //새
    scrollTrigger: {
      trigger: ".birdBox",
      // markers: true,
      start: "bottom center",
      scrub: true,
      // pin: true,
    },
    x: 600, y: 100, duration: 1, opacity: 0,
  });
  gsap.from(".cloudBack1", { //구름1
    scrollTrigger: {
      trigger: ".cloudBack1",
      // markers: true,
      start: "center center",
      scrub: true,
      // pin: true,
    },
    x: -600, y: 100, duration: 1, opacity: 0,
  });
  gsap.from(".cloudBack2", { //구름2
    scrollTrigger: {
      trigger: ".cloudBack2",
      // markers: true,
      start: "center center",
      scrub: true,
      // pin: true,
    },
    x: 600, y: 100, duration: 1, opacity: 0,
  });
  gsap.from(".moonPlanet", { //달
    scrollTrigger: {
      trigger: ".moonPlanet",
      // markers: true,
      start: "top center",
      scrub: true,
      // pin: true,
    },
    x: 500, y: 0, duration: 1,
  });
  gsap.from(".airplane", { //비행기
    scrollTrigger: {
      trigger: ".airplane",
      // markers: true,
      start: "top center",
      scrub: true,
      // pin: true,
    },
    x: -700, y: 100, duration: 1,opacity: 0,
  });
  gsap.from(".cssPlanet", { //css
    scrollTrigger: {
      trigger: ".cssPlanet",
      // markers: true,
      start: "top center",
      scrub: true,
      // pin: true,
    },
    x: 500, y: 0, duration: 1,
  });
  gsap.from(".htmlPlanet", { //html
    scrollTrigger: {
      trigger: ".htmlPlanet",
      // markers: true,
      start: "top center",
      scrub: true,
      // pin: true,
    },
    x: -400, y: 100, duration: 1,
  });
  gsap.from(".cssFlagImg", { //cssImg
    scrollTrigger: {
      trigger: ".cssFlagImg",
      // markers: true,
      start: "bottom center",
      scrub: true,
      // pin: true,
    },
    x: 0, y: 130, duration: 1, opacity: 1,
  });
  gsap.from(".htmlFlagImg", { //htmlImg
    scrollTrigger: {
      trigger: ".htmlPlanet",
      // markers: true,
      start: "top center",
      scrub: true,
      // pin: true,
    },
    x: 0, y: 150, duration: 1, opacity: 1,
  });
  gsap.from(".nodejsPlanet", { //node
    scrollTrigger: {
      trigger: ".nodejsPlanet",
      // markers: true,
      start: "bottom center",
      scrub: true,
      // pin: true,
    },
    x: 300, y: 0, duration: 1,
  });
  gsap.from(".jsPlanet", { //js
    scrollTrigger: {
      trigger: ".jsPlanet",
      // markers: true,
      start: "top center",
      scrub: true,
      // pin: true,
    },
    x: -400, y: 100, duration: 1,
  });
  gsap.from(".nodejsFlagImg", { //nodeImg
    scrollTrigger: {
      trigger: ".nodejsFlagImg",
      // markers: true,
      start: "bottom center",
      scrub: true,
      // pin: true,
    },
    x: 0, y: 150, duration: 1, opacity: 1,
  });
  gsap.from(".jsFlagImg", { //jsImg
    scrollTrigger: {
      trigger: ".jsFlagImg",
      // markers: true,
      start: "top center",
      scrub: true,
      // pin: true,
    },
    x: 0, y: 150, duration: 1, opacity: 1,
  });

  gsap.from(".cPlanet", { //js
    scrollTrigger: {
      trigger: ".cPlanet",
      // markers: true,
      start: "top center",
      scrub: true,
      // pin: true,
    },
    x: -400, y: 100, duration: 1,
  });
  gsap.from(".cFlagImg", { //nodeImg
    scrollTrigger: {
      trigger: ".cFlagImg",
      // markers: true,
      start: "bottom center",
      scrub: true,
      // pin: true,
    },
    x: 0, y: 150, duration: 1, opacity: 1,
  });
  

  gsap.from(".techText", { //저의 테크스택은
    scrollTrigger: {
      trigger: ".techText",
      // markers: true,
      start: "center center",
      scrub: true,
      pin: true,
    },
    x: 0, duration: 1, opacity: 0,
  });
  gsap.from(".sunBox", { //태양
    scrollTrigger: {
      trigger: ".sunBox",
      // markers: true,
      start: "center center",
      scrub: true,
    },
    x:0, y: 600, duration: 1, opacity: 0,
  });
  gsap.from(".icePageBox", { //아이스
    scrollTrigger: {
      trigger: ".icePageBox",
      // markers: true,
      start: "bottom center",
      scrub: true,
    },
    x:200, y: 0, duration: 1,
  });
  gsap.from(".iceWave", { //아이스
    scrollTrigger: {
      trigger: ".iceWave",
      // markers: true,
      start: "top center",
      scrub: true,
    },
    x:0, y: 0, duration: 3, opacity: 1,
  });
  gsap.from(".gamePlanet", { //아이스
    scrollTrigger: {
      trigger: ".gamePlanet",
      // markers: true,
      start: "bottom center",
      scrub: true,
    },
    x:-300, y: 0, duration: 1,
  });
  // gsap.from(".gameTextBox", { //아이스
  //   scrollTrigger: {
  //     trigger: ".gameTextBox",
  //     // markers: true,
  //     start: "bottom center",
  //     scrub: true,
  //   },
  //   x:150, y: 0, duration: 1,
  // });
  gsap.from(".javaPlanet", { //java
    scrollTrigger: {
      trigger: ".javaPlanet",
      // markers: true,
      start: "top center",
      scrub: true,
      // pin: true,
    },
    x: -400, y: 100, duration: 1,
  });
  gsap.from(".javaFlagImg", { //jsImg
    scrollTrigger: {
      trigger: ".javaFlagImg",
      // markers: true,
      start: "top center",
      scrub: true,
      // pin: true,
    },
    x: 0, y: 150, duration: 1, opacity: 1,
  });
  gsap.from(".mysqlPlanet", { //java
    scrollTrigger: {
      trigger: ".mysqlPlanet",
      // markers: true,
      start: "top center",
      scrub: true,
      // pin: true,
    },
    x: 500, y: 100, duration: 1,
  });
  gsap.from(".mysqlFlagImg", { //jsImg
    scrollTrigger: {
      trigger: ".mysqlFlagImg",
      // markers: true,
      start: "top center",
      scrub: true,
      // pin: true,
    },
    x: 0, y: 150, duration: 1, opacity: 1,
  });
  gsap.from(".moviePlanet", { //영화
    scrollTrigger: {
      trigger: ".moviePlanet",
      // markers: true,
      start: "center center",
      scrub: true,
      // pin: true,
    },
    x: 500, y: 100, duration: 1,
  });
  gsap.from(".alienBox", { //java
    scrollTrigger: {
      trigger: ".alienBox",
      // markers: true,
      start: "top center",
      scrub: true,
      // pin: true,
    },
    x: -200, y: 100, duration: 1,
  });
  gsap.from(".projectText", { //저의 테트스택은
    scrollTrigger: {
      trigger: ".projectText",
      // markers: true,
      start: "center center",
      scrub: true,
      pin: true,
    },
    x: 0, duration: 1, opacity: 0,
  });
  gsap.from(".endPlanet", { //java
    scrollTrigger: {
      trigger: ".endPlanet",
      // markers: true,
      start: "center center",
      scrub: true,
    },
    x: 0, y: 0, duration: 1, opacity: 1,
  });
  gsap.from(".wBox", { //고래
    scrollTrigger: {
      trigger: ".wBox",
      // markers: true,
      start: "bottom bottom",
      scrub: true,
    },
    x: 500, y: -1000, duration: 1, opacity: 0, rotation: -20,

  });

}

$(window).scroll(function () {
  if($(document).scrollTop() >= 0 && $(document).scrollTop() <= 637){
    $(".meBox").fadeIn();
    $(".userBox").stop();
    $(".userBox").animate({bottom: '-35%'},1000, 'swing');
  }else if($(document).scrollTop() >= 637 && $(document).scrollTop() <= 1000){
    $(".meBox").fadeOut();
    $(".userBox").stop();
    $(".userBox").animate({bottom: '35%'},1000, 'swing');
  }
  var scrollValue = $(document).scrollTop(); 
  console.log(scrollValue); 
});