import { gsap } from "gsap";


export default function animateSticker(selectors) {

  if (selectors.length > 0) {

    selectors.forEach(e => {

      if (document.querySelector(e) != null) {

        gsap.timeline({ repeat: -1, yoyo: true, ease: 'power2.inOut' })
          .to(e, { rotation: -10, duration: 0.8 })
          .to(e, { rotation: 10, duration: 0.8 })
          .to(e, { rotation: 0, duration: 0.8 })
          .to(e, { scale: 0.95, duration: 0.8 })
          .to(e, { scale: 1, duration: 0.8 });
      }
    })

  } return

}

