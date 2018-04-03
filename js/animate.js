$(document).ready(function(){

    $('li').on('click',function(){
       /* creo l'animazion e per il list Item sul
       quale è avvenuto l'evento
        */
       $(this).animate({
           opacity: 0.0,
           paddingLeft: '+=80'
           // dopo 500 ms rimuovo l'elemento
       },500,function(){
           $(this).remove();
       })
    });





});