$( document ).ready(function() {

  // Submit onclick handler
  $('#submit').click(function() {    
    var post = $.post( "http://127.0.0.1:3000/", JSON.parse($('#JSONinput').val()), function(data) {
      $('#csv').text(data);
    })
    .fail(function() {
      console.log( "error" );
    })
    .always(function() {
      console.log( "finished" );
    });
    $('#JSONinput').val('');
  });
});