//for each item user submit, add to list

$(function() {
  
//Event listeners


$('.js-form').submit(function(event) {
  event.preventDefault();
  var userTextElement = $(event.currentTarget).find('#user-text');
 //for each input user submits, store and keep placing in list
//add input to list
  
  $(".js-display-user-text").append('<li> Item: ' + userTextElement.val()  + 
    '<button class="delete">Delete</button><button class="check">Check</button> </li>');
  userTextElement.val("");
    $('.delete').click(function () { 
          $(this).parent("li").remove();
     // console.log($(this).parent("li"));


  });
  
   $(".check").click(function (event) {
   $(this).parent("li").css("text-decoration", "line-through");

});
  
});
  
  });