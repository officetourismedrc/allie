document.addEventListener('DOMContentLoaded',()=>{


     gsap.registerPlugin(ScrollTrigger);

    const menuOpen = document.querySelector('.menu-open');
    const menuClose = document.querySelector('.menu-close-close-xmax');
    const menuContainer = document.querySelector('.menu');

    if(menuOpen !== null){

    menuOpen.addEventListener('click',()=>{

        menuContainer.classList.add('open-menu');
    });
}

 if(menuClose !== null){
     menuClose.addEventListener('click',()=>{

        menuContainer.classList.remove('open-menu');
    });
  }


// Select the navbar element
const navbar = document.querySelector('header');
// let hasScrolled = false;

// window.addEventListener('scroll', () => {
//   const y = window.scrollY;

//   // 1) User scrolls down for the first time
//   if (!hasScrolled && y > 0) {
//     hasScrolled = true;

//     // add the white bg
//     navbar.classList.add('scrolled');

//     // trigger slide
//     navbar.classList.add('slide');
//     navbar.addEventListener('animationend', () => {
//       navbar.classList.remove('slide');
//     }, { once: true });
//   }

//   // 2) User scrolls back all the way up
//   if (hasScrolled && y === 0) {
//     hasScrolled = false;
//     navbar.classList.remove('scrolled');
//   }
// });



// let ticking = false;

// function onScroll() {
//   const y = window.scrollY;

//   // SCROLL DOWN: add white bg + slide in
//   if (y > 50 && !navbar.classList.contains('scrolled')) {
//     navbar.classList.add('slide-in');
//     navbar.addEventListener('animationend', function inHandler() {
//       // when slide-in ends, keep white bg, drop slide-in
//       navbar.classList.add('scrolled');
//       navbar.classList.remove('slide-in');
//       navbar.removeEventListener('animationend', inHandler);
//     }, { once: true });

//   // SCROLL UP: slide out + remove white bg at end
//   } else if (y <= 50 && navbar.classList.contains('scrolled')) {
//     navbar.classList.add('slide-out');
//     navbar.addEventListener('animationend', function outHandler() {
//       navbar.classList.remove('scrolled', 'slide-out');
//       navbar.removeEventListener('animationend', outHandler);
//     }, { once: true });
//   }

//   ticking = false;
// }

// // Throttle scroll events with requestAnimationFrame
// window.addEventListener('scroll', () => {
//   if (!ticking) {
//     window.requestAnimationFrame(onScroll);
//     ticking = true;
//   }
// });






const sentinel = document.getElementById('hero-sentinel');

const observer = new IntersectionObserver(([entry]) => {
  // SENTINEL OUT OF VIEW → user scrolled down
  if (!entry.isIntersecting && !navbar.classList.contains('scrolled')) {
    // 1) add white background immediately
    navbar.classList.add('scrolled');
    // 2) trigger slide-in animation
    navbar.classList.add('slide-in');
    navbar.addEventListener('animationend', function inEnd() {
      // remove only the animation class after it's done
      navbar.classList.remove('slide-in');
      navbar.removeEventListener('animationend', inEnd);
    }, { once: true });

  // SENTINEL BACK INTO VIEW → user scrolled up
  } else if (entry.isIntersecting && navbar.classList.contains('scrolled')) {
    // 1) trigger slide-out
    navbar.classList.add('slide-out');
    navbar.addEventListener('animationend', function outEnd() {
      // 2) once done, remove both white bg and animation class
      navbar.classList.remove('scrolled', 'slide-out');
      navbar.removeEventListener('animationend', outEnd);
    }, { once: true });
  }
}, { threshold: 0 });

observer.observe(sentinel);

// end of file  
});
