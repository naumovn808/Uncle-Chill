import { gsap } from 'gsap';

window.addEventListener('DOMContentLoaded', () => {
  gsap.set('.header__logo', {
    opacity: 0,
    scale: 2,
    top: '50vh',
    left: '50vw',
    xPercent: -50,
    yPercent: -50,
  });

  gsap.set('.sticker', { rotation: 0, scale: 1 });
  gsap.set('.main-head__decor', { opacity: 0, x: '-100%' });
  gsap.set('.main-head__title', { opacity: 0, x: '-100%' });
  gsap.set('.main-head__desc', { opacity: 0, x: '-100%' });
  gsap.set('.main-head__btn', { opacity: 0, x: '-100%' });

  window.addEventListener('load', () => {
    const timeline = gsap.timeline();

    const decor1Img = document.querySelector('.main-head__decor1 img');
    const decor2Img = document.querySelector('.main-head__decor2 img');

    timeline
      .to('.header__logo', {
        opacity: 1,
        duration: 2,
        delay: 0.5
      })
      .to('.header__logo', {
        scale: 1,
        top: '6vh',
        left: '4vw',
        xPercent: 0,
        yPercent: 0,
        duration: 1,
        ease: 'power2.out'
      })
      .fromTo('.bg', { opacity: 0 }, { opacity: 1, duration: 1, delay: 1 })
      .fromTo('.nav', { opacity: 0 }, { opacity: 1, duration: 1.5, delay: 0.5 })
      .fromTo('.main-head', { opacity: 0 }, { opacity: 1, duration: 1.5 })
      .to('.main-head__decor', {
        opacity: 1,
        x: '-40%',
        y: '-105%',
        duration: 1,
        ease: 'power2.out'
      })
      .fromTo(decor1Img, {
        top: '5%',
        left: '5%',
        rotation: 5
      }, {
        rotation: -70,
        top: '5%',
        left: '-30%',
        duration: 1,
        ease: 'power2.out'
      })
      .fromTo(decor2Img, {
        top: '-5%',
        left: '5%',
        rotation: 15
      }, {
        rotation: 40,
        top: '-10%',
        left: '-5%',
        duration: 1,
        ease: 'power2.out'
      }, '<')
      .to('.main-head__title', {
        opacity: 1,
        x: '0%',
        duration: 1,
        ease: 'power2.out',
        delay: 0.5
      })
      .to('.main-head__desc', {
        opacity: 1,
        x: '0%',
        duration: 1,
        ease: 'power2.out'
      })
      .to('.main-head__btn', {
        opacity: 1,
        x: '0%',
        duration: 1,
        ease: 'power2.out'
      });

    const sticker = document.querySelector('.sticker');
    const stickerTimeline = gsap.timeline({ repeat: -1, yoyo: true, ease: 'power2.inOut' });

    stickerTimeline
      .to(sticker, {
        rotation: -10,
        duration: 0.8
      })
      .to(sticker, {
        rotation: 10,
        duration: 0.8
      })
      .to(sticker, {
        rotation: 0,
        duration: 0.8
      })
      .to(sticker, {
        scale: 0.95,
        duration: 0.8
      })
      .to(sticker, {
        scale: 1,
        duration: 0.8
      });
  });

  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      gsap.to('.header', { opacity: 0, duration: 0.5, ease: 'power2.out' });
      gsap.to('.header-bg', { height: '0', duration: 0.5, ease: 'power2.out' });
    } else {
      gsap.to('.header', { opacity: 1, duration: 0.5, ease: 'power2.out' });
      gsap.to('.header-bg', { height: scrollTop > 0 ? '30vh' : '0', duration: 0.5, ease: 'power2.out' });
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
});
