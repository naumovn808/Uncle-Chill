import { gsap } from 'gsap';

window.addEventListener('DOMContentLoaded', () => {
  setupInitialStyles();
  animateBanner()
  addLoadEventListener();
  addScrollEventListener();
  setupMenuAnimations();
});

function setupInitialStyles() {
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
  gsap.set('.main-head__decor1 img', { rotation: 5 });
  gsap.set('.main-head__decor2 img', { rotation: -5 });

}

function addLoadEventListener() {
  window.addEventListener('load', () => {
    animateHeaderLogo();
    animateSticker();
  });
}

function animateHeaderLogo() {
  const timeline = gsap.timeline();
  timeline
    .to('.header__logo', {
      opacity: 1,
      duration: 2,
      delay: 0.5
    })
    .to('.header__logo', {
      scale: 1,
      top: '3vw',
      left: '5vw',
      xPercent: 0,
      yPercent: 0,
      duration: 1,
      ease: 'power2.out',
      clearProps: 'transform',
    })
}

  function animateBanner() {
    const timeline = gsap.timeline();
    timeline
    .fromTo('.bg', { opacity: 0 }, { opacity: 1, duration: 1, delay: 1 })
    .fromTo('.nav', { opacity: 0 }, { opacity: 1, duration: 1.5, delay: 0.5 })
    .fromTo('.main-head', { opacity: 0 }, { opacity: 1, duration: 1.5 })
    .to('.main-head__decor1 img', {
      rotation: -55,
    })
    .to('.main-head__decor2 img', {
      rotation: 35,
    }, '<')
    .to('.main-head__decor', {
      opacity: 1,
      x: '-40%',
      y: '-75%',
      duration: 0.5,
      ease: 'power2.out'
    })
    .fromTo('.main-head__images', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 2, ease: 'power2.out' })
    .to('.main-head__title', {
      opacity: 1,
      x: '0%',
      ease: 'power2.out',
      duration: 0.5,
      delay: 0.5
    })
    .to('.main-head__desc', {
      opacity: 1,
      x: '0%',
      duration: 0.5,
      ease: 'power2.out'
    })
    .to('.main-head__btn', {
      opacity: 1,
      x: '0%',
      duration: 0.5,
      ease: 'power2.out'
    })
}

function animateSticker() {
  const sticker = document.querySelector('.sticker');

  if (sticker) {
    gsap.timeline({ repeat: -1, yoyo: true, ease: 'power2.inOut' })
      .to(sticker, { rotation: -10, duration: 0.8 })
      .to(sticker, { rotation: 10, duration: 0.8 })
      .to(sticker, { rotation: 0, duration: 0.8 })
      .to(sticker, { scale: 0.95, duration: 0.8 })
      .to(sticker, { scale: 1, duration: 0.8 });
  }
}

function addScrollEventListener() {
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    if (document.body.classList.contains('menu-open')) {
      return;
    }

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const headerOpacity = scrollTop > lastScrollTop ? 0 : 1;
    const headerBgHeight = scrollTop > lastScrollTop ? '0' : (scrollTop > 0 ? '35vh' : '0');

    gsap.to('.header', { opacity: headerOpacity, duration: 0.5, ease: 'power2.out' });
    gsap.to('.header-bg', { height: headerBgHeight, duration: 0.5, ease: 'power2.out' });

    lastScrollTop = Math.max(scrollTop, 0);
  });
}

function setupMenuAnimations() {
  const menuLinks = document.querySelectorAll('.menu__link');

  menuLinks.forEach(link => {
    const line = link.querySelector('.menu__link-line');
    if (!line) return;

    const textAnimation = gsap.to(line.querySelectorAll('span'), {
      x: '-100%',
      duration: 10,
      repeat: -1,
      ease: 'linear',
      paused: true
    });

    link.addEventListener('mouseover', () => textAnimation.play());
    link.addEventListener('focus', () => textAnimation.play());
    link.addEventListener('mouseleave', () => textAnimation.pause());
    link.addEventListener('blur', () => textAnimation.pause());
  });

  const menu = document.querySelector('.menu');
  const navButton = document.querySelector('.nav__btn');

  if (menu && navButton) {
    navButton.addEventListener('click', (e) => {
      e.preventDefault();
      const isOpen = menu.classList.toggle('open');
      navButton.classList.toggle('active');
      document.querySelector('.menu-bg').classList.toggle('open');
      document.body.classList.toggle('menu-open');

      if (isOpen) {

        const firstFocusableElement = menu.querySelector('a, button, input, [tabindex="0"]');
        if (firstFocusableElement) {
          firstFocusableElement.focus();
        }

        menu.addEventListener('keydown', trapFocus);
      } else {

        navButton.focus();

        menu.removeEventListener('keydown', trapFocus);
      }
    });
  }

  function trapFocus(e) {
    const focusableElements = menu.querySelectorAll('a, button, input, [tabindex="0"]');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.key === 'Tab') {
      if (e.shiftKey) {

        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }

    if (e.key === 'Escape') {
      navButton.click();
    }
  }
}
