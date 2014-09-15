
$(document).ready(function() {
  $('.diin').on('submit', function(event){
  	event.preventDefault();
    var ditxt = $(this).find('.diinput').val();
    var element = $('<li><i class="fa fa-bullseye fa-lg"></i></li>');
    element.append(ditxt);
    element.append('<i class="fa fa-close fa-lg"></i>');
    $('#todo-list').append(element);
    $('.diin input').val("");
    updateFooterStatus();
  })

  $('#main ul').on("click", "li i", function(){
  	if($(this).hasClass('fa fa-bullseye fa-lg')){
  		$(this).removeClass('fa fa-bullseye fa-lg').addClass('fa fa-check fa-lg');
  	} else{
  		$(this).removeClass('fa fa-check fa-lg').addClass('fa fa-bullseye fa-lg');
  	}	
  })

  $('#main ul').on('mouseover', 'li', function(){
  	$(this).find('i.fa-close').show();
  })

  $('#main ul').on('mouseout', 'li', function(){
  	$(this).find('.fa-close').hide();
  })

  $('#main ul').on('click', 'li i.fa-close', function(){
  	$(this).closest('li').remove();
  	updateFooterStatus();
  })

  var updateFooterStatus = function() {
  	if ($("#main li").size() > 0){
  		$('#footer').show();
  	} 	
  	else{
  		$('#footer').hide();
  	}
  	console.log('nihao');
  }
});

