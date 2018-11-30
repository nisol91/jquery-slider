//cambia immagini cliccando sui pallini
//prova a mettere le immagini in un array di oggetti e ciclare

//----------------------------------
//CLASSICO CON MOUSE

$('.avanti').click(function() {
  var activeImg = $('.img-container .attiva');//IMPORTANTE: solo salvandoti prima in una variabile quale e' la img attiva, poi potro
  $('.img-container img').removeClass('attiva');
  activeImg.next('img').addClass('attiva');
  if (activeImg.hasClass('ultima')) {
    $('.img-container img').first().addClass('attiva');
  }


//pallini
  var activeCircle = $('.nav .fas');//IMPORTANTE se fai la variabile come qui e' sempre tutto piu comodo. Oppure generalizzi scrivendo i invece che fas
  $('.nav i').removeClass('fas');
  activeCircle.addClass('far');
  activeCircle.next('i').addClass('fas');
  activeCircle.next('i').removeClass('far');
  if (activeCircle.hasClass('ultima')) {
    $('.nav i').first().addClass('fas');
    $('.nav i').first().removeClass('far');
  }
});

$('.indietro').click(function() {
  var activeImg = $('.img-container .attiva');
  $('.img-container img').removeClass('attiva');
  activeImg.prev('img').addClass('attiva');
  if (activeImg.hasClass('prima')) {
    $('.img-container img').last().addClass('attiva');
  }

//pallini
  var activeCircle = $('.nav .fas');
  activeCircle.removeClass('fas');
  activeCircle.addClass('far');
  activeCircle.prev('i').addClass('fas');
  activeCircle.prev('i').removeClass('far');
  if (activeCircle.hasClass('prima')) {
    $('.nav i').last().addClass('fas');
    $('.nav i').last().removeClass('far');
  }
});

//CAMBIO CON PALLINI
var immagini = [];
for (var i = 1; i < 9; i++) {
  immagini.push($('img:nth-child(' + i + ')'))
}
console.log(immagini);

  $('.nav i:nth-child(' + i + ')').click(function() {
    $('img:nth-child(' + i + ')').addClass('attiva');
  });

  //---------------------------
  //KEYPRESS come tasti ho usato '<' e '>'

  $(document).keypress(function(event) {
    if (event.which == 46) {
      var activeImg = $('.img-container .attiva');
      $('.img-container img').removeClass('attiva');
      activeImg.next('img').addClass('attiva');
      if (activeImg.hasClass('ultima')) {
        $('.img-container img').first().addClass('attiva');
      }
      var activeCircle = $('.nav .fas');
      $('.nav i').removeClass('fas');
      activeCircle.addClass('far');
      activeCircle.next('i').addClass('fas');
      activeCircle.next('i').removeClass('far');
      if (activeCircle.hasClass('ultima')) {
        $('.nav i').first().addClass('fas');
        $('.nav i').first().removeClass('far');
      }
    } else if (event.which == 44) {
      var activeImg = $('.img-container .attiva');
      $('.img-container img').removeClass('attiva');
      activeImg.prev('img').addClass('attiva');
      if (activeImg.hasClass('prima')) {
        $('.img-container img').last().addClass('attiva');
      }
      var activeCircle = $('.nav .fas');
      activeCircle.removeClass('fas');
      activeCircle.addClass('far');
      activeCircle.prev('i').addClass('fas');
      activeCircle.prev('i').removeClass('far');
      if (activeCircle.hasClass('prima')) {
        $('.nav i').last().addClass('fas');
        $('.nav i').last().removeClass('far');
      }
    }
    console.log(event.which);
  });


//----------------------------------------
//CAMBIO AUTOMATICO

// var intervallo = setInterval(function () {
//   var activeImg = $('.img-container .attiva');
//   $('.img-container img').removeClass('attiva');
//   activeImg.next('img').addClass('attiva');
//   if (activeImg.hasClass('ultima')) {
//     $('.img-container img').first().addClass('attiva');
//   }
//
//
//   //pallini
//   var activeCircle = $('.nav .fas');
//   $('.nav i').removeClass('fas');
//   activeCircle.addClass('far');
//   activeCircle.next('i').addClass('fas');
//   activeCircle.next('i').removeClass('far');
//   if (activeCircle.hasClass('ultima')) {
//     $('.nav i').first().addClass('fas');
//     $('.nav i').first().removeClass('far');
//   }}, 2000)
