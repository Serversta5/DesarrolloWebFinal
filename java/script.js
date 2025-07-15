window.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelector('.carousel-images');
  const totalImages = images.children.length;
  let index = 0;

  document.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % totalImages;
    updateCarousel();
  });

  document.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + totalImages) % totalImages;
    updateCarousel();
  });

  function updateCarousel() {
    images.style.transform = `translateX(-${index * 100}%)`;
  }
});

window.addEventListener('scroll', function(){
  const nav = document.getElementById('navbar');
  if(this.window.scrollY > 50){
    nav.classList.add('scrolled');
    nav.style.border = 'none';
    nav.style.borderRadius = '0';

  }else{
    nav.classList.remove('scrolled')
      nav.style.border = '';
    nav.style.borderRadius = '10px';
  }
})


