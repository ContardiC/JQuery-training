$(document).ready(function(){

    $('#changeContent').on('click',changeContent);
    function changeContent(){
        // aggiungo prima della lista un paragrafo
        $('ul').before('<p class="notice">Just updated</p>');
        // inserisco prima del testo del list item che ha classe hot
        // il simbolo +
        $('li.hot').prepend('+ ');
        // creo un nuovo list Item
        var $newListItem=$('<li><em>gluten-free</em> soy sauce</li>');
        // lo inserisco dopo(after) l'ultimo list item (last)
        $('li:last').after($newListItem);
    }
});