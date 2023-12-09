$(document).ready(function() {
    var botao = $('#h5');
    var dropDown = $('.button-idioma');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });