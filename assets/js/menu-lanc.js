$(document).ready(function() {
    var botao = $('#h2');
    var dropDown = $('.button-lanc');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });