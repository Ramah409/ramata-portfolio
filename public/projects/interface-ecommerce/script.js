
// Ici genre on sélectionne le bouton "Découvrez" dans le banner
const btnDiscover = document.querySelector('.banner .btn');

// Quand on clique sur ce bouton ca nous ramene directement 
btnDiscover.addEventListener('click', function(event) {
  // Pour empêche que le lien recharge la page
  event.preventDefault(); 
  document.querySelector('#categories').scrollIntoView({
    // Fait défiler la page doucement
    behavior: 'smooth' 
  });
});
//  la bannière et de l'image
const banner = document.querySelector('.banner');
const bannerImg = banner.querySelector('.banner-img');

// Les images du slider
const images = [
  'image/Montres pour hommes.jpg',
  'image/Montres pour enfants.jpg',
  'image/montre pour femme.jpg'
];
// mon image actuelle
let currentIndex = 0; 

// Pour Ajouter une transition en fondu
bannerImg.style.transition = 'opacity 0.5s ease';
bannerImg.style.opacity = 1;

// Creation de mes flèches 
const leftArrow = document.createElement('div');
const rightArrow = document.createElement('div');
// flèche gauche
leftArrow.innerHTML = '&#10094;'; 
// flèche droite
rightArrow.innerHTML = '&#10095;'; 

// Modification de mes flèchess
[leftArrow, rightArrow].forEach(arrow => {
  arrow.style.position = 'absolute';
  arrow.style.top = '50%';
  arrow.style.transform = 'translateY(-50%)';
  arrow.style.fontSize = '1rem';
  arrow.style.color = '#fff';
  arrow.style.cursor = 'pointer';
  arrow.style.userSelect = 'none';
  arrow.style.padding = '10px';
  arrow.style.backgroundColor = 'rgba(34, 33, 33, 0.3)';
  arrow.style.borderRadius = '50%';
  arrow.style.zIndex = '1000';
});

leftArrow.style.left = '10px';
rightArrow.style.right = '10px';

// Ajouter des flèches à la bannière
banner.appendChild(leftArrow);
banner.appendChild(rightArrow);

function showImage(index) {
  bannerImg.style.opacity = 0; 

  setTimeout(() => {
    // changement de l'image
    bannerImg.src = images[index]; 
    bannerImg.style.opacity = 1;   
  }, 300); 
}

//  Gestion des clics
leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});
