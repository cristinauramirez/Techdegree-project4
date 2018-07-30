$('#search').on('keyup', function() {
  var search = $(this).val().toLowerCase();
  $('a').filter(function() {
    if($(this).attr('data-title').indexOf(search) > -1) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
});
