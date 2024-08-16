import gsap from "gsap";


const menu = document.querySelector('.menu');
const navButton = document.querySelector('.nav__btn');

export function navMenu() {

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

  setupMenuAnimations()
}

function setupMenuAnimations() {
  const menuLinks = document.querySelectorAll('.menu__link');

  if (!menuLinks) return

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
