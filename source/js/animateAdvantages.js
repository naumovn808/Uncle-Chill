import gsap from "gsap";

export function animateAdvantages() {

  window.addEventListener('scroll', handleScroll);

}

function handleScroll() {

  let lastScrollTop = 0;
  let advantagesAnimatedIn = false;

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
}
