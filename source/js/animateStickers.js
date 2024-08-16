import { gsap } from "gsap";


export function animateStickers(selectors) {

  if (selectors.length > 0) {

    for (let i = 0; i < selectors.length; i++) {
      const element = selectors[i];

      if (document.querySelector(element) !== null) {
        console.log();

        gsap.timeline({ repeat: -1, yoyo: true, ease: 'power2.inOut' })
          .to(element, { rotation: -10, duration: 0.8 })
          .to(element, { rotation: 10, duration: 0.8 })
          .to(element, { rotation: 0, duration: 0.8 })
          .to(element, { scale: 0.95, duration: 0.8 })
          .to(element, { scale: 1, duration: 0.8 });
      }

    }

  }

}


