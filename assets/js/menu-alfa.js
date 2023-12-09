$(document).ready(function() {
    var botao = $('#h4');
    var dropDown = $('.button-alfa');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });