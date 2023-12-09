$(document).ready(function() {
    var botao = $('#h1');
    var dropDown = $('.button-gen');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });