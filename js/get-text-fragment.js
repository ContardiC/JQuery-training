
$(document).ready(function(){
    // prendo il testo di tutti gli elementi della lista
    var $listText=$('ul').text();
    // aggiunga in coda alla lista un paragrafo con tutta la lista
    $('ul').append('<p>'+$listText+'</p>');
    console.log($listText);
    // prendo il codice HTML per ogni elemento della lista
    var $listItemHTML=$('li').html();
    // lo accodo ad ogni elemento della lista
    $('li').append('<i>'+$listItemHTML +'</i>');

});