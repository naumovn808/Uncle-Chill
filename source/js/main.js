// import { gsap } from 'gsap';

// window.addEventListener('DOMContentLoaded', () => {


//   gsap.set('.header__logo', {
//     opacity: 0,
//     scale: 2,
//     top: '50vh',
//     left: '50vw',
//     xPercent: -50,
//     yPercent: -50,
//   });

//   window.addEventListener('load', () => {
//     const timeline = gsap.timeline();


//     timeline
//       .set('.header__logo', { opacity: 0 })
//       .to('.header__logo', {
//         opacity: 1,
//         duration: 2,
//         delay: 0.5,
//         onStart: () => {
//           gsap.set('.header__logo', { opacity: 1 });
//         }
//       })
//       .to('.header__logo', {
//         scale: 1,
//         top: '11vh',
//         left: '4vw',
//         xPercent: 0,
//         yPercent: 0,
//         duration: 1,
//         ease: 'power2.out'
//       })

//       .fromTo('.bg', { opacity: 0 }, { opacity: 1, duration: 1 })
//       .fromTo('.nav', { opacity: 0 }, { opacity: 1, duration: 1, delay: 0.5 })
//       .to('.loading-overlay', { opacity: 0, duration: 1, delay: 1 })
//       .set('.loading-overlay', { display: 'none' });
//   });
// });
