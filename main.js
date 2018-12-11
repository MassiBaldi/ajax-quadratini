// Griglia 6x6, ad ogni click parte una
// richiesta AJAX che prende un
// numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro
// del quadrato

$(document).ready(function(){

  for (var i = 0; i < 36; i++) {

    var quadratiTemplate = '<div class="square"></div>';

    $('.griglia').append(quadratiTemplate);
  }

  $('.square').click(function(){
    // alert('ciao');
    var thisSquare = $(this);
    var numeroAjax = 0
    $.ajax({
      url:'https://www.boolean.careers/api/random/int',
      method: 'GET',
      success: function(data){
        numeroAjax = data.response;
        console.log(data);

        if (numeroAjax <= 5) {
          thisSquare.addClass('activeYellow')
        }
        else {
          thisSquare.addClass('activeGreen')
          thisSquare.append(numeroAjax)
        }
      },
      error: function(){

      }

    });
  });
});
