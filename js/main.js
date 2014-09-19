var todoCounter = 0;

var updateFooterStatus = function() {
  if ($("#todo-list").size() > 0){
    $('#footer').show();
    var c = $('#main li .fa-check').size();
    if (c>0){
      $('#footer #clear').show();
      $('#footer #clear').text("clear done(" + c + ")");
    } else {
      $('#footer #clear').hide();
    }
  }   
  else{
    $('#footer').hide();
  }
}

var updateItemStatus = function() {
    todoCounter = $('#todo-list li').size();
    var i = $('#main li .fa-bullseye').size();
    $('#items').text(i + ' item(s) left');
}

$(document).ready(function() {
  var retrievedObject = localStorage.getItem('diData');
  var diObject = JSON.parse(retrievedObject);
  if ( diObject!=null ) {
    todoCounter = diObject.dataText.length;
    
    for (var k=0; k<todoCounter; k++){
      var dielement;
      if(diObject.dataLabel[k] == 't'){
        dielement = $('<li><i class="fa fa-bullseye fa-lg"></i></li>');
      }else{
        dielement = $('<li><i class="fa fa-check fa-lg"></i></li>');
      }
        dielement.append(diObject.dataText[k]);
        dielement.append('<i class="fa fa-close fa-lg"></i>');
        $('#todo-list').append(dielement);
    }

    updateFooterStatus();
    updateItemStatus();
  }

  $('.diin').on('submit', function(event){
  	event.preventDefault();
    var ditxt = $(this).find('.diinput').val();
    var element = $('<li><i class="fa fa-bullseye fa-lg"></i></li>');
    element.append(ditxt);
    element.append('<i class="fa fa-close fa-lg"></i>');
    $('#todo-list').append(element);
    $('.diin input').val("");
    updateFooterStatus();
    updateItemStatus();  
  })

  $('#main ul').on("click", "li i", function(){
  	if($(this).hasClass('fa fa-bullseye fa-lg')){
  		$(this).removeClass('fa fa-bullseye fa-lg').addClass('fa fa-check fa-lg');
  	} else{
  		$(this).removeClass('fa fa-check fa-lg').addClass('fa fa-bullseye fa-lg');
  	}	
  	updateItemStatus();
    updateFooterStatus();
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
    updateItemStatus();
  })


// clear done
  $('#footer #clear').on('click', function(){
  	$('.fa.fa-check.fa-lg').closest('li').remove();
    updateItemStatus();
    updateFooterStatus();
  })
  // item left
  $('#footer .all').on('click', function(){
    $('#main li').show();
    $('#footer .all').addClass('strong');
    $('#footer .target').removeClass('strong');
    $('#footer .done').removeClass('strong');
  })

  $('#footer .target').on('click', function(){
    $('#main li .fa-bullseye').closest('li').show();
    $('#main li .fa-check').closest('li').hide();
    $('#footer .target').addClass('strong');
    $('#footer .all').removeClass('strong');
    $('#footer .done').removeClass('strong');
  })

  $('#footer .done').on('click', function(){
    $('#main li .fa-bullseye').closest('li').hide();
    $('#main li .fa-check').closest('li').show();
    $('#footer .done').addClass('strong');
    $('#footer .target').removeClass('strong');
    $('#footer .all').removeClass('strong');
  })
  
  $(window).on('beforeunload', function(){
    var textd = [];
    var label = [];

    for (var j = 0; j < todoCounter; j++){
      textd.push($($('#main li')[j]).text());
      if ($($('#main li')[j]).find('i').hasClass('fa fa-bullseye fa-lg')){
        label.push('t');
      }else if($($('#main li')[j]).find('i').hasClass('fa fa-check fa-lg')){
        label.push('c');
      }
    }
    var diData = {
      dataText : textd,
      dataLabel : label
    }
    localStorage.setItem('diData', JSON.stringify(diData));
  })

  // $('#main ul').on('dblclick', 'li', function(){
  //   var wt = $(this).text();
  //   var revise = $('<form class='direvise'><input type='text' class='revise' value='wt'></form>')
  //   $(this).html(revise);
  // })

  // $('.inplace').editable(function(value, settings) {  
  //    return(value);
  //  }, { 
  //     event: 'dblclick',
  //     type: 'text',
  //     width: '540px',
  //     height: '58px'
  //  });


});

