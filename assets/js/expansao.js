$(document).ready(function () {
    $("#imagem-01").click(function () {
        $(".imagem-01-ampliada").fadeIn();
        $(".fundo-ampliada").fadeIn();
    });

    $(".imagem-01-ampliada").click(function () {
        $(".fundo-ampliada").fadeOut();
        $(".imagem-01-ampliada").fadeOut();
    });
});