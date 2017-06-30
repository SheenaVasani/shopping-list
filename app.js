$(function() {
  
  



//Event listeners


$('.js-form').submit(function(event) {
  event.preventDefault();
  var userTextElement = $(event.currentTarget).find('#user-text');
 //for each input user submits, store and keep placing in list
//add input to list
  
  $(".js-display-user-text").append('<li> Item: ' + userTextElement.val() + '</li>' + 
    '<button class="delete">Delete</button><button class="check">Check</button>');
  userTextElement.val("");
    $('.delete').click(function () { 
          $(this).parent().remove();


  });
  
   $(".check").click(function (event) {
   $(this).parent().css("text-decoration", "line-through");

});
  
});
  
  });
