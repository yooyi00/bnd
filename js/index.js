$(function () {
  /*con01*/
  let list = gsap.utils.toArray(".con01 .list li");
  let listA = gsap.utils.toArray(".con01 .list li.a");
  let listB = gsap.utils.toArray(".con01 .list li.b");
  let listC = gsap.utils.toArray(".con01 .list li.c");
  gsap.to(list, {
    scrollTrigger: {
      trigger: ".con01",
      pin: true,
      scrub: 2,
      start: "center center",
      end: "100% 0%",
      //markers: true,
    },
    xPercent: -500,
    ease: "none",
  });

  gsap.to(listA, {
    rotation: 20,
    scrollTrigger: {
      trigger: ".con01",
      scrub: 2,
      end: "100%",
    },
  });
  gsap.to(listB, {
    rotation: -20,
    scrollTrigger: {
      trigger: ".con01",
      scrub: 2,
      end: "100%",
    },
  });
  gsap.to(listC, {
    rotation: 20,
    scrollTrigger: {
      trigger: ".con01",
      scrub: 2,
      end: "100%",
    },
  });

  /*con02*/
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".con02",
        start: "0% 80%",
        end: "100% 100%",
        scrub: 2,
        //markers: true,
      },
    })
    .fromTo(
      ".con02 video",
      { "clip-path": "inset(60% 60% 60% 60% round 30%)" },
      {
        "clip-path": "inset(0% 0% 0% 0% round 0%)",
        ease: "none",
        duration: 10,
      }
    );

  /*con03*/
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".con03",
        start: "30% bottom",
        end: "top 40%",
        scrub: 2,
        //markers: true,
      },
    })
    .fromTo(".my", { x: "-100%" }, { x: "0%", ease: "none", duration: 5 }, 0)
    .fromTo(".type", { x: "100%" }, { x: "0%", ease: "none", duration: 5 }, 0);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".workList",
        start: "0% 100%",
        end: "0% 100%",
        scrub: 2,
        //markers: true,
      },
    })
    .to(
      "body",
      { backgroundColor: "#000", color: "#fff", ease: "none", duration: 5 },
      0
    )
    .to(
      ".con03 .title3",
      {
        position: "fixed",
        left: 0,
        top: 0,
        width: "100%",
        ease: "none",
        duration: 5,
      },
      0
    );

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".con03",
        start: "100% 100%",
        end: "100% 100%",
        scrub: 2,
        //markers: true,
      },
    })
    .fromTo(".my", { x: "0%" }, { x: "-100%", ease: "none", duration: 5 }, 0)
    .fromTo(".type", { x: "0%" }, { x: "100%", ease: "none", duration: 5 }, 0);

  /*con04*/
  let upBox = document.querySelectorAll(".upBox");
  //   console.log(upBox);
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".con04",
        start: "top top",
        end: "+=500%", //시작부분에서 400%까지 스크롤한 후 종료
        scrub: 2,
        pin: true,
        //markers: true,
      },
    })

    .fromTo(
      upBox,
      { y: "400%", opacity: 0 },
      { y: 0, opacity: 1, duration: 3, ease: "none", stagger: 4 }
    );
});
