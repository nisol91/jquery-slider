$('.avanti').click(function() {
  var activeImg = $('.img-container .attiva');//IMPORTANTE: solo salvandoti prima in una variabile quale e' la img attiva, poi potro
  $('.img-container img').removeClass('attiva');
  activeImg.next('img').addClass('attiva');
});

$('.indietro').click(function() {
  var activeImg = $('.img-container .attiva');
  $('.img-container img').removeClass('attiva');
  activeImg.prev('img').addClass('attiva');
});

//prova a farlo anche con le timing function
//cambia immagini cliccando sui pallini
//prova a mettere le immagini in un array di oggetti e ciclare
//usa keypress() con le frecce (numeri 37 e 39)

$(document).keypress(function() {
  if (event.which == 37) {
    var activeImg = $('.img-container .attiva');
    $('.img-container img').removeClass('attiva');
    activeImg.next('img').addClass('attiva');
  } else if (event.which == 39) {
    var activeImg = $('.img-container .attiva');
    $('.img-container img').removeClass('attiva');
    activeImg.prev('img').addClass('attiva');
  }
});
