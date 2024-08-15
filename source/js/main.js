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


const priceSection = document.querySelector('.price');
const price1 = document.querySelector('.price-1');
const price2 = document.querySelector('.price-2');
const priceImageOne = document.querySelector('.price-img-one');
const priceImageTwo = document.querySelector('.price-img-two');

gsap.set('.price-inner', { opacity: 0 });
gsap.set(priceImageOne, { rotate: -80, duration: 0 });
gsap.set(priceImageTwo, { rotate: -80, opacity: 0, });

const priceImages = document.querySelectorAll('.price-image');
gsap.to(priceImages, {
  rotation: 3,
  duration: 0.8,
  repeat: -1,
  yoyo: true,
  ease: 'power2.inOut'
});

function animatePrice() {

  gsap.set(priceImages, { transformOrigin: 'left bottom' });
  const sectionTop = priceSection.getBoundingClientRect().top + priceSection.offsetHeight / 5;

  if (priceSection.offsetTop * 0.7 - document.documentElement.scrollTop) {
    gsap.to('.price-inner', { opacity: 1, duration: 3, delay: 2 });
  }

  if (sectionTop < 0) {
    gsap.to(price1, { x: '200%', duration: 0.5 });
    gsap.to(price2, { x: '0%', duration: 0.5, opacity: 1 });
    gsap.to(priceImageTwo, { rotate: 0, duration: 1 });
    gsap.to(priceImageOne, { rotate: -80, duration: 1 });
  }

  if (sectionTop > 0) {
    gsap.to(price1, { x: '0%', duration: 0.5 });
    gsap.to(price2, { x: '200%', duration: 0.5, opacity: 0 });
    gsap.to(priceImageTwo, { rotate: -80, opacity: 1, duration: 1 });
    gsap.to(priceImageOne, { rotate: 0, duration: 1 })
  }
}

function animateLinePriceYellow() {
  const linePrice = document.querySelector('.price-line-one');
  const spans = linePrice.querySelectorAll('span');

  spans.forEach(span => {
    linePrice.appendChild(span.cloneNode(true));
  });

  const duration = 10;

  gsap.to(linePrice, {
    xPercent: -50,
    duration: duration,
    ease: 'linear',
    repeat: -1
  });
}

animateLinePriceYellow();

function animatePriceStick() {

  const stickers = document.querySelectorAll('.price-stick');

  if (stickers) {
    gsap.timeline({ repeat: -1, yoyo: true, ease: 'power2.inOut' })
      .to(stickers, { rotation: -10, duration: 0.8 })
      .to(stickers, { rotation: 10, duration: 0.8 })
      .to(stickers, { rotation: 0, duration: 0.8 })
      .to(stickers, { scale: 0.95, duration: 0.8 })
      .to(stickers, { scale: 1, duration: 0.8 });
  }
}

animatePriceStick()


function animateLinePriceWhite() {
  const linePrice = document.querySelector('.price-line-two');
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

animateLinePriceWhite();

