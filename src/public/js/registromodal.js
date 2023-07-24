// JAVASCRIPT

// Abrir el modal al hacer clic en el enlace de términos y condiciones
var termsLink = document.getElementById('termsLink');
var modal = document.getElementById('modal');
var closeBtn = document.getElementsByClassName('close')[0];

termsLink.addEventListener('click', function(event) {
  event.preventDefault();
  modal.style.display = 'block';
});

// Cerrar el modal al hacer clic en el botón de cerrar
closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

// Cerrar el modal al hacer clic fuera del área del modal
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});