$(document).ready(function() {
    var botao = $('#h3');
    var dropDown = $('.button-ava');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });