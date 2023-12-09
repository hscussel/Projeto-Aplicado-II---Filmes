$(document).ready(function() {
    var botao = $('#h6');
    var dropDown = $('.button-etaria');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });