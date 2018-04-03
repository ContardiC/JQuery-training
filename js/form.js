$(document).ready(function(){
   var $newItemButton=$('#newItemButton');
   var $newItemForm=$('#newItemForm');
   var $textInput=$('input:text');
   $newItemButton.show();
   $newItemForm.hide();
   $('#showForm').on('click',function(){
       $newItemButton.hide();
       $newItemForm.show();
   });
   $newItemForm.on('submit',function(e){
      e.preventDefault();
      var nextText=$textInput.val();
      $('li:last').after('<li>'+nextText+'</li>');
      $newItemForm.hide();
      $newItemButton.show();
      $textInput.val('');
   });
});