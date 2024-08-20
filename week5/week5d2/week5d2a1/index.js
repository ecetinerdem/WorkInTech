// Kodlar Buraya

const images = document.querySelectorAll('.main-navigation img');
const mainImage = document.getElementById('main-image');

images.forEach((image) =>
  image.addEventListener('mouseenter', (event) => {
    mainImage.src = event.target.src;
  })
);
