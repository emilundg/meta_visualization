$(function() {

    var glyphs = document.getElementById('stats');
    var desc = document.getElementById('stats2');

  $(desc).fadeOut('slow', function() {
    $(glyphs).fadeTo("slow", 1.0);
  });

  $(document).keyup(function(e) {
    if (e.keyCode == 27) { // Esc
      var url = window.location.href;
      url = url.replace(/\/[^\/]*$/, '/overview');
      window.location.replace(url);
    }
  });

  $('.btn1').click(function () {
    $(glyphs).fadeOut('slow', function() {
    $(desc).fadeTo("slow", 1.0);
    });
  });

  $('.btn2').click(function () {
    $(desc).fadeOut('slow', function() {
    $(glyphs).fadeTo("slow", 1.0);
    });
  });
});
