$(document).ready(function(){

    $('#changeContent').on('click',changeElements);

    function changeElements(){
        // cerco i list item che contengono la parola pine
        // e sostituisco con almonds
        $('li:contains("pine")').text('almonds');
        // cerca i list item che hanno la classe hot e riformatta
        // il testo $(this).text() dell'list item stesso
        $('li.hot').html(function(){
            return '<em> '+$(this).text() +'</em>';
        });
        // rimuovo il list item con ID = one
        $('li#one').remove();
    }



});
