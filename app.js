function addProduct() {
    var productName = $('#shopping-list-entry').val();


  
//   var section += '<li>' + <p class="shopping-item"> + productName + '</p>' + '</li>';
  
  
   { var section = '';
        section += '<li>';
        section += '<p class="shopping-item">' + productName + '</p>';
        section += '<button class="shopping-item-delete">';
        section += '<span class="button-label">delete</span>';
        section += '</button>';
        section += '</li>';

        
        $('.shopping-list').append(section);

        $('#shopping-list-entry').val('');
    }
}


function deleteItem() {
    $(this).closest('li').remove();
}


$(document).ready(function () {
    $('#js-shopping-list-form').submit(function (event) {
        event.preventDefault();
        addProduct();
    });

});

$(document).on('click', '.shopping-item-delete', deleteItem);