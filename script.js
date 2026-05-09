let indice = 0;
const slides = document.querySelectorAll('.slide');
const puntos = document.querySelectorAll('.punto');

function cambiarSlide(nuevo = null) {
  slides[indice].classList.remove('activo');
  puntos[indice].classList.remove('activo');

  if (nuevo !== null) {
    indice = nuevo;
  } else {
    indice = (indice + 1) % slides.length;
  }

  slides[indice].classList.add('activo');
  puntos[indice].classList.add('activo');
}

setInterval(() => cambiarSlide(), 4000);

// Activar clic en los puntos
puntos.forEach(p => {
  p.addEventListener('click', () => {
    cambiarSlide(parseInt(p.dataset.slide));
  });
});
