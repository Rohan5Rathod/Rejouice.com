const splitTypes = document.querySelectorAll("[data-animation='text-reveal']");

splitTypes.forEach((element, i) => {
  const text = new SplitType(element, { types: 'words' });
  const words = text.words;

  words.forEach((word) => {
    const wordText = new SplitType(word, { types: 'words' });

    // Set initial state for each word
    gsap.set(wordText.words, { y: '100%' });

    // Animate each word
    gsap.to(wordText.words, {
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 20%',
      },
      y: '0%',
      duration: 1.8,
      stagger: 0.2,
      ease: 'back.out',
    });
  });
});

const line = document.querySelectorAll(".line");

line.forEach((element)=>{
  gsap.set(element, { width: '0%' });
  gsap.to(element,{
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'top 20%',
    },
    width: '100%',
    duration: 1.8,
    ease: 'power2.out',
  });
  });

var swiper = new Swiper('.mySwiper', {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: true,
  },
});

document.addEventListener('DOMContentLoaded', function () {
  let tl = gsap.timeline({ paused: true });
  tl.to('.menu_overlay', {
    // duration:0.75,
    opacity:1,
    clipPath: 'polygon(0 0, 100% 0 ,100% 100%, 0 100%)',
    ease: 'power2.out',
  });

  tl.from(
    '.menu_link, .menu_btn',
    {
      opacity: 0,
      y: 60,
      stagger: 0.05,
      duration: 0.75,
      ease: 'power1.inOut',
    },
    '<'
  );

  tl.from(
    '.socials a',
    {
      opacity: 0,
      x: 60,
      stagger: 0.05,
      duration: 0.75,
      ease: 'power1.inOut',
    },
    '<'
  );

  tl.to(
    '.video_preview',
    {
      duration: 1,
      height: '229.325px',
      transform: 'scale(1)',
      ease: 'power2.Out',
    },
    '<'
  );

  tl.to(
    '.menu_divider',
    {
      duration: 1,
      width: '100%',
      ease: 'power4.out',
    },
    '<'
  );

  function openMenu() {
    document.querySelector('.menu_overlay').style.pointerEvents = 'all';
    tl.play();
  }

  function closeMenu() {
    document.querySelector('.menu_overlay').style.pointerEvents = 'none';
    tl.reverse();
  }

  document.querySelector('.menu_btn_open').addEventListener('click', openMenu);
  document.querySelector('.menu_btn_close').addEventListener('click', closeMenu);
  tl.reverse();
});

document.addEventListener('DOMContentLoaded', function(){

  let tl = gsap.timeline({ paused: true });
  tl.to('.hero_menu', {
    clipPath: 'polygon(0 0, 100% 0 ,100% 100%, 0 100%)',
    ease: 'power2.out',
  });

  function heroOpen(){
    document.querySelector(".hero_video").style.pointerEvents = 'all';
  tl.play();
  }
  function heroClose(){
    document.querySelector(".hero_close").style.pointerEvents = 'all';
  tl.reverse();
  }

    document.querySelector(".hero_video").addEventListener("click", heroOpen);
    document.querySelector(".hero_close").addEventListener("click", heroClose);
});


  gsap.from(".footer",{
    y:-280,
    duration:1,
    scrollTrigger:{
      trigger:".footer_content",
        start: 'top 60%',
        end: 'top 10%',
        scrub:true,
    }
  })

  gsap.from(".logo_animation>svg path",{
    yPercent:"350",
    duration:1,
    stagger:0.05,
    ease: 'back.out',
  })

