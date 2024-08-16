import { gsap } from 'gsap';
import animateStickers from './animateSticers';
import { animateTextLines } from './animateTextLines';
import { animatePrice } from './animatePrice';

window.addEventListener('DOMContentLoaded', () => {
  setupInitialStyles();
  addLoadEventListener();
});


function addLoadEventListener() {
  window.addEventListener('load', () => {
    animateHeaderLogo();
    animateBanner();
    setupMenuAnimations();
    animateStickers(['.sticker', '.price-stick', 'price-stick-one', 'price-stick-two']);
    addScrollEventListener();
    animatePrice();
    animateTextLines('.price-line-one');
    animateTextLines('.price-line-two');
  });
}

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
    .fromTo('.bg', { opacity: 0 }, { opacity: 1, duration: 2 })
    .fromTo('.nav', { opacity: 0 }, { opacity: 1, duration: 3 })
    .fromTo('.main-head', { opacity: 0 }, { opacity: 1, duration: 1 })
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
    .fromTo('.main-head__image-bg', { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power2.out' })
    .fromTo('.main-head__image-over', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, ease: 'power2.out' })
    .fromTo('.sticker', { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power2.inOut' })
    .to('.art', { rotateX: -20, rotate: -20, duration: 1, ease: 'power2.out' })

    .to('.main-head__title', {
      opacity: 1,
      x: '0%',
      ease: 'power2.out',
      duration: 0.5,
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


function addScrollEventListener() {
  let lastScrollTop = 0;
  let advantagesAnimatedIn = false;

  window.addEventListener('scroll', () => {
    animatePrice();

    if (!document.querySelector('.nav__btn').classList.contains('active')) {

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const headerOpacity = scrollTop > lastScrollTop ? 0 : 1;
      const headerBgHeight = scrollTop > lastScrollTop ? '0' : (scrollTop > 0 ? '10vw' : '0');

      gsap.to('.header', { opacity: headerOpacity, duration: 0.5, ease: 'power2.out' });
      gsap.to('.header-bg', { height: headerBgHeight, duration: 0.5, ease: 'power2.out' });

      const advantagesOffsetTop = document.querySelector('.advantages').offsetTop * 0.2;

      if (scrollTop > advantagesOffsetTop && !advantagesAnimatedIn) {
        gsap.to('.advantages', { y: '-25vh', duration: 1, ease: 'power2.out' });
        gsap.fromTo('.advantages__title',
          { opacity: 0, y: '100%' },
          { opacity: 1, y: '0%', ease: 'power2.out', duration: 2 }
        );
        gsap.fromTo('.advantages__item',
          { opacity: 0, x: '50%' },
          { opacity: 1, x: '0%', ease: 'power2.out', duration: 2, stagger: 0.3 }
        );
        advantagesAnimatedIn = true;
      }

      if (scrollTop < advantagesOffsetTop) {
        gsap.to('.advantages', { y: '0' });
      }

      if (scrollTop < advantagesOffsetTop * 0.5 && advantagesAnimatedIn) {
        advantagesAnimatedIn = false;
      }

      lastScrollTop = scrollTop;
    }
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

}

const menu = document.querySelector('.menu');
const navButton = document.querySelector('.nav__btn');

if (menu && navButton) {
  navButton.addEventListener('click', (e) => {
    e.preventDefault();
    const isOpen = menu.classList.toggle('open');
    navButton.classList.toggle('active');
    document.querySelector('body').classList.toggle('open');
    document.querySelector('.header').classList.toggle('open');
    document.body.classList.toggle('menu-open');
    document.querySelector('.header-bg').classList.toggle('open');

    document.querySelector('.menu__inner').classList.toggle('open');

    if (isOpen) {
      gsap.to('.header-bg', { opacity: 1, delay: 1, height: '25vh' });
      menu.querySelector('a').focus();
    } else {
      gsap.to('.header-bg', { opacity: 1, delay: 1, height: '0' });
    }
  });
}



function animateAboutImages() {
  const section = document.querySelector('.about');
  const images = document.querySelectorAll('.about-img-1, .about-img-2, .about-img-3, .about-img-4');

  function handleScroll() {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const windowHeight = window.innerHeight;

    let currentValue = document.documentElement.scrollTop + windowHeight - sectionTop;

    let progress = currentValue / sectionHeight;
    progress = Math.max(0, Math.min(1, progress));


    if (document.documentElement.scrollTop + window.innerHeight > sectionTop) {
      gsap.to('.about-head', { opacity: 1, duration: 2, y: '0' });

      gsap.to('.about__decor', {
        x: (1 - progress) * 200 + '%',
        rotate: 45 * (1 - progress),
        duration: 0,
        overwrite: 'auto'
      });

      images.forEach((image, index) => {
        let startRotation = index < 2 ? -90 : 90;
        let startTranslateX = index % 2 === 0 ? -50 : -100;

        gsap.to(image, {
          rotation: startRotation + progress * -startRotation,
          x: startTranslateX + progress * -startTranslateX + '%',
          duration: 0,
          overwrite: 'auto'
        });
      });
    } else {

      gsap.to('.about-head', { opacity: 0, y: '50%' })
    }

  }

  window.addEventListener('scroll', handleScroll);
}

animateAboutImages();

function animateAboutLine() {
  const linePrice = document.querySelector('.about__line');
  const spans = linePrice.querySelectorAll('span');

  spans.forEach(span => {
    linePrice.appendChild(span.cloneNode(true));
  });

  const duration = 15;

  gsap.to(linePrice, {
    xPercent: -50,
    duration: duration,
    ease: 'linear',
    repeat: -1
  });
}

animateAboutLine();
