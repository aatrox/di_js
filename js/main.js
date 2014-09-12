console.log("nihao");

$(document).ready(function() {
  $('.diin').on('submit', function(event){
  	event.preventDefault();
    var ditxt = $(this).find('.diinput').val();
    var element = $('<li><i class="fa fa-check"></i></li>');
    element.append(ditxt);
    $('#todo-list').append(element);
    $('.diin input').val("");
  })
});