$(document).ready(function(){
   $('#changeAttributes').on('click',changeAttributes);

   function changeAttributes(){
       // rimuove la classe hot dal list items con ID three
       $('li#three').removeClass('hot');
       // aggiunge la classe favorite ai list items con classe hot
       $('li.hot').addClass('favorite');
       // aggiunge l'attributo id = group alla lista
       $('ul').attr('id','group');

   }
});