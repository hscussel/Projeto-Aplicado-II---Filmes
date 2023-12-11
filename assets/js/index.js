$(document).ready(function () {
    $("#icon-btn").click(function (e) {
        e.stopPropagation();
        $(".trailer-ampliado").fadeIn();
        $(".fundo-ampliada").fadeIn();

        // Inicie o vídeo automaticamente quando ampliado
        document.getElementById("video-ampliado").play();
    });

    $(".trailer-ampliado").click(function (e) {
        e.stopPropagation();
    });

    $(document).click(function () {
        $(".fundo-ampliada").fadeOut();
        $(".trailer-ampliado").fadeOut();

        // Pausar o vídeo quando o vídeo ampliado for fechado
        document.getElementById("video-ampliado").pause();
    });
});
