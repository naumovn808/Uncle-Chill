import gsap from "gsap";

const priceSection = document.querySelector('.price');
const price1 = document.querySelector('.price-1');
const price2 = document.querySelector('.price-2');
const priceImageOne = document.querySelector('.price-img-one');
const priceImageTwo = document.querySelector('.price-img-two');
const priceImages = document.querySelectorAll('.price-image');

gsap.set('.price-inner', { opacity: 0 });
gsap.set(priceImageOne, { rotate: -80, duration: 0 });
gsap.set(priceImageTwo, { rotate: -80, opacity: 0, });
gsap.set(priceImages, { transformOrigin: 'left bottom' });

export function animatePrice() {

  if (!priceSection || !price1 || !price2 || !priceImageOne || !priceImageTwo) return

  window.addEventListener('scroll', handleScroll)

}

function handleScroll() {
  gsap.to(priceImages, {
    rotation: 3,
    duration: 0.8,
    repeat: -1,
    yoyo: true,
    ease: 'power2.inOut'
  });

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
