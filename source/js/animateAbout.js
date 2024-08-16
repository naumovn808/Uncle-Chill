import gsap from "gsap";
import { animateTextLines } from "./animateTextLines";


export function animateAbout() {

  animateAboutImages();

  animateTextLines('.about__line');

}

function animateAboutImages() {
  const section = document.querySelector('.about');
  const images = document.querySelectorAll('.about-img-1, .about-img-2, .about-img-3, .about-img-4');

  if (!section && images) return

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
