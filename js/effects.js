$(document).ready(function(){


    $('#effect-btn').on('click',effetcts);

    function effetcts(){
        // nascondo l'elemento h2 mostrandolo con un
        // effetto discesa in basso
        $('h2').hide().slideDown();
        var $li=$('li');
        // Per ogni list Item

        $li.hide().each(function(index){
            console.log("Indice :"+index);
            // eggetto entrata in 700 ms
            // con ritardo progressivo di multipli di 700 ms
            // 700 * index [0,1,2,3]
            $(this).delay(700*index).fadeIn(700);
        })

    }
    $('li').on('click',function () {
       // al list Item in cui (this) si genera l'evento (click)
        // faccio scomparire in 700 ms
        $(this).fadeOut(700);
    });


});