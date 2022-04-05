window.onload = () => {
  // window.scrollTo({ top: 100000 });

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
      markers: true,
      start: "bottom center",
      scrub: true,
      // pin: true,
    },
    x: 600, y: 100, duration: 1, opacity: 0,
  });
  gsap.from(".cloudBack1", { //구름1
    scrollTrigger: {
      trigger: ".cloudBack1",
      markers: true,
      start: "center center",
      scrub: true,
      // pin: true,
    },
    x: -600, y: 100, duration: 1, opacity: 0,
  });
  gsap.from(".cloudBack2", { //구름2
    scrollTrigger: {
      trigger: ".cloudBack2",
      markers: true,
      start: "center center",
      scrub: true,
      // pin: true,
    },
    x: 600, y: 100, duration: 1, opacity: 0,
  });
  gsap.from(".moonPlanet", { //구름2
    scrollTrigger: {
      trigger: ".moonPlanet",
      markers: true,
      start: "top center",
      scrub: true,
      // pin: true,
    },
    x: 300, y: 100, duration: 1,
  });
  gsap.from(".airplane", { //비행기
    scrollTrigger: {
      trigger: ".airplane",
      markers: true,
      start: "top center",
      scrub: true,
      // pin: true,
    },
    x: -700, y: 100, duration: 1,opacity: 0,
  });
  gsap.from(".cssPlanet", { //css
    scrollTrigger: {
      trigger: ".cssPlanet",
      markers: true,
      start: "top center",
      scrub: true,
      // pin: true,
    },
    x: 500, y: 100, duration: 1,
  });
  gsap.from(".htmlPlanet", { //html
    scrollTrigger: {
      trigger: ".htmlPlanet",
      markers: true,
      start: "top center",
      scrub: true,
      // pin: true,
    },
    x: -500, y: 100, duration: 1,
  });
  gsap.from(".cssFlagImg", { //cssImg
    scrollTrigger: {
      trigger: ".cssFlagImg",
      markers: true,
      start: "bottom center",
      scrub: true,
      // pin: true,
    },
    x: 0, y: 130, duration: 1, opacity: 1,
  });
  gsap.from(".htmlFlagImg", { //htmlImg
    scrollTrigger: {
      trigger: ".htmlPlanet",
      markers: true,
      start: "top center",
      scrub: true,
      // pin: true,
    },
    x: 0, y: 150, duration: 1, opacity: 1,
  });
  gsap.from(".nodejsPlanet", { //node
    scrollTrigger: {
      trigger: ".nodejsPlanet",
      markers: true,
      start: "top center",
      scrub: true,
      // pin: true,
    },
    x: 500, y: 100, duration: 1,
  });
  gsap.from(".jsPlanet", { //js
    scrollTrigger: {
      trigger: ".jsPlanet",
      markers: true,
      start: "top center",
      scrub: true,
      // pin: true,
    },
    x: -500, y: 100, duration: 1,
  });
  gsap.from(".nodejsFlagImg", { //nodeImg
    scrollTrigger: {
      trigger: ".nodejsFlagImg",
      markers: true,
      start: "bottom center",
      scrub: true,
      // pin: true,
    },
    x: 0, y: 150, duration: 1, opacity: 1,
  });
  gsap.from(".jsFlagImg", { //jsImg
    scrollTrigger: {
      trigger: ".jsFlagImg",
      markers: true,
      start: "top center",
      scrub: true,
      // pin: true,
    },
    x: 0, y: 150, duration: 1, opacity: 1,
  });

  


}
$(window).scroll(function () { var scrollValue = $(document).scrollTop(); console.log(scrollValue); });