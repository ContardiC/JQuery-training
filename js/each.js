$(document).ready(function(){

    $('#addListID').on('click',addIDs);

    function addIDs(){
        $('li').each(function(){
           var ids=this.id;
           $(this).append(' <span class="order">'+ids+'</span>');
        });
    }


});