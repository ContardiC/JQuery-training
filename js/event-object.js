$(document).ready(function(){
    $('li').on('click',function(e){
        // elimino l'elemento span
        $('li span').remove();
        // creo un oggetto Date
        var date=new Date();
        // catturo il momento in cui l'elevento è stato generato
        date.setTime(e.timeStamp);
        // variabile con la data catturata
        var clicked=date.toDateString();
        // aggiungo un elemento span che contiene la data
        // e il tipo di evento occorso
        $(this).append('<span class="date">'+clicked+' '+e.type +'</span>');
        // Con Chrome non funziona restituisce 1 Gennaio 1970
        // Si con Internet Explorer

    });
});