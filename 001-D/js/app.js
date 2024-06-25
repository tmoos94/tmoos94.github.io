gsap.registerPlugin(ScrollTrigger)

window.addEventListener('DOMContentLoaded', function (event) {

  // 0번 section은 ScrollTrigger보다는 그냥 animation사용하기
  // 


  // 0
  const scene0 = gsap.timeline({
    duration: 1
  })


  ScrollTrigger.create({
    animation: scene0,
    trigger: '#s0 .rel ',//방아쇠를 당기는 시점
    start: 'top 30%',
    end: 'top 50%',
    scrub: 3
  })
  scene0.to(' #s0 .title_1 span', {
    delay: 1,
    stagger: .3,
    opacity: 1,
    /* 메인 글자 돌아갈때 바뀌는 글씨색 */
    rotationY: 360,

  })
  scene0.to('#s0 .rel .txt', {
    opacity: 1,
    y: 50,

  })
  scene0.to('#s0 .bg_0_rabbit', {
    // delay:.3,
    opacity: 1,
    x: 50,
    
    onComplete: function () {
      document.querySelector('#s0 .circle').classList.add('On')
      document.querySelector('.s0icon').classList.add('On')
    }
  })





  // 1
  const scene1 = gsap.timeline({
    duration: .3
  })

  ScrollTrigger.create({
    animation: scene1,
    trigger: '#s1',//방아쇠를 당기는 시점
    start: 'top 30%',
    end: 'top 50%',
    scrub: 3
  })

  scene1.to('.s1_ani', {
    // delay:.3,
    opacity: 1,
    stagger: .3,
    x: 10,

    onComplete: function () {
      document.querySelector('#s1 .bg_1').classList.add('On')
    }
  })
  scene1.to('#s1 .s1_menu>*', {
    // delay:.3,
    opacity: 1,
    stagger: .3,


  })


  // 0
  const scene2 = gsap.timeline({
    duration: 1
  })


  ScrollTrigger.create({
    animation: scene2,
    trigger: '#s2 ',//방아쇠를 당기는 시점
    start: 'top 30%',
    end: 'top 50%',
    scrub: 3
  })
  // scene2.to('#s2   .s1_menu>*', {
  //   // delay:.3,
  //   opacity: 1,
  //   stagger: .3,


  // })
});