import gsap from "gsap";

export function animateMainHead() {

  gsap.set('.sticker', { rotation: 0, scale: 1 });
  gsap.set('.main-head__decor', { opacity: 0, x: '-100%' });
  gsap.set('.main-head__title', { opacity: 0, x: '-100%' });
  gsap.set('.main-head__desc', { opacity: 0, x: '-100%' });
  gsap.set('.main-head__btn', { opacity: 0, x: '-100%' });
  gsap.set('.main-head__decor1 img', { rotation: 5 });
  gsap.set('.main-head__decor2 img', { rotation: -5 });


  const timeline = gsap.timeline();
  timeline
    .fromTo('.bg', { opacity: 0 }, { opacity: 1, duration: 2 })
    .fromTo('.nav', { opacity: 0 }, { opacity: 1, duration: 3 })
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
    .fromTo('.main-head__image-bg', { opacity: 0 }, { opacity: 1, duration: 1, delay: 1,  ease: 'power2.out' })
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

