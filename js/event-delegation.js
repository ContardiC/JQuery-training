$(document).ready(function(){
   var listItem,itemStatus, eventType;
   $('ul').on('click mouseover',
       // escludo elemento con id=four
       ':not(#four)',
       // registro un dato 'importante' in una variabile [stato]
       {stato: 'importante'},
       function(e){
            // prendo il testo dell'elemento su cui si è avvenuto l'evento
            listItem='Item: '+e.target.textContent +'<br/>';
            // prendo il dato memorizzato nella variabile stato
            // registrata quando si genera l'evento
            itemStatus='Status: '+e.data.stato+'<br/>';
            eventType="Event: "+e.type;
            $('#notes').html(listItem+itemStatus+eventType);
       });

});