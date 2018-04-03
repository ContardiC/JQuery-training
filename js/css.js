$(document).ready(function(){
    $('#changeStyle').on('click',changeCSS);
    function changeCSS(){
        // prelevo il background color dagli elementi list Items
        var $backgroundColor = $('li').css('background-color');
        //  appendo un paragrafo  alla lista
        // (indicando la proprietà appena prelevata
        $('ul').append('<p>Color was: '+$backgroundColor+'</p>');
        // modifico alcune proprietà CSS dei list Items
        $('li').css({
           'background-color':'#C5A996',
           'border':'1px solid #fff',
           'color':'#000',
           'font-family':'Georgia',
           'padding-left':'+=75'
        });
    }
});