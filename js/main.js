console.log("nihao");

$(document).ready(function() {
  $('.diin').on('submit', function(event){
  	event.preventDefault();
    var ditxt = $(this).val();
    $('.row1').append(ditxt);
  })
});