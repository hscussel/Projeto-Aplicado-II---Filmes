$(document).ready(function() {
    var botao = $('#h7');
    var dropDown = $('.button-streaming');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });