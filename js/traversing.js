$(document).ready(function(){
   var $h2=$('h2');
   $('ul').hide();
   $h2.append('<a class="show">show</a>');
   $h2.on('click',function(){
       // fratello successivo dell'elemento corrente
       $h2.next()
           .fadeIn(500)
           // tutti i figli della selezione corrente
           // che hanno class hot
           .children('.hot')
           // aggiunglo la classe complete
           .addClass('complete');
       // tutti gli elementi della selezione
       // corrente individuati dal selettore
       $h2.find('a').fadeOut();
   });
});