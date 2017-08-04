$(document).ready(function() {

    $('.parallax').parallax();
    
    $('.materialboxed').materialbox();

    $('#csalud').click(function() {
        $('#contenidos').load('../src/colegios/salud.html')
    });

    $('#ceducacion').click(function() {
        $('#contenidos').load('../src/colegios/educacion.html')
    });

     $('#ccienciasj').click(function() {
        $('#contenidos').load('../src/colegios/cienciasj.html')
    });

     $('#ccienciasp').click(function() {
        $('#contenidos').load('../src/colegios/cienciasp.html')
    });

     $('#cingenieria').click(function() {
        $('#contenidos').load('../src/colegios/ingenieria.html')
    });

     $('#ccomunicacion').click(function() {
        $('#contenidos').load('../src/colegios/comunicacion.html')
    });

     $('#ccienciat').click(function() {
        $('#contenidos').load('../src/colegios/cienciat.html')
    });

     $('#cemprendurismo').click(function() {
        $('#contenidos').load('../src/colegios/emprendurismo.html')
    });

     $('#cpsicologia').click(function() {
        $('#contenidos').load('../src/colegios/psicologia.html')
    });

     $('#cgastronomia').click(function() {
        $('#contenidos').load('../src/colegios/gastronomia.html')
    });

     $('#ccultura').click(function() {
        $('#contenidos').load('../src/colegios/cultura.html')
    });
});
