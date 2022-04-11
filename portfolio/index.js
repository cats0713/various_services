window.onload = () => {
  // window.scrollTo({ top: 31161 });
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
  gsap.from(".hi_ah", { //자기소개
    scrollTrigger: {
      trigger: ".hi_ah",
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
  gsap.from(".moonPlanet", { //구름2
    scrollTrigger: {
      trigger: ".moonPlanet",
      // markers: true,
      start: "top center",
      scrub: true,
      // pin: true,
    },
    x: 300, y: 100, duration: 1,
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
    x: 400, y: 100, duration: 1,
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
      start: "top center",
      scrub: true,
      // pin: true,
    },
    x: 400, y: 100, duration: 1,
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
  gsap.from(".techText", { //저의 테트스택은
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
    x:0, y: 600, duration: 1,
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
  gsap.from(".gameTextBox", { //아이스
    scrollTrigger: {
      trigger: ".gameTextBox",
      // markers: true,
      start: "bottom center",
      scrub: true,
    },
    x:150, y: 0, duration: 1,
  });
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
  gsap.from(".moviePlanet", { //java
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




}
$(window).scroll(function () { 
  if($(document).scrollTop() > 20093 && $(document).scrollTop() < 20358){
    $(".iceblur").fadeIn( 'fast' );
  }else{
    $(".iceblur").fadeOut( 'fast' ); 
  }
  if($(document).scrollTop() > 18718 && $(document).scrollTop() < 19024){
    $(".gameblur").fadeIn( 'fast' );
  }else{
    $(".gameblur").fadeOut( 'fast' ); 
  }
  if($(document).scrollTop() > 17311 && $(document).scrollTop() < 17576){
    $(".movieblur").fadeIn( 'fast' );
  }else{
    $(".movieblur").fadeOut( 'fast' ); 
  }
  if($(document).scrollTop() > 16004 && $(document).scrollTop() < 16389){
    $(".calblur").fadeIn( 'fast' );
  }else{
    $(".calblur").fadeOut( 'fast' ); 
  }
  var scrollValue = $(document).scrollTop(); 
  console.log(scrollValue); 
});