$(document).ready(function() {

    $('.parallax').parallax();
    
    $('.materialboxed').materialbox();

    $('#csalud').click(function() {
        $('#contenidos').load('../src/colegios/salud.html')
    });

    $('#ceducacion').click(function() {
        $('#contenidos').load('../src/colegios/educacion.html')
    });
});
