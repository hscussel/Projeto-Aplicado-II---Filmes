$(document).ready(function () {
    $("#imagem-01").click(function (event) {
        event.stopPropagation(); // Impede a propagação do evento para elementos pai
        $(".imagem-01-ampliada").fadeIn();
        $(".fundo-ampliada").fadeIn();
    });

    $(".imagem-01-ampliada").click(function (event) {
        event.stopPropagation(); // Impede a propagação do evento para elementos pai
    });

    $(document).click(function () {
        $(".fundo-ampliada, .imagem-01-ampliada").fadeOut();
    });
});
