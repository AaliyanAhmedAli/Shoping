document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
  
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  });
  
  

const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.carousel-control.prev');
const nextBtn = document.querySelector('.carousel-control.next');
const carouselInner = document.querySelector('.carousel-inner');

let slideIndex = 0;

prevBtn.addEventListener('click', () => {
  slideIndex++;
  showSlide();
});

nextBtn.addEventListener('click', () => {
  slideIndex--;
  showSlide();
});

function showSlide() {
  const carouselWidth = carousel.clientWidth;
  const maxTranslateX = -(carouselInner.childElementCount - 1) * carouselWidth;

  if (slideIndex > 0) {
    slideIndex = 0;
  } else if (slideIndex <= maxTranslateX / carouselWidth) {
    slideIndex = maxTranslateX / carouselWidth;
  }

  carouselInner.style.transform = `translateX(${slideIndex * carouselWidth}px)`;
}