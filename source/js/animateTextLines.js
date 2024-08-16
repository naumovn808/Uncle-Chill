import gsap from "gsap";

export function animateTextLines(selector, duration = 15) {

  const linePrice = document.querySelector(selector);
  const spans = linePrice.querySelectorAll('span');

  if (selector && linePrice) {
    spans.forEach(span => {
      linePrice.appendChild(span.cloneNode(true));
    });
    gsap.to(linePrice, {
      xPercent: -50,
      duration: duration,
      ease: 'linear',
      repeat: -1
    });
  } return

}

