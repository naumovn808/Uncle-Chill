import gsap from "gsap";


export function animateHeaderLogo() {

  const headerLogo = document.querySelector('.header__logo');

  if (!headerLogo) return

  gsap.set(headerLogo, {
    opacity: 0,
    scale: 2,
    top: '50vh',
    left: '50vw',
    xPercent: -50,
    yPercent: -50,
  });

  const timeline = gsap.timeline();
  timeline
    .to(headerLogo, {
      opacity: 1,
      duration: 2,
      delay: 0.5
    })
    .to(headerLogo, {
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
