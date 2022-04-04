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


}
$(window).scroll(function () { var scrollValue = $(document).scrollTop(); console.log(scrollValue); });