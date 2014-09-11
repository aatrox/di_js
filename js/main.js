console.log("nihao");

$document.ready.（function(){
  $('.row1').on('sumbmit', '.infor', function(){
    var ditxt = $(this).val();
    $('.row1').append(ditxt);
  })
}）；