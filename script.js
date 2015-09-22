$(document).ready(function() {
  
  var url = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?';
  
  function getQuote(data) {
    $('.quote-area').html('<p>' + data.quoteText + '</p>');
    
    if (data.quoteAuthor === '') {
      data.quoteAuthor = 'Anon';
    }
    
    $('.quote-area').append('<p>- ' + data.quoteAuthor + '</p>');
  }
  
  $(".btn").click(function(event) {
    $.getJSON(url, getQuote, 'jsonp');
  });
  
});