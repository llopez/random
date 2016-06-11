$(function(){
  $('form').submit(function(e){
    var items = $('input#items').val();
    $.getJSON('api/sample.json?items=' + items, function(x){
      alert("the winner is " + x.winner);
    });
    e.preventDefault();
  });
});
