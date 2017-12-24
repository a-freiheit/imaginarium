var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbyiIzsfJhytaTMvy9YY-XIS5gfqS4s48vbVp85I-Ay1ID-ekGI/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})